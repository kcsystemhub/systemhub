/**
 * SystemHub -> Google Calendar bridge.
 *
 * 1. Create a new Google Apps Script project.
 * 2. Paste this file into Code.gs.
 * 3. Run setupSystemHubCalendarSync() once and approve Calendar access.
 * 4. Copy the logged WEB_APP_TOKEN into SystemHub settings.
 * 5. Deploy as Web app:
 *    - Execute as: Me
 *    - Who has access: Anyone with the link
 */

const SYSTEMHUB_CONFIG = {
  calendarName: "SystemHub",
  tokenProperty: "SYSTEMHUB_WEB_APP_TOKEN",
  calendarIdProperty: "SYSTEMHUB_CALENDAR_ID",
  searchBackDays: 730,
  searchForwardDays: 1460,
};

const SYSTEMHUB_MARKER_PREFIX = "SYSTEMHUB_KEY:";
const SYSTEMHUB_TYPE_PREFIX = "SYSTEMHUB_TYPE:";

function setupSystemHubCalendarSync() {
  const properties = PropertiesService.getScriptProperties();
  let token = properties.getProperty(SYSTEMHUB_CONFIG.tokenProperty);

  if (!token) {
    token = `${Utilities.getUuid()}-${Utilities.getUuid()}`.replace(/-/g, "");
    properties.setProperty(SYSTEMHUB_CONFIG.tokenProperty, token);
  }

  const calendar = getOrCreateSystemHubCalendar_();
  properties.setProperty(SYSTEMHUB_CONFIG.calendarIdProperty, calendar.getId());

  Logger.log("SYSTEMHUB_WEB_APP_TOKEN: " + token);
  Logger.log("SYSTEMHUB_CALENDAR_ID: " + calendar.getId());
  Logger.log("Deploy this script as Web app, then use the /exec URL in SystemHub.");

  return {
    token,
    calendarId: calendar.getId(),
  };
}

function doGet(e) {
  const payload = {
    action: (e.parameter.action || "ping"),
    token: e.parameter.token,
  };

  return handleSystemHubRequest_(payload);
}

function doPost(e) {
  return handleSystemHubRequest_(parsePostPayload_(e));
}

function handleSystemHubRequest_(payload) {
  try {
    verifyToken_(payload);

    const action = payload.action || "syncEvents";
    let result;

    if (action === "ping") {
      result = {
        ok: true,
        calendarId: getSystemHubCalendar_().getId(),
        message: "Google Calendar sync is ready.",
      };
    } else if (action === "upsertEvent") {
      result = {
        ok: true,
        event: upsertSystemHubEvent_(payload.event || payload),
      };
    } else if (action === "deleteEvent") {
      result = {
        ok: true,
        deleted: deleteSystemHubEvent_(payload.sourceKey || (payload.event && payload.event.sourceKey)),
      };
    } else if (action === "syncEvents") {
      result = syncSystemHubEvents_(payload.events || [], Boolean(payload.deleteMissing));
    } else {
      throw new Error("Unknown action: " + action);
    }

    return jsonOutput_(result);
  } catch (error) {
    return jsonOutput_({
      ok: false,
      error: error.message || String(error),
    });
  }
}

function syncSystemHubEvents_(events, deleteMissing) {
  if (!Array.isArray(events)) {
    throw new Error("events must be an array.");
  }

  const synced = [];
  const sourceKeys = [];

  events.forEach((eventPayload) => {
    const event = upsertSystemHubEvent_(eventPayload);
    synced.push(event);
    sourceKeys.push(event.sourceKey);
  });

  let deleted = 0;
  if (deleteMissing) {
    deleted = deleteEventsMissingFromPayload_(sourceKeys);
  }

  return {
    ok: true,
    syncedCount: synced.length,
    deletedCount: deleted,
    events: synced,
  };
}

function upsertSystemHubEvent_(eventPayload) {
  const data = normalizeEventPayload_(eventPayload);
  const calendar = getSystemHubCalendar_();
  const existingEvent = findEventBySourceKey_(calendar, data.sourceKey);
  const description = buildDescription_(data);
  const options = {
    description,
    location: data.location || "",
  };

  let event;
  if (existingEvent) {
    event = existingEvent;
    event.setTitle(data.title);
    event.setDescription(description);

    if (data.location) {
      event.setLocation(data.location);
    }

    if (data.endDate) {
      event.setAllDayDates(data.startDate, data.endDate);
    } else {
      event.setAllDayDate(data.startDate);
    }
  } else if (data.endDate) {
    event = calendar.createAllDayEvent(data.title, data.startDate, data.endDate, options);
  } else {
    event = calendar.createAllDayEvent(data.title, data.startDate, options);
  }

  applyEventColor_(event, data.type);
  event.setTag("systemhubSourceKey", data.sourceKey);
  event.setTag("systemhubType", data.type);

  return {
    sourceKey: data.sourceKey,
    eventId: event.getId(),
    title: event.getTitle(),
    date: formatDate_(data.startDate),
    type: data.type,
  };
}

function deleteSystemHubEvent_(sourceKey) {
  if (!sourceKey) {
    throw new Error("sourceKey is required.");
  }

  const calendar = getSystemHubCalendar_();
  const event = findEventBySourceKey_(calendar, sourceKey);

  if (!event) {
    return false;
  }

  event.deleteEvent();
  return true;
}

function deleteEventsMissingFromPayload_(validSourceKeys) {
  const validSet = new Set(validSourceKeys);
  const calendar = getSystemHubCalendar_();
  const events = getSearchWindowEvents_(calendar);
  let deleted = 0;

  events.forEach((event) => {
    const sourceKey = getEventSourceKey_(event);
    if (sourceKey && !validSet.has(sourceKey)) {
      event.deleteEvent();
      deleted += 1;
    }
  });

  return deleted;
}

function normalizeEventPayload_(payload) {
  if (!payload || typeof payload !== "object") {
    throw new Error("Event payload is required.");
  }

  const sourceKey = String(payload.sourceKey || "").trim();
  const title = String(payload.title || "").trim();
  const rawDate = payload.date || payload.startDate;

  if (!sourceKey) throw new Error("Event sourceKey is required.");
  if (!title) throw new Error("Event title is required.");
  if (!rawDate) throw new Error("Event date/startDate is required.");

  return {
    sourceKey,
    title,
    type: String(payload.type || "systemhub").trim(),
    startDate: parseDate_(rawDate),
    endDate: payload.endDate ? parseDate_(payload.endDate) : null,
    description: String(payload.description || "").trim(),
    location: String(payload.location || "").trim(),
    url: String(payload.url || "").trim(),
  };
}

function buildDescription_(data) {
  const lines = [];

  if (data.description) lines.push(data.description);
  if (data.url) lines.push("SystemHub link: " + data.url);

  lines.push("");
  lines.push(SYSTEMHUB_MARKER_PREFIX + data.sourceKey);
  lines.push(SYSTEMHUB_TYPE_PREFIX + data.type);

  return lines.join("\n");
}

function findEventBySourceKey_(calendar, sourceKey) {
  const marker = SYSTEMHUB_MARKER_PREFIX + sourceKey;
  const events = getSearchWindowEvents_(calendar);

  for (let index = 0; index < events.length; index += 1) {
    const event = events[index];
    if (event.getTag("systemhubSourceKey") === sourceKey) {
      return event;
    }

    if (String(event.getDescription() || "").indexOf(marker) !== -1) {
      return event;
    }
  }

  return null;
}

function getEventSourceKey_(event) {
  const tagValue = event.getTag("systemhubSourceKey");
  if (tagValue) return tagValue;

  const description = String(event.getDescription() || "");
  const markerIndex = description.indexOf(SYSTEMHUB_MARKER_PREFIX);
  if (markerIndex === -1) return "";

  return description
    .slice(markerIndex + SYSTEMHUB_MARKER_PREFIX.length)
    .split(/\s/)[0]
    .trim();
}

function getSearchWindowEvents_(calendar) {
  const today = startOfDay_(new Date());
  const start = addDays_(today, -SYSTEMHUB_CONFIG.searchBackDays);
  const end = addDays_(today, SYSTEMHUB_CONFIG.searchForwardDays);
  return calendar.getEvents(start, end);
}

function getSystemHubCalendar_() {
  const properties = PropertiesService.getScriptProperties();
  const calendarId = properties.getProperty(SYSTEMHUB_CONFIG.calendarIdProperty);

  if (calendarId) {
    const calendarById = CalendarApp.getCalendarById(calendarId);
    if (calendarById) return calendarById;
  }

  return getOrCreateSystemHubCalendar_();
}

function getOrCreateSystemHubCalendar_() {
  const existing = CalendarApp.getCalendarsByName(SYSTEMHUB_CONFIG.calendarName);
  if (existing.length > 0) {
    return existing[0];
  }

  const calendar = CalendarApp.createCalendar(SYSTEMHUB_CONFIG.calendarName, {
    summary: "Dates synchronized from SystemHub.",
  });
  calendar.setSelected(true);
  return calendar;
}

function applyEventColor_(event, type) {
  const colors = {
    license: CalendarApp.EventColor.YELLOW,
    task: CalendarApp.EventColor.BLUE,
    release: CalendarApp.EventColor.PALE_BLUE,
    stock: CalendarApp.EventColor.RED,
    systemhub: CalendarApp.EventColor.GRAY,
  };

  event.setColor(colors[type] || colors.systemhub);
}

function parsePostPayload_(e) {
  const contents = e && e.postData && e.postData.contents ? e.postData.contents : "";
  if (contents) {
    return JSON.parse(contents);
  }

  if (e && e.parameter && e.parameter.payload) {
    return JSON.parse(e.parameter.payload);
  }

  throw new Error("Empty request body.");
}

function verifyToken_(payload) {
  const expectedToken = PropertiesService.getScriptProperties().getProperty(SYSTEMHUB_CONFIG.tokenProperty);

  if (!expectedToken) {
    throw new Error("Run setupSystemHubCalendarSync() first.");
  }

  if (!payload || payload.token !== expectedToken) {
    throw new Error("Invalid token.");
  }
}

function parseDate_(value) {
  if (value instanceof Date) {
    return startOfDay_(value);
  }

  const text = String(value || "").trim();
  const match = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (!match) {
    throw new Error("Date must be in YYYY-MM-DD format: " + text);
  }

  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function startOfDay_(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays_(date, days) {
  const copy = new Date(date.getTime());
  copy.setDate(copy.getDate() + days);
  return copy;
}

function formatDate_(date) {
  return Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy-MM-dd");
}

function jsonOutput_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
