const STORAGE_KEY = "systemhub.records";
const LINKS_STORAGE_KEY = "systemhub.links";
const SURVEY_LINKS_STORAGE_KEY = "systemhub.surveyLinks";
const PROMO_STORAGE_KEY = "systemhub.promoItems";
const STOCK_STORAGE_KEY = "systemhub.stockItems";
const PROMO_PURCHASE_STORAGE_KEY = "systemhub.promoPurchases";
const PROMO_PURCHASE_POSITIONS_STORAGE_KEY = "systemhub.promoPurchasePositions";
const TRMS_RELEASES_STORAGE_KEY = "systemhub.trmsReleases";
const TEAM_TASKS_STORAGE_KEY = "systemhub.teamTasks";
const TEAM_TASK_MEMBERS_STORAGE_KEY = "systemhub.teamTaskMembers";
const ELEARNING_TEAM_PROFILES_STORAGE_KEY = "systemhub.elearningTeamProfiles";
const TEAM_DEVELOPMENT_RESULTS_STORAGE_KEY = "systemhub.teamDevelopmentResults";
const MESSENGER_STORAGE_KEY = "systemhub.messengerState";
const REPORT_STORAGE_KEY = "systemhub.reportCsv";
const GOOGLE_SCRIPT_URL_STORAGE_KEY = "systemhub.supabaseUrl";
const GOOGLE_SYNC_TOKEN_STORAGE_KEY = "systemhub.supabaseAnonKey";
const GOOGLE_CALENDAR_SCRIPT_URL_STORAGE_KEY = "systemhub.googleCalendarScriptUrl";
const GOOGLE_CALENDAR_TOKEN_STORAGE_KEY = "systemhub.googleCalendarToken";
const GOOGLE_CALENDAR_SCRIPT_URL_2_STORAGE_KEY = "systemhub.googleCalendarScriptUrl2";
const GOOGLE_CALENDAR_TOKEN_2_STORAGE_KEY = "systemhub.googleCalendarToken2";
const GOOGLE_CALENDAR_AUTO_SYNC_STORAGE_KEY = "systemhub.googleCalendarAutoSync";
const TELEGRAM_BOT_URL_STORAGE_KEY = "systemhub.telegramBotUrl";
const TELEGRAM_BOT_TOKEN_STORAGE_KEY = "systemhub.telegramBotToken";
const TELEGRAM_BOT_CHAT_ID_STORAGE_KEY = "systemhub.telegramBotChatId";
const TELEGRAM_BOT_ENABLED_STORAGE_KEY = "systemhub.telegramBotEnabled";
const TEAM_TASK_META_PREFIX = "[[systemhub-task-meta:";
const TEAM_TASK_META_SUFFIX = "]]";
const GOOGLE_CALENDAR_SYNC_DEBOUNCE_MS = 1200;
const THEME_STORAGE_KEY = "systemhub.theme";
const LANGUAGE_STORAGE_KEY = "systemhub.language";
const MASTER_PASSWORD_VERIFIER_KEY = "systemhub.masterPasswordVerifier";
const DEFAULT_TEAM_TASK_MEMBERS = ["Фатима", "Темирлан", "Аружан", "Шерхан", "Алина"];
const EXPIRING_SOON_DAYS = 30;
const LOW_STOCK_THRESHOLD = 5;
const GOOGLE_AUTO_SYNC_DEBOUNCE_MS = 900;
const GOOGLE_REMOTE_REFRESH_MS = 3000;
const TEAM_TASK_VISIBLE_LIMIT = 7;
const PASSWORD_ENCRYPTION_PREFIX = "enc:v1:";
const PASSWORD_VERIFIER_TEXT = "systemhub-password-vault-v1";
const PASSWORD_REVEAL_MS = 8000;
const PASSWORD_DERIVE_ITERATIONS = 150000;
const AUTH_SESSION_STORAGE_KEY = "systemhub.authSession";
const AUTH_USERS_TABLE = "app_users";
const APP_SETTINGS_TABLE = "app_settings";
const TELEGRAM_SETTINGS_KEY = "telegramBot";
const MESSENGER_SETTINGS_KEY = "messenger";
const MESSENGER_GENERAL_CONVERSATION_ID = "group:team";
const AUTH_PASSWORD_DERIVE_ITERATIONS = 150000;
const PDP_DEFAULT_REPORT_FILE = "Отчет по PDP (6).xlsx";
const DEFAULT_ADMIN_USERS = [
  { login: "16643", password: "AirAstana2026!", role: "admin", displayName: "Admin 16643" },
  { login: "14524", password: "AirAstana2026!", role: "admin", displayName: "Admin 14524" },
];
const TEAM_DEVELOPMENT_SENSITIVE_ACCESS_LOGINS = new Set(["14524", "14962"]);

const INTERFACE_TEXT = {
  themeLight: { ru: "Светлая тема", en: "Light theme" },
  themeDark: { ru: "Темная тема", en: "Dark theme" },
  logoutSuccess: { ru: "Сессия завершена. Войдите снова.", en: "Session ended. Sign in again." },
  loginRequired: { ru: "Заполните логин и пароль.", en: "Enter login and password." },
  loginChecking: { ru: "Проверяю учетную запись...", en: "Checking account..." },
  loginConnecting: { ru: "Подключаюсь к базе пользователей...", en: "Connecting to user database..." },
  invalidLogin: { ru: "Неверный логин или пароль.", en: "Invalid login or password." },
  pageTitles: {
    today: { ru: "Сегодня", en: "Today" },
    myTasks: { ru: "Мои задачи", en: "My Tasks" },
    systems: { ru: "Данные систем", en: "System Data" },
    links: { ru: "Полезные ссылки", en: "Useful Links" },
    survey: { ru: "Ссылки на опрос формы", en: "Survey Form Links" },
    promo: { ru: "Промо продукция", en: "Promo Products" },
    promoPurchases: { ru: "Покупки промо", en: "Promo Purchases" },
    purchaseAnalytics: { ru: "Аналитика покупок", en: "Purchase Analytics" },
    teamTasks: { ru: "Задачи команды", en: "Team Tasks" },
    elearningTeam: { ru: "Команда E-Learning & Systems", en: "E-Learning & Systems Team" },
    teamDevelopment: { ru: "Развитие команды", en: "Team Development" },
    messenger: { ru: "Мессенджер", en: "Messenger" },
    trmsReleases: { ru: "ТРМС Релизы", en: "TRMS Releases" },
    notifications: { ru: "Уведомления", en: "Notifications" },
    calendar: { ru: "Календарь", en: "Calendar" },
    lms: { ru: "LMS", en: "LMS" },
    dashboards: { ru: "Дэшборды", en: "Dashboards" },
    pdpDashboard: { ru: "PDP дэшборд", en: "PDP Dashboard" },
    trainingReport: { ru: "Отчеты", en: "Reports" },
    participantReports: { ru: "Отчеты по участникам", en: "Participant Reports" },
    settings: { ru: "Настройки", en: "Settings" },
  },
};

const INTERFACE_TRANSLATION_PAIRS = [
  ["Вход в систему", "Sign in"],
  ["Логин", "Login"],
  ["Пароль", "Password"],
  ["Войти", "Sign in"],
  ["Пользователь", "User"],
  ["Текущий пользователь", "Current user"],
  ["Хранилище", "Storage"],
  ["Браузер", "Browser"],
  ["Выйти", "Log out"],
  ["Язык интерфейса", "Interface language"],
  ["Светлая тема", "Light theme"],
  ["Темная тема", "Dark theme"],
  ["Мобильная навигация", "Mobile navigation"],
  ["Открыть меню", "Open menu"],
  ["Закрыть меню", "Close menu"],
  ["Сегодня", "Today"],
  ["Мои задачи", "My Tasks"],
  ["Данные систем", "System Data"],
  ["Полезные ссылки", "Useful Links"],
  ["Ссылки на опрос формы", "Survey Form Links"],
  ["Промо продукция", "Promo Products"],
  ["Покупки промо", "Promo Purchases"],
  ["Аналитика покупок", "Purchase Analytics"],
  ["Задачи команды", "Team Tasks"],
  ["Команда E-Learning & Systems", "E-Learning & Systems Team"],
  ["Развитие команды", "Team Development"],
  ["Мессенджер", "Messenger"],
  ["Чаты", "Chats"],
  ["Группа и личные диалоги", "Group and direct chats"],
  ["Общий чат команды", "Team group chat"],
  ["Начать личный чат", "Start direct chat"],
  ["Открыть диалог", "Open chat"],
  ["Сообщение", "Message"],
  ["Файлы", "Files"],
  ["Ссылки на файлы", "File links"],
  ["Варианты", "Options"],
  ["Отправить", "Send"],
  ["Обновить", "Refresh"],
  ["Чат команды", "Team chat"],
  ["ТРМС Релизы", "TRMS Releases"],
  ["Уведомления", "Notifications"],
  ["Календарь", "Calendar"],
  ["Дэшборды", "Dashboards"],
  ["PDP дэшборд", "PDP Dashboard"],
  ["Загрузка Отчет PDP", "PDP Report Upload"],
  ["Срез PDP", "PDP Slice"],
  ["Отчеты", "Reports"],
  ["Отчеты по участникам", "Participant Reports"],
  ["Настройки", "Settings"],
  ["Главная панель", "Home"],
  ["Задачи на сегодня", "Tasks for today"],
  ["Назначенные мне", "Assigned to me"],
  ["Системы", "Systems"],
  ["Добавить запись", "Add Record"],
  ["Редактировать запись", "Edit Record"],
  ["Сохранить запись", "Save Record"],
  ["Обновить запись", "Update Record"],
  ["Название системы", "System name"],
  ["Дата покупки", "Purchase date"],
  ["Дата окончания лицензии", "License end date"],
  ["Статус", "Status"],
  ["Действия", "Actions"],
  ["Активные", "Active"],
  ["Скоро истекают", "Expiring soon"],
  ["Истекли", "Expired"],
  ["Всего", "Total"],
  ["Поиск", "Search"],
  ["Все статусы", "All statuses"],
  ["Скопировать", "Copy"],
  ["Скопировать пароль", "Copy password"],
  ["Показать пароль", "Show password"],
  ["Скрыть пароль", "Hide password"],
  ["Редактировать", "Edit"],
  ["Удалить", "Delete"],
  ["Удалить сообщение", "Delete message"],
  ["Отмена", "Cancel"],
  ["Сохранить", "Save"],
  ["Сбросить", "Reset"],
  ["Очистить", "Clear"],
  ["Экспорт", "Export"],
  ["Импорт", "Import"],
  ["CSV", "CSV"],
  ["Добавить ссылку", "Add Link"],
  ["Добавить форму", "Add Form"],
  ["Описание", "Description"],
  ["Ссылка", "Link"],
  ["Название", "Name"],
  ["Цена", "Price"],
  ["Количество", "Quantity"],
  ["Сумма", "Amount"],
  ["Категория", "Category"],
  ["Поставщик", "Supplier"],
  ["Дата", "Date"],
  ["Приоритет", "Priority"],
  ["Ответственный", "Owner"],
  ["Исполнитель", "Assignee"],
  ["Задача", "Task"],
  ["Показать задачи участника", "Show member tasks"],
  ["Новая задача", "New Task"],
  ["Добавить задачу", "Add Task"],
  ["Создать задачу", "Create Task"],
  ["Сохранить задачу", "Save Task"],
  ["Комментарии", "Comments"],
  ["Ознакомлен", "Acknowledged"],
  ["Открыть", "Open"],
  ["View all", "View all"],
  ["Свернуть до 7", "Collapse to 7"],
  ["Открыть полный ответ", "Open full answer"],
  ["Свернуть", "Collapse"],
  ["Финальный результат", "Final result"],
  ["Сохраненный финальный ответ", "Saved final answer"],
  ["Сильные сигналы", "Strong signals"],
  ["Зоны внимания", "Focus areas"],
  ["Рекомендации", "Recommendations"],
  ["Как использовать:", "How to use:"],
  ["Текущий тест", "Current test"],
  ["Прогресс заполнения", "Completion progress"],
  ["Сотрудник", "Employee"],
  ["Сохраненные результаты", "Saved results"],
  ["Финальные ответы сотрудников", "Employee final answers"],
  ["Закрытый доступ", "Restricted access"],
  ["Портреты и сохраненные результаты", "Portraits and saved results"],
  ["Открыть доступ", "Unlock access"],
  ["Закрыть доступ", "Lock access"],
  ["Данные скрыты до проверки логина 14524 или 14962.", "Data is hidden until login 14524 or 14962 is verified."],
  ["Собранный профиль", "Combined profile"],
  ["Портрет сотрудника", "Employee portrait"],
  ["Выберите сотрудника для портрета", "Select employee for portrait"],
  ["Сильные стороны", "Strengths"],
  ["Зоны роста", "Growth areas"],
  ["Фокус развития навыков", "Skill development focus"],
  ["Покрытие тестами", "Test coverage"],
  ["Средний сигнал", "Average signal"],
  ["Последнее обновление", "Last updated"],
  ["Портрет пока не готов", "Portrait is not ready yet"],
  ["Колесо эмоций Плутчика", "Plutchik emotion wheel"],
  ["Эмоциональный профиль", "Emotional profile"],
  ["Не хватает тестов", "Missing tests"],
  ["Рабочая интерпретация", "Work interpretation"],
  ["Радость", "Joy"],
  ["Доверие", "Trust"],
  ["Страх", "Fear"],
  ["Удивление", "Surprise"],
  ["Грусть", "Sadness"],
  ["Отвращение", "Disgust"],
  ["Гнев", "Anger"],
  ["Ожидание", "Anticipation"],
  ["Только финальные итоги", "Final results only"],
  ["Опросы для укрепления командного духа", "Assessments for stronger teamwork"],
  ["Выберите или введите имя", "Select or enter a name"],
  ["Рассчитать результат", "Calculate result"],
  ["Сбросить выбор", "Reset answers"],
  ["Сохранить финальный ответ", "Save final answer"],
  ["Финальный ответ сохранен", "Final answer saved"],
  ["Финальные ответы пока не сохранены.", "No final answers saved yet."],
  ["Псих. безопасность", "Psych. safety"],
  ["Доверие", "Trust"],
  ["Энергия", "Energy"],
  ["Обратная связь", "Feedback"],
  ["Модель поведения", "Behavior model"],
  ["Герцберг", "Herzberg"],
  ["Белбин", "Belbin"],
  ["Пользователи", "Users"],
  ["Администраторы", "Administrators"],
  ["Роль", "Role"],
  ["Активен", "Active"],
  ["Неактивен", "Inactive"],
  ["Добавить пользователя", "Add User"],
  ["Сохранить пользователя", "Save User"],
  ["Проверить подключение", "Test Connection"],
  ["Синхронизировать", "Sync"],
  ["Разблокировать", "Unlock"],
  ["Заблокировано", "Locked"],
  ["Разблокировано", "Unlocked"],
  ["Введите мастер-пароль", "Enter master password"],
  ["Мастер-пароль и локальное шифрование", "Master password and local encryption"],
  ["Подключаюсь к базе пользователей...", "Connecting to user database..."],
  ["Проверяю учетную запись...", "Checking account..."],
  ["Заполните логин и пароль.", "Enter login and password."],
  ["Неверный логин или пароль.", "Invalid login or password."],
  ["Сессия завершена. Войдите снова.", "Session ended. Sign in again."],
  ["Пользователь сохранен.", "User saved."],
  ["Пользователь удален.", "User deleted."],
  ["Нет данных", "No data"],
  ["Нет данных для отображения.", "No data to display."],
  ["Загрузите отчет CSV/XLSX или измените фильтры.", "Upload a CSV/XLSX report or change filters."],
  ["Нет данных для итоговой таблицы.", "No data for the summary table."],
  ["Итого", "Total"],
  ["Фильтры", "Filters"],
  ["Параметры выборки", "Filter Parameters"],
  ["Год", "Year"],
  ["Месяц", "Month"],
  ["День", "Day"],
  ["Тренингов", "Trainings"],
  ["Участников всего", "Total participants"],
  ["Уникальных участников", "Unique participants"],
  ["Категорий", "Categories"],
  ["Детализация", "Details"],
  ["Тренинги и участники", "Trainings and Participants"],
  ["Открыть в новой вкладке", "Open in new tab"],
  ["Развернуть", "Fullscreen"],
];

const DEFAULT_ELEARNING_TEAM = [
  {
    id: "igor-chiplikov",
    parentId: "",
    name: "Igor Chiplikov",
    jobTitle: "Director Corporate Learning & Development",
    department: "Customer Service Training: Training Academy",
    workLocation: "ALA",
    company: "Air Astana",
  },
  {
    id: "fatima-alekperzade",
    parentId: "igor-chiplikov",
    name: "Fatima Alekperzade",
    jobTitle: "Manager E-learning and Systems",
    department: "Training Academy",
    workLocation: "ALA",
    company: "Air Astana",
  },
  {
    id: "temirlan-amirkhanov",
    parentId: "fatima-alekperzade",
    name: "Temirlan Amirkhanov",
    jobTitle: "Supervisor Training Systems",
    department: "Training Academy",
    workLocation: "ALA",
    company: "Air Astana",
  },
  {
    id: "sherkhan-zhunusbay",
    parentId: "temirlan-amirkhanov",
    name: "Sherkhan Zhunusbay",
    jobTitle: "Specialist Training Systems",
    department: "Training Academy",
    workLocation: "ALA",
    company: "Air Astana",
  },
  {
    id: "aruzhan-omirzakova",
    parentId: "fatima-alekperzade",
    name: "Aruzhan Omirzakova",
    jobTitle: "Supervisor E-learning",
    department: "Training Academy",
    workLocation: "ALA",
    company: "Air Astana",
  },
  {
    id: "alina-polechshuk",
    parentId: "aruzhan-omirzakova",
    name: "Alina Polechshuk",
    jobTitle: "E-learning developer",
    department: "Training Academy",
    workLocation: "ALA",
    company: "Air Astana",
  },
];

const DEVELOPMENT_SCALE_LABELS = ["Не согласен", "Скорее нет", "Нейтрально", "Скорее да", "Полностью"];

const TEAM_DEVELOPMENT_TESTS = {
  herzberg: {
    title: "Выбор мотивационных предпочтений по Ф. Герцбергу",
    subtitle: "Оценивает, что сильнее влияет на вовлеченность: внутренние мотиваторы работы или гигиенические условия.",
    disclaimer: "Модель Герцберга разделяет факторы удовлетворенности и неудовлетворенности. Это не диагностика личности, а рабочая карта предпочтений.",
    dimensions: {
      motivator: {
        label: "Мотиваторы роста",
        description: "Достижения, признание, ответственность, развитие и смысл работы.",
        advice: "Давайте больше автономии, обратной связи по достижениям, сложные задачи и понятную траекторию роста.",
      },
      hygiene: {
        label: "Гигиенические условия",
        description: "Правила, стабильность, условия, отношения, нагрузка и компенсация.",
        advice: "Сначала уберите раздражители: неясные правила, перегруз, нехватку ресурсов, конфликтные зоны и непрозрачность ожиданий.",
      },
    },
    questions: [
      { key: "achievement", dimension: "motivator", label: "Достижения", text: "Мне важно видеть конкретный результат своей работы и понимать, что задача действительно продвинулась." },
      { key: "recognition", dimension: "motivator", label: "Признание", text: "Меня заметно мотивирует признание вклада от руководителя или команды." },
      { key: "work_itself", dimension: "motivator", label: "Интересная работа", text: "Я работаю сильнее, когда сама задача интеллектуально интересная и не выглядит рутинной." },
      { key: "responsibility", dimension: "motivator", label: "Ответственность", text: "Мне важно иметь зону ответственности, где я могу принимать решения без постоянного согласования." },
      { key: "growth", dimension: "motivator", label: "Рост", text: "Новые навыки, обучение и развитие компетенций для меня являются сильным источником энергии." },
      { key: "advancement", dimension: "motivator", label: "Продвижение", text: "Мне важно видеть, как хорошая работа может привести к карьерному или проектному росту." },
      { key: "policy", dimension: "hygiene", label: "Правила и процессы", text: "Четкие правила, понятные процессы и отсутствие хаоса сильно влияют на мое отношение к работе." },
      { key: "supervision", dimension: "hygiene", label: "Стиль управления", text: "Для меня критично, чтобы постановка задач, контроль и обратная связь были корректными и последовательными." },
      { key: "relationships", dimension: "hygiene", label: "Отношения", text: "Качество отношений в команде и отсутствие токсичных конфликтов сильно влияют на мою продуктивность." },
      { key: "conditions", dimension: "hygiene", label: "Условия работы", text: "Мне важно, чтобы были нормальные инструменты, доступы, время и рабочая среда." },
      { key: "security", dimension: "hygiene", label: "Стабильность", text: "Стабильность, предсказуемость и понятные ожидания для меня важнее постоянных изменений." },
      { key: "compensation", dimension: "hygiene", label: "Компенсация", text: "Справедливая оплата и прозрачные условия заметно влияют на мое ощущение справедливости." },
    ],
  },
  belbin: {
    title: "Ориентир по командным ролям Белбина",
    subtitle: "Помогает увидеть, какие роли сотрудник чаще берет в командной работе: социальные, мыслительные или деятельные.",
    disclaimer: "Это внутренняя упрощенная самооценка по мотивам 9 ролей Белбина, не официальный Belbin SPI и не сертифицированный отчет.",
    dimensions: {
      resource: { label: "Исследователь ресурсов", description: "Ищет возможности, контакты и внешние идеи.", advice: "Давайте задачи на поиск вариантов, партнеров, практик и новых возможностей." },
      teamworker: { label: "Душа команды", description: "Сглаживает напряжение, слушает, помогает людям договориться.", advice: "Подключайте к фасилитации обсуждений и работе с командной атмосферой." },
      coordinator: { label: "Координатор", description: "Проясняет цели, распределяет роли и помогает команде сфокусироваться.", advice: "Давайте координацию встреч, распределение ответственности и контроль договоренностей." },
      plant: { label: "Генератор идей", description: "Предлагает нестандартные решения и новые концепции.", advice: "Используйте на старте проектов и в задачах, где нужен новый подход." },
      monitor: { label: "Аналитик-оценщик", description: "Взвешивает варианты, проверяет логику и риски.", advice: "Подключайте к выбору решений, оценке рисков и ревью планов." },
      specialist: { label: "Специалист", description: "Дает глубокую экспертизу в конкретной области.", advice: "Давайте экспертные задачи, обучение коллег и сложные технические вопросы." },
      shaper: { label: "Формирователь", description: "Двигает команду вперед, давит на препятствия и темп.", advice: "Полезен в срочных проектах, где нужно преодолеть сопротивление и не потерять скорость." },
      implementer: { label: "Исполнитель", description: "Превращает идеи в понятный план и системно доводит работу.", advice: "Давайте операционное планирование, внедрение процессов и контроль практического выполнения." },
      completer: { label: "Доводчик", description: "Ищет ошибки, полирует результат и следит за качеством.", advice: "Подключайте к финальной проверке, дедлайнам, документации и качеству релиза." },
    },
    questions: [
      { dimension: "resource", text: "Я легко нахожу внешние идеи, людей или источники, которые могут помочь команде." },
      { dimension: "resource", text: "Мне нравится узнавать, как похожие задачи решают другие команды или компании." },
      { dimension: "resource", text: "Я быстро заряжаюсь от новых возможностей, встреч и контактов." },
      { dimension: "teamworker", text: "Я замечаю напряжение между людьми и стараюсь снизить конфликт." },
      { dimension: "teamworker", text: "Коллеги часто приходят ко мне, когда нужно спокойно обсудить сложную ситуацию." },
      { dimension: "teamworker", text: "Мне важно, чтобы решение было принято с учетом людей, которых оно затронет." },
      { dimension: "coordinator", text: "Мне естественно прояснять цель, роли и следующий шаг для группы." },
      { dimension: "coordinator", text: "Я умею вовлечь разных людей и распределить работу по сильным сторонам." },
      { dimension: "coordinator", text: "На встречах я часто возвращаю обсуждение к цели и результату." },
      { dimension: "plant", text: "Я часто предлагаю нестандартные идеи, которые сначала кажутся непривычными." },
      { dimension: "plant", text: "Мне нравится решать задачи, где нет готового шаблона." },
      { dimension: "plant", text: "Я быстро вижу новые концепции, связи и варианты решения." },
      { dimension: "monitor", text: "Перед выбором решения я стараюсь увидеть риски, факты и слабые места." },
      { dimension: "monitor", text: "Я предпочитаю не торопиться, пока не сравню варианты объективно." },
      { dimension: "monitor", text: "Команде полезна моя способность задавать критичные вопросы." },
      { dimension: "specialist", text: "Я люблю углубляться в свою область и становиться экспертом." },
      { dimension: "specialist", text: "Мой сильный вклад часто связан с редким знанием или конкретной технической компетенцией." },
      { dimension: "specialist", text: "Мне важно, чтобы решения были профессионально точными." },
      { dimension: "shaper", text: "Когда команда теряет темп, я стараюсь вернуть движение и давление на результат." },
      { dimension: "shaper", text: "Я готов поднимать неудобные вопросы, если это помогает выполнить задачу." },
      { dimension: "shaper", text: "Сложные сроки и препятствия скорее мобилизуют меня, чем останавливают." },
      { dimension: "implementer", text: "Я быстро превращаю идею в понятный план действий." },
      { dimension: "implementer", text: "Мне комфортно выстраивать процесс, правила и последовательность шагов." },
      { dimension: "implementer", text: "Я ценю практичность и реализуемость больше красивой идеи без плана." },
      { dimension: "completer", text: "Я замечаю ошибки, пропуски и несоответствия перед финальной сдачей." },
      { dimension: "completer", text: "Мне важно довести задачу до аккуратного, качественного результата." },
      { dimension: "completer", text: "Я часто беру на себя финальную проверку деталей и сроков." },
    ],
  },
  disc: {
    title: "Модель поведения DISC",
    subtitle: "Оценивает предпочитаемый стиль поведения и коммуникации: результат, влияние, стабильность или точность.",
    disclaimer: "DISC дает общий язык для коммуникации. Не используйте результат как ярлык или критерий отбора.",
    dimensions: {
      d: { label: "D - Dominance", description: "Ориентация на результат, скорость, вызов и решения.", advice: "Говорите кратко, показывайте цель, полномочия, ограничения и ожидаемый результат." },
      i: { label: "I - Influence", description: "Ориентация на людей, идеи, вовлечение и влияние.", advice: "Давайте пространство для обсуждения, признание, презентации и работу с вовлечением." },
      s: { label: "S - Steadiness", description: "Ориентация на стабильность, поддержку, надежность и сотрудничество.", advice: "Давайте предсказуемость, время на адаптацию, понятный темп и командную поддержку." },
      c: { label: "C - Conscientiousness", description: "Ориентация на точность, качество, правила и анализ.", advice: "Давайте факты, критерии качества, документацию, время на проверку и логичное обоснование." },
    },
    questions: [
      { dimension: "d", text: "Я быстро беру инициативу, когда нужно принять решение." },
      { dimension: "d", text: "Мне комфортно спорить за результат, если вижу риск для цели." },
      { dimension: "d", text: "Я предпочитаю краткие обсуждения и четкий следующий шаг." },
      { dimension: "d", text: "Сложные вызовы скорее добавляют мне энергии." },
      { dimension: "i", text: "Я легко вовлекаю людей в обсуждение и поддерживаю энергию группы." },
      { dimension: "i", text: "Мне важно, чтобы в работе было место для идей и живой коммуникации." },
      { dimension: "i", text: "Я часто помогаю команде увидеть позитивный сценарий и возможности." },
      { dimension: "i", text: "Мне легче работать, когда есть признание и контакт с людьми." },
      { dimension: "s", text: "Я предпочитаю стабильный темп, понятные ожидания и уважительное взаимодействие." },
      { dimension: "s", text: "Я стараюсь поддерживать команду и помогать людям спокойно двигаться вперед." },
      { dimension: "s", text: "Резкие изменения без объяснения снижают мою эффективность." },
      { dimension: "s", text: "Я обычно надежно довожу регулярные задачи и поддерживаю процесс." },
      { dimension: "c", text: "Я обращаю внимание на точность, детали и качество результата." },
      { dimension: "c", text: "Перед выводом мне нужны факты, критерии и логика." },
      { dimension: "c", text: "Я предпочитаю ясные правила и хорошо оформленную информацию." },
      { dimension: "c", text: "Мне важно проверить решение, прежде чем показывать его как готовое." },
    ],
  },
};

Object.assign(TEAM_DEVELOPMENT_TESTS, {
  psychSafety: {
    title: "Пульс психологической безопасности",
    subtitle: "Показывает, насколько сотруднику безопасно задавать вопросы, признавать ошибки, спорить по делу и просить помощь.",
    disclaimer: "Это короткий командный пульс, а не индивидуальная оценка лояльности. Низкий результат лучше обсуждать через условия работы, а не через личные качества.",
    dimensions: {
      voice: { label: "Голос и вопросы", description: "Можно открыто задавать вопросы и высказывать сомнения.", advice: "На встречах явно приглашайте вопросы, фиксируйте спорные темы и благодарите за раннее поднятие рисков." },
      mistakes: { label: "Ошибки и обучение", description: "Ошибки рассматриваются как источник улучшений, а не повод для наказания.", advice: "Разделяйте ошибку и человека, проводите короткие разборы без обвинений и превращайте выводы в улучшения процесса." },
      respect: { label: "Уважение", description: "Взаимодействие остается корректным даже при несогласии.", advice: "Договоритесь о правилах дискуссии: критиковать идею, не человека; не перебивать; подтверждать услышанное." },
      help: { label: "Помощь", description: "Можно попросить поддержку без ощущения слабости.", advice: "Сделайте просьбу о помощи нормой: парная работа, быстрые консультации, видимый список экспертов и доступов." },
    },
    questions: [
      { dimension: "voice", text: "Я могу задать вопрос, даже если он кажется простым или неудобным." },
      { dimension: "voice", text: "Я могу открыто сказать, что не согласен с решением, если вижу риск." },
      { dimension: "voice", text: "На встречах есть пространство для разных мнений, а не только для быстрого согласия." },
      { dimension: "mistakes", text: "Если я ошибаюсь, команда помогает понять причину, а не ищет виноватого." },
      { dimension: "mistakes", text: "У нас можно признавать проблему на ранней стадии без страха наказания." },
      { dimension: "mistakes", text: "После сложных ситуаций мы обсуждаем, как улучшить процесс." },
      { dimension: "respect", text: "Даже в споре коллеги сохраняют уважительный тон." },
      { dimension: "respect", text: "Мой вклад воспринимается серьезно независимо от должности или стажа." },
      { dimension: "respect", text: "Я редко сталкиваюсь с сарказмом, игнорированием или обесцениванием в рабочих обсуждениях." },
      { dimension: "help", text: "Мне легко попросить коллег о помощи, когда задача застряла." },
      { dimension: "help", text: "Команда быстро подключается, если у кого-то возникает блокер." },
      { dimension: "help", text: "Я знаю, к кому обратиться по основным рабочим вопросам." },
    ],
  },
  trust: {
    title: "Опрос доверия и взаимодействия",
    subtitle: "Оценивает надежность договоренностей, ясность ожиданий, обмен информацией и качество совместной работы.",
    disclaimer: "Результат полезен для улучшения командных договоренностей и не должен использоваться как персональный рейтинг.",
    dimensions: {
      reliability: { label: "Надежность", description: "Обещания выполняются, сроки и договоренности не теряются.", advice: "Фиксируйте владельца, срок и критерий готовности для каждой договоренности." },
      clarity: { label: "Ясность", description: "Понятны приоритеты, роли, ожидания и следующий шаг.", advice: "Используйте короткие письменные брифы: цель, контекст, результат, срок, ответственный." },
      communication: { label: "Коммуникация", description: "Информация доходит вовремя и в нужном объеме.", advice: "Согласуйте каналы для срочного, планового и справочного общения." },
      cooperation: { label: "Взаимодействие", description: "Коллеги помогают друг другу и не создают искусственных барьеров.", advice: "Регулярно снимайте блокеры и подсвечивайте зависимости между задачами." },
    },
    questions: [
      { dimension: "reliability", text: "Коллеги обычно выполняют то, о чем договорились." },
      { dimension: "reliability", text: "Если срок меняется, об этом предупреждают заранее." },
      { dimension: "reliability", text: "Я могу рассчитывать на качество работы, которую передают другие." },
      { dimension: "clarity", text: "Мне понятно, какие задачи сейчас являются приоритетными." },
      { dimension: "clarity", text: "В задачах обычно ясно, какой результат считается готовым." },
      { dimension: "clarity", text: "Я понимаю свою роль и роль коллег в совместных задачах." },
      { dimension: "communication", text: "Важная информация доходит до меня вовремя." },
      { dimension: "communication", text: "Команда не перегружает лишними сообщениями, но передает нужный контекст." },
      { dimension: "communication", text: "После встреч понятны решения и следующие шаги." },
      { dimension: "cooperation", text: "Коллеги готовы помочь, если задача зависит от их участия." },
      { dimension: "cooperation", text: "В команде принято предупреждать о рисках, а не скрывать их." },
      { dimension: "cooperation", text: "При совместной работе мы ищем общее решение, а не защищаем только свою часть." },
    ],
  },
  tki: {
    title: "Карта конфликтных стилей TKI",
    subtitle: "Упрощенная карта пяти способов поведения в конфликте: конкуренция, сотрудничество, компромисс, избегание и приспособление.",
    disclaimer: "Это не официальный TKI. Используйте как повод обсудить привычный стиль и ситуации, где нужен другой подход.",
    dimensions: {
      competing: { label: "Конкуренция", description: "Быстро отстаивает позицию и результат.", advice: "Полезно в срочных решениях, но проверяйте, не подавляет ли стиль альтернативные мнения." },
      collaborating: { label: "Сотрудничество", description: "Ищет win-win и глубоко разбирает интересы сторон.", advice: "Используйте для важных тем, где нужно качество решения и согласие сторон." },
      compromising: { label: "Компромисс", description: "Ищет приемлемую середину и быстрый баланс.", advice: "Подходит для ограниченного времени, но не заменяет полноценное решение стратегических проблем." },
      avoiding: { label: "Избегание", description: "Откладывает конфликт или выходит из него.", advice: "Полезно для паузы и снижения эмоций, но опасно при накоплении нерешенных вопросов." },
      accommodating: { label: "Приспособление", description: "Сохраняет отношения и уступает ради другого.", advice: "Хорошо для поддержки отношений, но важно не терять собственные интересы и границы." },
    },
    questions: [
      { dimension: "competing", text: "В конфликте я быстро обозначаю свою позицию и стараюсь продавить нужное решение." },
      { dimension: "competing", text: "Если вопрос важный, я готов спорить жестко, чтобы защитить результат." },
      { dimension: "competing", text: "Мне легче принять непопулярное решение, чем долго оставлять проблему открытой." },
      { dimension: "collaborating", text: "Я стараюсь понять интересы всех сторон и найти решение, которое учитывает главное для каждого." },
      { dimension: "collaborating", text: "В сложном споре мне важно не просто договориться, а разобраться в причине разногласий." },
      { dimension: "collaborating", text: "Я готов потратить больше времени, если это даст качественное общее решение." },
      { dimension: "compromising", text: "Я часто предлагаю вариант посередине, чтобы команда могла двигаться дальше." },
      { dimension: "compromising", text: "Мне комфортно договариваться через взаимные уступки." },
      { dimension: "compromising", text: "Когда времени мало, я выбираю практичное решение, с которым все могут жить." },
      { dimension: "avoiding", text: "Если конфликт не критичен, я предпочитаю не тратить на него энергию." },
      { dimension: "avoiding", text: "Я могу отложить обсуждение, если эмоции мешают говорить конструктивно." },
      { dimension: "avoiding", text: "Иногда мне проще обойти напряженную тему, чем открывать спор." },
      { dimension: "accommodating", text: "Я могу уступить, если для другого человека вопрос важнее." },
      { dimension: "accommodating", text: "Сохранение рабочих отношений для меня часто важнее победы в споре." },
      { dimension: "accommodating", text: "Я стараюсь поддержать коллегу, даже если мое решение было бы другим." },
    ],
  },
  learningAgility: {
    title: "Learning agility",
    subtitle: "Показывает готовность учиться, адаптироваться, экспериментировать и извлекать выводы из обратной связи.",
    disclaimer: "Опрос помогает подобрать формат развития и уровень поддержки при изменениях.",
    dimensions: {
      curiosity: { label: "Любопытство", description: "Интерес к новым темам, вопросам и подходам.", advice: "Давайте исследовательские задачи, доступ к материалам и возможность делиться находками." },
      adaptability: { label: "Адаптивность", description: "Готовность перестраиваться при изменении условий.", advice: "Объясняйте причину изменений, давайте короткие циклы адаптации и промежуточные проверки." },
      experimentation: { label: "Эксперименты", description: "Готовность пробовать и тестировать гипотезы.", advice: "Запускайте небольшие пилоты с ясными критериями успеха и безопасным масштабом ошибки." },
      feedback: { label: "Обратная связь", description: "Способность принимать обратную связь и менять действия.", advice: "Давайте конкретную обратную связь по поведению и договаривайтесь о следующем эксперименте." },
    },
    questions: [
      { dimension: "curiosity", text: "Мне интересно разбираться в новых темах, даже если они не входят напрямую в мои текущие задачи." },
      { dimension: "curiosity", text: "Я часто задаю вопросы, чтобы понять не только что делать, но и почему." },
      { dimension: "curiosity", text: "Мне нравится искать новые подходы и сравнивать разные практики." },
      { dimension: "adaptability", text: "Я быстро перестраиваюсь, если приоритеты или условия меняются." },
      { dimension: "adaptability", text: "Новые инструменты и процессы скорее включают меня, чем раздражают." },
      { dimension: "adaptability", text: "Мне комфортно работать в ситуации, где часть ответов появляется по ходу." },
      { dimension: "experimentation", text: "Я готов пробовать пилотные решения, даже если результат не гарантирован." },
      { dimension: "experimentation", text: "Мне проще начать с небольшого теста, чем долго ждать идеального плана." },
      { dimension: "experimentation", text: "После неудачной попытки я стараюсь быстро выделить урок и попробовать иначе." },
      { dimension: "feedback", text: "Я спокойно воспринимаю корректирующую обратную связь, если она конкретная." },
      { dimension: "feedback", text: "Я меняю подход, когда вижу, что текущий способ не дает результата." },
      { dimension: "feedback", text: "Мне полезны регулярные короткие ревью по тому, что улучшить." },
    ],
  },
  energy: {
    title: "Энергия и риск выгорания",
    subtitle: "Мини-пульс по нагрузке, восстановлению, ясности приоритетов и контролю над работой.",
    disclaimer: "Это рабочий индикатор риска, не медицинская диагностика. При сильном истощении нужна индивидуальная поддержка и корректировка нагрузки.",
    dimensions: {
      workload: { label: "Нагрузка", description: "Объем задач, срочность и ощущение перегруза.", advice: "Проверьте приоритеты, дедлайны, количество параллельных задач и возможность перераспределения." },
      recovery: { label: "Восстановление", description: "Энергия, паузы и возможность восстановиться после напряжения.", advice: "Добавьте реалистичные паузы, ограничьте срочные переброски и отслеживайте переработки." },
      clarity: { label: "Ясность приоритетов", description: "Понимание, что важнее и где можно сказать нет.", advice: "Сократите список приоритетов, явно обозначьте, что можно отложить." },
      control: { label: "Контроль", description: "Возможность влиять на способ выполнения и планирование.", advice: "Дайте сотруднику больше выбора в способе работы, очередности задач и планировании фокуса." },
    },
    questions: [
      { dimension: "workload", text: "Мой текущий объем задач выглядит реалистичным для нормального выполнения." },
      { dimension: "workload", text: "У меня редко возникает ощущение, что все задачи срочные одновременно." },
      { dimension: "workload", text: "Я могу качественно завершать задачи без постоянной спешки." },
      { dimension: "recovery", text: "После напряженных периодов у меня есть возможность восстановиться." },
      { dimension: "recovery", text: "В конце рабочего дня у меня обычно остается нормальный уровень энергии." },
      { dimension: "recovery", text: "Я могу делать паузы или переключаться, когда это необходимо для качества работы." },
      { dimension: "clarity", text: "Мне понятно, какие задачи важнее, если времени на все не хватает." },
      { dimension: "clarity", text: "Руководитель помогает снять конфликт приоритетов, когда он возникает." },
      { dimension: "clarity", text: "Я понимаю, какие задачи можно отложить без ущерба для результата." },
      { dimension: "control", text: "У меня есть влияние на то, как организовать свою работу." },
      { dimension: "control", text: "Я могу заранее планировать фокусное время для сложных задач." },
      { dimension: "control", text: "Я могу обсудить нагрузку до того, как она станет критичной." },
    ],
  },
  feedback: {
    title: "Предпочтения обратной связи",
    subtitle: "Помогает понять, как сотруднику удобнее получать признание, корректирующую обратную связь и поддержку.",
    disclaimer: "Результат нужен для настройки коммуникации менеджера и команды, а не для оценки эффективности.",
    dimensions: {
      recognition: { label: "Признание", description: "Потребность видеть, что вклад замечен.", advice: "Давайте конкретное признание: что именно сработало, где был вклад и почему это важно." },
      directness: { label: "Прямота", description: "Предпочтение ясной и быстрой корректирующей обратной связи.", advice: "Говорите прямо, но уважительно: факт, влияние, ожидаемое поведение, поддержка." },
      coaching: { label: "Развитие", description: "Запрос на развивающие вопросы, разбор и совместный поиск решения.", advice: "Используйте коучинговый формат: вопрос, гипотеза, следующий шаг, короткая проверка результата." },
      privacy: { label: "Приватность", description: "Важность безопасного формата и отсутствия публичного давления.", advice: "Критичную обратную связь давайте один на один; публично отмечайте только согласованные позитивные вещи." },
    },
    questions: [
      { dimension: "recognition", text: "Мне важно регулярно слышать, какой мой вклад был полезен команде." },
      { dimension: "recognition", text: "Признание мотивирует меня сильнее, когда оно конкретное, а не общее." },
      { dimension: "recognition", text: "Мне важно, чтобы хорошие результаты были заметны не только мне." },
      { dimension: "directness", text: "Если что-то нужно исправить, мне лучше сказать об этом прямо и быстро." },
      { dimension: "directness", text: "Я ценю честную обратную связь больше, чем мягкие намеки." },
      { dimension: "directness", text: "Мне легче улучшить работу, когда ожидание сформулировано ясно." },
      { dimension: "coaching", text: "Мне полезно обсуждать не только ошибку, но и варианты развития." },
      { dimension: "coaching", text: "Я лучше воспринимаю обратную связь, когда вместе ищем следующий шаг." },
      { dimension: "coaching", text: "Вопросы и разбор помогают мне глубже понять, как улучшиться." },
      { dimension: "privacy", text: "Корректирующую обратную связь мне комфортнее получать один на один." },
      { dimension: "privacy", text: "Публичное обсуждение ошибок снижает мою открытость." },
      { dimension: "privacy", text: "Мне важно заранее понимать формат и цель обратной связи." },
    ],
  },
});

const authShell = document.querySelector("#authShell");
const appShell = document.querySelector(".app-shell");
const loginForm = document.querySelector("#loginForm");
const loginUserInput = document.querySelector("#loginUserInput");
const loginPasswordInput = document.querySelector("#loginPasswordInput");
const loginSubmitButton = document.querySelector("#loginSubmitButton");
const loginStatus = document.querySelector("#loginStatus");
const form = document.querySelector("#systemForm");
const recordIdInput = document.querySelector("#recordId");
const systemNameInput = document.querySelector("#systemName");
const loginInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");
const masterPasswordInput = document.querySelector("#masterPasswordInput");
const unlockPasswordVaultButton = document.querySelector("#unlockPasswordVault");
const lockPasswordVaultButton = document.querySelector("#lockPasswordVault");
const passwordVaultStatus = document.querySelector("#passwordVaultStatus");
const passwordVaultBadge = document.querySelector("#passwordVaultBadge");
const purchaseDateInput = document.querySelector("#purchaseDate");
const licenseEndDateInput = document.querySelector("#licenseEndDate");
const submitText = document.querySelector("#submitText");
const resetFormButton = document.querySelector("#resetForm");
const togglePasswordButton = document.querySelector("#togglePassword");
const searchInput = document.querySelector("#searchInput");
const statusFilter = document.querySelector("#statusFilter");
const tableBody = document.querySelector("#systemsTable");
const emptyState = document.querySelector("#emptyState");
const linkForm = document.querySelector("#linkForm");
const linkIdInput = document.querySelector("#linkId");
const linkDescriptionInput = document.querySelector("#linkDescription");
const linkUrlInput = document.querySelector("#linkUrl");
const linkSubmitText = document.querySelector("#linkSubmitText");
const resetLinkFormButton = document.querySelector("#resetLinkForm");
const linksList = document.querySelector("#linksList");
const linksEmptyState = document.querySelector("#linksEmptyState");
const linksPanel = document.querySelector(".links-panel");
const surveyLinkForm = document.querySelector("#surveyLinkForm");
const surveyLinkIdInput = document.querySelector("#surveyLinkId");
const surveyLinkDescriptionInput = document.querySelector("#surveyLinkDescription");
const surveyLinkUrlInput = document.querySelector("#surveyLinkUrl");
const surveyLinkSubmitText = document.querySelector("#surveyLinkSubmitText");
const resetSurveyLinkFormButton = document.querySelector("#resetSurveyLinkForm");
const surveyLinksList = document.querySelector("#surveyLinksList");
const surveyLinksEmptyState = document.querySelector("#surveyLinksEmptyState");
const surveyLinksPanel = document.querySelector("#surveyPage .links-panel");
const promoForm = document.querySelector("#promoForm");
const promoIdInput = document.querySelector("#promoId");
const promoNameInput = document.querySelector("#promoName");
const promoUnitPriceUsdInput = document.querySelector("#promoUnitPriceUsd");
const promoUnitPriceKztInput = document.querySelector("#promoUnitPriceKzt");
const promoQuantityInput = document.querySelector("#promoQuantity");
const promoExchangeRateKztInput = document.querySelector("#promoExchangeRateKzt");
const promoTotalUsdInput = document.querySelector("#promoTotalUsd");
const promoTotalKztInput = document.querySelector("#promoTotalKzt");
const promoSubmitText = document.querySelector("#promoSubmitText");
const resetPromoFormButton = document.querySelector("#resetPromoForm");
const promoTable = document.querySelector("#promoTable");
const promoEmptyState = document.querySelector("#promoEmptyState");
const stockForm = document.querySelector("#stockForm");
const stockIdInput = document.querySelector("#stockId");
const stockNameInput = document.querySelector("#stockName");
const stockQuantityInput = document.querySelector("#stockQuantity");
const stockNoteInput = document.querySelector("#stockNote");
const stockSubmitText = document.querySelector("#stockSubmitText");
const resetStockFormButton = document.querySelector("#resetStockForm");
const stockTable = document.querySelector("#stockTable");
const stockEmptyState = document.querySelector("#stockEmptyState");
const promoPurchasePositionForm = document.querySelector("#promoPurchasePositionForm");
const promoPurchasePositionNameInput = document.querySelector("#promoPurchasePositionName");
const promoPurchasePositionsList = document.querySelector("#promoPurchasePositionsList");
const promoPurchaseForm = document.querySelector("#promoPurchaseForm");
const promoPurchaseIdInput = document.querySelector("#promoPurchaseId");
const promoPurchaseFullNameInput = document.querySelector("#promoPurchaseFullName");
const promoPurchaseAddressInput = document.querySelector("#promoPurchaseAddress");
const promoPurchaseCityInput = document.querySelector("#promoPurchaseCity");
const promoPurchaseCenterInput = document.querySelector("#promoPurchaseCenter");
const promoPurchaseItemsFields = document.querySelector("#promoPurchaseItemsFields");
const promoPurchaseSubmitText = document.querySelector("#promoPurchaseSubmitText");
const resetPromoPurchaseFormButton = document.querySelector("#resetPromoPurchaseForm");
const promoPurchaseTableHead = document.querySelector("#promoPurchaseTableHead");
const promoPurchaseTable = document.querySelector("#promoPurchaseTable");
const promoPurchaseEmptyState = document.querySelector("#promoPurchaseEmptyState");
const analyticsBuyerCount = document.querySelector("#analyticsBuyerCount");
const analyticsItemCount = document.querySelector("#analyticsItemCount");
const analyticsCenterCount = document.querySelector("#analyticsCenterCount");
const analyticsPositionCount = document.querySelector("#analyticsPositionCount");
const analyticsProductsTable = document.querySelector("#analyticsProductsTable");
const analyticsCentersTable = document.querySelector("#analyticsCentersTable");
const analyticsRemainingTable = document.querySelector("#analyticsRemainingTable");
const analyticsStatusesTable = document.querySelector("#analyticsStatusesTable");
const analyticsTopBuyersTable = document.querySelector("#analyticsTopBuyersTable");
const globalSearch = document.querySelector("#globalSearch");
const globalSearchInput = document.querySelector("#globalSearchInput");
const globalSearchResults = document.querySelector("#globalSearchResults");
const todayMyActiveCount = document.querySelector("#todayMyActiveCount");
const todayNewAssignmentCount = document.querySelector("#todayNewAssignmentCount");
const todayOverdueCount = document.querySelector("#todayOverdueCount");
const todayWeekCount = document.querySelector("#todayWeekCount");
const todayMyAssignments = document.querySelector("#todayMyAssignments");
const todayUpcomingList = document.querySelector("#todayUpcomingList");
const todayRisksList = document.querySelector("#todayRisksList");
const todayActivityList = document.querySelector("#todayActivityList");
const myTasksSearchInput = document.querySelector("#myTasksSearchInput");
const myTasksStatusFilter = document.querySelector("#myTasksStatusFilter");
const myTasksDeadlineFilter = document.querySelector("#myTasksDeadlineFilter");
const myTasksList = document.querySelector("#myTasksList");
const teamTaskTabs = document.querySelector("#teamTaskTabs");
const teamTaskDashboardView = document.querySelector("#teamTaskDashboardView");
const teamTaskStatsView = document.querySelector("#teamTaskStatsView");
const teamTaskKanbanView = document.querySelector("#teamTaskKanbanView");
const teamTaskBoard = document.querySelector("#teamTaskBoard");
const teamTaskStatsContent = document.querySelector("#teamTaskStatsContent");
const teamTaskKanbanBoard = document.querySelector("#teamTaskKanbanBoard");
const teamMemberForm = document.querySelector("#teamMemberForm");
const teamMemberNameInput = document.querySelector("#teamMemberNameInput");
const teamMemberList = document.querySelector("#teamMemberList");
const teamTaskModal = document.querySelector("#teamTaskModal");
const teamTaskForm = document.querySelector("#teamTaskForm");
const teamTaskIdInput = document.querySelector("#teamTaskId");
const teamTaskDirectionInput = document.querySelector("#teamTaskDirection");
const teamTaskTitleInput = document.querySelector("#teamTaskTitleInput");
const teamTaskDescriptionInput = document.querySelector("#teamTaskDescriptionInput");
const teamTaskAssigneesInput = document.querySelector("#teamTaskAssigneesInput");
const teamTaskAssigneesDatalist = document.querySelector("#teamTaskAssigneesDatalist");
const teamTaskAssigneesPicker = document.querySelector("#teamTaskAssigneesPicker");
const teamTaskStatusInput = document.querySelector("#teamTaskStatusInput");
const teamTaskStartDateInput = document.querySelector("#teamTaskStartDateInput");
const teamTaskDeadlineInput = document.querySelector("#teamTaskDeadlineInput");
const teamTaskPriorityInput = document.querySelector("#teamTaskPriorityInput");
const teamTaskNotesInput = document.querySelector("#teamTaskNotesInput");
const teamTaskChecklistInput = document.querySelector("#teamTaskChecklistInput");
const teamTaskAttachmentsInput = document.querySelector("#teamTaskAttachmentsInput");
const teamTaskCommentInput = document.querySelector("#teamTaskCommentInput");
const teamTaskSubmitText = document.querySelector("#teamTaskSubmitText");
const closeTeamTaskModalButton = document.querySelector("#closeTeamTaskModal");
const cancelTeamTaskFormButton = document.querySelector("#cancelTeamTaskForm");
const assignmentBell = document.querySelector("#assignmentBell");
const assignmentBellButton = document.querySelector("#assignmentBellButton");
const assignmentBellPanel = document.querySelector("#assignmentBellPanel");
const assignmentBellCount = document.querySelector("#assignmentBellCount");
const assignmentBellList = document.querySelector("#assignmentBellList");
const elearningTeamTree = document.querySelector("#elearningTeamTree");
const employeeModal = document.querySelector("#employeeModal");
const employeeProfileForm = document.querySelector("#employeeProfileForm");
const employeeProfileIdInput = document.querySelector("#employeeProfileId");
const employeeProfileName = document.querySelector("#employeeProfileName");
const employeeProfileRole = document.querySelector("#employeeProfileRole");
const employeeProfileOrg = document.querySelector("#employeeProfileOrg");
const employeePhotoPreview = document.querySelector("#employeePhotoPreview");
const employeePhotoInput = document.querySelector("#employeePhotoInput");
const removeEmployeePhotoButton = document.querySelector("#removeEmployeePhoto");
const closeEmployeeModalButton = document.querySelector("#closeEmployeeModal");
const cancelEmployeeProfileButton = document.querySelector("#cancelEmployeeProfile");
const employeeEmailInput = document.querySelector("#employeeEmailInput");
const employeeMobileInput = document.querySelector("#employeeMobileInput");
const employeeWorkPhoneInput = document.querySelector("#employeeWorkPhoneInput");
const employeeWorkLocationInput = document.querySelector("#employeeWorkLocationInput");
const employeeCompanyInput = document.querySelector("#employeeCompanyInput");
const employeeJobTitleInput = document.querySelector("#employeeJobTitleInput");
const employeeDepartmentInput = document.querySelector("#employeeDepartmentInput");
const teamDevelopmentTabs = document.querySelector("#teamDevelopmentTabs");
const teamDevelopmentEmployeeInput = document.querySelector("#teamDevelopmentEmployeeInput");
const teamDevelopmentEmployeeDatalist = document.querySelector("#teamDevelopmentEmployeeDatalist");
const teamDevelopmentTestContent = document.querySelector("#teamDevelopmentTestContent");
const teamDevelopmentResult = document.querySelector("#teamDevelopmentResult");
const teamDevelopmentSavedResults = document.querySelector("#teamDevelopmentSavedResults");
const teamDevelopmentAccessForm = document.querySelector("#teamDevelopmentAccessForm");
const teamDevelopmentAccessLoginInput = document.querySelector("#teamDevelopmentAccessLoginInput");
const teamDevelopmentAccessPasswordInput = document.querySelector("#teamDevelopmentAccessPasswordInput");
const teamDevelopmentAccessStatus = document.querySelector("#teamDevelopmentAccessStatus");
const teamDevelopmentSensitiveContent = document.querySelector("#teamDevelopmentSensitiveContent");
const lockTeamDevelopmentAccessButton = document.querySelector("#lockTeamDevelopmentAccess");
const teamDevelopmentPortrait = document.querySelector("#teamDevelopmentPortrait");
const teamDevelopmentPortraitEmployeeSelect = document.querySelector("#teamDevelopmentPortraitEmployeeSelect");
const exportTeamDevelopmentResultsButton = document.querySelector("#exportTeamDevelopmentResults");
const clearTeamDevelopmentResultsButton = document.querySelector("#clearTeamDevelopmentResults");
const messengerThreadList = document.querySelector("#messengerThreadList");
const messengerDirectSelect = document.querySelector("#messengerDirectSelect");
const startDirectMessengerButton = document.querySelector("#startDirectMessengerButton");
const refreshMessengerButton = document.querySelector("#refreshMessengerButton");
const messengerModeLabel = document.querySelector("#messengerModeLabel");
const messengerTitle = document.querySelector("#messengerTitle");
const messengerSyncStatus = document.querySelector("#messengerSyncStatus");
const messengerMessageList = document.querySelector("#messengerMessageList");
const messengerForm = document.querySelector("#messengerForm");
const messengerMessageInput = document.querySelector("#messengerMessageInput");
const messengerAttachmentLinksInput = document.querySelector("#messengerAttachmentLinksInput");
const clearMessengerFormButton = document.querySelector("#clearMessengerFormButton");
const trmsReleaseForm = document.querySelector("#trmsReleaseForm");
const trmsReleaseTaskIdInput = document.querySelector("#trmsReleaseTaskId");
const trmsReleaseNameInput = document.querySelector("#trmsReleaseName");
const trmsTaskNameInput = document.querySelector("#trmsTaskName");
const trmsTaskUrlInput = document.querySelector("#trmsTaskUrl");
const trmsTaskWrittenDateInput = document.querySelector("#trmsTaskWrittenDate");
const trmsTaskStartDateInput = document.querySelector("#trmsTaskStartDate");
const trmsTaskEndDateInput = document.querySelector("#trmsTaskEndDate");
const trmsTaskProdDateInput = document.querySelector("#trmsTaskProdDate");
const trmsReleaseSubmitText = document.querySelector("#trmsReleaseSubmitText");
const resetTrmsReleaseFormButton = document.querySelector("#resetTrmsReleaseForm");
const trmsReleasesList = document.querySelector("#trmsReleasesList");
const trmsReleasesEmptyState = document.querySelector("#trmsReleasesEmptyState");
const reportFileInput = document.querySelector("#reportFileInput");
const reportFileLabel = document.querySelector("#reportFileLabel");
const loadDefaultReportButton = document.querySelector("#loadDefaultReport");
const clearReportDataButton = document.querySelector("#clearReportData");
const dashboardFiltersForm = document.querySelector("#dashboardFilters");
const resetDashboardFiltersButton = document.querySelector("#resetDashboardFilters");
const dashboardYearFilter = document.querySelector("#dashboardYearFilter");
const dashboardMonthFilter = document.querySelector("#dashboardMonthFilter");
const dashboardCategoryFilter = document.querySelector("#dashboardCategoryFilter");
const dashboardTypeFilter = document.querySelector("#dashboardTypeFilter");
const dashboardFormatFilter = document.querySelector("#dashboardFormatFilter");
const dashboardModuleFilter = document.querySelector("#dashboardModuleFilter");
const dashboardTrainingStatusFilter = document.querySelector("#dashboardTrainingStatusFilter");
const dashboardParticipantStatusFilter = document.querySelector("#dashboardParticipantStatusFilter");
const dashboardSessionCount = document.querySelector("#dashboardSessionCount");
const dashboardStudentCount = document.querySelector("#dashboardStudentCount");
const dashboardTrainerCount = document.querySelector("#dashboardTrainerCount");
const dashboardCompletedRate = document.querySelector("#dashboardCompletedRate");
const dashboardCategoriesTable = document.querySelector("#dashboardCategoriesTable");
const dashboardStatusesChart = document.querySelector("#dashboardStatusesChart");
const dashboardTrainersTable = document.querySelector("#dashboardTrainersTable");
const dashboardMonthsChart = document.querySelector("#dashboardMonthsChart");
const dashboardEventsTable = document.querySelector("#dashboardEventsTable");
const pdpReportFileInput = document.querySelector("#pdpReportFileInput");
const pdpReportFileLabel = document.querySelector("#pdpReportFileLabel");
const loadDefaultPdpReportButton = document.querySelector("#loadDefaultPdpReport");
const clearPdpReportDataButton = document.querySelector("#clearPdpReportData");
const pdpReportStatus = document.querySelector("#pdpReportStatus");
const pdpFiltersForm = document.querySelector("#pdpFilters");
const resetPdpFiltersButton = document.querySelector("#resetPdpFilters");
const pdpYearFilter = document.querySelector("#pdpYearFilter");
const pdpStageFilter = document.querySelector("#pdpStageFilter");
const pdpStatusFilter = document.querySelector("#pdpStatusFilter");
const pdpDepartmentFilter = document.querySelector("#pdpDepartmentFilter");
const pdpCityFilter = document.querySelector("#pdpCityFilter");
const pdpSelectionFilter = document.querySelector("#pdpSelectionFilter");
const pdpSearchInput = document.querySelector("#pdpSearchInput");
const pdpEmployeeCount = document.querySelector("#pdpEmployeeCount");
const pdpCompletedRate = document.querySelector("#pdpCompletedRate");
const pdpSelectedTopicCount = document.querySelector("#pdpSelectedTopicCount");
const pdpAverageScore = document.querySelector("#pdpAverageScore");
const pdpStatusChart = document.querySelector("#pdpStatusChart");
const pdpTopicChart = document.querySelector("#pdpTopicChart");
const pdpCompetencyTable = document.querySelector("#pdpCompetencyTable");
const pdpDepartmentTable = document.querySelector("#pdpDepartmentTable");
const pdpEmployeeTable = document.querySelector("#pdpEmployeeTable");
const pdpQuestionTable = document.querySelector("#pdpQuestionTable");
const trainingReportFileInput = document.querySelector("#trainingReportFileInput");
const trainingReportFileLabel = document.querySelector("#trainingReportFileLabel");
const trainingReportLoadDefaultButton = document.querySelector("#trainingReportLoadDefault");
const trainingReportFiltersForm = document.querySelector("#trainingReportFilters");
const resetTrainingReportFiltersButton = document.querySelector("#resetTrainingReportFilters");
const trainingReportYearFilter = document.querySelector("#trainingReportYearFilter");
const trainingReportMonthFilter = document.querySelector("#trainingReportMonthFilter");
const trainingReportCategoryFilter = document.querySelector("#trainingReportCategoryFilter");
const trainingReportTypeFilter = document.querySelector("#trainingReportTypeFilter");
const trainingReportFormatFilter = document.querySelector("#trainingReportFormatFilter");
const trainingReportModuleFilter = document.querySelector("#trainingReportModuleFilter");
const trainingReportTrainingStatusFilter = document.querySelector("#trainingReportTrainingStatusFilter");
const trainingReportParticipantStatusFilter = document.querySelector("#trainingReportParticipantStatusFilter");
const trainingKpiTrainings = document.querySelector("#trainingKpiTrainings");
const trainingKpiParticipants = document.querySelector("#trainingKpiParticipants");
const trainingKpiUnique = document.querySelector("#trainingKpiUnique");
const trainingKpiInitial = document.querySelector("#trainingKpiInitial");
const trainingKpiCompletion = document.querySelector("#trainingKpiCompletion");
const trainingQuantityChart = document.querySelector("#trainingQuantityChart");
const trainingCategoryPie = document.querySelector("#trainingCategoryPie");
const trainingCategoryLegend = document.querySelector("#trainingCategoryLegend");
const trainingTypeChart = document.querySelector("#trainingTypeChart");
const trainingTrainerMatrixHead = document.querySelector("#trainingTrainerMatrixHead");
const trainingTrainerMatrixBody = document.querySelector("#trainingTrainerMatrixBody");
const trainingEmployeesLine = document.querySelector("#trainingEmployeesLine");
const trainingUniqueLine = document.querySelector("#trainingUniqueLine");
const trainingTrainerBars = document.querySelector("#trainingTrainerBars");
const participantReportFileInput = document.querySelector("#participantReportFileInput");
const participantReportFileLabel = document.querySelector("#participantReportFileLabel");
const loadParticipantDefaultReportButton = document.querySelector("#loadParticipantDefaultReport");
const clearParticipantReportDataButton = document.querySelector("#clearParticipantReportData");
const participantReportFiltersForm = document.querySelector("#participantReportFilters");
const resetParticipantReportFiltersButton = document.querySelector("#resetParticipantReportFilters");
const participantReportYearFilter = document.querySelector("#participantReportYearFilter");
const participantReportMonthFilter = document.querySelector("#participantReportMonthFilter");
const participantReportDayFilter = document.querySelector("#participantReportDayFilter");
const participantReportCategoryFilter = document.querySelector("#participantReportCategoryFilter");
const participantReportTrainingFilter = document.querySelector("#participantReportTrainingFilter");
const participantReportResultCounter = document.querySelector("#participantReportResultCounter");
const participantReportTrainingCount = document.querySelector("#participantReportTrainingCount");
const participantReportParticipantCount = document.querySelector("#participantReportParticipantCount");
const participantReportUniqueCount = document.querySelector("#participantReportUniqueCount");
const participantReportCategoryCount = document.querySelector("#participantReportCategoryCount");
const participantReportCategoryChart = document.querySelector("#participantReportCategoryChart");
const participantReportMonthChart = document.querySelector("#participantReportMonthChart");
const participantReportTrainingChart = document.querySelector("#participantReportTrainingChart");
const participantReportDashboardTrainings = document.querySelector("#participantReportDashboardTrainings");
const participantReportDashboardParticipants = document.querySelector("#participantReportDashboardParticipants");
const participantReportDetailsTable = document.querySelector("#participantReportDetailsTable");
const participantReportSummaryTable = document.querySelector("#participantReportSummaryTable");
const participantReportSummaryFoot = document.querySelector("#participantReportSummaryFoot");
const googleSheetsForm = document.querySelector("#supabaseForm");
const googleScriptUrlInput = document.querySelector("#supabaseUrlInput");
const googleSyncTokenInput = document.querySelector("#supabaseAnonKeyInput");
const testGoogleSheetsButton = document.querySelector("#testSupabase");
const pushToGoogleSheetsButton = document.querySelector("#pushToSupabase");
const pullFromGoogleSheetsButton = document.querySelector("#pullFromSupabase");
const googleSheetsStatus = document.querySelector("#supabaseStatus");
const googleCalendarForm = document.querySelector("#googleCalendarForm");
const googleCalendarUrlInput = document.querySelector("#googleCalendarUrlInput");
const googleCalendarTokenInput = document.querySelector("#googleCalendarTokenInput");
const googleCalendarUrlInput2 = document.querySelector("#googleCalendarUrlInput2");
const googleCalendarTokenInput2 = document.querySelector("#googleCalendarTokenInput2");
const googleCalendarAutoSyncInput = document.querySelector("#googleCalendarAutoSyncInput");
const testGoogleCalendarButton = document.querySelector("#testGoogleCalendar");
const syncGoogleCalendarButton = document.querySelector("#syncGoogleCalendar");
const googleCalendarStatus = document.querySelector("#googleCalendarStatus");
const telegramBotForm = document.querySelector("#telegramBotForm");
const telegramBotUrlInput = document.querySelector("#telegramBotUrlInput");
const telegramBotTokenInput = document.querySelector("#telegramBotTokenInput");
const telegramBotChatIdInput = document.querySelector("#telegramBotChatIdInput");
const telegramBotEnabledInput = document.querySelector("#telegramBotEnabledInput");
const testTelegramBotButton = document.querySelector("#testTelegramBot");
const telegramBotStatus = document.querySelector("#telegramBotStatus");
const navLinks = document.querySelectorAll("[data-nav-link]");
const pagePanels = document.querySelectorAll("[data-page-panel]");
const themeToggleButton = document.querySelector("#themeToggle");
const themeToggleText = document.querySelector("#themeToggleText");
const logoutButton = document.querySelector("#logoutButton");
const languageButtons = document.querySelectorAll("[data-language-choice]");
const sidebarUserName = document.querySelector("#sidebarUserName");
const adminUsersPanel = document.querySelector("#adminUsersPanel");
const adminUserForm = document.querySelector("#adminUserForm");
const adminUserLoginInput = document.querySelector("#adminUserLoginInput");
const adminUserNameInput = document.querySelector("#adminUserNameInput");
const adminUserRoleInput = document.querySelector("#adminUserRoleInput");
const adminUserPasswordInput = document.querySelector("#adminUserPasswordInput");
const adminUserActiveInput = document.querySelector("#adminUserActiveInput");
const adminUserSubmitButton = document.querySelector("#adminUserSubmitButton");
const adminUserResetButton = document.querySelector("#adminUserResetButton");
const adminUsersStatus = document.querySelector("#adminUsersStatus");
const adminUsersTable = document.querySelector("#adminUsersTable");
const adminUsersEmptyState = document.querySelector("#adminUsersEmptyState");

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-nav-link]");
  if (!link) return;

  event.preventDefault();

  const page = link.dataset.navLink;
  if (!page) return;

  const targetHash = getHashForPage(page);

  if (window.location.hash === targetHash) {
    showPage(page);
  } else {
    window.location.hash = targetHash;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
});

const counters = {
  total: document.querySelector("#totalCount"),
  active: document.querySelector("#activeCount"),
  soon: document.querySelector("#soonCount"),
  expired: document.querySelector("#expiredCount"),
};

let records = loadRecords();
let links = loadLinks();
let surveyLinks = loadSurveyLinks();
let promoItems = loadPromoItems();
let stockItems = loadStockItems();
let promoPurchases = loadPromoPurchases();
let promoPurchasePositions = loadPromoPurchasePositions();
let teamTaskMembers = loadTeamTaskMembers();
let teamTasks = normalizeTeamTasks(loadTeamTasks());
let elearningTeamProfiles = loadElearningTeamProfiles();
let teamDevelopmentResults = loadTeamDevelopmentResults();
let messengerState = loadMessengerState();
let trmsReleaseTasks = loadTrmsReleaseTasks();
let reportRows = loadReportRows();
let pdpReportRows = [];
let pdpAnswerRows = [];
let googleScriptUrl = loadGoogleScriptUrl();
let googleSyncToken = loadGoogleSyncToken();
let googleCalendarScriptUrl = loadGoogleCalendarScriptUrl();
let googleCalendarToken = loadGoogleCalendarToken();
let googleCalendarScriptUrl2 = loadGoogleCalendarScriptUrl2();
let googleCalendarToken2 = loadGoogleCalendarToken2();
let googleCalendarAutoSync = loadGoogleCalendarAutoSync();
let telegramBotUrl = loadTelegramBotUrl();
let telegramBotToken = loadTelegramBotToken();
let telegramBotChatId = loadTelegramBotChatId();
let telegramBotEnabled = loadTelegramBotEnabled();
let telegramSharedSettingsChecked = false;
let telegramSharedSettingsLoaded = false;
let telegramSharedSettingsRequest = null;
let messengerSharedSettingsLoaded = false;
let messengerSharedSettingsRequest = null;
let messengerSaveTimer = null;
let googleAutoSyncTimer = null;
let googleAutoSyncQueued = false;
let googleAutoSyncInFlight = false;
let googleAutoSyncPendingKeys = new Set();
let googleAutoSyncReplaceKeys = new Set();
let googleSheetsRevision = "";
let googleSheetsRefreshTimer = null;
let googleSheetsLoadInFlight = false;
let googleCalendarSyncTimer = null;
let googleCalendarSyncInFlight = false;
let isApplyingGoogleSyncPayload = false;
let visiblePasswords = new Set();
let passwordVaultMaster = "";
let decryptedPasswordCache = new Map();
let passwordRevealTimers = new Map();
let currentUser = null;
let currentInterfaceLanguage = getSavedLanguage();
let authUsers = [];
let appBootstrapped = false;
const GOOGLE_SYNC_DATASET_KEYS = [
  "records",
  "links",
  "surveyLinks",
  "promoItems",
  "stockItems",
  "promoPurchasePositions",
  "promoPurchases",
  "teamTaskMembers",
  "teamTasks",
  "trmsReleaseTasks",
];
let syncedDataSnapshot = GOOGLE_SYNC_DATASET_KEYS.reduce((snapshot, datasetKey) => {
  snapshot[datasetKey] = [];
  return snapshot;
}, {});

const TEAM_TASK_DIRECTIONS = [
  { key: "elearning-systems", label: "E learning & Systems" },
  { key: "systems", label: "Systems" },
  { key: "elearning", label: "E learning" },
];

const TEAM_TASK_STATUSES = [
  { key: "new", label: "Новая", className: "team-status-new" },
  { key: "inprogress", label: "В работе", className: "team-status-inprogress" },
  { key: "review", label: "На проверке", className: "team-status-review" },
  { key: "done", label: "Завершена", className: "team-status-done" },
  { key: "overdue", label: "Просрочена", className: "team-status-overdue" },
  { key: "paused", label: "Отложена", className: "team-status-paused" },
];

const TEAM_TASK_PRIORITIES = [
  { key: "low", label: "Низкий", className: "team-priority-low", rank: 1 },
  { key: "medium", label: "Средний", className: "team-priority-medium", rank: 2 },
  { key: "high", label: "Высокий", className: "team-priority-high", rank: 3 },
  { key: "urgent", label: "Срочно", className: "team-priority-urgent", rank: 4 },
];

const TEAM_NOTIFICATION_ALIASES = [
  ["16643", "temirlan", "temirlan amirkhanov", "темирлан", "темирлан амирханов"],
  ["fatima", "fatima alekperzade", "фатима", "фатима алекперзаде"],
  ["sherkhan", "sherkhan zhunusbay", "шеркан", "шерxан", "шерхан", "шерхан жунусбай"],
  ["aruzhan", "aruzhan omirzakova", "аружан", "аружан омирзакова"],
  ["alina", "alina polechshuk", "алина", "алина полещук"],
  ["igor", "igor chiplikov", "игорь", "игорь чипликов"],
];

const teamTaskFilters = TEAM_TASK_DIRECTIONS.reduce((acc, direction) => {
  acc[direction.key] = {
    status: "",
    assignee: "",
    deadline: "",
    sort: "deadline",
  };
  return acc;
}, {});

let activeTeamTaskView = "tasks";
let expandedTeamTaskDirections = new Set();
let expandedTeamTaskKanbanStatuses = new Set();
let activeTeamMemberTaskFilter = "";
let activeEmployeeId = "";
let pendingEmployeePhoto = "";
let activeTeamDevelopmentTest = "herzberg";
let pendingTeamDevelopmentResult = null;
let activeTeamDevelopmentSavedResultId = "";
let activeTeamDevelopmentPortraitEmployee = "";
let teamDevelopmentSensitiveUnlocked = false;
let teamDevelopmentSensitiveUnlockedBy = "";
let activeMessengerConversationId = MESSENGER_GENERAL_CONVERSATION_ID;

function getSavedLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) === "en" ? "en" : "ru";
  } catch {
    return "ru";
  }
}

function getInterfaceText(key, fallback = "") {
  const value = INTERFACE_TEXT[key];
  if (!value) return fallback || key;
  return value[currentInterfaceLanguage] || value.ru || fallback || key;
}

function getPageTitle(page) {
  const titles = INTERFACE_TEXT.pageTitles || {};
  const title = titles[page] || titles.systems;
  return title?.[currentInterfaceLanguage] || title?.ru || "SystemHub";
}

function getInterfaceTranslationLookup() {
  if (getInterfaceTranslationLookup.cache) return getInterfaceTranslationLookup.cache;

  const map = new Map();
  INTERFACE_TRANSLATION_PAIRS.forEach(([ru, en]) => {
    const entry = { ru, en };
    map.set(ru, entry);
    map.set(en, entry);
  });

  Object.values(INTERFACE_TEXT).forEach((value) => {
    if (!value || typeof value !== "object" || !value.ru || !value.en) return;
    const entry = { ru: value.ru, en: value.en };
    map.set(entry.ru, entry);
    map.set(entry.en, entry);
  });

  Object.values(INTERFACE_TEXT.pageTitles || {}).forEach((value) => {
    const entry = { ru: value.ru, en: value.en };
    map.set(entry.ru, entry);
    map.set(entry.en, entry);
  });

  getInterfaceTranslationLookup.cache = map;
  return map;
}

function translateInterfaceValue(value, language = currentInterfaceLanguage) {
  const source = String(value || "");
  const trimmed = source.trim();
  if (!trimmed) return source;

  const entry = getInterfaceTranslationLookup().get(trimmed);
  if (!entry) return source;

  const leading = source.match(/^\s*/)?.[0] || "";
  const trailing = source.match(/\s*$/)?.[0] || "";
  return `${leading}${entry[language] || entry.ru}${trailing}`;
}

function translateTextNodes(root) {
  if (!root || !window.NodeFilter) return;

  const walker = document.createTreeWalker(root, window.NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return window.NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest("script, style, textarea")) return window.NodeFilter.FILTER_REJECT;
      return window.NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const translated = translateInterfaceValue(node.nodeValue);
    if (translated !== node.nodeValue) node.nodeValue = translated;
  });
}

function translateAttributes(root) {
  if (!root) return;
  root.querySelectorAll("[placeholder], [title], [aria-label]").forEach((element) => {
    ["placeholder", "title", "aria-label"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const currentValue = element.getAttribute(attribute);
      const translated = translateInterfaceValue(currentValue);
      if (translated !== currentValue) element.setAttribute(attribute, translated);
    });
  });
}

function updateLanguageButtons() {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.languageChoice === currentInterfaceLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyLanguage(language = currentInterfaceLanguage) {
  currentInterfaceLanguage = language === "en" ? "en" : "ru";
  document.documentElement.lang = currentInterfaceLanguage;
  document.documentElement.dataset.language = currentInterfaceLanguage;
  updateLanguageButtons();

  [authShell, appShell].forEach((root) => {
    translateTextNodes(root);
    translateAttributes(root);
  });

  if (themeToggleText) {
    const theme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    themeToggleText.textContent = getInterfaceText(theme === "light" ? "themeDark" : "themeLight");
  }

  const page = getPageFromHash();
  document.title = getPageTitle(page);
}

function setInterfaceLanguage(language) {
  const resolvedLanguage = language === "en" ? "en" : "ru";
  currentInterfaceLanguage = resolvedLanguage;

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, resolvedLanguage);
  } catch {
    // Language preference is optional; the UI can still switch for the current session.
  }

  if (currentUser) {
    render();
    renderAdminUsersPanel();
  }

  applyLanguage(resolvedLanguage);
}

function getSavedTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function applyTheme(theme) {
  const resolvedTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = resolvedTheme;

  if (themeToggleButton) {
    themeToggleButton.setAttribute("aria-pressed", String(resolvedTheme === "light"));
  }

  if (themeToggleText) {
    themeToggleText.textContent = getInterfaceText(resolvedTheme === "light" ? "themeDark" : "themeLight");
  }
}

function toggleTheme() {
  const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";

  try {
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  } catch {
    // Theme switching still works for the current session if storage is unavailable.
  }

  applyTheme(nextTheme);
}

function loadRecords() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function setStorageValue(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn(`Storage save failed for ${key}`, error);
    return false;
  }
}

function removeStorageValue(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn(`Storage remove failed for ${key}`, error);
    return false;
  }
}

function isWebCryptoAvailable() {
  return Boolean(window.crypto?.subtle && window.crypto.getRandomValues && window.TextEncoder && window.TextDecoder);
}

function isEncryptedPassword(value) {
  return String(value || "").startsWith(PASSWORD_ENCRYPTION_PREFIX);
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;

  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  return window.btoa(binary);
}

function base64ToBytes(value) {
  const binary = window.atob(value);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

async function derivePasswordVaultKey(masterPassword, salt) {
  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(masterPassword),
    "PBKDF2",
    false,
    ["deriveKey"],
  );

  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: PASSWORD_DERIVE_ITERATIONS,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

async function encryptPasswordText(text, masterPassword) {
  if (!isWebCryptoAvailable()) {
    throw new Error("Шифрование недоступно в этом браузере.");
  }

  const salt = window.crypto.getRandomValues(new Uint8Array(16));
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const key = await derivePasswordVaultKey(masterPassword, salt);
  const encrypted = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    new TextEncoder().encode(text),
  );

  return [
    PASSWORD_ENCRYPTION_PREFIX.slice(0, -1),
    bytesToBase64(salt),
    bytesToBase64(iv),
    bytesToBase64(new Uint8Array(encrypted)),
  ].join(":");
}

async function decryptPasswordText(value, masterPassword) {
  if (!isEncryptedPassword(value)) return String(value || "");

  const parts = String(value).split(":");
  if (parts.length !== 5) {
    throw new Error("Неверный формат зашифрованного пароля.");
  }

  const salt = base64ToBytes(parts[2]);
  const iv = base64ToBytes(parts[3]);
  const encrypted = base64ToBytes(parts[4]);
  const key = await derivePasswordVaultKey(masterPassword, salt);
  const decrypted = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, encrypted);

  return new TextDecoder().decode(decrypted);
}

function hasEncryptedRecordPasswords() {
  return records.some((record) => isEncryptedPassword(record.password));
}

function hasPlainRecordPasswords() {
  return records.some((record) => record.password && !isEncryptedPassword(record.password));
}

function getPasswordVerifier() {
  try {
    return localStorage.getItem(MASTER_PASSWORD_VERIFIER_KEY) || "";
  } catch {
    return "";
  }
}

function setPasswordVaultStatus(message, type = "") {
  if (!passwordVaultStatus) return;
  passwordVaultStatus.textContent = message;
  passwordVaultStatus.className = `password-vault-status${type ? ` is-${type}` : ""}`;
}

function updatePasswordVaultUi() {
  const isUnlocked = Boolean(passwordVaultMaster);
  const hasVerifier = Boolean(getPasswordVerifier());
  const hasEncrypted = hasEncryptedRecordPasswords();
  const hasPlain = hasPlainRecordPasswords();

  if (passwordVaultBadge) {
    passwordVaultBadge.lastChild.textContent = isUnlocked ? " Разблокировано" : " Заблокировано";
    passwordVaultBadge.title = isUnlocked
      ? "Пароли доступны в текущей сессии"
      : "Введите мастер-пароль для просмотра, копирования и редактирования";
  }

  if (lockPasswordVaultButton) {
    lockPasswordVaultButton.disabled = !isUnlocked;
  }

  if (!isUnlocked && hasPlain && !hasVerifier && !hasEncrypted) {
    setPasswordVaultStatus(
      "Установите мастер-пароль. После разблокировки существующие пароли будут зашифрованы локально и синхронизированы уже в зашифрованном виде.",
      "warning",
    );
  } else if (!isUnlocked && (hasVerifier || hasEncrypted)) {
    setPasswordVaultStatus("Хранилище заблокировано. Введите мастер-пароль для просмотра, копирования и редактирования паролей.", "warning");
  } else if (isUnlocked) {
    setPasswordVaultStatus("Хранилище разблокировано. Показанные пароли автоматически скрываются через несколько секунд.", "success");
  } else {
    setPasswordVaultStatus("Укажите мастер-пароль перед сохранением первой системы.", "warning");
  }
}

function clearPasswordRevealTimer(id) {
  if (!passwordRevealTimers.has(id)) return;
  window.clearTimeout(passwordRevealTimers.get(id));
  passwordRevealTimers.delete(id);
}

function hideRecordPassword(id) {
  clearPasswordRevealTimer(id);
  visiblePasswords.delete(id);
  decryptedPasswordCache.delete(id);
  renderTable();
}

function schedulePasswordAutoHide(id) {
  clearPasswordRevealTimer(id);
  passwordRevealTimers.set(
    id,
    window.setTimeout(() => {
      hideRecordPassword(id);
    }, PASSWORD_REVEAL_MS),
  );
}

function lockPasswordVault() {
  passwordVaultMaster = "";
  masterPasswordInput.value = "";
  passwordInput.value = "";
  decryptedPasswordCache.clear();
  visiblePasswords.clear();
  passwordRevealTimers.forEach((timer) => window.clearTimeout(timer));
  passwordRevealTimers.clear();
  passwordInput.type = "password";
  updatePasswordVaultUi();
  renderTable();
}

async function ensurePasswordVerifier(masterPassword) {
  const verifier = getPasswordVerifier();
  const encryptedRecord = records.find((record) => isEncryptedPassword(record.password));

  try {
    if (verifier) {
      const decrypted = await decryptPasswordText(verifier, masterPassword);
      if (decrypted !== PASSWORD_VERIFIER_TEXT) {
        throw new Error("Неверный мастер-пароль.");
      }
      return;
    }

    if (encryptedRecord) {
      await decryptPasswordText(encryptedRecord.password, masterPassword);
    }
  } catch (error) {
    if (verifier || encryptedRecord) {
      throw new Error("Неверный мастер-пароль.");
    }
  }

  setStorageValue(MASTER_PASSWORD_VERIFIER_KEY, await encryptPasswordText(PASSWORD_VERIFIER_TEXT, masterPassword));
}

async function migratePlainPasswordsToEncryption() {
  if (!passwordVaultMaster) return false;

  let changed = false;
  const encryptedRecords = [];

  for (const record of records) {
    if (record.password && !isEncryptedPassword(record.password)) {
      encryptedRecords.push({
        ...record,
        password: await encryptPasswordText(record.password, passwordVaultMaster),
        updatedAt: new Date().toISOString(),
      });
      changed = true;
    } else {
      encryptedRecords.push(record);
    }
  }

  if (changed) {
    records = encryptedRecords;
    saveRecords();
  }

  return changed;
}

async function unlockPasswordVault() {
  const masterPassword = masterPasswordInput.value;

  if (!masterPassword) {
    setPasswordVaultStatus("Введите мастер-пароль.", "error");
    masterPasswordInput.focus();
    return false;
  }

  if (!isWebCryptoAvailable()) {
    setPasswordVaultStatus("Web Crypto недоступен. Откройте страницу в современном браузере или через localhost/HTTPS.", "error");
    return false;
  }

  try {
    await ensurePasswordVerifier(masterPassword);
    passwordVaultMaster = masterPassword;
    masterPasswordInput.value = "";
    await migratePlainPasswordsToEncryption();
    updatePasswordVaultUi();
    renderTable();
    return true;
  } catch (error) {
    passwordVaultMaster = "";
    setPasswordVaultStatus(error.message || "Не удалось разблокировать хранилище.", "error");
    return false;
  }
}

async function ensurePasswordVaultUnlocked() {
  if (passwordVaultMaster) return true;

  if (masterPasswordInput.value) {
    return unlockPasswordVault();
  }

  updatePasswordVaultUi();
  masterPasswordInput.focus();
  return false;
}

async function encryptPasswordForStorage(password) {
  if (!(await ensurePasswordVaultUnlocked())) {
    throw new Error("Разблокируйте хранилище паролей.");
  }

  return encryptPasswordText(password, passwordVaultMaster);
}

async function getRecordPassword(record) {
  if (!record) return "";

  if (decryptedPasswordCache.has(record.id)) {
    return decryptedPasswordCache.get(record.id);
  }

  if (!(await ensurePasswordVaultUnlocked())) {
    throw new Error("Разблокируйте хранилище паролей.");
  }

  const password = isEncryptedPassword(record.password)
    ? await decryptPasswordText(record.password, passwordVaultMaster)
    : String(record.password || "");

  decryptedPasswordCache.set(record.id, password);
  return password;
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function saveRecords() {
  persistDatasetLocally("records");
  queueGoogleSheetsSync("records");
  queueGoogleCalendarSync();
}

function loadLinks() {
  try {
    return JSON.parse(localStorage.getItem(LINKS_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveLinks() {
  persistDatasetLocally("links");
  queueGoogleSheetsSync("links");
}

function loadSurveyLinks() {
  try {
    return JSON.parse(localStorage.getItem(SURVEY_LINKS_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveSurveyLinks() {
  persistDatasetLocally("surveyLinks");
  queueGoogleSheetsSync("surveyLinks");
}

function loadPromoItems() {
  try {
    return JSON.parse(localStorage.getItem(PROMO_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function savePromoItems() {
  persistDatasetLocally("promoItems");
  queueGoogleSheetsSync("promoItems");
}

function loadStockItems() {
  try {
    return JSON.parse(localStorage.getItem(STOCK_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveStockItems() {
  persistDatasetLocally("stockItems");
  queueGoogleSheetsSync("stockItems");
}

function loadPromoPurchases() {
  try {
    return JSON.parse(localStorage.getItem(PROMO_PURCHASE_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function savePromoPurchases() {
  persistDatasetLocally("promoPurchases");
  queueGoogleSheetsSync("promoPurchases");
}

function loadPromoPurchasePositions() {
  try {
    return JSON.parse(localStorage.getItem(PROMO_PURCHASE_POSITIONS_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function savePromoPurchasePositions() {
  persistDatasetLocally("promoPurchasePositions");
  queueGoogleSheetsSync("promoPurchasePositions");
}

function buildDateKey(offsetDays = 0) {
  const date = startOfToday();
  date.setDate(date.getDate() + offsetDays);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function buildDemoTeamTasks() {
  const now = new Date().toISOString();

  return [
    {
      id: createId(),
      direction: "elearning-systems",
      title: "Синхронизировать матрицу доступов LMS",
      description: "Проверить роли пользователей и обновить таблицу контроля доступов.",
      assignees: ["Фатима", "Темирлан"],
      status: "inprogress",
      startDate: buildDateKey(-3),
      deadline: buildDateKey(2),
      priority: "high",
      notes: "Нужна сверка с HR списком.",
      createdAt: now,
      updatedAt: now,
    },
    {
      id: createId(),
      direction: "elearning-systems",
      title: "Подготовить шаблон отчета по курсам",
      description: "Собрать единый шаблон выгрузки для ежемесячного отчета.",
      assignees: ["Аружан"],
      status: "review",
      startDate: buildDateKey(-6),
      deadline: buildDateKey(1),
      priority: "medium",
      notes: "Ожидает проверки структуры колонок.",
      createdAt: now,
      updatedAt: now,
    },
    {
      id: createId(),
      direction: "systems",
      title: "Обновить справочник систем",
      description: "Проверить актуальность логинов, лицензий и ответственных.",
      assignees: ["Шерхан"],
      status: "new",
      startDate: buildDateKey(0),
      deadline: buildDateKey(7),
      priority: "medium",
      notes: "",
      createdAt: now,
      updatedAt: now,
    },
    {
      id: createId(),
      direction: "systems",
      title: "Разобрать инцидент по интеграции",
      description: "Найти причину сбоя передачи данных между системами.",
      assignees: ["Темирлан", "Шерхан"],
      status: "overdue",
      startDate: buildDateKey(-10),
      deadline: buildDateKey(-1),
      priority: "urgent",
      notes: "Нужен итоговый статус до конца дня.",
      createdAt: now,
      updatedAt: now,
    },
    {
      id: createId(),
      direction: "elearning",
      title: "Обновить модуль по безопасности",
      description: "Заменить устаревшие слайды и добавить новый тест.",
      assignees: ["Алина"],
      status: "inprogress",
      startDate: buildDateKey(-2),
      deadline: buildDateKey(4),
      priority: "high",
      notes: "Проверить соответствие последней версии процедуры.",
      createdAt: now,
      updatedAt: now,
    },
    {
      id: createId(),
      direction: "elearning",
      title: "Закрыть задачи по онбордингу",
      description: "Проверить финальный список участников и отметить завершение.",
      assignees: ["Фатима", "Аружан"],
      status: "done",
      startDate: buildDateKey(-8),
      deadline: buildDateKey(-2),
      priority: "low",
      notes: "Завершено после сверки с тренерами.",
      createdAt: now,
      updatedAt: now,
    },
    {
      id: createId(),
      direction: "elearning",
      title: "Согласовать новые видеоуроки",
      description: "Получить финальное подтверждение от владельцев контента.",
      assignees: ["Алина"],
      status: "paused",
      startDate: buildDateKey(-1),
      deadline: buildDateKey(10),
      priority: "medium",
      notes: "Ожидаем материалы от внешней команды.",
      createdAt: now,
      updatedAt: now,
    },
  ];
}

function normalizeTeamTaskMemberName(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function normalizeTeamTaskMemberList(values) {
  return [...new Set(values.map(normalizeTeamTaskMemberName).filter(Boolean))];
}

function loadTeamTaskMembers() {
  try {
    const storedValue = localStorage.getItem(TEAM_TASK_MEMBERS_STORAGE_KEY);
    if (!storedValue) return [...DEFAULT_TEAM_TASK_MEMBERS];

    const members = normalizeTeamTaskMemberList(JSON.parse(storedValue) || []);
    return members.length > 0 ? members : [...DEFAULT_TEAM_TASK_MEMBERS];
  } catch {
    return [...DEFAULT_TEAM_TASK_MEMBERS];
  }
}

function saveTeamTaskMembers() {
  teamTaskMembers = normalizeTeamTaskMemberList(teamTaskMembers);
  persistDatasetLocally("teamTaskMembers");
  queueGoogleSheetsSync("teamTaskMembers", { replaceAll: true });
}

function normalizeTeamTaskAcknowledgements(values) {
  return (Array.isArray(values) ? values : [])
    .map((item) => ({
      userKey: String(item?.userKey || "").trim(),
      userName: String(item?.userName || "").trim(),
      at: item?.at || "",
    }))
    .filter((item) => item.userKey || item.userName);
}

function normalizeTeamTaskChecklist(values) {
  return (Array.isArray(values) ? values : [])
    .map((item) => {
      if (typeof item === "string") {
        return {
          id: createId(),
          text: item.trim(),
          done: false,
        };
      }

      return {
        id: item?.id || createId(),
        text: String(item?.text || item?.label || "").trim(),
        done: Boolean(item?.done),
      };
    })
    .filter((item) => item.text);
}

function normalizeTeamTaskAttachments(values) {
  return (Array.isArray(values) ? values : [])
    .map((item) => {
      if (typeof item === "string") {
        const url = item.trim();
        return {
          id: createId(),
          label: getAttachmentLabelFromUrl(url),
          url,
        };
      }

      const url = String(item?.url || item?.href || "").trim();
      return {
        id: item?.id || createId(),
        label: String(item?.label || item?.name || getAttachmentLabelFromUrl(url)).trim(),
        url,
      };
    })
    .filter((item) => item.url);
}

function normalizeTeamTaskComments(values) {
  return (Array.isArray(values) ? values : [])
    .map((item) => ({
      id: item?.id || createId(),
      type: item?.type === "history" ? "history" : "comment",
      userName: String(item?.userName || "").trim(),
      text: String(item?.text || "").trim(),
      at: item?.at || "",
    }))
    .filter((item) => item.text);
}

function readTeamTaskMetaFromNotes(notes) {
  const value = String(notes || "");
  const escapedPrefix = TEAM_TASK_META_PREFIX.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const escapedSuffix = TEAM_TASK_META_SUFFIX.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = value.match(new RegExp(`${escapedPrefix}([\\s\\S]*?)${escapedSuffix}`));
  if (!match) return {};

  try {
    const parsed = JSON.parse(decodeURIComponent(match[1]));
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function stripTeamTaskMetaFromNotes(notes) {
  const value = String(notes || "");
  const escapedPrefix = TEAM_TASK_META_PREFIX.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const escapedSuffix = TEAM_TASK_META_SUFFIX.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return value
    .replace(new RegExp(`\\n*${escapedPrefix}[\\s\\S]*?${escapedSuffix}\\n*`, "g"), "\n")
    .trim();
}

function getTeamTaskMeta(task) {
  const noteMeta = readTeamTaskMetaFromNotes(task?.notes);

  return {
    acknowledgements: normalizeTeamTaskAcknowledgements(task?.acknowledgements?.length ? task.acknowledgements : noteMeta.acknowledgements),
    checklist: normalizeTeamTaskChecklist(task?.checklist?.length ? task.checklist : noteMeta.checklist),
    attachments: normalizeTeamTaskAttachments(task?.attachments?.length ? task.attachments : noteMeta.attachments),
    comments: normalizeTeamTaskComments(task?.comments?.length ? task.comments : noteMeta.comments),
  };
}

function mergeTeamTaskMetaIntoNotes(notes, meta) {
  const visibleNotes = stripTeamTaskMetaFromNotes(notes);
  const payload = {
    acknowledgements: normalizeTeamTaskAcknowledgements(meta?.acknowledgements),
    checklist: normalizeTeamTaskChecklist(meta?.checklist),
    attachments: normalizeTeamTaskAttachments(meta?.attachments),
    comments: normalizeTeamTaskComments(meta?.comments),
  };
  const hasPayload = Object.values(payload).some((items) => items.length > 0);

  if (!hasPayload) return visibleNotes;

  const encodedPayload = encodeURIComponent(JSON.stringify(payload));
  return [visibleNotes, `${TEAM_TASK_META_PREFIX}${encodedPayload}${TEAM_TASK_META_SUFFIX}`].filter(Boolean).join("\n\n");
}

function getTeamTaskVisibleNotes(task) {
  return stripTeamTaskMetaFromNotes(task?.notes || "");
}

function normalizeTeamTasks(tasks) {
  const allowedMembers = new Set(teamTaskMembers);

  return tasks.map((task) => {
    const meta = getTeamTaskMeta(task);

    return {
      ...task,
      notes: mergeTeamTaskMetaIntoNotes(task.notes || "", meta),
      assignees: normalizeTeamTaskMemberList(task.assignees || []).filter((assignee) => allowedMembers.has(assignee)),
      acknowledgements: meta.acknowledgements,
      checklist: meta.checklist,
      attachments: meta.attachments,
      comments: meta.comments,
    };
  });
}

function loadTeamTasks() {
  try {
    const storedValue = localStorage.getItem(TEAM_TASKS_STORAGE_KEY);
    if (!storedValue) {
      return [];
    }
    return JSON.parse(storedValue) || [];
  } catch {
    return [];
  }
}

function saveTeamTasks() {
  teamTasks = normalizeTeamTasks(teamTasks);
  persistDatasetLocally("teamTasks");
  queueGoogleSheetsSync("teamTasks");
  queueGoogleCalendarSync();
}

function loadElearningTeamProfiles() {
  try {
    const value = JSON.parse(localStorage.getItem(ELEARNING_TEAM_PROFILES_STORAGE_KEY)) || {};
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

function saveElearningTeamProfiles() {
  setStorageValue(ELEARNING_TEAM_PROFILES_STORAGE_KEY, JSON.stringify(elearningTeamProfiles));
}

function normalizeTeamDevelopmentResults(values) {
  return (Array.isArray(values) ? values : [])
    .map((item) => ({
      id: item?.id || createId(),
      employeeName: String(item?.employeeName || "").trim(),
      testKey: String(item?.testKey || "").trim(),
      testTitle: String(item?.testTitle || "").trim(),
      primaryResult: String(item?.primaryResult || "").trim(),
      summary: String(item?.summary || "").trim(),
      scores: Array.isArray(item?.scores)
        ? item.scores.map((score) => ({
          key: String(score?.key || "").trim(),
          label: String(score?.label || "").trim(),
          description: String(score?.description || "").trim(),
          advice: String(score?.advice || "").trim(),
          score: Number(score?.score) || 0,
          max: Number(score?.max) || 0,
          percent: Number(score?.percent) || 0,
        })).filter((score) => score.key || score.label)
        : [],
      selectedFactors: Array.isArray(item?.selectedFactors) ? item.selectedFactors.map(String).filter(Boolean) : [],
      recommendations: Array.isArray(item?.recommendations) ? item.recommendations.map(String).filter(Boolean) : [],
      createdBy: String(item?.createdBy || "").trim(),
      createdAt: item?.createdAt || new Date().toISOString(),
    }))
    .filter((item) => item.employeeName && item.testKey && item.primaryResult);
}

function loadTeamDevelopmentResults() {
  try {
    return normalizeTeamDevelopmentResults(JSON.parse(localStorage.getItem(TEAM_DEVELOPMENT_RESULTS_STORAGE_KEY)) || []);
  } catch {
    return [];
  }
}

function saveTeamDevelopmentResults() {
  teamDevelopmentResults = normalizeTeamDevelopmentResults(teamDevelopmentResults);
  setStorageValue(TEAM_DEVELOPMENT_RESULTS_STORAGE_KEY, JSON.stringify(teamDevelopmentResults));
}

function normalizeMessengerConversation(value) {
  return {
    id: String(value?.id || "").trim(),
    type: value?.type === "direct" ? "direct" : "group",
    title: String(value?.title || "").trim(),
    participants: normalizeTeamTaskMemberList(value?.participants || []),
    updatedAt: value?.updatedAt || new Date().toISOString(),
  };
}

function normalizeMessengerMessage(value) {
  const pollOptions = Array.isArray(value?.poll?.options) ? value.poll.options : [];
  const pollVotes = value?.poll?.votes && typeof value.poll.votes === "object" ? value.poll.votes : {};

  return {
    id: value?.id || createId(),
    conversationId: String(value?.conversationId || MESSENGER_GENERAL_CONVERSATION_ID),
    type: value?.type === "poll" ? "poll" : "message",
    authorKey: String(value?.authorKey || "").trim(),
    authorName: String(value?.authorName || "").trim(),
    text: String(value?.text || "").trim(),
    mentions: Array.isArray(value?.mentions) ? value.mentions.map(String).filter(Boolean) : [],
    readBy: Array.isArray(value?.readBy) ? value.readBy.map(String).filter(Boolean) : [],
    attachments: Array.isArray(value?.attachments)
      ? value.attachments.map((attachment) => ({
        id: attachment?.id || createId(),
        name: String(attachment?.name || "Файл").trim(),
        url: String(attachment?.url || "").trim(),
        type: String(attachment?.type || "").trim(),
        size: Number(attachment?.size) || 0,
      })).filter((attachment) => attachment.url)
      : [],
    poll: value?.poll ? {
      question: String(value.poll.question || "").trim(),
      options: pollOptions.map((option) => ({
        id: option?.id || createId(),
        text: String(option?.text || "").trim(),
      })).filter((option) => option.text),
      votes: Object.fromEntries(Object.entries(pollVotes).map(([optionId, voters]) => [
        optionId,
        Array.isArray(voters) ? voters.map(String).filter(Boolean) : [],
      ])),
    } : null,
    createdAt: value?.createdAt || new Date().toISOString(),
    updatedAt: value?.updatedAt || value?.createdAt || new Date().toISOString(),
  };
}

function normalizeMessengerState(value) {
  const conversations = (Array.isArray(value?.conversations) ? value.conversations : [])
    .map(normalizeMessengerConversation)
    .filter((conversation) => conversation.id);
  const hasGeneral = conversations.some((conversation) => conversation.id === MESSENGER_GENERAL_CONVERSATION_ID);

  if (!hasGeneral) {
    conversations.unshift({
      id: MESSENGER_GENERAL_CONVERSATION_ID,
      type: "group",
      title: "Общий чат команды",
      participants: [],
      updatedAt: new Date().toISOString(),
    });
  }

  return {
    conversations,
    messages: (Array.isArray(value?.messages) ? value.messages : [])
      .map(normalizeMessengerMessage)
      .filter((message) => message.conversationId)
      .sort((a, b) => String(a.createdAt || "").localeCompare(String(b.createdAt || ""))),
    updatedAt: value?.updatedAt || new Date().toISOString(),
  };
}

function loadMessengerState() {
  try {
    return normalizeMessengerState(JSON.parse(localStorage.getItem(MESSENGER_STORAGE_KEY)) || {});
  } catch {
    return normalizeMessengerState({});
  }
}

function saveMessengerState(options = {}) {
  messengerState = normalizeMessengerState({
    ...messengerState,
    updatedAt: new Date().toISOString(),
  });
  setStorageValue(MESSENGER_STORAGE_KEY, JSON.stringify(messengerState));

  if (!options.skipShared) {
    scheduleMessengerSharedSave();
  }
}

function loadTrmsReleaseTasks() {
  try {
    return JSON.parse(localStorage.getItem(TRMS_RELEASES_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveTrmsReleaseTasks() {
  persistDatasetLocally("trmsReleaseTasks");
  queueGoogleSheetsSync("trmsReleaseTasks");
  queueGoogleCalendarSync();
}

function loadReportRows() {
  try {
    return JSON.parse(localStorage.getItem(REPORT_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveReportRows() {
  // Large XLSX reports can exceed browser storage; keep the parsed data for the current session.
  setStorageValue(REPORT_STORAGE_KEY, JSON.stringify(reportRows));
}

function loadGoogleScriptUrl() {
  try {
    return localStorage.getItem(GOOGLE_SCRIPT_URL_STORAGE_KEY) || globalThis.SYSTEMHUB_SUPABASE_URL || "";
  } catch {
    return globalThis.SYSTEMHUB_SUPABASE_URL || "";
  }
}

function saveGoogleScriptUrl() {
  setStorageValue(GOOGLE_SCRIPT_URL_STORAGE_KEY, googleScriptUrl);
}

function loadGoogleSyncToken() {
  try {
    return localStorage.getItem(GOOGLE_SYNC_TOKEN_STORAGE_KEY) || globalThis.SYSTEMHUB_SUPABASE_ANON_KEY || "";
  } catch {
    return globalThis.SYSTEMHUB_SUPABASE_ANON_KEY || "";
  }
}

function saveGoogleSyncToken() {
  setStorageValue(GOOGLE_SYNC_TOKEN_STORAGE_KEY, googleSyncToken);
}

function loadGoogleCalendarScriptUrl() {
  try {
    return localStorage.getItem(GOOGLE_CALENDAR_SCRIPT_URL_STORAGE_KEY) || globalThis.SYSTEMHUB_GOOGLE_CALENDAR_SCRIPT_URL || "";
  } catch {
    return globalThis.SYSTEMHUB_GOOGLE_CALENDAR_SCRIPT_URL || "";
  }
}

function saveGoogleCalendarScriptUrl() {
  setStorageValue(GOOGLE_CALENDAR_SCRIPT_URL_STORAGE_KEY, googleCalendarScriptUrl);
}

function loadGoogleCalendarToken() {
  try {
    return localStorage.getItem(GOOGLE_CALENDAR_TOKEN_STORAGE_KEY) || globalThis.SYSTEMHUB_GOOGLE_CALENDAR_TOKEN || "";
  } catch {
    return globalThis.SYSTEMHUB_GOOGLE_CALENDAR_TOKEN || "";
  }
}

function saveGoogleCalendarToken() {
  setStorageValue(GOOGLE_CALENDAR_TOKEN_STORAGE_KEY, googleCalendarToken);
}

function loadGoogleCalendarScriptUrl2() {
  try {
    return localStorage.getItem(GOOGLE_CALENDAR_SCRIPT_URL_2_STORAGE_KEY) || globalThis.SYSTEMHUB_GOOGLE_CALENDAR_SCRIPT_URL_2 || "";
  } catch {
    return globalThis.SYSTEMHUB_GOOGLE_CALENDAR_SCRIPT_URL_2 || "";
  }
}

function saveGoogleCalendarScriptUrl2() {
  setStorageValue(GOOGLE_CALENDAR_SCRIPT_URL_2_STORAGE_KEY, googleCalendarScriptUrl2);
}

function loadGoogleCalendarToken2() {
  try {
    return localStorage.getItem(GOOGLE_CALENDAR_TOKEN_2_STORAGE_KEY) || globalThis.SYSTEMHUB_GOOGLE_CALENDAR_TOKEN_2 || "";
  } catch {
    return globalThis.SYSTEMHUB_GOOGLE_CALENDAR_TOKEN_2 || "";
  }
}

function saveGoogleCalendarToken2() {
  setStorageValue(GOOGLE_CALENDAR_TOKEN_2_STORAGE_KEY, googleCalendarToken2);
}

function loadGoogleCalendarAutoSync() {
  try {
    return localStorage.getItem(GOOGLE_CALENDAR_AUTO_SYNC_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function saveGoogleCalendarAutoSync() {
  setStorageValue(GOOGLE_CALENDAR_AUTO_SYNC_STORAGE_KEY, googleCalendarAutoSync ? "true" : "false");
}

function loadTelegramBotUrl() {
  try {
    return localStorage.getItem(TELEGRAM_BOT_URL_STORAGE_KEY) || globalThis.SYSTEMHUB_TELEGRAM_BOT_URL || "";
  } catch {
    return globalThis.SYSTEMHUB_TELEGRAM_BOT_URL || "";
  }
}

function saveTelegramBotUrl() {
  setStorageValue(TELEGRAM_BOT_URL_STORAGE_KEY, telegramBotUrl);
}

function loadTelegramBotToken() {
  try {
    return localStorage.getItem(TELEGRAM_BOT_TOKEN_STORAGE_KEY) || globalThis.SYSTEMHUB_TELEGRAM_BOT_TOKEN || "";
  } catch {
    return globalThis.SYSTEMHUB_TELEGRAM_BOT_TOKEN || "";
  }
}

function saveTelegramBotToken() {
  setStorageValue(TELEGRAM_BOT_TOKEN_STORAGE_KEY, telegramBotToken);
}

function loadTelegramBotChatId() {
  try {
    return localStorage.getItem(TELEGRAM_BOT_CHAT_ID_STORAGE_KEY) || globalThis.SYSTEMHUB_TELEGRAM_CHAT_ID || "";
  } catch {
    return globalThis.SYSTEMHUB_TELEGRAM_CHAT_ID || "";
  }
}

function saveTelegramBotChatId() {
  setStorageValue(TELEGRAM_BOT_CHAT_ID_STORAGE_KEY, telegramBotChatId);
}

function loadTelegramBotEnabled() {
  try {
    const storedValue = localStorage.getItem(TELEGRAM_BOT_ENABLED_STORAGE_KEY);
    if (storedValue !== null) return storedValue === "true";
    return Boolean(globalThis.SYSTEMHUB_TELEGRAM_BOT_ENABLED);
  } catch {
    return Boolean(globalThis.SYSTEMHUB_TELEGRAM_BOT_ENABLED);
  }
}

function saveTelegramBotEnabled() {
  setStorageValue(TELEGRAM_BOT_ENABLED_STORAGE_KEY, telegramBotEnabled ? "true" : "false");
}

function saveTelegramBotSettingsLocally() {
  saveTelegramBotUrl();
  saveTelegramBotToken();
  saveTelegramBotChatId();
  saveTelegramBotEnabled();
}

function getTelegramSettingsSnapshot() {
  return {
    url: telegramBotUrl || "",
    token: telegramBotToken || "",
    chatId: telegramBotChatId || "",
    enabled: Boolean(telegramBotEnabled),
    updatedAt: new Date().toISOString(),
    updatedBy: currentUser?.displayName || currentUser?.login || "",
  };
}

function applyTelegramSettingsSnapshot(settings, options = {}) {
  if (!settings || typeof settings !== "object") return false;

  telegramBotUrl = String(settings.url || settings.telegramBotUrl || "").trim();
  telegramBotToken = String(settings.token || settings.telegramBotToken || "").trim();
  telegramBotChatId = String(settings.chatId || settings.telegramBotChatId || "").trim();
  telegramBotEnabled = Boolean(settings.enabled ?? settings.telegramBotEnabled);

  if (options.persistLocal) {
    saveTelegramBotSettingsLocally();
  }

  return true;
}

function getSharedTelegramSettingsError(error) {
  const message = error?.message || String(error || "");
  if (/app_settings|schema cache|does not exist|relation/i.test(message)) {
    return "Таблица app_settings не видна Supabase API. Проверьте public.app_settings и выполните notify pgrst, 'reload schema'; SQL добавлен в раздел Настройки.";
  }
  return message || "Не удалось загрузить общие настройки Telegram.";
}

async function loadSharedTelegramSettings(options = {}) {
  if (!hasGoogleSheetsSyncTarget()) return false;
  if (telegramSharedSettingsRequest) return telegramSharedSettingsRequest;

  telegramSharedSettingsRequest = (async () => {
    try {
      const client = getSupabaseClient();
      const { data, error } = await client
        .from(APP_SETTINGS_TABLE)
        .select("value")
        .eq("key", TELEGRAM_SETTINGS_KEY)
        .maybeSingle();

      if (error) throw error;

      telegramSharedSettingsChecked = true;
      const settings = data?.value;
      if (!settings) return false;

      const applied = applyTelegramSettingsSnapshot(settings, { persistLocal: true });
      telegramSharedSettingsLoaded = applied;
      if (applied) renderTelegramBotSettings();
      return applied;
    } catch (error) {
      telegramSharedSettingsChecked = true;
      telegramSharedSettingsLoaded = false;
      if (!options.silent) {
        setTelegramBotStatus(getSharedTelegramSettingsError(error), "error");
      }
      return false;
    } finally {
      telegramSharedSettingsRequest = null;
    }
  })();

  return telegramSharedSettingsRequest;
}

async function saveSharedTelegramSettings(options = {}) {
  if (!hasGoogleSheetsSyncTarget()) {
    if (!options.silent) {
      setTelegramBotStatus("Укажите Supabase URL и anon key, чтобы сохранить общие Telegram-настройки.", "warning");
    }
    return false;
  }

  try {
    const client = getSupabaseClient();
    const { error } = await client.from(APP_SETTINGS_TABLE).upsert(
      {
        key: TELEGRAM_SETTINGS_KEY,
        value: getTelegramSettingsSnapshot(),
        updatedAt: new Date().toISOString(),
        updatedBy: currentUser?.displayName || currentUser?.login || "",
      },
      { onConflict: "key" },
    );

    if (error) throw error;
    telegramSharedSettingsChecked = true;
    telegramSharedSettingsLoaded = true;
    return true;
  } catch (error) {
    if (!options.silent) {
      setTelegramBotStatus(getSharedTelegramSettingsError(error), "error");
    }
    return false;
  }
}

async function initializeTelegramSettings() {
  const localSettingsAvailable = Boolean(telegramBotUrl || telegramBotToken || telegramBotChatId || telegramBotEnabled);
  const loadedSharedSettings = await loadSharedTelegramSettings({ silent: true });

  if (!loadedSharedSettings && localSettingsAvailable && hasTelegramBotTarget()) {
    await saveSharedTelegramSettings({ silent: true });
  }

  renderTelegramBotSettings();
}

function getMessengerSharedError(error) {
  const message = error?.message || String(error || "");
  if (/app_settings|schema cache|does not exist|relation/i.test(message)) {
    return "Мессенджер работает локально: таблица app_settings не видна Supabase API.";
  }
  return message || "Не удалось синхронизировать мессенджер.";
}

async function loadSharedMessengerState(options = {}) {
  if (!hasGoogleSheetsSyncTarget()) return false;
  if (messengerSharedSettingsRequest) return messengerSharedSettingsRequest;

  messengerSharedSettingsRequest = (async () => {
    try {
      const client = getSupabaseClient();
      const { data, error } = await client
        .from(APP_SETTINGS_TABLE)
        .select("value")
        .eq("key", MESSENGER_SETTINGS_KEY)
        .maybeSingle();

      if (error) throw error;

      if (data?.value) {
        messengerState = normalizeMessengerState(data.value);
        saveMessengerState({ skipShared: true });
        messengerSharedSettingsLoaded = true;
        renderMessenger();
        renderAssignmentBell();
        renderGlobalSearchResults();
      }

      updateMessengerSyncStatus();
      return Boolean(data?.value);
    } catch (error) {
      messengerSharedSettingsLoaded = false;
      if (!options.silent) updateMessengerSyncStatus(getMessengerSharedError(error), "warning");
      return false;
    } finally {
      messengerSharedSettingsRequest = null;
    }
  })();

  return messengerSharedSettingsRequest;
}

async function saveSharedMessengerState(options = {}) {
  if (!hasGoogleSheetsSyncTarget()) {
    if (!options.silent) updateMessengerSyncStatus("Мессенджер сохранен локально. Supabase не настроен.", "warning");
    return false;
  }

  try {
    const client = getSupabaseClient();
    const { error } = await client.from(APP_SETTINGS_TABLE).upsert(
      {
        key: MESSENGER_SETTINGS_KEY,
        value: normalizeMessengerState(messengerState),
        updatedAt: new Date().toISOString(),
        updatedBy: currentUser?.displayName || currentUser?.login || "",
      },
      { onConflict: "key" },
    );

    if (error) throw error;
    messengerSharedSettingsLoaded = true;
    updateMessengerSyncStatus("Синхронизировано", "success");
    return true;
  } catch (error) {
    messengerSharedSettingsLoaded = false;
    if (!options.silent) updateMessengerSyncStatus(getMessengerSharedError(error), "warning");
    return false;
  }
}

function scheduleMessengerSharedSave() {
  if (messengerSaveTimer) clearTimeout(messengerSaveTimer);
  messengerSaveTimer = setTimeout(() => {
    messengerSaveTimer = null;
    saveSharedMessengerState({ silent: true }).catch(() => {});
  }, 600);
}

async function initializeMessenger() {
  await loadSharedMessengerState({ silent: true });
  renderMessenger();
}

function saveLocalSyncData() {
  GOOGLE_SYNC_DATASET_KEYS.forEach(persistDatasetLocally);
}

function cloneSyncValue(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value));
}

function getSyncDatasetValue(datasetKey) {
  switch (datasetKey) {
    case "records":
      return records;
    case "links":
      return links;
    case "surveyLinks":
      return surveyLinks;
    case "promoItems":
      return promoItems;
    case "stockItems":
      return stockItems;
    case "promoPurchasePositions":
      return promoPurchasePositions;
    case "promoPurchases":
      return promoPurchases;
    case "teamTaskMembers":
      return teamTaskMembers;
    case "teamTasks":
      return teamTasks;
    case "trmsReleaseTasks":
      return trmsReleaseTasks;
    default:
      return [];
  }
}

function persistDatasetLocally(datasetKey) {
  switch (datasetKey) {
    case "records":
      setStorageValue(STORAGE_KEY, JSON.stringify(records));
      break;
    case "links":
      setStorageValue(LINKS_STORAGE_KEY, JSON.stringify(links));
      break;
    case "surveyLinks":
      setStorageValue(SURVEY_LINKS_STORAGE_KEY, JSON.stringify(surveyLinks));
      break;
    case "promoItems":
      setStorageValue(PROMO_STORAGE_KEY, JSON.stringify(promoItems));
      break;
    case "stockItems":
      setStorageValue(STOCK_STORAGE_KEY, JSON.stringify(stockItems));
      break;
    case "promoPurchasePositions":
      setStorageValue(PROMO_PURCHASE_POSITIONS_STORAGE_KEY, JSON.stringify(promoPurchasePositions));
      break;
    case "promoPurchases":
      setStorageValue(PROMO_PURCHASE_STORAGE_KEY, JSON.stringify(promoPurchases));
      break;
    case "teamTaskMembers":
      setStorageValue(TEAM_TASK_MEMBERS_STORAGE_KEY, JSON.stringify(teamTaskMembers));
      break;
    case "teamTasks":
      setStorageValue(TEAM_TASKS_STORAGE_KEY, JSON.stringify(teamTasks));
      break;
    case "trmsReleaseTasks":
      setStorageValue(TRMS_RELEASES_STORAGE_KEY, JSON.stringify(trmsReleaseTasks));
      break;
    default:
      break;
  }
}

function buildSyncedDataSnapshot() {
  return GOOGLE_SYNC_DATASET_KEYS.reduce((snapshot, datasetKey) => {
    snapshot[datasetKey] = cloneSyncValue(getSyncDatasetValue(datasetKey));
    return snapshot;
  }, {});
}

function markDatasetAsSynced(datasetKey) {
  syncedDataSnapshot[datasetKey] = cloneSyncValue(getSyncDatasetValue(datasetKey));
}

function buildDatasetSyncRequest(datasetKey, forceReplace = false) {
  const currentItems = cloneSyncValue(getSyncDatasetValue(datasetKey));
  const previousItems = cloneSyncValue(syncedDataSnapshot[datasetKey] || []);

  if (datasetKey === "teamTaskMembers" || forceReplace) {
    if (JSON.stringify(currentItems) === JSON.stringify(previousItems)) {
      return null;
    }

    return {
      datasetKey,
      items: currentItems,
      deletedIds: [],
      replaceAll: datasetKey === "teamTaskMembers" || forceReplace,
    };
  }

  const previousMap = new Map(previousItems.map((item) => [item.id, JSON.stringify(item)]));
  const currentIds = new Set(currentItems.map((item) => item.id));
  const changedItems = currentItems.filter((item) => previousMap.get(item.id) !== JSON.stringify(item));
  const deletedIds = previousItems.filter((item) => !currentIds.has(item.id)).map((item) => item.id);

  if (changedItems.length === 0 && deletedIds.length === 0) {
    return null;
  }

  return {
    datasetKey,
    items: changedItems,
    deletedIds,
    replaceAll: false,
  };
}

function normalizeDate(dateValue) {
  if (!dateValue) return null;
  const [year, month, day] = dateValue.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function startOfToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function getLicenseStatus(record) {
  const endDate = normalizeDate(record.licenseEndDate);
  if (!endDate) return { key: "expired", label: "Без даты" };

  const daysLeft = Math.ceil((endDate - startOfToday()) / 86_400_000);
  if (daysLeft < 0) return { key: "expired", label: "Истекла" };
  if (daysLeft <= EXPIRING_SOON_DAYS) return { key: "soon", label: `${daysLeft} дн.` };
  return { key: "active", label: "Активна" };
}

function formatDate(dateValue) {
  if (!dateValue) return "—";
  return new Intl.DateTimeFormat("ru-RU").format(normalizeDate(dateValue));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `record-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalizeLinkUrl(value) {
  const trimmedValue = value.trim();
  if (!trimmedValue) return "";

  if (/^[a-z][a-z\d+.-]*:\/\//i.test(trimmedValue)) {
    return trimmedValue;
  }

  return `https://${trimmedValue}`;
}

function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function toOptionalNumber(value) {
  if (value === null || value === undefined) return null;
  if (typeof value === "string" && value.trim() === "") return null;
  if (value === "") return null;

  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function formatDecimal(value, maximumFractionDigits = 2) {
  return new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  }).format(toNumber(value));
}

function formatMoney(value, symbol) {
  return `${formatDecimal(value, 2)} ${symbol}`;
}

function formatOptionalDecimal(value, maximumFractionDigits = 2) {
  const number = toOptionalNumber(value);
  return number === null ? "—" : formatDecimal(number, maximumFractionDigits);
}

function formatOptionalMoney(value, symbol) {
  const number = toOptionalNumber(value);
  return number === null ? "—" : formatMoney(number, symbol);
}

function formatQuantity(value) {
  return new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0,
  }).format(toNumber(value));
}

function formatMatrixQuantity(value) {
  const quantity = toNumber(value);
  return quantity > 0 ? formatQuantity(quantity) : "";
}

function normalizeKey(value) {
  return String(value || "").trim().toLowerCase();
}

function sumPurchaseItems(purchase) {
  return Object.values(purchase.items || {}).reduce((sum, value) => sum + toNumber(value), 0);
}

function renderAnalyticsEmptyRow(colspan, message) {
  return `<tr><td class="muted-cell" colspan="${colspan}">${message}</td></tr>`;
}

function splitList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseCsv(text) {
  const rows = [];
  let cell = "";
  let row = [];
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const nextChar = text[index + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      cell += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  if (cell || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }

  const [headers = [], ...dataRows] = rows;
  return dataRows.map((dataRow) =>
    headers.reduce((record, header, index) => {
      record[String(header).replace(/^\uFEFF/, "")] = dataRow[index] || "";
      return record;
    }, {}),
  );
}

function decodeXmlEntities(value) {
  return String(value || "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/_x000D_/g, "\n");
}

function getXmlAttribute(tagText, attributeName) {
  const escapedName = attributeName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = String(tagText || "").match(new RegExp(`\\s${escapedName}="([^"]*)"`, "i"));
  return match ? decodeXmlEntities(match[1]) : "";
}

function getColumnIndexFromCellRef(cellRef) {
  const letters = String(cellRef || "A").match(/[A-Z]+/i)?.[0]?.toUpperCase() || "A";
  return [...letters].reduce((index, letter) => index * 26 + letter.charCodeAt(0) - 64, 0) - 1;
}

function parseWorksheetXmlRows(xmlText) {
  const rows = [];
  const rowPattern = /<row\b[^>]*>([\s\S]*?)<\/row>/gi;
  let rowMatch;

  while ((rowMatch = rowPattern.exec(xmlText))) {
    const rowXml = rowMatch[1];
    const values = [];
    const cellPattern = /<c\b([^>]*)>([\s\S]*?)<\/c>/gi;
    let cellMatch;

    while ((cellMatch = cellPattern.exec(rowXml))) {
      const attributes = cellMatch[1];
      const cellXml = cellMatch[2];
      const columnIndex = getColumnIndexFromCellRef(getXmlAttribute(attributes, "r"));
      const textParts = [...cellXml.matchAll(/<t\b[^>]*>([\s\S]*?)<\/t>/gi)].map((match) => decodeXmlEntities(match[1]));
      const valueMatch = textParts.length > 0 ? null : cellXml.match(/<v\b[^>]*>([\s\S]*?)<\/v>/i);
      const value = textParts.length > 0 ? textParts.join("") : decodeXmlEntities(valueMatch?.[1] || "");

      while (values.length <= columnIndex) values.push("");
      values[columnIndex] = value;
    }

    if (values.some((value) => String(value || "").trim() !== "")) {
      rows.push(values);
    }
  }

  return rows;
}

function matrixRowsToObjects(rows) {
  const [headers = [], ...dataRows] = rows;
  return dataRows.map((dataRow) =>
    headers.reduce((record, header, index) => {
      record[String(header).replace(/^\uFEFF/, "")] = dataRow[index] || "";
      return record;
    }, {}),
  );
}

function parseWorkbookSheetDescriptors(workbookXml) {
  return [...String(workbookXml || "").matchAll(/<sheet\b([^>]*)\/?>/gi)].map((match, index) => ({
    name: getXmlAttribute(match[1], "name") || `Sheet ${index + 1}`,
    relationshipId: getXmlAttribute(match[1], "r:id"),
  }));
}

function parseWorkbookRelationships(relsXml) {
  return [...String(relsXml || "").matchAll(/<Relationship\b([^>]*)\/?>/gi)].reduce((map, match) => {
    const id = getXmlAttribute(match[1], "Id");
    const target = getXmlAttribute(match[1], "Target");
    if (id && target) {
      map[id] = target.startsWith("/") ? target.slice(1) : `xl/${target.replace(/^\.\.\//, "")}`;
    }
    return map;
  }, {});
}

function findOpenXmlLocalEntries(bytes) {
  const entries = [];
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const decoder = new TextDecoder();

  for (let offset = 0; offset < bytes.length - 30; offset += 1) {
    if (
      bytes[offset] !== 0x50 ||
      bytes[offset + 1] !== 0x4b ||
      bytes[offset + 2] !== 0x03 ||
      bytes[offset + 3] !== 0x04
    ) {
      continue;
    }

    const flags = view.getUint16(offset + 6, true);
    const method = view.getUint16(offset + 8, true);
    const compressedSize = view.getUint32(offset + 18, true);
    const fileNameLength = view.getUint16(offset + 26, true);
    const extraLength = view.getUint16(offset + 28, true);
    const nameStart = offset + 30;
    const dataStart = nameStart + fileNameLength + extraLength;
    const name = decoder.decode(bytes.slice(nameStart, nameStart + fileNameLength));

    entries.push({
      offset,
      flags,
      method,
      compressedSize,
      dataStart,
      name,
    });

    offset = Math.max(offset, dataStart - 1);
  }

  return entries;
}

async function inflateOpenXmlEntry(bytes, entry, nextEntry) {
  let dataEnd = entry.compressedSize > 0
    ? entry.dataStart + entry.compressedSize
    : nextEntry?.offset || bytes.length;

  if (entry.compressedSize === 0 && nextEntry) {
    const descriptorStartWithSignature = nextEntry.offset - 16;
    const descriptorStartWithoutSignature = nextEntry.offset - 12;
    const hasDescriptorSignature =
      descriptorStartWithSignature > entry.dataStart &&
      bytes[descriptorStartWithSignature] === 0x50 &&
      bytes[descriptorStartWithSignature + 1] === 0x4b &&
      bytes[descriptorStartWithSignature + 2] === 0x07 &&
      bytes[descriptorStartWithSignature + 3] === 0x08;

    dataEnd = hasDescriptorSignature ? descriptorStartWithSignature : descriptorStartWithoutSignature;
  }

  const compressedData = bytes.slice(entry.dataStart, Math.max(entry.dataStart, dataEnd));

  if (entry.method === 0) {
    return compressedData;
  }

  if (entry.method !== 8) {
    throw new Error(`Unsupported XLSX compression method: ${entry.method}`);
  }

  if (globalThis.pako?.Inflate) {
    const inflator = new globalThis.pako.Inflate({ raw: true });
    inflator.push(compressedData, true);

    if (inflator.result?.length) {
      return inflator.result;
    }

    const chunks = inflator.chunks || [];
    const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);

    if (chunks.length > 0) {
      const inflated = new Uint8Array(totalLength);
      let writeOffset = 0;
      chunks.forEach((chunk) => {
        inflated.set(chunk, writeOffset);
        writeOffset += chunk.length;
      });
      return inflated;
    }

    if (inflator.err) {
      throw new Error(inflator.msg || "XLSX deflate failed.");
    }
  }

  if (!globalThis.DecompressionStream) {
    throw new Error("Browser cannot unpack this XLSX export");
  }

  const stream = new Blob([compressedData]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function parseOpenXmlWorkbookFallback(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  const entries = findOpenXmlLocalEntries(bytes);
  const entryByName = new Map(entries.map((entry) => [entry.name, entry]));
  const textDecoder = new TextDecoder("utf-8");
  const inflatedCache = new Map();

  async function inflateText(name) {
    if (inflatedCache.has(name)) return inflatedCache.get(name);

    const entryIndex = entries.findIndex((entry) => entry.name === name);
    const entry = entries[entryIndex];
    if (!entry) return "";

    const inflated = await inflateOpenXmlEntry(bytes, entry, entries[entryIndex + 1]);
    const text = textDecoder.decode(inflated);
    inflatedCache.set(name, text);
    return text;
  }

  const workbookXml = await inflateText("xl/workbook.xml");
  const relsXml = await inflateText("xl/_rels/workbook.xml.rels");
  const relationshipTargets = parseWorkbookRelationships(relsXml);
  const sheetDescriptors = parseWorkbookSheetDescriptors(workbookXml);
  const worksheetNames = entries
    .map((entry) => entry.name)
    .filter((name) => /^xl\/worksheets\/sheet\d+\.xml$/i.test(name));
  const sheets = [];
  const warnings = [];

  for (const descriptor of sheetDescriptors) {
    const targetName = relationshipTargets[descriptor.relationshipId];
    const worksheetName = targetName && entryByName.has(targetName)
      ? targetName
      : worksheetNames[sheets.length];
    if (!worksheetName) continue;

    try {
      const worksheetXml = await inflateText(worksheetName);
      sheets.push({
        name: descriptor.name,
        rows: matrixRowsToObjects(parseWorksheetXmlRows(worksheetXml)),
      });
    } catch (error) {
      warnings.push(`${descriptor.name}: ${error.message || String(error)}`);
    }
  }

  if (sheets.length === 0) {
    for (const worksheetName of worksheetNames) {
      try {
        const worksheetXml = await inflateText(worksheetName);
        sheets.push({
          name: worksheetName.split("/").pop().replace(/\.xml$/i, ""),
          rows: matrixRowsToObjects(parseWorksheetXmlRows(worksheetXml)),
        });
      } catch (error) {
        warnings.push(`${worksheetName}: ${error.message || String(error)}`);
      }
    }
  }

  return { sheets, warnings };
}

async function parseSpreadsheetWorkbook(file) {
  const extension = file.name.split(".").pop().toLowerCase();

  if (extension === "csv" || file.type.includes("csv")) {
    return {
      sheets: [{ name: file.name.replace(/\.[^.]+$/, "") || "CSV", rows: parseCsv(await file.text()) }],
    };
  }

  if (extension === "xlsx" || extension === "xls") {
    const arrayBuffer = await file.arrayBuffer();

    if (globalThis.XLSX) {
      try {
        const workbook = globalThis.XLSX.read(arrayBuffer, {
          type: "array",
          cellDates: true,
        });

        return {
          sheets: workbook.SheetNames.map((sheetName) => ({
            name: sheetName,
            rows: globalThis.XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
              defval: "",
              raw: false,
            }),
          })),
        };
      } catch (error) {
        if (extension === "xls") throw error;
      }
    }

    if (extension === "xlsx") {
      return parseOpenXmlWorkbookFallback(arrayBuffer);
    }

    throw new Error("XLSX parser is not loaded");
  }

  throw new Error("Unsupported report file");
}

async function parseReportFile(file) {
  const workbook = await parseSpreadsheetWorkbook(file);
  return workbook.sheets[0]?.rows || [];
}

function updateReportFileLabels(label) {
  [reportFileLabel, trainingReportFileLabel].forEach((element) => {
    if (element) element.textContent = label;
  });

  if (participantReportFileLabel) {
    participantReportFileLabel.textContent = "Upload report";
    participantReportFileLabel.title = label;
  }
}

function refreshReportViews() {
  populateDashboardFilters();
  populateTrainingReportFilters();
  populateParticipantReportFilters();
  renderDashboards();
  renderTrainingReport();
  renderParticipantReports();
}

async function loadReportFromFile(file) {
  reportRows = await parseReportFile(file);
  saveReportRows();
  updateReportFileLabels(`${file.name}: ${formatQuantity(reportRows.length)} строк`);
  refreshReportViews();
}

async function loadReportFromUrl(fileName, targetLabel) {
  try {
    if (targetLabel) targetLabel.textContent = `Загрузка ${fileName}...`;
    const response = await fetch(fileName);
    if (!response.ok) throw new Error("Report file not found");

    const blob = await response.blob();
    const file = new File([blob], fileName, { type: blob.type });
    await loadReportFromFile(file);
  } catch (error) {
    if (targetLabel) {
      targetLabel.textContent = error.message === "XLSX parser is not loaded"
        ? "Для XLSX нужен доступ к библиотеке XLSX"
        : "Откройте файл через выбор файла";
    }
  }
}

function clearReportData() {
  reportRows = [];
  removeStorageValue(REPORT_STORAGE_KEY);
  reportFileInput.value = "";
  trainingReportFileInput.value = "";
  participantReportFileInput.value = "";
  updateReportFileLabels("Выберите CSV / XLSX файл");
  refreshReportViews();
}

async function handleReportFileInput(input, label) {
  const [file] = input.files;
  if (!file) return;

  try {
    await loadReportFromFile(file);
  } catch (error) {
    label.textContent = error.message === "XLSX parser is not loaded"
      ? "Для XLSX нужен доступ к библиотеке XLSX"
      : "Файл не удалось прочитать";
  }
}

let supabaseClient = null;
let supabaseClientUrl = "";
let supabaseClientAnonKey = "";
let systemHubRealtimeChannel = null;

const SUPABASE_TABLE_CONFIG = {
  records: {
    table: "systems",
    order: "updatedAt",
    ascending: false,
    columns: ["id", "systemName", "login", "password", "purchaseDate", "licenseEndDate", "updatedAt"],
    dateFields: ["purchaseDate", "licenseEndDate"],
  },
  links: {
    table: "useful_links",
    order: "updatedAt",
    ascending: false,
    columns: ["id", "description", "url", "updatedAt"],
  },
  surveyLinks: {
    table: "survey_forms",
    order: "updatedAt",
    ascending: false,
    columns: ["id", "description", "url", "updatedAt"],
  },
  promoItems: {
    table: "promo_products",
    order: "updatedAt",
    ascending: false,
    columns: ["id", "name", "unitPriceUsd", "quantity", "totalUsd", "totalKzt", "updatedAt"],
    numberFields: ["unitPriceUsd", "quantity", "totalUsd", "totalKzt"],
    nullableNumberFields: ["unitPriceUsd", "totalUsd", "totalKzt"],
  },
  stockItems: {
    table: "promo_stock",
    order: "updatedAt",
    ascending: false,
    columns: ["id", "name", "quantity", "note", "updatedAt"],
    numberFields: ["quantity"],
  },
  promoPurchasePositions: {
    table: "promo_positions",
    order: "updatedAt",
    ascending: false,
    columns: ["id", "name", "updatedAt"],
  },
  promoPurchases: {
    table: "promo_purchases",
    order: "updatedAt",
    ascending: false,
    columns: ["id", "fullName", "address", "city", "center", "status", "items", "updatedAt"],
    jsonFields: ["items"],
  },
  teamTaskMembers: {
    table: "team_members",
    keyColumn: "name",
    order: "name",
    ascending: true,
    replaceAll: true,
    fromRows: (rows) => rows.map((row) => row.name).filter(Boolean),
    toRows: (items) => normalizeTeamTaskMemberList(items).map((name) => ({ name })),
  },
  teamTasks: {
    table: "team_tasks",
    order: "updatedAt",
    ascending: false,
    columns: ["id", "direction", "title", "description", "assignees", "status", "startDate", "deadline", "priority", "notes", "createdAt", "updatedAt"],
    dateFields: ["startDate", "deadline"],
    jsonFields: ["assignees"],
  },
  trmsReleaseTasks: {
    table: "trms_releases",
    order: "updatedAt",
    ascending: false,
    columns: ["id", "releaseName", "taskName", "taskUrl", "taskWrittenDate", "taskStartDate", "taskEndDate", "taskProdDate", "updatedAt"],
    dateFields: ["taskWrittenDate", "taskStartDate", "taskEndDate", "taskProdDate"],
  },
};

function setGoogleSheetsStatus(message, type = "") {
  if (!googleSheetsStatus) return;

  googleSheetsStatus.textContent = message;
  googleSheetsStatus.className = `sync-status${type ? ` is-${type}` : ""}`;
}

function setGoogleSyncLoading(isLoading) {
  [testGoogleSheetsButton, pushToGoogleSheetsButton, pullFromGoogleSheetsButton].forEach((button) => {
    if (button) button.disabled = isLoading;
  });
}

function getConfiguredSupabaseUrl() {
  return googleScriptUrlInput?.value.trim() || googleScriptUrl || globalThis.SYSTEMHUB_SUPABASE_URL || "";
}

function getConfiguredSupabaseAnonKey() {
  return googleSyncTokenInput?.value.trim() || googleSyncToken || globalThis.SYSTEMHUB_SUPABASE_ANON_KEY || "";
}

function isSupabasePlaceholder(value) {
  return !value || /^YOUR_SUPABASE_/i.test(value);
}

function hasGoogleSheetsSyncTarget() {
  return !isSupabasePlaceholder(getConfiguredSupabaseUrl()) && !isSupabasePlaceholder(getConfiguredSupabaseAnonKey());
}

function getSupabaseClient() {
  const url = getConfiguredSupabaseUrl();
  const anonKey = getConfiguredSupabaseAnonKey();

  if (isSupabasePlaceholder(url) || isSupabasePlaceholder(anonKey)) {
    throw new Error("Укажите Supabase URL и anon key.");
  }

  if (!globalThis.supabase?.createClient) {
    throw new Error("Библиотека @supabase/supabase-js не загрузилась.");
  }

  if (supabaseClient && supabaseClientUrl === url && supabaseClientAnonKey === anonKey) {
    return supabaseClient;
  }

  supabaseClient = globalThis.supabase.createClient(url, anonKey);
  supabaseClientUrl = url;
  supabaseClientAnonKey = anonKey;
  return supabaseClient;
}

function setLoginStatus(message, type = "") {
  if (!loginStatus) return;
  const translatedMessage = translateInterfaceValue(message);
  const hasMessage = Boolean(String(translatedMessage || "").trim());
  loginStatus.hidden = !hasMessage;
  loginStatus.textContent = hasMessage ? translatedMessage : "";
  loginStatus.className = `auth-status${type ? ` is-${type}` : ""}`;
}

function setLoginLoading(isLoading) {
  if (loginSubmitButton) {
    loginSubmitButton.disabled = isLoading;
  }
}

function setAdminUsersStatus(message, type = "") {
  if (!adminUsersStatus) return;
  adminUsersStatus.textContent = message;
  adminUsersStatus.className = `sync-status${type ? ` is-${type}` : ""}`;
}

function setAdminUsersLoading(isLoading) {
  [
    adminUserSubmitButton,
    adminUserResetButton,
    adminUserLoginInput,
    adminUserNameInput,
    adminUserRoleInput,
    adminUserPasswordInput,
    adminUserActiveInput,
  ].forEach((control) => {
    if (control) control.disabled = isLoading;
  });
}

function normalizeAuthLogin(value) {
  return String(value || "").trim();
}

function getAuthSessionUser(user) {
  if (!user) return null;

  return {
    id: user.id,
    login: user.login,
    displayName: user.displayName || user.login,
    role: user.role || "user",
    isActive: user.isActive !== false,
  };
}

function getStoredAuthSession() {
  try {
    const rawSession = sessionStorage.getItem(AUTH_SESSION_STORAGE_KEY);
    return rawSession ? JSON.parse(rawSession) : null;
  } catch {
    return null;
  }
}

function saveAuthSession(user) {
  try {
    sessionStorage.setItem(AUTH_SESSION_STORAGE_KEY, JSON.stringify(getAuthSessionUser(user)));
  } catch {
    // Session restore is optional; login still works without sessionStorage.
  }
}

function clearAuthSession() {
  try {
    sessionStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
  } catch {
    // Ignore storage errors during logout.
  }
}

function toAuthUser(row) {
  if (!row) return null;

  return {
    id: row.id || "",
    login: row.login || "",
    displayName: row.displayName || row.login || "",
    role: row.role || "user",
    passwordHash: row.passwordHash || "",
    passwordSalt: row.passwordSalt || "",
    isActive: row.isActive !== false,
    createdAt: row.createdAt || "",
    updatedAt: row.updatedAt || "",
  };
}

function canManageAuthUsers() {
  return currentUser?.role === "admin";
}

function getAuthTableErrorMessage(error) {
  const message = error?.message || String(error || "");
  if (/app_users|schema cache|does not exist|relation/i.test(message)) {
    return "Создайте таблицу app_users в Supabase. SQL есть на экране входа и в разделе Настройки.";
  }
  return message || "Не удалось подключиться к базе пользователей.";
}

function timingSafeEqual(firstValue, secondValue) {
  const first = String(firstValue || "");
  const second = String(secondValue || "");
  let diff = first.length ^ second.length;
  const maxLength = Math.max(first.length, second.length);
  const firstLength = first.length || 1;
  const secondLength = second.length || 1;

  for (let index = 0; index < maxLength; index += 1) {
    diff |= (first.charCodeAt(index % firstLength) || 0) ^ (second.charCodeAt(index % secondLength) || 0);
  }

  return diff === 0;
}

async function hashAuthPassword(password, salt) {
  if (!isWebCryptoAvailable()) {
    throw new Error("Web Crypto недоступен. Откройте страницу через HTTPS или localhost.");
  }

  const passwordSalt = salt || window.crypto.getRandomValues(new Uint8Array(16));
  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const derivedBits = await window.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: passwordSalt,
      iterations: AUTH_PASSWORD_DERIVE_ITERATIONS,
      hash: "SHA-256",
    },
    keyMaterial,
    256,
  );

  return {
    passwordHash: bytesToBase64(new Uint8Array(derivedBits)),
    passwordSalt: bytesToBase64(passwordSalt),
  };
}

async function verifyAuthPassword(password, passwordSalt, expectedHash) {
  if (!passwordSalt || !expectedHash) return false;
  const { passwordHash } = await hashAuthPassword(password, base64ToBytes(passwordSalt));
  return timingSafeEqual(passwordHash, expectedHash);
}

async function loadAuthUsersFromDatabase() {
  const client = getSupabaseClient();
  const { data, error } = await client
    .from(AUTH_USERS_TABLE)
    .select("*")
    .order("login", { ascending: true });

  if (error) throw error;
  return (data || []).map(toAuthUser).filter((user) => user.login);
}

async function getAuthUserByLogin(login) {
  const client = getSupabaseClient();
  const { data, error } = await client
    .from(AUTH_USERS_TABLE)
    .select("*")
    .eq("login", login)
    .maybeSingle();

  if (error) throw error;
  return toAuthUser(data);
}

async function upsertAuthUser(user) {
  const client = getSupabaseClient();
  const now = new Date().toISOString();
  const row = {
    id: user.id || createId(),
    login: normalizeAuthLogin(user.login),
    displayName: user.displayName || normalizeAuthLogin(user.login),
    role: user.role || "user",
    passwordHash: user.passwordHash,
    passwordSalt: user.passwordSalt,
    isActive: user.isActive !== false,
    createdAt: user.createdAt || now,
    updatedAt: now,
  };

  const { error } = await client.from(AUTH_USERS_TABLE).upsert(row, { onConflict: "login" });
  if (error) throw error;
  return toAuthUser(row);
}

async function bootstrapDefaultAdminUsers() {
  const logins = DEFAULT_ADMIN_USERS.map((user) => user.login);
  const client = getSupabaseClient();
  const { data, error } = await client.from(AUTH_USERS_TABLE).select("login").in("login", logins);
  if (error) throw error;

  const existingLogins = new Set((data || []).map((row) => row.login));
  const now = new Date().toISOString();
  const rows = [];

  for (const adminUser of DEFAULT_ADMIN_USERS) {
    if (existingLogins.has(adminUser.login)) continue;
    const passwordData = await hashAuthPassword(adminUser.password);
    rows.push({
      id: `system-admin-${adminUser.login}`,
      login: adminUser.login,
      displayName: adminUser.displayName,
      role: adminUser.role,
      passwordHash: passwordData.passwordHash,
      passwordSalt: passwordData.passwordSalt,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    });
  }

  if (rows.length === 0) return;

  const { error: upsertError } = await client.from(AUTH_USERS_TABLE).upsert(rows, { onConflict: "login" });
  if (upsertError) throw upsertError;
}

function updateCurrentUserUi() {
  if (sidebarUserName) {
    const label = currentUser
      ? `${currentUser.displayName || currentUser.login} (${currentUser.role === "admin" ? "admin" : "user"})`
      : "-";
    sidebarUserName.textContent = label;
  }
}

function resetAdminUserForm() {
  if (!adminUserForm) return;
  adminUserForm.reset();
  adminUserLoginInput.readOnly = false;
  adminUserRoleInput.value = "user";
  adminUserActiveInput.checked = true;
  adminUserPasswordInput.required = false;
  adminUserPasswordInput.value = "";
  adminUserLoginInput.focus();
}

function renderAdminUsersTable() {
  if (!adminUsersTable || !adminUsersEmptyState) return;

  adminUsersEmptyState.hidden = authUsers.length > 0;
  adminUsersTable.innerHTML = authUsers
    .map((user) => {
      const isSelf = currentUser?.login === user.login;
      const statusClass = user.isActive ? "status-active" : "status-expired";
      const statusLabel = user.isActive ? "Активен" : "Отключен";
      const deleteDisabled = isSelf ? " disabled" : "";
      const deleteTitle = isSelf ? "Нельзя удалить текущую учетную запись" : "Удалить пользователя";

      return `
        <tr>
          <td>${escapeHtml(user.login)}</td>
          <td>${escapeHtml(user.displayName || user.login)}</td>
          <td><span class="admin-user-role">${escapeHtml(user.role === "admin" ? "Администратор" : "Пользователь")}</span></td>
          <td><span class="status-pill ${statusClass}">${statusLabel}</span></td>
          <td>
            <div class="row-actions">
              <button class="icon-button" type="button" data-admin-user-action="edit" data-login="${escapeHtml(user.login)}" aria-label="Редактировать" title="Редактировать">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path>
                </svg>
              </button>
              <button class="icon-button delete-button" type="button" data-admin-user-action="delete" data-login="${escapeHtml(user.login)}" aria-label="Удалить" title="${deleteTitle}"${deleteDisabled}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M8 6V4h8v2"></path>
                  <path d="M19 6l-1 15H6L5 6"></path>
                  <path d="M10 11v6M14 11v6"></path>
                </svg>
              </button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

async function renderAdminUsersPanel() {
  if (!adminUsersPanel) return;

  const canManage = canManageAuthUsers();
  adminUsersPanel.hidden = !canManage;

  if (!canManage) return;

  setAdminUsersStatus("Загружаю пользователей...");
  setAdminUsersLoading(true);

  try {
    authUsers = await loadAuthUsersFromDatabase();
    renderAdminUsersTable();
    setAdminUsersStatus("Пользователи загружены.", "success");
  } catch (error) {
    setAdminUsersStatus(getAuthTableErrorMessage(error), "error");
  } finally {
    setAdminUsersLoading(false);
  }
}

function fillAdminUserForm(login) {
  const user = authUsers.find((item) => item.login === login);
  if (!user) return;

  adminUserLoginInput.value = user.login;
  adminUserLoginInput.readOnly = true;
  adminUserNameInput.value = user.displayName || "";
  adminUserRoleInput.value = user.role || "user";
  adminUserActiveInput.checked = user.isActive !== false;
  adminUserPasswordInput.value = "";
  adminUserPasswordInput.required = false;
  adminUserPasswordInput.focus();
  setAdminUsersStatus("Измените данные пользователя и сохраните.", "warning");
}

async function handleAdminUserSubmit(event) {
  event.preventDefault();
  if (!canManageAuthUsers() || !adminUserForm.reportValidity()) return;

  const login = normalizeAuthLogin(adminUserLoginInput.value);
  const existingUser = authUsers.find((user) => user.login === login);
  const password = adminUserPasswordInput.value;

  if (!login) {
    adminUserLoginInput.focus();
    return;
  }

  if (!existingUser && !password) {
    adminUserPasswordInput.setCustomValidity("Укажите пароль для нового пользователя.");
    adminUserPasswordInput.reportValidity();
    adminUserPasswordInput.setCustomValidity("");
    return;
  }

  if (existingUser?.login === currentUser?.login && adminUserRoleInput.value !== "admin") {
    setAdminUsersStatus("Нельзя снять роль администратора с текущей учетной записи.", "error");
    return;
  }

  if (existingUser?.login === currentUser?.login && !adminUserActiveInput.checked) {
    setAdminUsersStatus("Нельзя отключить текущую учетную запись.", "error");
    return;
  }

  setAdminUsersLoading(true);
  setAdminUsersStatus("Сохраняю пользователя...");

  try {
    const passwordData = password
      ? await hashAuthPassword(password)
      : {
          passwordHash: existingUser.passwordHash,
          passwordSalt: existingUser.passwordSalt,
        };

    const savedUser = await upsertAuthUser({
      id: existingUser?.id || createId(),
      login,
      displayName: adminUserNameInput.value.trim() || login,
      role: adminUserRoleInput.value || "user",
      isActive: adminUserActiveInput.checked,
      passwordHash: passwordData.passwordHash,
      passwordSalt: passwordData.passwordSalt,
      createdAt: existingUser?.createdAt,
    });

    if (savedUser.login === currentUser?.login) {
      currentUser = getAuthSessionUser(savedUser);
      saveAuthSession(currentUser);
      updateCurrentUserUi();
    }

    resetAdminUserForm();
    authUsers = await loadAuthUsersFromDatabase();
    renderAdminUsersTable();
    setAdminUsersStatus("Пользователь сохранен.", "success");
  } catch (error) {
    setAdminUsersStatus(getAuthTableErrorMessage(error), "error");
  } finally {
    setAdminUsersLoading(false);
  }
}

async function deleteAuthUser(login) {
  if (!canManageAuthUsers()) return;

  if (login === currentUser?.login) {
    setAdminUsersStatus("Нельзя удалить текущую учетную запись.", "error");
    return;
  }

  const confirmed = window.confirm(`Удалить пользователя "${login}"?`);
  if (!confirmed) return;

  setAdminUsersLoading(true);
  setAdminUsersStatus("Удаляю пользователя...");

  try {
    const client = getSupabaseClient();
    const { error } = await client.from(AUTH_USERS_TABLE).delete().eq("login", login);
    if (error) throw error;
    authUsers = await loadAuthUsersFromDatabase();
    renderAdminUsersTable();
    setAdminUsersStatus("Пользователь удален.", "success");
  } catch (error) {
    setAdminUsersStatus(getAuthTableErrorMessage(error), "error");
  } finally {
    setAdminUsersLoading(false);
  }
}

function showAuthenticatedApp(user) {
  currentUser = getAuthSessionUser(user);
  saveAuthSession(currentUser);
  updateCurrentUserUi();

  if (authShell) authShell.hidden = true;
  if (appShell) appShell.hidden = false;

  updatePasswordVaultUi();
  showPage(getPageFromHash());
  render();
  renderAdminUsersPanel();
  initializeTelegramSettings().catch(() => {});
  initializeMessenger().catch(() => {});

  if (!appBootstrapped) {
    appBootstrapped = true;
    initializeGoogleSheetsSync();
  }
}

function showLoginScreen(message = "", type = "") {
  currentUser = null;
  updateCurrentUserUi();
  if (appShell) appShell.hidden = true;
  if (authShell) authShell.hidden = false;
  setLoginStatus(message, type);
  applyLanguage(currentInterfaceLanguage);
  window.setTimeout(() => loginUserInput?.focus(), 0);
}

async function handleLoginSubmit(event) {
  event.preventDefault();

  const login = normalizeAuthLogin(loginUserInput.value);
  const password = loginPasswordInput.value;

  if (!login || !password) {
    setLoginStatus(getInterfaceText("loginRequired"), "error");
    return;
  }

  setLoginLoading(true);
  setLoginStatus(getInterfaceText("loginChecking"));

  try {
    await bootstrapDefaultAdminUsers();
    const user = await getAuthUserByLogin(login);

    if (!user || !user.isActive) {
      throw new Error(getInterfaceText("invalidLogin"));
    }

    const passwordMatches = await verifyAuthPassword(password, user.passwordSalt, user.passwordHash);
    if (!passwordMatches) {
      throw new Error(getInterfaceText("invalidLogin"));
    }

    loginPasswordInput.value = "";
    showAuthenticatedApp(user);
  } catch (error) {
    setLoginStatus(getAuthTableErrorMessage(error), "error");
  } finally {
    setLoginLoading(false);
  }
}

async function initializeAuth() {
  if (appShell) appShell.hidden = true;
  if (authShell) authShell.hidden = false;
  setLoginLoading(true);
  setLoginStatus(getInterfaceText("loginConnecting"));

  try {
    await bootstrapDefaultAdminUsers();
    const storedSession = getStoredAuthSession();

    if (storedSession?.login) {
      const user = await getAuthUserByLogin(storedSession.login);
      if (user?.isActive) {
        showAuthenticatedApp(user);
        return;
      }
      clearAuthSession();
    }

    showLoginScreen("", "");
  } catch (error) {
    showLoginScreen(getAuthTableErrorMessage(error), "error");
  } finally {
    setLoginLoading(false);
  }
}

function logoutCurrentUser() {
  clearAuthSession();
  teamDevelopmentSensitiveUnlocked = false;
  teamDevelopmentSensitiveUnlockedBy = "";
  activeTeamDevelopmentSavedResultId = "";
  currentUser = null;
  loginForm?.reset();

  if (passwordVaultMaster) {
    lockPasswordVault();
  }

  if (systemHubRealtimeChannel) {
    try {
      getSupabaseClient().removeChannel(systemHubRealtimeChannel);
    } catch {
      // Logout should not fail because realtime cleanup failed.
    }
    systemHubRealtimeChannel = null;
  }

  clearQueuedGoogleSheetsSync();
  showLoginScreen(getInterfaceText("logoutSuccess"), "success");
}

function clearQueuedGoogleSheetsSync() {
  googleAutoSyncQueued = false;
  googleAutoSyncPendingKeys.clear();
  googleAutoSyncReplaceKeys.clear();

  if (googleAutoSyncTimer) {
    clearTimeout(googleAutoSyncTimer);
    googleAutoSyncTimer = null;
  }
}

function queueGoogleSheetsSync(datasetKey, options = {}) {
  if (isApplyingGoogleSyncPayload || !hasGoogleSheetsSyncTarget()) {
    return;
  }

  if (datasetKey) {
    googleAutoSyncPendingKeys.add(datasetKey);
    if (options.replaceAll) {
      googleAutoSyncReplaceKeys.add(datasetKey);
    }
  } else {
    GOOGLE_SYNC_DATASET_KEYS.forEach((key) => googleAutoSyncPendingKeys.add(key));
  }

  googleAutoSyncQueued = true;

  if (googleAutoSyncTimer) {
    clearTimeout(googleAutoSyncTimer);
  }

  googleAutoSyncTimer = setTimeout(runQueuedGoogleSheetsSync, GOOGLE_AUTO_SYNC_DEBOUNCE_MS);
}

function sanitizeSupabaseRow(datasetKey, item) {
  const config = SUPABASE_TABLE_CONFIG[datasetKey];
  if (config.toRows) return item;

  const row = {};
  const dateFields = new Set(config.dateFields || []);
  const numberFields = new Set(config.numberFields || []);
  const nullableNumberFields = new Set(config.nullableNumberFields || []);
  const jsonFields = new Set(config.jsonFields || []);

  config.columns.forEach((column) => {
    if (!Object.prototype.hasOwnProperty.call(item, column)) return;

    const value = item[column];

    if (dateFields.has(column)) {
      row[column] = value || null;
      return;
    }

    if (numberFields.has(column)) {
      const number = toOptionalNumber(value);
      row[column] = nullableNumberFields.has(column) && number === null ? null : toNumber(value);
      return;
    }

    if (jsonFields.has(column)) {
      row[column] = value || (column === "assignees" ? [] : {});
      return;
    }

    row[column] = value ?? "";
  });

  if (!row.id && item.id) row.id = item.id;
  return row;
}

function toSupabaseRows(datasetKey, items) {
  const config = SUPABASE_TABLE_CONFIG[datasetKey];
  if (config.toRows) return config.toRows(items);
  return items.map((item) => sanitizeSupabaseRow(datasetKey, item));
}

async function loadSupabaseDataset(datasetKey) {
  const config = SUPABASE_TABLE_CONFIG[datasetKey];
  const client = getSupabaseClient();
  let query = client.from(config.table).select("*");

  if (config.order) {
    query = query.order(config.order, { ascending: config.ascending ?? false });
  }

  const { data, error } = await query;
  if (error) throw error;

  const rows = data || [];
  return config.fromRows ? config.fromRows(rows) : rows;
}

async function loadSupabasePayload() {
  const entries = await Promise.all(
    GOOGLE_SYNC_DATASET_KEYS.map(async (datasetKey) => [datasetKey, await loadSupabaseDataset(datasetKey)]),
  );

  return Object.fromEntries(entries);
}

async function syncSupabaseDataset(requestPayload) {
  const { datasetKey, items = [], deletedIds = [], replaceAll = false } = requestPayload;
  const config = SUPABASE_TABLE_CONFIG[datasetKey];
  const keyColumn = config.keyColumn || "id";
  const client = getSupabaseClient();

  if (replaceAll || config.replaceAll) {
    const { error: deleteError } = await client.from(config.table).delete().neq(keyColumn, "__systemhub_never_match__");
    if (deleteError) throw deleteError;
  } else if (deletedIds.length > 0) {
    const { error: deleteError } = await client.from(config.table).delete().in(keyColumn, deletedIds);
    if (deleteError) throw deleteError;
  }

  const rows = toSupabaseRows(datasetKey, items);
  if (rows.length > 0) {
    const { error: upsertError } = await client.from(config.table).upsert(rows, { onConflict: keyColumn });
    if (upsertError) throw upsertError;
  }
}

async function runQueuedGoogleSheetsSync() {
  googleAutoSyncTimer = null;

  if (googleAutoSyncInFlight || !googleAutoSyncQueued || !hasGoogleSheetsSyncTarget()) {
    return;
  }

  googleAutoSyncQueued = false;
  googleAutoSyncInFlight = true;
  const pendingKeys = [...googleAutoSyncPendingKeys];
  const replaceKeys = new Set(googleAutoSyncReplaceKeys);
  googleAutoSyncPendingKeys.clear();
  googleAutoSyncReplaceKeys.clear();

  setGoogleSheetsStatus("Сохраняю изменения в Supabase...");

  try {
    let changed = false;

    for (const datasetKey of pendingKeys) {
      const requestPayload = buildDatasetSyncRequest(datasetKey, replaceKeys.has(datasetKey));
      if (!requestPayload) continue;

      await syncSupabaseDataset(requestPayload);
      markDatasetAsSynced(datasetKey);
      changed = true;
    }

    setGoogleSheetsStatus(
      changed
        ? "Изменения сохранены в Supabase."
        : "Новых изменений для синхронизации нет.",
      "success",
    );
  } catch (error) {
    pendingKeys.forEach((datasetKey) => googleAutoSyncPendingKeys.add(datasetKey));
    replaceKeys.forEach((datasetKey) => googleAutoSyncReplaceKeys.add(datasetKey));
    googleAutoSyncQueued = googleAutoSyncPendingKeys.size > 0;
    setGoogleSheetsStatus(error.message, "error");
  } finally {
    googleAutoSyncInFlight = false;

    if (googleAutoSyncQueued) {
      googleAutoSyncTimer = setTimeout(runQueuedGoogleSheetsSync, GOOGLE_AUTO_SYNC_DEBOUNCE_MS);
    }
  }
}

function updateGoogleScriptUrlFromInput() {
  googleScriptUrl = googleScriptUrlInput?.value.trim() || globalThis.SYSTEMHUB_SUPABASE_URL || "";
  googleSyncToken = googleSyncTokenInput?.value.trim() || globalThis.SYSTEMHUB_SUPABASE_ANON_KEY || "";
  saveGoogleScriptUrl();
  saveGoogleSyncToken();

  if (supabaseClientUrl !== googleScriptUrl || supabaseClientAnonKey !== googleSyncToken) {
    supabaseClient = null;
    supabaseClientUrl = "";
    supabaseClientAnonKey = "";
  }

  return googleScriptUrl;
}

function renderGoogleSheetsSettings() {
  if (googleScriptUrlInput) {
    googleScriptUrlInput.value = googleScriptUrl;
  }

  if (googleSyncTokenInput) {
    googleSyncTokenInput.value = googleSyncToken;
  }

  if (!googleSheetsStatus) return;

  if (hasGoogleSheetsSyncTarget()) {
    setGoogleSheetsStatus("Supabase настроен. Данные загружаются напрямую из PostgreSQL.", "success");
  } else {
    setGoogleSheetsStatus("Укажите Supabase URL и anon key для подключения.");
  }
}

function hasGoogleCalendarSyncTarget() {
  return getGoogleCalendarConnections().length > 0;
}

function setGoogleCalendarStatus(message, type = "") {
  if (!googleCalendarStatus) return;

  googleCalendarStatus.textContent = message;
  googleCalendarStatus.className = `sync-status${type ? ` is-${type}` : ""}`;
}

function setGoogleCalendarLoading(isLoading) {
  [testGoogleCalendarButton, syncGoogleCalendarButton].forEach((button) => {
    if (button) button.disabled = isLoading;
  });
}

function updateGoogleCalendarSettingsFromInput() {
  googleCalendarScriptUrl = googleCalendarUrlInput?.value.trim() || globalThis.SYSTEMHUB_GOOGLE_CALENDAR_SCRIPT_URL || "";
  googleCalendarToken = googleCalendarTokenInput?.value.trim() || globalThis.SYSTEMHUB_GOOGLE_CALENDAR_TOKEN || "";
  googleCalendarScriptUrl2 = googleCalendarUrlInput2?.value.trim() || globalThis.SYSTEMHUB_GOOGLE_CALENDAR_SCRIPT_URL_2 || "";
  googleCalendarToken2 = googleCalendarTokenInput2?.value.trim() || globalThis.SYSTEMHUB_GOOGLE_CALENDAR_TOKEN_2 || "";
  googleCalendarAutoSync = Boolean(googleCalendarAutoSyncInput?.checked);
  saveGoogleCalendarScriptUrl();
  saveGoogleCalendarToken();
  saveGoogleCalendarScriptUrl2();
  saveGoogleCalendarToken2();
  saveGoogleCalendarAutoSync();
}

function renderGoogleCalendarSettings() {
  if (googleCalendarUrlInput) {
    googleCalendarUrlInput.value = googleCalendarScriptUrl;
  }

  if (googleCalendarTokenInput) {
    googleCalendarTokenInput.value = googleCalendarToken;
  }

  if (googleCalendarUrlInput2) {
    googleCalendarUrlInput2.value = googleCalendarScriptUrl2;
  }

  if (googleCalendarTokenInput2) {
    googleCalendarTokenInput2.value = googleCalendarToken2;
  }

  if (googleCalendarAutoSyncInput) {
    googleCalendarAutoSyncInput.checked = googleCalendarAutoSync;
  }

  if (!googleCalendarStatus) return;

  if (hasGoogleCalendarSyncTarget()) {
    const count = getGoogleCalendarConnections().length;
    setGoogleCalendarStatus(`Google Calendar настроен. Подключено календарей: ${count}.`, "success");
  } else {
    setGoogleCalendarStatus("Укажите Apps Script URL и WEB_APP_TOKEN для синхронизации.");
  }
}

function getGoogleCalendarConnections() {
  return [
    {
      name: "Аккаунт 1",
      url: googleCalendarScriptUrl,
      token: googleCalendarToken,
      calendarId: globalThis.SYSTEMHUB_GOOGLE_CALENDAR_ID || "",
    },
    {
      name: "Аккаунт 2",
      url: googleCalendarScriptUrl2,
      token: googleCalendarToken2,
      calendarId: globalThis.SYSTEMHUB_GOOGLE_CALENDAR_ID_2 || "",
    },
  ].filter((connection) => connection.url && connection.token);
}

function hasTelegramBotTarget() {
  return Boolean(telegramBotEnabled && telegramBotUrl);
}

function setTelegramBotStatus(message, type = "") {
  if (!telegramBotStatus) return;

  telegramBotStatus.textContent = message;
  telegramBotStatus.className = `sync-status${type ? ` is-${type}` : ""}`;
}

function setTelegramBotLoading(isLoading) {
  if (testTelegramBotButton) testTelegramBotButton.disabled = isLoading;
}

function updateTelegramBotSettingsFromInput() {
  telegramBotUrl = telegramBotUrlInput?.value.trim() || globalThis.SYSTEMHUB_TELEGRAM_BOT_URL || "";
  telegramBotToken = telegramBotTokenInput?.value.trim() || globalThis.SYSTEMHUB_TELEGRAM_BOT_TOKEN || "";
  telegramBotChatId = telegramBotChatIdInput?.value.trim() || globalThis.SYSTEMHUB_TELEGRAM_CHAT_ID || "";
  telegramBotEnabled = Boolean(telegramBotEnabledInput?.checked);
  saveTelegramBotSettingsLocally();
}

function renderTelegramBotSettings() {
  if (telegramBotUrlInput) {
    telegramBotUrlInput.value = telegramBotUrl;
  }

  if (telegramBotTokenInput) {
    telegramBotTokenInput.value = telegramBotToken;
  }

  if (telegramBotChatIdInput) {
    telegramBotChatIdInput.value = telegramBotChatId;
  }

  if (telegramBotEnabledInput) {
    telegramBotEnabledInput.checked = telegramBotEnabled;
  }

  if (!telegramBotStatus) return;

  if (hasTelegramBotTarget()) {
    setTelegramBotStatus(
      telegramSharedSettingsLoaded
        ? "Telegram-бот включен. Общие настройки подтянуты, новые назначения будут отправляться на webhook."
        : "Telegram-бот включен. Новые назначения задач будут отправляться на webhook.",
      "success",
    );
  } else {
    setTelegramBotStatus("Укажите webhook URL, включите отправку и сохраните общие настройки Telegram.");
  }
}

function getGoogleCalendarDateValue(value) {
  const text = String(value || "").trim();
  return /^\d{4}-\d{2}-\d{2}$/.test(text) ? text : "";
}

function buildGoogleCalendarEvents() {
  const events = [];
  const releaseDateFields = [
    ["taskWrittenDate", "Задача написана"],
    ["taskStartDate", "Старт задачи"],
    ["taskEndDate", "Завершение задачи"],
    ["taskProdDate", "Выход в прод"],
  ];

  records.forEach((record) => {
    const date = getGoogleCalendarDateValue(record.licenseEndDate);
    if (!date) return;

    events.push({
      sourceKey: `license:${record.id || record.systemName}`,
      type: "license",
      date,
      title: `Лицензия: ${record.systemName || "Система"}`,
      description: [
        record.login ? `Логин: ${record.login}` : "",
        "Источник: SystemHub / Данные систем",
      ].filter(Boolean).join("\n"),
    });
  });

  teamTasks.forEach((task) => {
    const date = getGoogleCalendarDateValue(task.deadline);
    if (!date) return;

    events.push({
      sourceKey: `task:${task.id || task.title}`,
      type: "task",
      date,
      title: `Задача: ${task.title || "Задача команды"}`,
      description: [
        task.description,
        task.assignees?.length ? `Исполнители: ${task.assignees.join(", ")}` : "",
        task.status ? `Статус: ${task.status}` : "",
        task.priority ? `Приоритет: ${task.priority}` : "",
        getTeamTaskVisibleNotes(task) ? `Заметки: ${getTeamTaskVisibleNotes(task)}` : "",
        "Источник: SystemHub / Задачи команды",
      ].filter(Boolean).join("\n"),
    });
  });

  trmsReleaseTasks.forEach((task) => {
    releaseDateFields.forEach(([field, label]) => {
      const date = getGoogleCalendarDateValue(task[field]);
      if (!date) return;

      events.push({
        sourceKey: `release:${task.id || task.taskName}:${field}`,
        type: "release",
        date,
        title: `${label}: ${task.releaseName || "TRMS релиз"}`,
        description: [
          task.taskName ? `Задача: ${task.taskName}` : "",
          "Источник: SystemHub / TRMS Релизы",
        ].filter(Boolean).join("\n"),
        url: task.taskUrl || "",
      });
    });
  });

  return events;
}

async function sendGoogleCalendarPayload(connection, payload, options = {}) {
  if (!connection?.url || !connection?.token) {
    throw new Error("Укажите Apps Script URL и WEB_APP_TOKEN.");
  }

  const requestBody = JSON.stringify({
    ...payload,
    token: connection.token,
  });

  try {
    const response = await fetch(connection.url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: requestBody,
    });

    if (response.type === "opaque") {
      return { ok: true, opaque: true, connection };
    }

    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    if (!response.ok || data.ok === false) {
      throw new Error(data.error || response.statusText || "Google Calendar sync failed.");
    }

    return { ...data, connection };
  } catch (error) {
    if (!options.allowOpaqueFallback) throw error;

    await fetch(connection.url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: requestBody,
    });

    return { ok: true, opaque: true, connection };
  }
}

async function testGoogleCalendarConnection() {
  updateGoogleCalendarSettingsFromInput();
  setGoogleCalendarLoading(true);
  setGoogleCalendarStatus("Проверяю подключение к Google Calendar...");

  try {
    const connections = getGoogleCalendarConnections();
    if (connections.length === 0) {
      throw new Error("Добавьте хотя бы один Apps Script URL и WEB_APP_TOKEN.");
    }

    const results = await Promise.all(
      connections.map((connection) => sendGoogleCalendarPayload(connection, { action: "ping" }, { allowOpaqueFallback: true })),
    );
    const labels = results.map((result) => result.connection.name).join(", ");
    setGoogleCalendarStatus(`Подключение работает: ${labels}.`, "success");
  } catch (error) {
    setGoogleCalendarStatus(error.message || "Не удалось проверить Google Calendar.", "error");
  } finally {
    setGoogleCalendarLoading(false);
  }
}

async function syncGoogleCalendarEvents(options = {}) {
  updateGoogleCalendarSettingsFromInput();
  setGoogleCalendarLoading(true);

  const events = buildGoogleCalendarEvents();
  const connections = getGoogleCalendarConnections();
  setGoogleCalendarStatus(`Отправляю ${events.length} событий в ${connections.length} Google Calendar...`);

  try {
    if (connections.length === 0) {
      throw new Error("Добавьте хотя бы один Apps Script URL и WEB_APP_TOKEN.");
    }

    const results = await Promise.all(
      connections.map((connection) => sendGoogleCalendarPayload(
        connection,
        {
          action: "syncEvents",
          deleteMissing: true,
          events,
        },
        { allowOpaqueFallback: true },
      )),
    );

    if (results.some((result) => result.opaque)) {
      setGoogleCalendarStatus(`Запрос синхронизации отправлен в календарей: ${results.length}. Событий: ${events.length}.`, "success");
    } else {
      const syncedTotal = results.reduce((sum, result) => sum + (result.syncedCount ?? events.length), 0);
      const deletedTotal = results.reduce((sum, result) => sum + (result.deletedCount ?? 0), 0);
      setGoogleCalendarStatus(
        `Google Calendar обновлен. Календарей: ${results.length}, синхронизировано: ${syncedTotal}, удалено: ${deletedTotal}.`,
        "success",
      );
    }
  } catch (error) {
    setGoogleCalendarStatus(error.message || "Не удалось синхронизировать Google Calendar.", "error");
    if (options.throwOnError) throw error;
  } finally {
    setGoogleCalendarLoading(false);
  }
}

function queueGoogleCalendarSync() {
  if (isApplyingGoogleSyncPayload || !googleCalendarAutoSync || !hasGoogleCalendarSyncTarget()) {
    return;
  }

  if (googleCalendarSyncTimer) {
    clearTimeout(googleCalendarSyncTimer);
  }

  googleCalendarSyncTimer = setTimeout(() => {
    if (googleCalendarSyncInFlight) return;
    googleCalendarSyncInFlight = true;
    syncGoogleCalendarEvents()
      .catch(() => {})
      .finally(() => {
        googleCalendarSyncInFlight = false;
      });
  }, GOOGLE_CALENDAR_SYNC_DEBOUNCE_MS);
}

function getNewTeamTaskAssignees(task, previousTask) {
  const currentAssignees = normalizeTeamTaskMemberList(task.assignees || []);
  const previousAssignees = normalizeTeamTaskMemberList(previousTask?.assignees || []);
  const previousLookup = new Set(previousAssignees.map((assignee) => assignee.toLowerCase()));

  return currentAssignees.filter((assignee) => !previousLookup.has(assignee.toLowerCase()));
}

function getTeamTaskUrl() {
  return `${window.location.origin}${window.location.pathname}#team-tasks`;
}

function buildTelegramTaskMessage(task, assignees) {
  const direction = getTeamDirectionMeta(task.direction);
  const status = getTeamTaskStatusMeta(task.status);
  const priority = getTeamTaskPriorityMeta(task.priority);

  return [
    "Новая задача SystemHub",
    "",
    `Задача: ${task.title || "Без названия"}`,
    `Направление: ${direction.label}`,
    `Ответственные: ${assignees.join(", ") || "Не назначено"}`,
    `Статус: ${status.label}`,
    `Приоритет: ${priority.label}`,
    task.deadline ? `Дедлайн: ${formatDate(task.deadline)}` : "Дедлайн: не указан",
    task.description ? `Описание: ${task.description}` : "",
    getTeamTaskVisibleNotes(task) ? `Заметки: ${getTeamTaskVisibleNotes(task)}` : "",
    `Открыть: ${getTeamTaskUrl()}`,
  ].filter(Boolean).join("\n");
}

function buildTeamTaskTelegramPayload(task, assignees) {
  const direction = getTeamDirectionMeta(task.direction);
  const status = getTeamTaskStatusMeta(task.status);
  const priority = getTeamTaskPriorityMeta(task.priority);

  return {
    action: "telegramTeamTaskAssigned",
    source: "SystemHub",
    sentAt: new Date().toISOString(),
    assignedBy: currentUser?.displayName || currentUser?.login || "",
    chatId: telegramBotChatId,
    text: buildTelegramTaskMessage(task, assignees),
    taskUrl: getTeamTaskUrl(),
    assignees,
    task: {
      id: task.id,
      title: task.title,
      description: task.description || "",
      direction: task.direction,
      directionLabel: direction.label,
      status: task.status,
      statusLabel: status.label,
      priority: task.priority,
      priorityLabel: priority.label,
      startDate: task.startDate || "",
      deadline: task.deadline || "",
      notes: getTeamTaskVisibleNotes(task),
      createdAt: task.createdAt || "",
      updatedAt: task.updatedAt || "",
    },
  };
}

async function sendTelegramBotPayload(payload, options = {}) {
  if (!telegramBotUrl) {
    throw new Error("Укажите Telegram webhook URL.");
  }

  const requestBody = JSON.stringify({
    ...payload,
    token: telegramBotToken,
  });

  try {
    const response = await fetch(telegramBotUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: requestBody,
    });

    if (response.type === "opaque") {
      return { ok: true, opaque: true };
    }

    const text = await response.text();
    let data = {};

    if (text.trim()) {
      try {
        data = JSON.parse(text);
      } catch {
        data = { ok: true, raw: text };
      }
    }

    if (!response.ok || data.ok === false) {
      throw new Error(data.error || response.statusText || "Telegram bot request failed.");
    }

    return data;
  } catch (error) {
    if (!options.allowOpaqueFallback) throw error;

    await fetch(telegramBotUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: requestBody,
    });

    return { ok: true, opaque: true };
  }
}

async function testTelegramBotConnection() {
  updateTelegramBotSettingsFromInput();
  setTelegramBotLoading(true);
  setTelegramBotStatus("Проверяю Telegram-бота...");

  try {
    if (!telegramBotUrl) {
      throw new Error("Укажите Telegram webhook URL.");
    }

    await sendTelegramBotPayload(
      {
        action: "ping",
        source: "SystemHub",
        sentAt: new Date().toISOString(),
        chatId: telegramBotChatId,
        text: "Проверка Telegram-уведомлений SystemHub.",
      },
      { allowOpaqueFallback: true },
    );
    setTelegramBotStatus("Telegram-бот отвечает. Уведомления можно отправлять.", "success");
  } catch (error) {
    setTelegramBotStatus(error.message || "Не удалось проверить Telegram-бота.", "error");
  } finally {
    setTelegramBotLoading(false);
  }
}

function notifyTeamTaskAssignmentInTelegram(task, previousTask) {
  const newAssignees = getNewTeamTaskAssignees(task, previousTask);
  if (newAssignees.length === 0) return;

  (async () => {
    if (!hasTelegramBotTarget()) {
      await loadSharedTelegramSettings({ silent: true });
    }

    if (!telegramBotEnabled) {
      setTelegramBotStatus("Задача назначена, но отправка Telegram выключена в общих настройках.", "warning");
      return;
    }

    if (!telegramBotUrl) {
      setTelegramBotStatus("Задача назначена, но webhook Telegram-бота не настроен.", "warning");
      return;
    }

    const payload = buildTeamTaskTelegramPayload(task, newAssignees);

    setTelegramBotStatus(`Отправляю сообщение в Telegram: ${newAssignees.join(", ")}...`);

    try {
      await sendTelegramBotPayload(payload, { allowOpaqueFallback: true });
      setTelegramBotStatus(`Сообщение отправлено в Telegram: ${newAssignees.join(", ")}.`, "success");
    } catch (error) {
      setTelegramBotStatus(error.message || "Не удалось отправить сообщение в Telegram.", "error");
    }
  })();
}

function getGoogleSyncPayload() {
  return {
    version: 2,
    exportedAt: new Date().toISOString(),
    records,
    links,
    surveyLinks,
    promoItems,
    stockItems,
    promoPurchases,
    promoPurchasePositions,
    teamTaskMembers,
    teamTasks,
    trmsReleaseTasks,
  };
}

function normalizeSyncArray(value) {
  return Array.isArray(value) ? value : [];
}

function applyGoogleSyncPayload(payload) {
  const data = payload?.data && typeof payload.data === "object" ? payload.data : payload || {};

  records = normalizeSyncArray(data.records);
  links = normalizeSyncArray(data.links);
  surveyLinks = normalizeSyncArray(data.surveyLinks);
  promoItems = normalizeSyncArray(data.promoItems);
  stockItems = normalizeSyncArray(data.stockItems);
  promoPurchases = normalizeSyncArray(data.promoPurchases);
  promoPurchasePositions = normalizeSyncArray(data.promoPurchasePositions);
  const syncedTeamMembers = normalizeTeamTaskMemberList(normalizeSyncArray(data.teamTaskMembers));
  teamTaskMembers = syncedTeamMembers.length > 0 ? syncedTeamMembers : [...DEFAULT_TEAM_TASK_MEMBERS];
  teamTasks = normalizeTeamTasks(normalizeSyncArray(data.teamTasks));
  trmsReleaseTasks = normalizeSyncArray(data.trmsReleaseTasks);

  isApplyingGoogleSyncPayload = true;
  try {
    saveLocalSyncData();
  } finally {
    isApplyingGoogleSyncPayload = false;
  }
  syncedDataSnapshot = buildSyncedDataSnapshot();
  resetForm({ focus: false });
  resetLinkForm();
  resetSurveyLinkForm();
  resetPromoForm();
  resetStockForm();
  resetPromoPurchaseForm();
  resetTrmsReleaseForm();
  render();
}

async function testGoogleSheetsConnection() {
  setGoogleSyncLoading(true);
  setGoogleSheetsStatus("Проверяю соединение с Supabase...");

  try {
    const client = getSupabaseClient();
    const { error } = await client.from("systems").select("id").limit(1);
    if (error) throw error;
    setGoogleSheetsStatus("Соединение с Supabase работает.", "success");
  } catch (error) {
    setGoogleSheetsStatus(error.message, "error");
  } finally {
    setGoogleSyncLoading(false);
  }
}

async function pushGoogleSheetsData() {
  setGoogleSyncLoading(true);
  setGoogleSheetsStatus("Синхронизирую локальные изменения...");

  try {
    queueGoogleSheetsSync();
    await runQueuedGoogleSheetsSync();
    setGoogleSheetsStatus("Локальные изменения синхронизированы с Supabase.", "success");
  } catch (error) {
    setGoogleSheetsStatus(error.message, "error");
  } finally {
    setGoogleSyncLoading(false);
  }
}

async function pullGoogleSheetsData() {
  setGoogleSyncLoading(true);
  setGoogleSheetsStatus("Загружаю данные из Supabase...");

  try {
    await refreshGoogleSheetsData({ force: true, showStatus: true });
  } catch (error) {
    setGoogleSheetsStatus(error.message, "error");
  } finally {
    setGoogleSyncLoading(false);
  }
}

function hasAnySyncPayloadData(payload) {
  return GOOGLE_SYNC_DATASET_KEYS.some((datasetKey) => normalizeSyncArray(payload[datasetKey]).length > 0);
}

function hasAnyLocalSyncData() {
  return GOOGLE_SYNC_DATASET_KEYS.some((datasetKey) => normalizeSyncArray(getSyncDatasetValue(datasetKey)).length > 0);
}

async function refreshGoogleSheetsData(options = {}) {
  const { force = false, showStatus = false, preserveLocalIfRemoteEmpty = false } = options;

  if (!hasGoogleSheetsSyncTarget()) {
    return;
  }

  if (force && googleAutoSyncQueued) {
    await runQueuedGoogleSheetsSync();
  }

  if (googleSheetsLoadInFlight || googleAutoSyncInFlight || googleAutoSyncQueued || isApplyingGoogleSyncPayload) {
    return;
  }

  googleSheetsLoadInFlight = true;

  try {
    const payload = await loadSupabasePayload();

    if (preserveLocalIfRemoteEmpty && !hasAnySyncPayloadData(payload) && hasAnyLocalSyncData()) {
      if (showStatus) {
        setGoogleSheetsStatus("Supabase пока пустой. Локальные данные оставлены; нажмите синхронизацию для первичной выгрузки.", "success");
      }
      return;
    }

    applyGoogleSyncPayload(payload);

    if (showStatus) {
      setGoogleSheetsStatus("Данные загружены из Supabase.", "success");
    }
  } finally {
    googleSheetsLoadInFlight = false;
  }
}

function scheduleGoogleSheetsRefresh(immediate = false) {
  if (googleSheetsRefreshTimer) {
    clearTimeout(googleSheetsRefreshTimer);
    googleSheetsRefreshTimer = null;
  }

  if (!immediate) return;

  googleSheetsRefreshTimer = setTimeout(() => {
    refreshGoogleSheetsData({ force: true, showStatus: true }).catch((error) => {
      setGoogleSheetsStatus(error.message, "error");
    });
  }, 0);
}

const SUPABASE_REALTIME_DATASETS = [
  "records",
  "promoItems",
  "stockItems",
  "promoPurchases",
  "promoPurchasePositions",
  "teamTasks",
];

const supabaseRealtimeRefreshTimers = new Map();

function setSupabaseRealtimeDataset(datasetKey, items) {
  switch (datasetKey) {
    case "records":
      records = items;
      break;
    case "promoItems":
      promoItems = items;
      break;
    case "stockItems":
      stockItems = items;
      break;
    case "promoPurchases":
      promoPurchases = items;
      break;
    case "promoPurchasePositions":
      promoPurchasePositions = items;
      break;
    case "teamTasks":
      teamTasks = normalizeTeamTasks(items);
      break;
    default:
      break;
  }
}

function renderSupabaseRealtimeDataset(datasetKey) {
  switch (datasetKey) {
    case "records":
      decryptedPasswordCache.clear();
      visiblePasswords.clear();
      passwordRevealTimers.forEach((timer) => window.clearTimeout(timer));
      passwordRevealTimers.clear();
      updatePasswordVaultUi();
      renderCounters();
      renderTable();
      break;
    case "promoItems":
      renderPromoTable();
      break;
    case "stockItems":
      renderStockTable();
      renderPurchaseAnalytics();
      break;
    case "promoPurchases":
      renderPromoPurchaseTable();
      renderPurchaseAnalytics();
      break;
    case "promoPurchasePositions":
      renderPromoPurchasePositions();
      renderPromoPurchaseItemFields(getPromoPurchaseItemsFromForm());
      renderPromoPurchaseTable();
      renderPurchaseAnalytics();
      break;
    case "teamTasks":
      renderTeamTasks();
      break;
    default:
      render();
      break;
  }
}

async function refreshSupabaseRealtimeDataset(datasetKey) {
  const items = await loadSupabaseDataset(datasetKey);

  setSupabaseRealtimeDataset(datasetKey, items);
  persistDatasetLocally(datasetKey);
  markDatasetAsSynced(datasetKey);
  renderSupabaseRealtimeDataset(datasetKey);
}

function queueSupabaseRealtimeDatasetRefresh(datasetKey) {
  if (supabaseRealtimeRefreshTimers.has(datasetKey)) {
    clearTimeout(supabaseRealtimeRefreshTimers.get(datasetKey));
  }

  const timer = setTimeout(() => {
    supabaseRealtimeRefreshTimers.delete(datasetKey);
    refreshSupabaseRealtimeDataset(datasetKey).catch((error) => {
      setGoogleSheetsStatus(error.message, "error");
    });
  }, 120);

  supabaseRealtimeRefreshTimers.set(datasetKey, timer);
}

function subscribeSystemHubRealtime() {
  if (!hasGoogleSheetsSyncTarget()) return;

  const client = getSupabaseClient();

  if (systemHubRealtimeChannel) {
    client.removeChannel(systemHubRealtimeChannel);
  }

  systemHubRealtimeChannel = client.channel("systemhub-main-tables");

  SUPABASE_REALTIME_DATASETS.forEach((datasetKey) => {
    const table = SUPABASE_TABLE_CONFIG[datasetKey].table;

    systemHubRealtimeChannel.on(
      "postgres_changes",
      { event: "*", schema: "public", table },
      () => queueSupabaseRealtimeDatasetRefresh(datasetKey),
    );
  });

  systemHubRealtimeChannel.subscribe((status) => {
    if (status === "SUBSCRIBED") {
      setGoogleSheetsStatus("Realtime Supabase подключен.", "success");
    }
  });
}
async function initializeGoogleSheetsSync() {
  renderGoogleSheetsSettings();

  if (!hasGoogleSheetsSyncTarget()) {
    return;
  }

  setGoogleSheetsStatus("Подключаюсь к Supabase...");

  try {
    await refreshGoogleSheetsData({ force: true, showStatus: true, preserveLocalIfRemoteEmpty: true });
    subscribeSystemHubRealtime();
  } catch (error) {
    setGoogleSheetsStatus(error.message, "error");
  }
}
function aggregateBy(rows, keyGetter, valueGetter = () => 1) {
  return rows.reduce((map, row) => {
    const key = keyGetter(row) || "Не указано";
    const current = map.get(key) || { key, sessions: 0, students: 0 };
    current.sessions += 1;
    current.students += valueGetter(row);
    map.set(key, current);
    return map;
  }, new Map());
}

function getPromoPurchaseStatusMeta(status) {
  const statuses = {
    "": { label: "Выбрать статус", className: "matrix-status-empty" },
    approved: { label: "Одобрено", className: "matrix-status-approved" },
    rejected: { label: "Отказано", className: "matrix-status-rejected" },
    sent: { label: "Отправлено", className: "matrix-status-sent" },
    received: { label: "Получил", className: "matrix-status-received" },
    "not-received": { label: "Не получил", className: "matrix-status-not-received" },
    lost: { label: "Потерялся", className: "matrix-status-lost" },
  };

  return statuses[status ?? ""] || statuses[""];
}

function renderPromoPurchaseStatusSelect(purchase) {
  const statusOptions = [
    ["", "Выбрать статус"],
    ["approved", "Одобрено"],
    ["rejected", "Отказано"],
    ["sent", "Отправлено"],
    ["received", "Получил"],
    ["not-received", "Не получил"],
    ["lost", "Потерялся"],
  ];
  const status = getPromoPurchaseStatusMeta(purchase.status);
  const options = statusOptions
    .map(([value, label]) => `<option value="${value}" ${purchase.status === value ? "selected" : ""}>${label}</option>`)
    .join("");

  return `
    <select class="matrix-status-select ${status.className}" data-promo-purchase-status="${purchase.id}" aria-label="Статус покупки">
      ${options}
    </select>
  `;
}

function getPageFromHash() {
  if (window.location.hash === "#today") return "today";
  if (window.location.hash === "#my-tasks") return "myTasks";
  if (window.location.hash === "#links") return "links";
  if (window.location.hash === "#survey") return "survey";
  if (window.location.hash === "#promo") return "promo";
  if (window.location.hash === "#promo-purchases") return "promoPurchases";
  if (window.location.hash === "#purchase-analytics") return "purchaseAnalytics";
  if (window.location.hash === "#team-tasks") return "teamTasks";
  if (window.location.hash === "#elearning-team") return "elearningTeam";
  if (window.location.hash === "#team-development") return "teamDevelopment";
  if (window.location.hash === "#messenger") return "messenger";
  if (window.location.hash === "#trms-releases") return "trmsReleases";
  if (window.location.hash === "#dashboards") return "dashboards";
  if (window.location.hash === "#pdp-dashboard") return "pdpDashboard";
  if (window.location.hash === "#training-report") return "trainingReport";
  if (window.location.hash === "#participant-reports") return "participantReports";
  if (window.location.hash === "#settings") return "settings";
  return "systems";
}

function getHashForPage(page) {
  if (page === "myTasks") return "#my-tasks";
  if (page === "promoPurchases") return "#promo-purchases";
  if (page === "purchaseAnalytics") return "#purchase-analytics";
  if (page === "teamTasks") return "#team-tasks";
  if (page === "elearningTeam") return "#elearning-team";
  if (page === "teamDevelopment") return "#team-development";
  if (page === "messenger") return "#messenger";
  if (page === "trmsReleases") return "#trms-releases";
  if (page === "pdpDashboard") return "#pdp-dashboard";
  if (page === "trainingReport") return "#training-report";
  if (page === "participantReports") return "#participant-reports";
  if (page === "settings") return "#settings";
  return `#${page}`;
}

function showPage(page) {
  pagePanels.forEach((panel) => {
    const isActive = panel.dataset.pagePanel === page;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  navLinks.forEach((link) => {
    const isActive = link.dataset.navLink === page;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (page === "today") renderTodayDashboard();
  if (page === "myTasks") renderMyTasks();
  if (page === "pdpDashboard") renderPdpDashboard();
  if (page === "messenger") {
    loadSharedMessengerState({ silent: true }).catch(() => {});
    renderMessenger();
  }

  document.title = getPageTitle(page);
  applyLanguage(currentInterfaceLanguage);
}

function getFilteredRecords() {
  const query = searchInput.value.trim().toLowerCase();
  const filter = statusFilter.value;

  return records.filter((record) => {
    const status = getLicenseStatus(record).key;
    const matchesStatus = filter === "all" || status === filter;
    const matchesQuery =
      !query ||
      record.systemName.toLowerCase().includes(query) ||
      record.login.toLowerCase().includes(query);

    return matchesStatus && matchesQuery;
  });
}

function renderCounters() {
  const summary = records.reduce(
    (acc, record) => {
      acc.total += 1;
      acc[getLicenseStatus(record).key] += 1;
      return acc;
    },
    { total: 0, active: 0, soon: 0, expired: 0 },
  );

  counters.total.textContent = summary.total;
  counters.active.textContent = summary.active;
  counters.soon.textContent = summary.soon;
  counters.expired.textContent = summary.expired;
}

function renderTable() {
  const filteredRecords = getFilteredRecords();
  tableBody.innerHTML = "";
  emptyState.hidden = filteredRecords.length > 0;

  filteredRecords.forEach((record) => {
    const status = getLicenseStatus(record);
    const isPasswordVisible = visiblePasswords.has(record.id) && decryptedPasswordCache.has(record.id);
    const passwordValue = isPasswordVisible ? decryptedPasswordCache.get(record.id) : "••••••••";
    const passwordActionLabel = isPasswordVisible ? "Скрыть пароль" : "Показать пароль";
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <div class="system-cell">
          <strong>${escapeHtml(record.systemName)}</strong>
          <span>ID: ${escapeHtml(record.id.slice(-6))}</span>
        </div>
      </td>
      <td>${escapeHtml(record.login)}</td>
      <td>
        <span class="password-cell">
          <span class="password-value">${escapeHtml(passwordValue)}</span>
          <button class="icon-button" type="button" data-action="toggle-row-password" data-id="${record.id}" aria-label="${passwordActionLabel}" title="${passwordActionLabel}">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
          <button class="icon-button" type="button" data-action="copy-row-password" data-id="${record.id}" aria-label="Скопировать пароль" title="Скопировать пароль">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 8h11v13H8z"></path>
              <path d="M5 16H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </span>
      </td>
      <td>${formatDate(record.purchaseDate)}</td>
      <td>${formatDate(record.licenseEndDate)}</td>
      <td><span class="status-pill status-${status.key}">${status.label}</span></td>
      <td>
        <div class="row-actions">
          <button class="icon-button" type="button" data-action="edit" data-id="${record.id}" aria-label="Редактировать" title="Редактировать">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path>
            </svg>
          </button>
          <button class="icon-button delete-button" type="button" data-action="delete" data-id="${record.id}" aria-label="Удалить" title="Удалить">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18"></path>
              <path d="M8 6V4h8v2"></path>
              <path d="M19 6l-1 14H6L5 6"></path>
              <path d="M10 11v5M14 11v5"></path>
            </svg>
          </button>
        </div>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function renderLinks() {
  linksList.innerHTML = "";
  linksEmptyState.hidden = links.length > 0;

  links.forEach((link) => {
    const card = document.createElement("article");
    card.className = "link-card";

    card.innerHTML = `
      <div class="link-card-main">
        <strong>${escapeHtml(link.description)}</strong>
        <a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.url)}</a>
      </div>
      <div class="link-actions">
        <button class="icon-button" type="button" data-link-action="edit" data-id="${link.id}" aria-label="Редактировать ссылку" title="Редактировать">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path>
          </svg>
        </button>
        <button class="icon-button delete-button" type="button" data-link-action="delete" data-id="${link.id}" aria-label="Удалить ссылку" title="Удалить">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18"></path>
            <path d="M8 6V4h8v2"></path>
            <path d="M19 6l-1 14H6L5 6"></path>
            <path d="M10 11v5M14 11v5"></path>
          </svg>
        </button>
      </div>
    `;

    linksList.appendChild(card);
  });
}

function renderSurveyLinks() {
  surveyLinksList.innerHTML = "";
  surveyLinksEmptyState.hidden = surveyLinks.length > 0;

  surveyLinks.forEach((link) => {
    const card = document.createElement("article");
    card.className = "link-card";

    card.innerHTML = `
      <div class="link-card-main">
        <strong>${escapeHtml(link.description)}</strong>
        <a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.url)}</a>
      </div>
      <div class="link-actions">
        <button class="icon-button" type="button" data-survey-action="edit" data-id="${link.id}" aria-label="Редактировать ссылку на форму" title="Редактировать">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path>
          </svg>
        </button>
        <button class="icon-button delete-button" type="button" data-survey-action="delete" data-id="${link.id}" aria-label="Удалить ссылку на форму" title="Удалить">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18"></path>
            <path d="M8 6V4h8v2"></path>
            <path d="M19 6l-1 14H6L5 6"></path>
            <path d="M10 11v5M14 11v5"></path>
          </svg>
        </button>
      </div>
    `;

    surveyLinksList.appendChild(card);
  });
}

function renderPromoTable() {
  promoTable.innerHTML = "";
  promoEmptyState.hidden = promoItems.length > 0;

  promoItems.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <div class="system-cell">
          <strong>${escapeHtml(item.name)}</strong>
          <span>ID: ${escapeHtml(item.id.slice(-6))}</span>
        </div>
      </td>
      <td>${formatOptionalMoney(getPromoUnitPriceUsd(item), "$")}</td>
      <td>${formatOptionalMoney(getPromoUnitPriceKzt(item), "₸")}</td>
      <td>${formatQuantity(item.quantity)}</td>
      <td>${formatOptionalDecimal(getPromoExchangeRate(item), 2)}</td>
      <td>${formatOptionalMoney(getPromoTotalUsd(item), "$")}</td>
      <td>${formatOptionalMoney(getPromoTotalKzt(item), "₸")}</td>
      <td>
        <div class="row-actions">
          <button class="icon-button" type="button" data-promo-action="edit" data-id="${item.id}" aria-label="Редактировать промо продукцию" title="Редактировать">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path>
            </svg>
          </button>
          <button class="icon-button delete-button" type="button" data-promo-action="delete" data-id="${item.id}" aria-label="Удалить промо продукцию" title="Удалить">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18"></path>
              <path d="M8 6V4h8v2"></path>
              <path d="M19 6l-1 14H6L5 6"></path>
              <path d="M10 11v5M14 11v5"></path>
            </svg>
          </button>
        </div>
      </td>
    `;

    promoTable.appendChild(row);
  });
}

function renderStockTable() {
  stockTable.innerHTML = "";
  stockEmptyState.hidden = stockItems.length > 0;

  stockItems.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <div class="system-cell">
          <strong>${escapeHtml(item.name)}</strong>
          <span>ID: ${escapeHtml(item.id.slice(-6))}</span>
        </div>
      </td>
      <td>${formatQuantity(item.quantity)}</td>
      <td class="muted-cell">${escapeHtml(item.note || "—")}</td>
      <td>
        <div class="row-actions">
          <button class="icon-button" type="button" data-stock-action="edit" data-id="${item.id}" aria-label="Редактировать товар" title="Редактировать">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path>
            </svg>
          </button>
          <button class="icon-button delete-button" type="button" data-stock-action="delete" data-id="${item.id}" aria-label="Удалить товар" title="Удалить">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18"></path>
              <path d="M8 6V4h8v2"></path>
              <path d="M19 6l-1 14H6L5 6"></path>
              <path d="M10 11v5M14 11v5"></path>
            </svg>
          </button>
        </div>
      </td>
    `;

    stockTable.appendChild(row);
  });
}

function renderPromoPurchasePositions() {
  promoPurchasePositionsList.innerHTML = "";

  if (promoPurchasePositions.length === 0) {
    promoPurchasePositionsList.innerHTML = '<span class="inline-empty">Добавьте позиции, чтобы они появились колонками в таблице.</span>';
    return;
  }

  promoPurchasePositions.forEach((position) => {
    const chip = document.createElement("span");
    chip.className = "position-chip";
    chip.innerHTML = `
      <span>${escapeHtml(position.name)}</span>
      <button class="icon-button delete-button" type="button" data-position-action="delete" data-id="${position.id}" aria-label="Удалить позицию" title="Удалить позицию">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"></path>
        </svg>
      </button>
    `;

    promoPurchasePositionsList.appendChild(chip);
  });
}

function renderPromoPurchaseItemFields(items = {}) {
  promoPurchaseItemsFields.innerHTML = "";

  if (promoPurchasePositions.length === 0) {
    promoPurchaseItemsFields.innerHTML = '<span class="inline-empty">Сначала добавьте позиции промо продукции выше.</span>';
    return;
  }

  promoPurchasePositions.forEach((position) => {
    const label = document.createElement("label");
    label.className = "field";
    label.innerHTML = `
      <span>${escapeHtml(position.name)}</span>
      <input type="number" min="0" step="1" placeholder="0" value="${escapeHtml(items[position.id] ?? "")}" data-position-input="${position.id}" />
    `;

    promoPurchaseItemsFields.appendChild(label);
  });
}

function renderPromoPurchaseTable() {
  const dynamicHeaders = promoPurchasePositions
    .map((position) => `<th>${escapeHtml(position.name)}</th>`)
    .join("");

  promoPurchaseTableHead.innerHTML = `
    <th>№</th>
    <th>ФИО</th>
    <th>Адрес заказчика</th>
    <th>Город</th>
    <th>Центр</th>
    <th>Статус</th>
    ${dynamicHeaders}
    <th class="actions-col">Действия</th>
  `;

  promoPurchaseTable.innerHTML = "";
  promoPurchaseEmptyState.hidden = promoPurchases.length > 0;

  promoPurchases.forEach((purchase, index) => {
    const row = document.createElement("tr");
    const items = purchase.items || {};
    const dynamicCells = promoPurchasePositions
      .map((position) => `<td>${formatMatrixQuantity(items[position.id])}</td>`)
      .join("");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>
        <div class="system-cell">
          <strong>${escapeHtml(purchase.fullName || purchase.name || "—")}</strong>
          <span>ID: ${escapeHtml(purchase.id.slice(-6))}</span>
        </div>
      </td>
      <td>${escapeHtml(purchase.address || "—")}</td>
      <td>${escapeHtml(purchase.city || "—")}</td>
      <td>${escapeHtml(purchase.center || "—")}</td>
      <td>${renderPromoPurchaseStatusSelect(purchase)}</td>
      ${dynamicCells}
      <td>
        <div class="row-actions">
          <button class="icon-button" type="button" data-promo-purchase-action="edit" data-id="${purchase.id}" aria-label="Редактировать покупку промо" title="Редактировать">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path>
            </svg>
          </button>
          <button class="icon-button delete-button" type="button" data-promo-purchase-action="delete" data-id="${purchase.id}" aria-label="Удалить покупку промо" title="Удалить">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18"></path>
              <path d="M8 6V4h8v2"></path>
              <path d="M19 6l-1 14H6L5 6"></path>
              <path d="M10 11v5M14 11v5"></path>
            </svg>
          </button>
        </div>
      </td>
    `;

    promoPurchaseTable.appendChild(row);
  });
}

function getPurchaseAnalytics() {
  const positionStats = new Map();
  const centerStats = new Map();
  const statusStats = new Map();
  const buyerStats = new Map();
  const orderedByName = new Map();
  const stockByName = new Map();
  const centers = new Set();
  let totalItems = 0;

  promoPurchasePositions.forEach((position) => {
    positionStats.set(position.id, {
      buyers: 0,
      id: position.id,
      name: position.name,
      total: 0,
    });
  });

  stockItems.forEach((item) => {
    const key = normalizeKey(item.name);
    if (!key) return;

    const existing = stockByName.get(key) || { name: item.name, quantity: 0 };
    existing.quantity += toNumber(item.quantity);
    stockByName.set(key, existing);
  });

  promoPurchases.forEach((purchase) => {
    const itemTotal = sumPurchaseItems(purchase);
    const center = purchase.center?.trim() || "Не указан";
    const buyer = purchase.fullName?.trim() || purchase.name?.trim() || "Без ФИО";
    const statusKey = purchase.status || "";
    const status = getPromoPurchaseStatusMeta(statusKey);

    totalItems += itemTotal;
    if (center !== "Не указан") centers.add(center);

    const centerStat = centerStats.get(center) || { buyers: 0, name: center, total: 0 };
    centerStat.buyers += 1;
    centerStat.total += itemTotal;
    centerStats.set(center, centerStat);

    const statusStat = statusStats.get(statusKey) || { buyers: 0, className: status.className, label: statusKey ? status.label : "Без статуса", total: 0 };
    statusStat.buyers += 1;
    statusStat.total += itemTotal;
    statusStats.set(statusKey, statusStat);

    const buyerStat = buyerStats.get(buyer) || { center, name: buyer, orders: 0, total: 0 };
    buyerStat.orders += 1;
    buyerStat.total += itemTotal;
    if (center !== "Не указан") buyerStat.center = center;
    buyerStats.set(buyer, buyerStat);

    Object.entries(purchase.items || {}).forEach(([positionId, rawQuantity]) => {
      const quantity = toNumber(rawQuantity);
      if (quantity <= 0) return;

      const position = promoPurchasePositions.find((item) => item.id === positionId);
      const name = position?.name || "Удаленная позиция";
      const positionStat = positionStats.get(positionId) || { buyers: 0, id: positionId, name, total: 0 };
      positionStat.total += quantity;
      positionStat.buyers += 1;
      positionStats.set(positionId, positionStat);

      const key = normalizeKey(name);
      orderedByName.set(key, (orderedByName.get(key) || 0) + quantity);
    });
  });

  const remainingKeys = new Set([...stockByName.keys(), ...orderedByName.keys()]);
  const remaining = [...remainingKeys].map((key) => {
    const stock = stockByName.get(key);
    const ordered = orderedByName.get(key) || 0;

    return {
      name: stock?.name || promoPurchasePositions.find((position) => normalizeKey(position.name) === key)?.name || "Удаленная позиция",
      ordered,
      remaining: stock ? stock.quantity - ordered : null,
      stock: stock?.quantity ?? null,
    };
  });

  return {
    buyers: [...buyerStats.values()].sort((a, b) => b.total - a.total),
    centers: [...centerStats.values()].sort((a, b) => b.total - a.total),
    centerCount: centers.size,
    positions: [...positionStats.values()].filter((item) => item.total > 0).sort((a, b) => b.total - a.total),
    remaining: remaining.sort((a, b) => b.ordered - a.ordered),
    statuses: [...statusStats.values()].sort((a, b) => b.buyers - a.buyers),
    totalBuyers: promoPurchases.length,
    totalItems,
  };
}

function renderPurchaseAnalytics() {
  const analytics = getPurchaseAnalytics();

  analyticsBuyerCount.textContent = analytics.totalBuyers;
  analyticsItemCount.textContent = formatQuantity(analytics.totalItems);
  analyticsCenterCount.textContent = analytics.centerCount;
  analyticsPositionCount.textContent = promoPurchasePositions.length;

  analyticsProductsTable.innerHTML =
    analytics.positions.length > 0
      ? analytics.positions
          .map((item) => `
            <tr>
              <td>${escapeHtml(item.name)}</td>
              <td>${formatQuantity(item.total)}</td>
              <td>${formatQuantity(item.buyers)}</td>
            </tr>
          `)
          .join("")
      : renderAnalyticsEmptyRow(3, "Покупок по позициям пока нет.");

  analyticsCentersTable.innerHTML =
    analytics.centers.length > 0
      ? analytics.centers
          .map((item) => `
            <tr>
              <td>${escapeHtml(item.name)}</td>
              <td>${formatQuantity(item.buyers)}</td>
              <td>${formatQuantity(item.total)}</td>
            </tr>
          `)
          .join("")
      : renderAnalyticsEmptyRow(3, "Центры пока не указаны.");

  analyticsRemainingTable.innerHTML =
    analytics.remaining.length > 0
      ? analytics.remaining
          .map((item) => `
            <tr>
              <td>${escapeHtml(item.name)}</td>
              <td>${item.stock === null ? "Не задано" : formatQuantity(item.stock)}</td>
              <td>${formatQuantity(item.ordered)}</td>
              <td>${item.remaining === null ? "—" : formatQuantity(item.remaining)}</td>
            </tr>
          `)
          .join("")
      : renderAnalyticsEmptyRow(4, "Остатки и покупки пока не заполнены.");

  analyticsStatusesTable.innerHTML =
    analytics.statuses.length > 0
      ? analytics.statuses
          .map((item) => `
            <tr>
              <td><span class="matrix-status ${item.className}">${item.label}</span></td>
              <td>${formatQuantity(item.buyers)}</td>
              <td>${formatQuantity(item.total)}</td>
            </tr>
          `)
          .join("")
      : renderAnalyticsEmptyRow(3, "Статусы пока не выставлены.");

  analyticsTopBuyersTable.innerHTML =
    analytics.buyers.length > 0
      ? analytics.buyers
          .map((item) => `
            <tr>
              <td>${escapeHtml(item.name)}</td>
              <td>${escapeHtml(item.center)}</td>
              <td>${formatQuantity(item.orders)}</td>
              <td>${formatQuantity(item.total)}</td>
            </tr>
          `)
          .join("")
      : renderAnalyticsEmptyRow(4, "Покупателей пока нет.");
}

function getElearningEmployeeBase(id) {
  return DEFAULT_ELEARNING_TEAM.find((employee) => employee.id === id) || null;
}

function getElearningEmployee(id) {
  const base = getElearningEmployeeBase(id);
  if (!base) return null;

  return {
    email: "",
    mobile: "",
    workPhone: "",
    photo: "",
    ...base,
    ...(elearningTeamProfiles[id] || {}),
    id: base.id,
    parentId: base.parentId,
    name: base.name,
  };
}

function getEmployeeInitials(name) {
  return String(name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function renderEmployeeAvatar(employee, className = "team-org-avatar") {
  const photo = employee.photo || "";
  return `
    <span class="${className}">
      ${photo ? `<img src="${escapeHtml(photo)}" alt="${escapeHtml(employee.name)}" />` : escapeHtml(getEmployeeInitials(employee.name))}
    </span>
  `;
}

function renderElearningTeamNode(employee) {
  const children = DEFAULT_ELEARNING_TEAM.filter((item) => item.parentId === employee.id);
  const profile = getElearningEmployee(employee.id);

  return `
    <li class="team-org-node">
      <button class="team-org-card" type="button" data-employee-id="${escapeHtml(employee.id)}">
        ${renderEmployeeAvatar(profile)}
        <span class="team-org-main">
          <strong>${escapeHtml(profile.name)}</strong>
          <span>${escapeHtml(profile.jobTitle || "")}</span>
          <span>${escapeHtml([profile.department, profile.workLocation].filter(Boolean).join(" · "))}</span>
        </span>
      </button>
      ${
        children.length > 0
          ? `<ul class="team-org-list is-children">${children.map(renderElearningTeamNode).join("")}</ul>`
          : ""
      }
    </li>
  `;
}

function renderElearningTeam() {
  if (!elearningTeamTree) return;

  const roots = DEFAULT_ELEARNING_TEAM.filter((employee) => !employee.parentId);
  elearningTeamTree.innerHTML = `<ul class="team-org-list">${roots.map(renderElearningTeamNode).join("")}</ul>`;
}

function setEmployeePhotoPreview(employee) {
  if (!employeePhotoPreview) return;

  if (!employee) {
    employeePhotoPreview.innerHTML = "";
    return;
  }

  employeePhotoPreview.innerHTML = employee.photo
    ? `<img src="${escapeHtml(employee.photo)}" alt="${escapeHtml(employee.name)}" />`
    : escapeHtml(getEmployeeInitials(employee.name));
}

function openEmployeeModal(id) {
  const employee = getElearningEmployee(id);
  if (!employee || !employeeModal || !employeeProfileForm) return;

  activeEmployeeId = id;
  pendingEmployeePhoto = employee.photo || "";
  employeeProfileForm.reset();
  employeeProfileIdInput.value = id;
  employeeProfileName.textContent = employee.name;
  employeeProfileRole.textContent = employee.jobTitle || "";
  employeeProfileOrg.textContent = [employee.department, employee.workLocation].filter(Boolean).join(" · ");
  setEmployeePhotoPreview(employee);

  employeeEmailInput.value = employee.email || "";
  employeeMobileInput.value = employee.mobile || "";
  employeeWorkPhoneInput.value = employee.workPhone || "";
  employeeWorkLocationInput.value = employee.workLocation || "";
  employeeCompanyInput.value = employee.company || "";
  employeeJobTitleInput.value = employee.jobTitle || "";
  employeeDepartmentInput.value = employee.department || "";

  employeeModal.hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => employeeEmailInput?.focus(), 0);
}

function closeEmployeeModal() {
  if (!employeeModal) return;

  employeeModal.hidden = true;
  activeEmployeeId = "";
  pendingEmployeePhoto = "";
  document.body.classList.remove("modal-open");
}

function getEmployeeProfileFromForm() {
  return {
    email: employeeEmailInput.value.trim(),
    mobile: employeeMobileInput.value.trim(),
    workPhone: employeeWorkPhoneInput.value.trim(),
    workLocation: employeeWorkLocationInput.value.trim(),
    company: employeeCompanyInput.value.trim(),
    jobTitle: employeeJobTitleInput.value.trim(),
    department: employeeDepartmentInput.value.trim(),
    photo: pendingEmployeePhoto,
    updatedAt: new Date().toISOString(),
  };
}

function saveEmployeeProfile() {
  if (!activeEmployeeId) return;

  elearningTeamProfiles = {
    ...elearningTeamProfiles,
    [activeEmployeeId]: getEmployeeProfileFromForm(),
  };
  saveElearningTeamProfiles();
  renderElearningTeam();
}

function readEmployeePhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")));
    reader.addEventListener("error", () => reject(reader.error || new Error("Не удалось прочитать файл.")));
    reader.readAsDataURL(file);
  });
}

function getTeamDevelopmentEmployeeOptions() {
  const names = [
    currentUser?.displayName,
    currentUser?.login,
    ...DEFAULT_ELEARNING_TEAM.map((employee) => employee.name),
    ...teamTaskMembers,
  ];

  return [...new Set(names.map((name) => String(name || "").trim()).filter(Boolean))];
}

function getTeamDevelopmentEmployeeName() {
  return String(teamDevelopmentEmployeeInput?.value || "").trim() || getCurrentUserDisplayName();
}

function getTeamDevelopmentTest(key = activeTeamDevelopmentTest) {
  return TEAM_DEVELOPMENT_TESTS[key] || TEAM_DEVELOPMENT_TESTS.herzberg;
}

function renderTeamDevelopmentDatalist() {
  if (!teamDevelopmentEmployeeDatalist) return;

  teamDevelopmentEmployeeDatalist.innerHTML = getTeamDevelopmentEmployeeOptions()
    .map((name) => `<option value="${escapeHtml(name)}"></option>`)
    .join("");

  if (teamDevelopmentEmployeeInput && !teamDevelopmentEmployeeInput.value) {
    teamDevelopmentEmployeeInput.value = getCurrentUserDisplayName();
  }
}

function renderDevelopmentScale(question, index) {
  return `
    <div class="development-scale" role="radiogroup" aria-label="${escapeHtml(question.text)}">
      ${DEVELOPMENT_SCALE_LABELS.map((label, valueIndex) => {
        const value = valueIndex + 1;
        return `
          <label>
            <input type="radio" name="developmentQuestion${index}" value="${value}" required />
            <span class="development-scale-value">${value}</span>
            <span class="development-scale-label">${escapeHtml(label)}</span>
          </label>
        `;
      }).join("")}
    </div>
  `;
}

function renderTeamDevelopmentTest() {
  if (!teamDevelopmentTestContent) return;

  const test = getTeamDevelopmentTest();
  pendingTeamDevelopmentResult = null;
  if (teamDevelopmentResult) {
    teamDevelopmentResult.hidden = true;
    teamDevelopmentResult.innerHTML = "";
  }

  teamDevelopmentTestContent.innerHTML = `
    <form class="development-test-form" id="teamDevelopmentTestForm" data-test-key="${escapeHtml(activeTeamDevelopmentTest)}" data-total-questions="${test.questions.length}">
      <div class="development-test-head">
        <p class="eyebrow">Текущий тест</p>
        <h3>${escapeHtml(test.title)}</h3>
        <p>${escapeHtml(test.subtitle)}</p>
        <p>${escapeHtml(test.disclaimer)}</p>
      </div>

      <div class="development-progress" aria-live="polite">
        <div class="development-progress-top">
          <span>Прогресс заполнения</span>
          <strong data-development-progress-text>0 / ${test.questions.length}</strong>
        </div>
        <div class="development-progress-track" aria-hidden="true">
          <div class="development-progress-fill" data-development-progress-fill></div>
        </div>
      </div>

      <div class="development-question-list">
        ${test.questions.map((question, index) => `
          <article class="development-question" data-development-question-index="${index}">
            <div class="development-question-head">
              <span class="development-question-index">${index + 1}</span>
              <div class="development-question-copy">
                <strong>${escapeHtml(question.text)}</strong>
                ${question.label ? `<p>${escapeHtml(question.label)}</p>` : ""}
              </div>
            </div>
            ${renderDevelopmentScale(question, index)}
          </article>
        `).join("")}
      </div>

      <div class="development-form-actions">
        <button class="primary-button" type="submit">Рассчитать результат</button>
        <button class="ghost-button" type="reset">Сбросить выбор</button>
      </div>
    </form>
  `;

  updateTeamDevelopmentProgress(teamDevelopmentTestContent.querySelector("#teamDevelopmentTestForm"));
}

function updateTeamDevelopmentProgress(form = teamDevelopmentTestContent?.querySelector("#teamDevelopmentTestForm")) {
  if (!form) return;

  const total = Number(form.dataset.totalQuestions) || form.querySelectorAll(".development-question").length;
  const answeredNames = new Set([...form.querySelectorAll('input[type="radio"]:checked')].map((input) => input.name));
  const answered = answeredNames.size;
  const percent = total > 0 ? Math.round((answered / total) * 100) : 0;
  const progressText = form.querySelector("[data-development-progress-text]");
  const progressFill = form.querySelector("[data-development-progress-fill]");

  if (progressText) progressText.textContent = `${answered} / ${total}`;
  if (progressFill) progressFill.style.width = `${percent}%`;

  form.querySelectorAll(".development-question").forEach((question) => {
    const index = question.dataset.developmentQuestionIndex;
    const checked = form.querySelector(`input[name="developmentQuestion${index}"]:checked`);
    question.classList.toggle("is-answered", Boolean(checked));
  });
}

function setActiveTeamDevelopmentTest(testKey) {
  if (!TEAM_DEVELOPMENT_TESTS[testKey]) return;

  activeTeamDevelopmentTest = testKey;
  if (teamDevelopmentTabs) {
    teamDevelopmentTabs.querySelectorAll("[data-development-test]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.developmentTest === testKey);
    });
  }
  renderTeamDevelopmentTest();
}

function collectTeamDevelopmentAnswers(form, test) {
  return test.questions.map((question, index) => {
    const checked = form.querySelector(`input[name="developmentQuestion${index}"]:checked`);
    return {
      ...question,
      value: checked ? Number(checked.value) : 0,
    };
  });
}

function calculateTeamDevelopmentResult(testKey, answers) {
  const test = getTeamDevelopmentTest(testKey);
  const dimensionScores = Object.keys(test.dimensions).reduce((scores, key) => {
    scores[key] = {
      key,
      label: test.dimensions[key].label,
      description: test.dimensions[key].description,
      advice: test.dimensions[key].advice,
      score: 0,
      max: 0,
    };
    return scores;
  }, {});

  answers.forEach((answer) => {
    if (!dimensionScores[answer.dimension]) return;
    dimensionScores[answer.dimension].score += answer.value;
    dimensionScores[answer.dimension].max += 5;
  });

  const scores = Object.values(dimensionScores)
    .map((item) => ({
      ...item,
      percent: item.max > 0 ? Math.round((item.score / item.max) * 100) : 0,
    }))
    .sort((a, b) => b.score - a.score);

  const top = scores[0];
  const selectedFactors = answers
    .filter((answer) => answer.value >= 4)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)
    .map((answer) => {
      const label = answer.label || test.dimensions[answer.dimension]?.label || "";
      return label ? `${label}: ${answer.text}` : answer.text;
    })
    .filter((value, index, values) => values.indexOf(value) === index);

  let summary = `Ведущий профиль: ${top.label}. ${top.description}`;
  if (testKey === "herzberg") {
    const motivator = scores.find((item) => item.key === "motivator");
    const hygiene = scores.find((item) => item.key === "hygiene");
    const difference = (motivator?.score || 0) - (hygiene?.score || 0);
    if (Math.abs(difference) <= 4) {
      summary = "Профиль сбалансирован: сотруднику важны и содержательные мотиваторы, и качество рабочих условий.";
    } else if (difference > 0) {
      summary = "Преобладают мотиваторы роста: сотрудника сильнее включают достижения, признание, ответственность и развитие.";
    } else {
      summary = "Преобладают гигиенические условия: сначала важно обеспечить понятные правила, стабильность, ресурсы и здоровую среду.";
    }
  }

  return {
    testKey,
    testTitle: test.title,
    primaryResult: top.label,
    summary,
    scores,
    selectedFactors,
    recommendations: scores.slice(0, 3).map((item) => item.advice),
  };
}

function getDevelopmentScoreLevel(percent) {
  if (percent >= 80) return "Сильный сигнал";
  if (percent >= 60) return "Выражено умеренно";
  if (percent >= 45) return "Зона внимания";
  return "Нужна поддержка";
}

function hydrateTeamDevelopmentResult(result) {
  const test = getTeamDevelopmentTest(result?.testKey);
  const scores = (Array.isArray(result?.scores) ? result.scores : []).map((score) => {
    const dimension = test.dimensions?.[score.key] || {};
    const max = Number(score.max) || 0;
    const rawScore = Number(score.score) || 0;
    const percent = Number(score.percent) || (max > 0 ? Math.round((rawScore / max) * 100) : 0);
    return {
      key: score.key || "",
      label: score.label || dimension.label || score.key || "Показатель",
      description: score.description || dimension.description || "",
      advice: score.advice || dimension.advice || "",
      score: rawScore,
      max,
      percent,
    };
  });

  return {
    testKey: result?.testKey || activeTeamDevelopmentTest,
    testTitle: result?.testTitle || test.title,
    primaryResult: result?.primaryResult || scores[0]?.label || test.title,
    summary: result?.summary || "",
    scores,
    selectedFactors: Array.isArray(result?.selectedFactors) ? result.selectedFactors : [],
    recommendations: Array.isArray(result?.recommendations) && result.recommendations.length > 0
      ? result.recommendations
      : scores.slice(0, 3).map((score) => score.advice).filter(Boolean),
  };
}

function renderTeamDevelopmentResultBody(result, eyebrow = "Финальный результат") {
  const hydrated = hydrateTeamDevelopmentResult(result);
  const focusAreas = [...hydrated.scores]
    .sort((a, b) => a.percent - b.percent)
    .slice(0, 2)
    .filter((score) => score.description || score.advice);

  return `
    <div class="development-result-hero">
      <p class="eyebrow">${escapeHtml(eyebrow)}</p>
      <h3>${escapeHtml(hydrated.primaryResult)}</h3>
      <p>${escapeHtml(hydrated.summary)}</p>
    </div>

    <div class="development-score-grid">
      ${hydrated.scores.map((score, index) => `
        <article class="development-score-card ${index === 0 ? "is-primary" : ""}">
          <strong>${escapeHtml(score.label)}</strong>
          <div class="development-score-meta">
            <span>${formatQuantity(score.score)} баллов</span>
            <span>${score.percent}%</span>
            <span class="development-score-level">${escapeHtml(getDevelopmentScoreLevel(score.percent))}</span>
          </div>
          <div class="development-score-bar"><div style="width:${Math.max(0, Math.min(100, score.percent))}%"></div></div>
          ${score.description ? `<span>${escapeHtml(score.description)}</span>` : ""}
          ${score.advice ? `<div class="development-score-advice"><strong>Как использовать:</strong> ${escapeHtml(score.advice)}</div>` : ""}
        </article>
      `).join("")}
    </div>

    ${hydrated.selectedFactors.length ? `
      <div>
        <p class="eyebrow">Сильные сигналы</p>
        <ul class="development-result-list">
          ${hydrated.selectedFactors.map((factor) => `<li>${escapeHtml(factor)}</li>`).join("")}
        </ul>
      </div>
    ` : ""}

    ${focusAreas.length ? `
      <div>
        <p class="eyebrow">Зоны внимания</p>
        <div class="development-focus-grid">
          ${focusAreas.map((score) => `
            <article class="development-focus-card">
              <strong>${escapeHtml(score.label)} · ${score.percent}%</strong>
              ${score.description ? `<span>${escapeHtml(score.description)}</span>` : ""}
              ${score.advice ? `<span>${escapeHtml(score.advice)}</span>` : ""}
            </article>
          `).join("")}
        </div>
      </div>
    ` : ""}

    ${hydrated.recommendations.length ? `
      <div>
        <p class="eyebrow">Рекомендации</p>
        <ul class="development-result-list">
          ${hydrated.recommendations.map((recommendation) => `<li>${escapeHtml(recommendation)}</li>`).join("")}
        </ul>
      </div>
    ` : ""}
  `;
}

function isTeamDevelopmentSensitiveUnlocked() {
  return Boolean(currentUser && teamDevelopmentSensitiveUnlocked);
}

function setTeamDevelopmentAccessStatus(message, type = "") {
  if (!teamDevelopmentAccessStatus) return;
  teamDevelopmentAccessStatus.textContent = message;
  teamDevelopmentAccessStatus.className = `sync-status${type ? ` is-${type}` : ""}`;
}

function renderTeamDevelopmentAccess(options = {}) {
  const unlocked = isTeamDevelopmentSensitiveUnlocked();

  if (teamDevelopmentSensitiveContent) {
    teamDevelopmentSensitiveContent.hidden = !unlocked;
  }

  if (teamDevelopmentAccessLoginInput) {
    teamDevelopmentAccessLoginInput.disabled = unlocked;
  }

  if (teamDevelopmentAccessPasswordInput) {
    teamDevelopmentAccessPasswordInput.disabled = unlocked;
  }

  const submitButton = teamDevelopmentAccessForm?.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.disabled = unlocked;
  }

  if (lockTeamDevelopmentAccessButton) {
    lockTeamDevelopmentAccessButton.hidden = !unlocked;
  }

  if (!options.preserveStatus) {
    if (unlocked) {
      setTeamDevelopmentAccessStatus(`Доступ открыт: ${teamDevelopmentSensitiveUnlockedBy || "разрешенный пользователь"}.`, "success");
    } else {
      setTeamDevelopmentAccessStatus("Данные скрыты до проверки логина 14524 или 14962.", "warning");
    }
  }
}

function lockTeamDevelopmentSensitiveAccess(options = {}) {
  teamDevelopmentSensitiveUnlocked = false;
  teamDevelopmentSensitiveUnlockedBy = "";
  activeTeamDevelopmentSavedResultId = "";

  if (teamDevelopmentAccessForm) teamDevelopmentAccessForm.reset();

  renderTeamDevelopmentAccess();
  renderTeamDevelopmentSavedResults();
  renderTeamDevelopmentPortrait();
  renderGlobalSearchResults();

  if (options.focus) {
    teamDevelopmentAccessLoginInput?.focus();
  }
}

async function unlockTeamDevelopmentSensitiveAccess() {
  if (!teamDevelopmentAccessForm?.reportValidity()) return;

  const login = normalizeAuthLogin(teamDevelopmentAccessLoginInput?.value || "");
  const password = teamDevelopmentAccessPasswordInput?.value || "";

  setTeamDevelopmentAccessStatus("Проверяю доступ...");

  try {
    await bootstrapDefaultAdminUsers();
    const user = await getAuthUserByLogin(login);

    if (!user || !user.isActive) {
      throw new Error("Неверный логин или пароль.");
    }

    const passwordMatches = await verifyAuthPassword(password, user.passwordSalt, user.passwordHash);
    if (!passwordMatches) {
      throw new Error("Неверный логин или пароль.");
    }

    if (!TEAM_DEVELOPMENT_SENSITIVE_ACCESS_LOGINS.has(user.login)) {
      throw new Error("Доступ к портретам и сохраненным результатам разрешен только логинам 14524 и 14962.");
    }

    teamDevelopmentSensitiveUnlocked = true;
    teamDevelopmentSensitiveUnlockedBy = user.displayName || user.login;
    if (teamDevelopmentAccessPasswordInput) teamDevelopmentAccessPasswordInput.value = "";
    renderTeamDevelopmentAccess();
    renderTeamDevelopmentSavedResults();
    renderTeamDevelopmentPortrait();
    renderGlobalSearchResults();
  } catch (error) {
    teamDevelopmentSensitiveUnlocked = false;
    teamDevelopmentSensitiveUnlockedBy = "";
    setTeamDevelopmentAccessStatus(error.message || "Не удалось открыть доступ.", "error");
    renderTeamDevelopmentAccess({ preserveStatus: true });
    renderTeamDevelopmentSavedResults();
    renderTeamDevelopmentPortrait();
  }
}

function getTeamDevelopmentPortraitEmployeeNames() {
  return [...new Set([
    ...teamDevelopmentResults.map((item) => item.employeeName),
    teamDevelopmentEmployeeInput?.value,
    ...getTeamDevelopmentEmployeeOptions(),
  ].map((name) => String(name || "").trim()).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "ru"));
}

function getLatestTeamDevelopmentResultsByTest(employeeName) {
  const employeeKey = normalizeNotificationIdentity(employeeName);
  if (!employeeKey) return [];

  const latestByTest = new Map();
  [...teamDevelopmentResults]
    .filter((item) => normalizeNotificationIdentity(item.employeeName) === employeeKey)
    .sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")))
    .forEach((item) => {
      const testKey = item.testKey || item.testTitle || item.id;
      if (!latestByTest.has(testKey)) latestByTest.set(testKey, item);
    });

  return [...latestByTest.values()]
    .sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
}

function ensureTeamDevelopmentPortraitEmployee() {
  const names = getTeamDevelopmentPortraitEmployeeNames();
  const savedNames = [...new Set(teamDevelopmentResults.map((item) => item.employeeName).filter(Boolean))];
  const findName = (value) => names.find((name) => normalizeNotificationIdentity(name) === normalizeNotificationIdentity(value));
  const hasSavedResults = (value) => teamDevelopmentResults
    .some((item) => normalizeNotificationIdentity(item.employeeName) === normalizeNotificationIdentity(value));
  const activeMatch = findName(activeTeamDevelopmentPortraitEmployee);

  if (activeMatch) {
    activeTeamDevelopmentPortraitEmployee = activeMatch;
    return activeTeamDevelopmentPortraitEmployee;
  }

  activeTeamDevelopmentPortraitEmployee =
    (hasSavedResults(getTeamDevelopmentEmployeeName()) ? findName(getTeamDevelopmentEmployeeName()) : "")
    || savedNames[0]
    || findName(getTeamDevelopmentEmployeeName())
    || names[0]
    || "";

  return activeTeamDevelopmentPortraitEmployee;
}

function renderTeamDevelopmentPortraitEmployeeOptions() {
  if (!teamDevelopmentPortraitEmployeeSelect) return;
  if (!isTeamDevelopmentSensitiveUnlocked()) {
    teamDevelopmentPortraitEmployeeSelect.innerHTML = "";
    return;
  }

  const names = getTeamDevelopmentPortraitEmployeeNames();
  const selectedName = ensureTeamDevelopmentPortraitEmployee();
  teamDevelopmentPortraitEmployeeSelect.innerHTML = names.length > 0
    ? names.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("")
    : '<option value="">Нет сотрудников</option>';

  if (selectedName) {
    teamDevelopmentPortraitEmployeeSelect.value = selectedName;
  }
}

function getTeamDevelopmentPortraitScoreItems(results) {
  return results.flatMap((item) => {
    const hydrated = hydrateTeamDevelopmentResult(item);
    return hydrated.scores.map((score) => ({
      ...score,
      testTitle: hydrated.testTitle,
      primaryResult: hydrated.primaryResult,
      createdAt: item.createdAt,
    }));
  }).filter((score) => score.label && Number.isFinite(score.percent));
}

function getUniqueDevelopmentPortraitItems(items, limit = 6) {
  const seen = new Set();
  return items.filter((item) => {
    const key = normalizeNotificationIdentity([item.label, item.testTitle].join(" "));
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, limit);
}

function renderDevelopmentPortraitList(items, emptyText) {
  if (!items.length) return `<p>${escapeHtml(emptyText)}</p>`;

  return `
    <ul class="development-portrait-list">
      ${items.map((item) => `
        <li>
          <strong>${escapeHtml(item.label)} · ${item.percent}%</strong>
          ${item.testTitle ? ` (${escapeHtml(item.testTitle)})` : ""} — ${escapeHtml(item.description || item.advice || "Сигнал требует обсуждения с сотрудником.")}
          ${item.advice ? `<br>${escapeHtml(item.advice)}` : ""}
        </li>
      `).join("")}
    </ul>
  `;
}

function getTeamDevelopmentTestKeys() {
  return Object.keys(TEAM_DEVELOPMENT_TESTS);
}

function getMissingTeamDevelopmentTests(results) {
  const completed = new Set(results.map((item) => item.testKey).filter(Boolean));
  return getTeamDevelopmentTestKeys()
    .filter((testKey) => !completed.has(testKey))
    .map((testKey) => getTeamDevelopmentTest(testKey).title);
}

function createDevelopmentScoreLookup(results) {
  const lookup = new Map();
  results.forEach((item) => {
    const hydrated = hydrateTeamDevelopmentResult(item);
    hydrated.scores.forEach((score) => {
      lookup.set(`${item.testKey}:${score.key}`, Number(score.percent) || 0);
    });
  });
  return lookup;
}

function getDevelopmentScorePercent(scoreLookup, testKey, dimensionKey, fallback = 50) {
  const value = scoreLookup.get(`${testKey}:${dimensionKey}`);
  return Number.isFinite(value) ? value : fallback;
}

function invertDevelopmentSignal(value) {
  return Math.max(0, Math.min(100, 100 - (Number(value) || 0)));
}

function averageDevelopmentSignals(values) {
  const validValues = values.map(Number).filter(Number.isFinite);
  if (!validValues.length) return 0;
  return Math.round(validValues.reduce((sum, value) => sum + value, 0) / validValues.length);
}

function getPlutchikEmotionScores(results) {
  const scoreLookup = createDevelopmentScoreLookup(results);
  const score = (testKey, dimensionKey) => getDevelopmentScorePercent(scoreLookup, testKey, dimensionKey);
  const inverse = (testKey, dimensionKey) => invertDevelopmentSignal(score(testKey, dimensionKey));

  return [
    {
      key: "joy",
      label: "Радость",
      color: "#f5c451",
      description: "Энергия, вовлеченность, признание и ощущение роста.",
      percent: averageDevelopmentSignals([
        score("herzberg", "motivator"),
        score("energy", "recovery"),
        score("feedback", "recognition"),
        score("trust", "cooperation"),
      ]),
    },
    {
      key: "trust",
      label: "Доверие",
      color: "#5ee1a4",
      description: "Надежность, психологическая безопасность и готовность опираться на команду.",
      percent: averageDevelopmentSignals([
        score("trust", "reliability"),
        score("trust", "cooperation"),
        score("psychSafety", "respect"),
        score("psychSafety", "help"),
        score("feedback", "privacy"),
      ]),
    },
    {
      key: "fear",
      label: "Страх",
      color: "#7fd96b",
      description: "Риск осторожности из-за низкой безопасности, неясности или слабого контроля.",
      percent: averageDevelopmentSignals([
        inverse("psychSafety", "voice"),
        inverse("psychSafety", "mistakes"),
        inverse("trust", "clarity"),
        inverse("energy", "control"),
      ]),
    },
    {
      key: "surprise",
      label: "Удивление",
      color: "#37c8ef",
      description: "Открытость новому, любопытство, гибкость и реакция на изменения.",
      percent: averageDevelopmentSignals([
        score("learningAgility", "curiosity"),
        score("learningAgility", "adaptability"),
        score("learningAgility", "experimentation"),
        score("belbin", "plant"),
        score("belbin", "resource"),
      ]),
    },
    {
      key: "sadness",
      label: "Грусть",
      color: "#4d8fff",
      description: "Сигнал возможного снижения энергии, признания или ясности.",
      percent: averageDevelopmentSignals([
        inverse("energy", "recovery"),
        inverse("energy", "clarity"),
        inverse("herzberg", "hygiene"),
        inverse("feedback", "recognition"),
      ]),
    },
    {
      key: "disgust",
      label: "Отвращение",
      color: "#a678f0",
      description: "Сигнал отторжения при низком уважении, коммуникации или справедливости взаимодействия.",
      percent: averageDevelopmentSignals([
        inverse("psychSafety", "respect"),
        inverse("trust", "communication"),
        inverse("trust", "reliability"),
        inverse("trust", "cooperation"),
      ]),
    },
    {
      key: "anger",
      label: "Гнев",
      color: "#f05c5c",
      description: "Напор, конкуренция и риск напряжения при перегрузе или низком уважении.",
      percent: averageDevelopmentSignals([
        score("tki", "competing"),
        score("disc", "d"),
        inverse("energy", "workload"),
        inverse("psychSafety", "respect"),
      ]),
    },
    {
      key: "anticipation",
      label: "Ожидание",
      color: "#f29b38",
      description: "Готовность планировать, действовать, пробовать и двигаться к следующему шагу.",
      percent: averageDevelopmentSignals([
        score("learningAgility", "curiosity"),
        score("learningAgility", "experimentation"),
        score("belbin", "implementer"),
        score("belbin", "coordinator"),
        score("herzberg", "motivator"),
      ]),
    },
  ];
}

function getPlutchikSegmentPath(index, percent) {
  const center = 120;
  const minRadius = 34;
  const maxRadius = 102;
  const radius = minRadius + ((Math.max(0, Math.min(100, percent)) / 100) * (maxRadius - minRadius));
  const startAngle = (index * 45) - 112.5;
  const endAngle = startAngle + 45;
  const point = (angle) => {
    const radians = (angle * Math.PI) / 180;
    return {
      x: center + (Math.cos(radians) * radius),
      y: center + (Math.sin(radians) * radius),
    };
  };
  const start = point(startAngle);
  const end = point(endAngle);

  return `M ${center} ${center} L ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${radius.toFixed(2)} ${radius.toFixed(2)} 0 0 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)} Z`;
}

function renderPlutchikEmotionWheel(results) {
  const missingTests = getMissingTeamDevelopmentTests(results);

  if (missingTests.length > 0) {
    return `
      <section class="development-emotion-card">
        <div>
          <p class="eyebrow">Колесо эмоций Плутчика</p>
          <h4>Не хватает тестов</h4>
          <p>Колесо появится после того, как у сотрудника будет сохранен финальный результат по каждому тесту. Это рабочая интерпретация по мотивам модели Плутчика, не психологическая диагностика.</p>
        </div>
        <div class="development-missing-tests">
          ${missingTests.map((title) => `<span>${escapeHtml(title)}</span>`).join("")}
        </div>
      </section>
    `;
  }

  const emotions = getPlutchikEmotionScores(results);
  const topEmotions = [...emotions].sort((a, b) => b.percent - a.percent).slice(0, 2);

  return `
    <section class="development-emotion-card">
      <div>
        <p class="eyebrow">Колесо эмоций Плутчика</p>
        <h4>Эмоциональный профиль</h4>
        <p>Рабочая интерпретация: сильнее всего выражены ${escapeHtml(topEmotions.map((emotion) => `${emotion.label} ${emotion.percent}%`).join(" и "))}. Колесо собрано из сохраненных результатов всех тестов и помогает понять эмоциональный фон развития сотрудника.</p>
      </div>
      <div class="plutchik-wheel-layout">
        <div class="plutchik-wheel" aria-hidden="true">
          <svg viewBox="0 0 240 240" role="img">
            <circle cx="120" cy="120" r="102" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
            <circle cx="120" cy="120" r="76" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            <circle cx="120" cy="120" r="50" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
            ${emotions.map((emotion, index) => `<path d="${getPlutchikSegmentPath(index, 100)}" fill="${emotion.color}" opacity="0.12"></path>`).join("")}
            ${emotions.map((emotion, index) => `<path d="${getPlutchikSegmentPath(index, emotion.percent)}" fill="${emotion.color}" opacity="0.86"></path>`).join("")}
            <circle cx="120" cy="120" r="27" fill="rgba(5,18,42,0.92)" stroke="rgba(255,255,255,0.22)" />
            <text x="120" y="116" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="800">Plutchik</text>
            <text x="120" y="130" text-anchor="middle" fill="#f5c451" font-size="9" font-weight="800">wheel</text>
          </svg>
        </div>
        <div class="plutchik-legend">
          ${emotions.map((emotion) => `
            <article class="plutchik-legend-item">
              <div class="plutchik-legend-head">
                <span class="plutchik-label">
                  <span class="plutchik-color" style="background:${emotion.color}"></span>
                  <strong>${escapeHtml(emotion.label)}</strong>
                </span>
                <strong>${emotion.percent}%</strong>
              </div>
              <div class="plutchik-track"><div style="width:${emotion.percent}%;background:${emotion.color}"></div></div>
              <p>${escapeHtml(emotion.description)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function buildTeamDevelopmentPortraitSummary(employeeName, results, strengths, growthAreas, averagePercent) {
  const coveragePrefix = results.length < Object.keys(TEAM_DEVELOPMENT_TESTS).length
    ? "Портрет предварительный"
    : "Портрет собран по полному набору сохраненных тестов";
  const strengthText = strengths.slice(0, 3).map((item) => item.label).join(", ") || "сильные стороны еще не выделены";
  const growthText = growthAreas.slice(0, 3).map((item) => item.label).join(", ") || "зоны роста выражены умеренно";
  const profileText = results.slice(0, 5)
    .map((item) => {
      const hydrated = hydrateTeamDevelopmentResult(item);
      return `${hydrated.testTitle}: ${hydrated.primaryResult}`;
    })
    .join("; ");

  return `${coveragePrefix}: ${employeeName}. Средний сигнал по сохраненным шкалам — ${averagePercent}%. Основные опоры: ${strengthText}. Фокус развития: ${growthText}.${profileText ? ` Ключевые результаты: ${profileText}.` : ""}`;
}

function renderTeamDevelopmentPortrait() {
  if (!teamDevelopmentPortrait) return;
  if (!isTeamDevelopmentSensitiveUnlocked()) {
    renderTeamDevelopmentPortraitEmployeeOptions();
    teamDevelopmentPortrait.innerHTML = "";
    return;
  }

  renderTeamDevelopmentPortraitEmployeeOptions();
  const employeeName = ensureTeamDevelopmentPortraitEmployee();
  const results = getLatestTeamDevelopmentResultsByTest(employeeName);

  if (!employeeName || results.length === 0) {
    teamDevelopmentPortrait.innerHTML = `
      <div class="development-portrait-summary">
        <p class="eyebrow">Портрет пока не готов</p>
        <h4>${escapeHtml(employeeName || "Сотрудник не выбран")}</h4>
        <p>Сохраните финальные ответы сотрудника после тестов. Когда появятся результаты, SystemHub соберет портрет с сильными сторонами, зонами роста и фокусом развития навыков.</p>
      </div>
    `;
    return;
  }

  const scoreItems = getTeamDevelopmentPortraitScoreItems(results);
  const averagePercent = scoreItems.length
    ? Math.round(scoreItems.reduce((sum, item) => sum + item.percent, 0) / scoreItems.length)
    : 0;
  const strengths = getUniqueDevelopmentPortraitItems(
    scoreItems.filter((item) => item.percent >= 70).sort((a, b) => b.percent - a.percent),
    6,
  );
  const fallbackStrengths = strengths.length ? strengths : getUniqueDevelopmentPortraitItems([...scoreItems].sort((a, b) => b.percent - a.percent), 4);
  const growthAreas = getUniqueDevelopmentPortraitItems(
    scoreItems.filter((item) => item.percent < 60).sort((a, b) => a.percent - b.percent),
    6,
  );
  const fallbackGrowthAreas = growthAreas.length ? growthAreas : getUniqueDevelopmentPortraitItems([...scoreItems].sort((a, b) => a.percent - b.percent), 4);
  const skillFocus = getUniqueDevelopmentPortraitItems(
    [...growthAreas, ...fallbackGrowthAreas]
      .filter((item) => item.advice || item.description)
      .sort((a, b) => a.percent - b.percent),
    6,
  );
  const lastUpdated = results.map((item) => item.createdAt).filter(Boolean).sort().pop();
  const totalTests = Object.keys(TEAM_DEVELOPMENT_TESTS).length;

  teamDevelopmentPortrait.innerHTML = `
    <div class="development-portrait-summary">
      <p class="eyebrow">Собранный профиль</p>
      <h4>${escapeHtml(employeeName)}</h4>
      <p>${escapeHtml(buildTeamDevelopmentPortraitSummary(employeeName, results, fallbackStrengths, fallbackGrowthAreas, averagePercent))}</p>
      <div class="development-coverage">
        <span>Покрытие тестами: ${formatQuantity(results.length)} / ${formatQuantity(totalTests)}</span>
        <span>Средний сигнал: ${formatQuantity(averagePercent)}%</span>
        <span>Последнее обновление: ${escapeHtml(formatAcknowledgementDate(lastUpdated))}</span>
      </div>
    </div>

    <div class="development-portrait-grid">
      <article class="development-portrait-card is-strength">
        <p class="eyebrow">Сильные стороны</p>
        ${renderDevelopmentPortraitList(fallbackStrengths, "Нужно больше сохраненных результатов, чтобы уверенно выделить сильные стороны.")}
      </article>
      <article class="development-portrait-card is-growth">
        <p class="eyebrow">Зоны роста</p>
        ${renderDevelopmentPortraitList(fallbackGrowthAreas, "Явных низких сигналов нет. Поддерживайте текущий уровень и уточните зоны роста через интервью.")}
      </article>
      <article class="development-portrait-card is-focus">
        <p class="eyebrow">Фокус развития навыков</p>
        ${renderDevelopmentPortraitList(skillFocus, "Для фокуса развития сохраните больше тестов или обсудите с сотрудником конкретные рабочие ситуации.")}
      </article>
    </div>

    ${renderPlutchikEmotionWheel(results)}
  `;
}

function renderTeamDevelopmentResult(result) {
  if (!teamDevelopmentResult) return;

  teamDevelopmentResult.hidden = false;
  teamDevelopmentResult.innerHTML = `
    ${renderTeamDevelopmentResultBody(result)}

    <div class="development-form-actions">
      <button class="primary-button" type="button" data-development-action="save-result">Сохранить финальный ответ</button>
    </div>
  `;
}

function saveTeamDevelopmentFinalResult() {
  if (!pendingTeamDevelopmentResult) return;

  const record = {
    id: createId(),
    employeeName: getTeamDevelopmentEmployeeName(),
    testKey: pendingTeamDevelopmentResult.testKey,
    testTitle: pendingTeamDevelopmentResult.testTitle,
    primaryResult: pendingTeamDevelopmentResult.primaryResult,
    summary: pendingTeamDevelopmentResult.summary,
    scores: pendingTeamDevelopmentResult.scores.map((score) => ({
      key: score.key,
      label: score.label,
      description: score.description,
      advice: score.advice,
      score: score.score,
      max: score.max,
      percent: score.percent,
    })),
    selectedFactors: pendingTeamDevelopmentResult.selectedFactors,
    recommendations: pendingTeamDevelopmentResult.recommendations,
    createdBy: getCurrentUserDisplayName(),
    createdAt: new Date().toISOString(),
  };

  teamDevelopmentResults.unshift(record);
  activeTeamDevelopmentSavedResultId = record.id;
  activeTeamDevelopmentPortraitEmployee = record.employeeName;
  saveTeamDevelopmentResults();
  renderTeamDevelopmentSavedResults();
  renderTeamDevelopmentPortrait();
  renderGlobalSearchResults();
  pendingTeamDevelopmentResult = null;

  const saveButton = teamDevelopmentResult?.querySelector('[data-development-action="save-result"]');
  if (saveButton) {
    saveButton.disabled = true;
    saveButton.textContent = "Финальный ответ сохранен";
  }
}

function renderTeamDevelopmentSavedResults() {
  if (!teamDevelopmentSavedResults) return;
  if (!isTeamDevelopmentSensitiveUnlocked()) {
    teamDevelopmentSavedResults.innerHTML = "";
    return;
  }

  teamDevelopmentSavedResults.innerHTML = teamDevelopmentResults.length > 0
    ? teamDevelopmentResults.slice(0, 30).map((item) => {
      const hydrated = hydrateTeamDevelopmentResult(item);
      const isOpen = activeTeamDevelopmentSavedResultId === item.id;
      return `
      <article class="development-saved-item ${isOpen ? "is-open" : ""}">
        <div class="team-task-card-head">
          <button class="development-saved-main" type="button" data-development-result-view="${escapeHtml(item.id)}" aria-expanded="${isOpen ? "true" : "false"}">
            <span class="development-saved-title">
              ${escapeHtml(item.employeeName)}
              <span class="development-saved-hint">${isOpen ? "Свернуть" : "Открыть полный ответ"}</span>
            </span>
            <span class="development-saved-summary">${escapeHtml(hydrated.summary)}</span>
          </button>
          <button class="icon-button delete-button" type="button" data-development-result-delete="${escapeHtml(item.id)}" aria-label="Удалить результат" title="Удалить">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18"></path>
              <path d="M8 6V4h8v2"></path>
              <path d="M19 6l-1 14H6L5 6"></path>
              <path d="M10 11v5M14 11v5"></path>
            </svg>
          </button>
        </div>
        <div class="development-saved-meta">
          <span>${escapeHtml(hydrated.testTitle)}</span>
          <span>${escapeHtml(hydrated.primaryResult)}</span>
          <span>${escapeHtml(formatAcknowledgementDate(item.createdAt))}</span>
        </div>
        ${isOpen ? `
          <div class="development-saved-detail">
            <section class="development-result">
              ${renderTeamDevelopmentResultBody(hydrated, "Сохраненный финальный ответ")}
            </section>
          </div>
        ` : ""}
      </article>
    `;
    }).join("")
    : '<div class="team-task-empty">Финальные ответы пока не сохранены.</div>';
}

function renderTeamDevelopment() {
  renderTeamDevelopmentDatalist();
  renderTeamDevelopmentAccess();
  renderTeamDevelopmentSavedResults();
  renderTeamDevelopmentPortrait();

  if (teamDevelopmentTestContent && !teamDevelopmentTestContent.innerHTML.trim()) {
    renderTeamDevelopmentTest();
  }
}

function deleteTeamDevelopmentResult(id) {
  if (!isTeamDevelopmentSensitiveUnlocked()) return;

  teamDevelopmentResults = teamDevelopmentResults.filter((item) => item.id !== id);
  if (activeTeamDevelopmentSavedResultId === id) {
    activeTeamDevelopmentSavedResultId = "";
  }
  saveTeamDevelopmentResults();
  renderTeamDevelopmentSavedResults();
  renderTeamDevelopmentPortrait();
  renderGlobalSearchResults();
}

function exportTeamDevelopmentResultsCsv() {
  if (!isTeamDevelopmentSensitiveUnlocked()) {
    window.alert("Сначала откройте доступ логином 14524 или 14962.");
    return;
  }

  if (teamDevelopmentResults.length === 0) {
    window.alert("Сохраненных финальных ответов пока нет.");
    return;
  }

  const rows = [
    ["employeeName", "testTitle", "primaryResult", "summary", "scores", "strongSignals", "recommendations", "createdBy", "createdAt"],
    ...teamDevelopmentResults.map((item) => {
      const hydrated = hydrateTeamDevelopmentResult(item);
      return [
        item.employeeName,
        hydrated.testTitle,
        hydrated.primaryResult,
        hydrated.summary,
        hydrated.scores.map((score) => `${score.label}: ${score.score}/${score.percent}% - ${score.description} ${score.advice}`.trim()).join("; "),
        hydrated.selectedFactors.join("; "),
        hydrated.recommendations.join(" "),
        item.createdBy,
        item.createdAt,
      ];
    }),
  ];
  const csv = rows.map((row) => row.map((cell) => `"${String(cell || "").replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `team-development-results-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function getAttachmentLabelFromUrl(url) {
  const value = String(url || "").trim();
  if (!value) return "Файл";

  try {
    const parsedUrl = new URL(value);
    const name = parsedUrl.pathname.split("/").filter(Boolean).pop();
    return decodeURIComponent(name || parsedUrl.hostname || "Файл");
  } catch {
    return value.replace(/^https?:\/\//i, "").split(/[/?#]/)[0] || "Файл";
  }
}

function createTeamTaskActivity(text, type = "comment") {
  return {
    id: createId(),
    type: type === "history" ? "history" : "comment",
    userName: getCurrentUserDisplayName(),
    text: String(text || "").trim(),
    at: new Date().toISOString(),
  };
}

function getTeamTaskChecklist(task) {
  return normalizeTeamTaskChecklist(task?.checklist);
}

function getTeamTaskAttachments(task) {
  return normalizeTeamTaskAttachments(task?.attachments);
}

function getTeamTaskComments(task) {
  return normalizeTeamTaskComments(task?.comments);
}

function parseTeamTaskChecklistInput(value, existingChecklist = []) {
  const previousByText = new Map(
    normalizeTeamTaskChecklist(existingChecklist).map((item) => [normalizeNotificationIdentity(item.text), item]),
  );

  return String(value || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((text) => {
      const previous = previousByText.get(normalizeNotificationIdentity(text));
      return {
        id: previous?.id || createId(),
        text,
        done: Boolean(previous?.done),
      };
    });
}

function formatTeamTaskChecklistInput(checklist) {
  return normalizeTeamTaskChecklist(checklist).map((item) => item.text).join("\n");
}

function parseTeamTaskAttachmentInput(value, existingAttachments = []) {
  const previousByUrl = new Map(normalizeTeamTaskAttachments(existingAttachments).map((item) => [item.url, item]));

  return String(value || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [rawLabel, rawUrl] = line.split("|").map((part) => part.trim());
      const url = rawUrl ? normalizeLinkUrl(rawUrl) : normalizeLinkUrl(rawLabel);
      const previous = previousByUrl.get(url);
      return {
        id: previous?.id || createId(),
        label: rawUrl ? rawLabel : previous?.label || getAttachmentLabelFromUrl(url),
        url,
      };
    });
}

function formatTeamTaskAttachmentInput(attachments) {
  return normalizeTeamTaskAttachments(attachments)
    .map((item) => (item.label && item.label !== getAttachmentLabelFromUrl(item.url) ? `${item.label} | ${item.url}` : item.url))
    .join("\n");
}

function getTeamDirectionMeta(directionKey) {
  return TEAM_TASK_DIRECTIONS.find((direction) => direction.key === directionKey) || TEAM_TASK_DIRECTIONS[0];
}

function getTeamTaskStatusMeta(statusKey) {
  return TEAM_TASK_STATUSES.find((status) => status.key === statusKey) || TEAM_TASK_STATUSES[0];
}

function getTeamTaskPriorityMeta(priorityKey) {
  return TEAM_TASK_PRIORITIES.find((priority) => priority.key === priorityKey) || TEAM_TASK_PRIORITIES[1];
}

function getTeamTaskAssignees() {
  return [...teamTaskMembers];
}

function parseTeamTaskAssignees(value) {
  return normalizeTeamTaskMemberList(String(value || "").split(/[;,]/));
}

function getEmployeeForAssignee(assignee) {
  const normalizedAssignee = normalizeNotificationIdentity(assignee);
  if (!normalizedAssignee) return null;

  return DEFAULT_ELEARNING_TEAM.map((employee) => getElearningEmployee(employee.id)).find((employee) => {
    const nameParts = normalizeNotificationIdentity(employee.name).split(" ").filter(Boolean);
    const aliases = new Set([
      normalizeNotificationIdentity(employee.name),
      normalizeNotificationIdentity(employee.id.replaceAll("-", " ")),
      ...nameParts,
    ]);

    TEAM_NOTIFICATION_ALIASES.forEach((group) => {
      const normalizedGroup = group.map(normalizeNotificationIdentity);
      if (normalizedGroup.some((alias) => aliases.has(alias))) {
        normalizedGroup.forEach((alias) => aliases.add(alias));
      }
    });

    return aliases.has(normalizedAssignee);
  }) || null;
}

function renderTeamTaskAssignees(assignees) {
  const safeAssignees = assignees?.length ? assignees : ["Не назначено"];

  return `
    <div class="team-assignee-list">
      ${safeAssignees.map((assignee) => {
        const employee = getEmployeeForAssignee(assignee);

        if (!employee) {
          return `<span class="team-assignee-static">${escapeHtml(assignee)}</span>`;
        }

        return `
          <button class="team-assignee-button" type="button" data-team-task-action="open-profile" data-employee-id="${escapeHtml(employee.id)}" title="Открыть карточку сотрудника">
            ${renderEmployeeAvatar(employee, "team-assignee-avatar")}
            <span>${escapeHtml(assignee)}</span>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function normalizeNotificationIdentity(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function getCurrentUserDisplayName() {
  return currentUser?.displayName || currentUser?.login || "Сотрудник";
}

function getCurrentUserNotificationKey() {
  return normalizeNotificationIdentity(currentUser?.login || currentUser?.displayName || "");
}

function getCurrentUserAssigneeAliases() {
  const aliases = new Set();
  const addAlias = (value) => {
    const normalized = normalizeNotificationIdentity(value);
    if (normalized) aliases.add(normalized);
  };

  addAlias(currentUser?.login);
  addAlias(currentUser?.displayName);
  String(currentUser?.displayName || "").split(/\s+/).forEach(addAlias);

  TEAM_NOTIFICATION_ALIASES.forEach((group) => {
    const normalizedGroup = group.map(normalizeNotificationIdentity);
    if (normalizedGroup.some((alias) => aliases.has(alias))) {
      normalizedGroup.forEach(addAlias);
    }
  });

  return aliases;
}

function getMessengerParticipants() {
  const names = [
    currentUser?.displayName,
    currentUser?.login,
    ...authUsers.map((user) => user.displayName || user.login),
    ...authUsers.map((user) => user.login),
    ...DEFAULT_ELEARNING_TEAM.map((employee) => employee.name),
    ...teamTaskMembers,
  ];

  return [...new Set(names.map((name) => String(name || "").trim()).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "ru"));
}

function getMessengerConversation(id = activeMessengerConversationId) {
  return messengerState.conversations.find((conversation) => conversation.id === id)
    || messengerState.conversations.find((conversation) => conversation.id === MESSENGER_GENERAL_CONVERSATION_ID)
    || normalizeMessengerConversation({ id: MESSENGER_GENERAL_CONVERSATION_ID, title: "Общий чат команды" });
}

function getDirectConversationId(participantName) {
  const currentKey = normalizeNotificationIdentity(currentUser?.login || currentUser?.displayName || "me");
  const participantKey = normalizeNotificationIdentity(participantName);
  return `dm:${[currentKey, participantKey].sort().join("|")}`;
}

function ensureMessengerConversation(conversation) {
  const normalized = normalizeMessengerConversation(conversation);
  const existingIndex = messengerState.conversations.findIndex((item) => item.id === normalized.id);
  if (existingIndex >= 0) {
    messengerState.conversations[existingIndex] = {
      ...messengerState.conversations[existingIndex],
      ...normalized,
      updatedAt: new Date().toISOString(),
    };
  } else {
    messengerState.conversations.push(normalized);
  }
  saveMessengerState();
}

function getMessengerConversationTitle(conversation) {
  if (conversation.id === MESSENGER_GENERAL_CONVERSATION_ID) return "Общий чат команды";
  if (conversation.type !== "direct") return conversation.title || "Групповой чат";

  const currentAliases = getCurrentUserAssigneeAliases();
  const other = normalizeTeamTaskMemberList(conversation.participants)
    .find((participant) => !currentAliases.has(normalizeNotificationIdentity(participant)));
  return other || conversation.title || "Личный чат";
}

function getMessengerMessages(conversationId = activeMessengerConversationId) {
  return messengerState.messages
    .filter((message) => message.conversationId === conversationId)
    .sort((a, b) => String(a.createdAt || "").localeCompare(String(b.createdAt || "")));
}

function getMessengerMentionKeys(text) {
  const source = normalizeNotificationIdentity(text);
  if (!source.includes("@")) return [];

  const options = getMessengerParticipants();
  const mentions = new Set();
  options.forEach((name) => {
    const normalizedName = normalizeNotificationIdentity(name);
    const firstName = normalizedName.split(" ")[0];
    [normalizedName, firstName].filter(Boolean).forEach((alias) => {
      if (source.includes(`@${alias}`)) mentions.add(alias);
    });
  });

  return [...mentions];
}

function isMessengerMessageMentioningCurrentUser(message) {
  if (!currentUser || message.authorKey === getCurrentUserNotificationKey()) return false;
  const aliases = getCurrentUserAssigneeAliases();
  return (message.mentions || []).some((mention) => aliases.has(normalizeNotificationIdentity(mention)));
}

function isMessengerMessageReadByCurrentUser(message) {
  const userKey = getCurrentUserNotificationKey();
  return !userKey || (message.readBy || []).map(normalizeNotificationIdentity).includes(userKey);
}

function getCurrentMessengerMentionNotifications() {
  return messengerState.messages
    .filter(isMessengerMessageMentioningCurrentUser)
    .filter((message) => !isMessengerMessageReadByCurrentUser(message))
    .sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
}

function canDeleteMessengerMessage(message) {
  if (!currentUser || !message) return false;
  return currentUser.role === "admin" || message.authorKey === getCurrentUserNotificationKey();
}

function markMessengerMessageRead(messageId) {
  const userKey = getCurrentUserNotificationKey();
  if (!userKey || !messageId) return;

  messengerState.messages = messengerState.messages.map((message) => {
    if (message.id !== messageId) return message;
    const readBy = new Set([...(message.readBy || []).map(normalizeNotificationIdentity), userKey]);
    return {
      ...message,
      readBy: [...readBy],
      updatedAt: new Date().toISOString(),
    };
  });

  saveMessengerState();
  renderMessenger();
  renderAssignmentBell();
}

async function deleteMessengerMessage(messageId) {
  if (!messageId) return;

  await loadSharedMessengerState({ silent: true });
  const message = messengerState.messages.find((item) => item.id === messageId);
  if (!message) {
    renderMessenger();
    renderAssignmentBell();
    renderGlobalSearchResults();
    return;
  }

  if (!canDeleteMessengerMessage(message)) {
    window.alert("Удалить сообщение может только автор или администратор.");
    return;
  }

  const confirmed = window.confirm("Удалить это сообщение?");
  if (!confirmed) return;

  const conversationId = message.conversationId;
  const now = new Date().toISOString();
  messengerState.messages = messengerState.messages.filter((item) => item.id !== messageId);
  messengerState.conversations = messengerState.conversations.map((conversation) => (
    conversation.id === conversationId ? { ...conversation, updatedAt: now } : conversation
  ));

  saveMessengerState();
  renderMessenger();
  renderAssignmentBell();
  renderGlobalSearchResults();
}

function updateMessengerSyncStatus(message = "", type = "") {
  if (!messengerSyncStatus) return;
  const text = message || (messengerSharedSettingsLoaded ? "Синхронизировано" : "Локально");
  const statusDot = messengerSyncStatus.querySelector(".status-dot");
  messengerSyncStatus.textContent = ` ${text}`;
  if (statusDot) messengerSyncStatus.prepend(statusDot);
  messengerSyncStatus.title = text;
  messengerSyncStatus.className = `sheet-badge${type ? ` is-${type}` : ""}`;
}

function renderMessengerThreads() {
  if (!messengerThreadList) return;

  messengerThreadList.innerHTML = messengerState.conversations.map((conversation) => {
    const messages = getMessengerMessages(conversation.id);
    const lastMessage = messages[messages.length - 1];
    const unreadCount = messengerState.messages.filter((message) => (
      message.conversationId === conversation.id
      && isMessengerMessageMentioningCurrentUser(message)
      && !isMessengerMessageReadByCurrentUser(message)
    )).length;

    return `
      <button class="messenger-thread-button ${conversation.id === activeMessengerConversationId ? "is-active" : ""}" type="button" data-messenger-thread="${escapeHtml(conversation.id)}">
        <strong>${escapeHtml(getMessengerConversationTitle(conversation))}${unreadCount ? ` · ${unreadCount}` : ""}</strong>
        <span>${lastMessage ? escapeHtml(lastMessage.text || lastMessage.poll?.question || "Вложение") : "Сообщений пока нет"}</span>
      </button>
    `;
  }).join("");
}

function renderMessengerDirectOptions() {
  if (!messengerDirectSelect) return;
  const currentAliases = getCurrentUserAssigneeAliases();
  const options = getMessengerParticipants()
    .filter((name) => !currentAliases.has(normalizeNotificationIdentity(name)));

  messengerDirectSelect.innerHTML = options.length > 0
    ? options.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("")
    : '<option value="">Нет участников</option>';
}

function renderMessengerAttachments(attachments = []) {
  if (!attachments.length) return "";
  return `
    <div class="messenger-attachment-list">
      ${attachments.map((attachment) => `
        <a class="messenger-attachment" href="${escapeHtml(attachment.url)}" target="_blank" rel="noopener noreferrer" download="${attachment.url.startsWith("data:") ? escapeHtml(attachment.name) : ""}">
          <strong>${escapeHtml(attachment.name)}</strong>
          <span>${attachment.size ? `${formatQuantity(Math.round(attachment.size / 1024))} KB` : "Ссылка"}</span>
        </a>
      `).join("")}
    </div>
  `;
}

function renderMessengerPoll(message) {
  if (!message.poll?.question) return "";
  const userKey = getCurrentUserNotificationKey();
  const totalVotes = Object.values(message.poll.votes || {}).reduce((sum, voters) => sum + (Array.isArray(voters) ? voters.length : 0), 0);

  return `
    <div class="messenger-poll">
      <strong>${escapeHtml(message.poll.question)}</strong>
      <div class="messenger-poll-options">
        ${message.poll.options.map((option) => {
          const voters = message.poll.votes?.[option.id] || [];
          const voted = voters.map(normalizeNotificationIdentity).includes(userKey);
          const percent = totalVotes > 0 ? Math.round((voters.length / totalVotes) * 100) : 0;
          return `
            <div class="messenger-poll-option">
              <button class="ghost-button" type="button" data-messenger-poll-vote="${escapeHtml(message.id)}" data-option-id="${escapeHtml(option.id)}">
                <span>${escapeHtml(option.text)}${voted ? " · ваш голос" : ""}</span>
                <strong>${percent}%</strong>
              </button>
              <div class="messenger-poll-track"><div style="width:${percent}%"></div></div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderMessengerMessages() {
  if (!messengerMessageList) return;
  const messages = getMessengerMessages();
  messengerMessageList.innerHTML = messages.length > 0
    ? messages.map((message) => {
      const isOwn = message.authorKey === getCurrentUserNotificationKey();
      const isMentioned = isMessengerMessageMentioningCurrentUser(message) && !isMessengerMessageReadByCurrentUser(message);
      const canDelete = canDeleteMessengerMessage(message);
      return `
        <article class="messenger-message ${isOwn ? "is-own" : ""} ${isMentioned ? "is-mentioned" : ""}">
          <div class="messenger-message-head">
            <strong class="messenger-message-author">${escapeHtml(message.authorName || "SystemHub")}</strong>
            <div class="messenger-message-actions">
              <span class="messenger-message-meta">${escapeHtml(formatAcknowledgementDate(message.createdAt))}</span>
              ${canDelete ? `
                <button class="icon-button delete-button" type="button" data-messenger-delete="${escapeHtml(message.id)}" aria-label="Удалить сообщение" title="Удалить сообщение">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 6h18"></path>
                    <path d="M8 6V4h8v2"></path>
                    <path d="M19 6l-1 14H6L5 6"></path>
                    <path d="M10 11v5M14 11v5"></path>
                  </svg>
                </button>
              ` : ""}
            </div>
          </div>
          ${message.text ? `<div class="messenger-message-text">${escapeHtml(message.text)}</div>` : ""}
          ${renderMessengerAttachments(message.attachments)}
          ${renderMessengerPoll(message)}
          ${isMentioned ? `<div class="assignment-bell-actions"><button class="primary-button" type="button" data-messenger-read="${escapeHtml(message.id)}">Прочитано</button></div>` : ""}
        </article>
      `;
    }).join("")
    : '<div class="messenger-empty">В этом чате пока нет сообщений.</div>';
  messengerMessageList.scrollTop = messengerMessageList.scrollHeight;
}

function renderMessenger() {
  if (!messengerThreadList || !messengerMessageList) return;
  if (!messengerState.conversations.some((item) => item.id === activeMessengerConversationId)) {
    activeMessengerConversationId = MESSENGER_GENERAL_CONVERSATION_ID;
  }
  const conversation = getMessengerConversation();

  if (messengerTitle) messengerTitle.textContent = getMessengerConversationTitle(conversation);
  if (messengerModeLabel) messengerModeLabel.textContent = conversation.type === "direct" ? "Личный чат" : "Group chat";
  renderMessengerThreads();
  renderMessengerDirectOptions();
  renderMessengerMessages();
  updateMessengerSyncStatus();
}

function startDirectMessengerConversation(participantName) {
  const name = String(participantName || "").trim();
  if (!name || !currentUser) return;

  const currentName = getCurrentUserDisplayName();
  const conversationId = getDirectConversationId(name);
  ensureMessengerConversation({
    id: conversationId,
    type: "direct",
    title: name,
    participants: [currentName, name],
    updatedAt: new Date().toISOString(),
  });
  activeMessengerConversationId = conversationId;
  renderMessenger();
}

function parseMessengerLinkAttachments(value) {
  return String(value || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [rawName, rawUrl] = line.includes("|") ? line.split("|").map((part) => part.trim()) : ["Файл", line];
      return {
        id: createId(),
        name: rawName || "Файл",
        url: normalizeLinkUrl(rawUrl || rawName),
        type: "link",
        size: 0,
      };
    })
    .filter((attachment) => isHttpUrl(attachment.url));
}

function resetMessengerForm() {
  messengerForm?.reset();
  updateMessengerSyncStatus();
}

async function sendMessengerMessage() {
  if (!currentUser || !messengerForm) return;
  const targetConversationId = activeMessengerConversationId;
  const targetConversation = getMessengerConversation(targetConversationId);
  await loadSharedMessengerState({ silent: true });
  if (targetConversation.id === targetConversationId && !messengerState.conversations.some((conversation) => conversation.id === targetConversationId)) {
    messengerState.conversations.push(targetConversation);
  }
  activeMessengerConversationId = messengerState.conversations.some((conversation) => conversation.id === targetConversationId)
    ? targetConversationId
    : MESSENGER_GENERAL_CONVERSATION_ID;

  const text = messengerMessageInput?.value.trim() || "";
  const attachments = parseMessengerLinkAttachments(messengerAttachmentLinksInput?.value || "");

  if (!text && attachments.length === 0) {
    window.alert("Напишите сообщение или добавьте ссылку на файл.");
    return;
  }

  const conversation = getMessengerConversation();
  const now = new Date().toISOString();
  const message = normalizeMessengerMessage({
    id: createId(),
    conversationId: conversation.id,
    type: "message",
    authorKey: getCurrentUserNotificationKey(),
    authorName: getCurrentUserDisplayName(),
    text,
    mentions: getMessengerMentionKeys(text),
    readBy: [getCurrentUserNotificationKey()],
    attachments,
    poll: null,
    createdAt: now,
    updatedAt: now,
  });

  messengerState.messages.push(message);
  messengerState.conversations = messengerState.conversations.map((item) => (
    item.id === conversation.id ? { ...item, updatedAt: now } : item
  ));
  saveMessengerState();
  resetMessengerForm();
  renderMessenger();
  renderAssignmentBell();
  renderGlobalSearchResults();
}

function voteMessengerPoll(messageId, optionId) {
  const userKey = getCurrentUserNotificationKey();
  if (!userKey) return;

  messengerState.messages = messengerState.messages.map((message) => {
    if (message.id !== messageId || !message.poll) return message;

    const votes = { ...(message.poll.votes || {}) };
    message.poll.options.forEach((option) => {
      votes[option.id] = (votes[option.id] || []).filter((key) => normalizeNotificationIdentity(key) !== userKey);
    });
    votes[optionId] = [...(votes[optionId] || []), userKey];

    return {
      ...message,
      poll: { ...message.poll, votes },
      updatedAt: new Date().toISOString(),
    };
  });

  saveMessengerState();
  renderMessenger();
  renderAssignmentBell();
  renderGlobalSearchResults();
}

function isTaskAssignedToCurrentUser(task) {
  if (!currentUser) return false;

  const aliases = getCurrentUserAssigneeAliases();
  return normalizeTeamTaskMemberList(task.assignees || []).some((assignee) => aliases.has(normalizeNotificationIdentity(assignee)));
}

function getTaskAcknowledgements(task) {
  return normalizeTeamTaskAcknowledgements(task.acknowledgements);
}

function hasTaskAcknowledgementByCurrentUser(task) {
  const aliases = getCurrentUserAssigneeAliases();
  const userKey = getCurrentUserNotificationKey();
  const notes = normalizeNotificationIdentity(getTeamTaskVisibleNotes(task));
  const acknowledgedInNotes = [...aliases].some((alias) => (
    alias && notes.includes(alias) && (notes.includes("ознаком") || notes.includes("видел") || notes.includes("приступил"))
  ));

  return acknowledgedInNotes || getTaskAcknowledgements(task).some((ack) => {
    const ackKey = normalizeNotificationIdentity(ack.userKey);
    const ackName = normalizeNotificationIdentity(ack.userName);
    return (userKey && ackKey === userKey) || aliases.has(ackName);
  });
}

function getCurrentAssignmentNotifications() {
  if (!currentUser) return [];

  return teamTasks
    .filter((task) => task.status !== "done")
    .filter(isTaskAssignedToCurrentUser)
    .filter((task) => !hasTaskAcknowledgementByCurrentUser(task))
    .sort((a, b) => {
      const aDate = a.deadline || "9999-12-31";
      const bDate = b.deadline || "9999-12-31";
      if (aDate !== bDate) return aDate.localeCompare(bDate);
      return String(b.updatedAt || "").localeCompare(String(a.updatedAt || ""));
    });
}

function formatAcknowledgementDate(value) {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function buildAcknowledgementComment(acknowledgement) {
  const dateText = formatAcknowledgementDate(acknowledgement.at);
  return `${dateText ? `${dateText} - ` : ""}${acknowledgement.userName}: видел(а) задачу и приступил(а) к выполнению.`;
}

function acknowledgeTeamTaskAssignment(taskId) {
  const task = teamTasks.find((item) => item.id === taskId);
  if (!task || !currentUser || hasTaskAcknowledgementByCurrentUser(task)) return;

  const acknowledgement = {
    userKey: getCurrentUserNotificationKey(),
    userName: getCurrentUserDisplayName(),
    at: new Date().toISOString(),
  };
  const comment = buildAcknowledgementComment(acknowledgement);

  teamTasks = teamTasks.map((item) => {
    if (item.id !== taskId) return item;

    const acknowledgements = [...getTaskAcknowledgements(item), acknowledgement];
    const visibleNotes = [getTeamTaskVisibleNotes(item), comment].filter(Boolean).join("\n");
    const comments = [
      createTeamTaskActivity(comment, "history"),
      ...getTeamTaskComments(item),
    ];

    return {
      ...item,
      status: item.status === "new" ? "inprogress" : item.status,
      notes: mergeTeamTaskMetaIntoNotes(visibleNotes, {
        acknowledgements,
        checklist: getTeamTaskChecklist(item),
        attachments: getTeamTaskAttachments(item),
        comments,
      }),
      acknowledgements,
      comments,
      updatedAt: new Date().toISOString(),
    };
  });

  saveTeamTasks();
  renderTeamTasks();
  if (activeTeamTaskView === "stats") renderTeamTaskStats();
  renderAssignmentBell();
  if (window.SystemHubNotifications?.render) window.SystemHubNotifications.render();
}

function renderTeamTaskAcknowledgements(task) {
  const acknowledgements = getTaskAcknowledgements(task);
  if (acknowledgements.length === 0) return "";

  return `
    <div class="team-task-ack-list" aria-label="Ознакомления">
      ${acknowledgements.map((ack) => `<span>${escapeHtml(ack.userName)}: ознакомлен ${escapeHtml(formatAcknowledgementDate(ack.at))}</span>`).join("")}
    </div>
  `;
}

function setAssignmentBellOpen(isOpen) {
  if (!assignmentBellButton || !assignmentBellPanel) return;

  assignmentBellButton.setAttribute("aria-expanded", String(isOpen));
  assignmentBellPanel.hidden = !isOpen;
}

function renderAssignmentBell() {
  if (!assignmentBell || !assignmentBellCount || !assignmentBellList) return;

  assignmentBell.hidden = !currentUser;
  if (!currentUser) {
    setAssignmentBellOpen(false);
    return;
  }

  const taskNotifications = getCurrentAssignmentNotifications();
  const messengerMentions = getCurrentMessengerMentionNotifications();
  const notificationCount = taskNotifications.length + messengerMentions.length;
  const acknowledgedTasks = getMyTeamTasks({ includeDone: true })
    .filter((task) => hasTaskAcknowledgementByCurrentUser(task))
    .sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")))
    .slice(0, 5);
  assignmentBellCount.textContent = String(notificationCount);
  assignmentBellCount.hidden = notificationCount === 0;

  const taskNotificationsHtml = taskNotifications.length > 0
    ? taskNotifications.map((task) => {
      const direction = getTeamDirectionMeta(task.direction);
      const priority = getTeamTaskPriorityMeta(task.priority);

      return `
        <article class="assignment-bell-item">
          <strong>${escapeHtml(task.title || "Задача команды")}</strong>
          <p>${escapeHtml(task.description || "Вас назначили ответственным по задаче.")}</p>
          <div class="assignment-bell-meta">
            <span>${escapeHtml(direction.label)}</span>
            <span>${escapeHtml(priority.label)}</span>
            <span>${task.deadline ? `Дедлайн: ${escapeHtml(formatDate(task.deadline))}` : "Без дедлайна"}</span>
          </div>
          <div class="assignment-bell-actions">
            <button class="primary-button" type="button" data-assignment-action="acknowledge" data-id="${escapeHtml(task.id)}">Ознакомлен</button>
            <a class="ghost-button" href="#team-tasks" data-assignment-action="open">Открыть</a>
          </div>
        </article>
      `;
    }).join("")
    : "";

  const messengerMentionsHtml = messengerMentions.length > 0
    ? messengerMentions.map((message) => {
      const conversation = getMessengerConversation(message.conversationId);
      return `
        <article class="assignment-bell-item">
          <strong>${escapeHtml(message.authorName || "Мессенджер")}: упомянул(а) вас</strong>
          <p>${escapeHtml(message.text || message.poll?.question || "Новое сообщение в мессенджере.")}</p>
          <div class="assignment-bell-meta">
            <span>${escapeHtml(getMessengerConversationTitle(conversation))}</span>
            <span>${escapeHtml(formatAcknowledgementDate(message.createdAt))}</span>
          </div>
          <div class="assignment-bell-actions">
            <button class="primary-button" type="button" data-messenger-mention-read="${escapeHtml(message.id)}">Прочитано</button>
            <a class="ghost-button" href="#messenger" data-messenger-open="${escapeHtml(message.conversationId)}" data-messenger-message-id="${escapeHtml(message.id)}">Открыть</a>
          </div>
        </article>
      `;
    }).join("")
    : "";

  const pendingHtml = [taskNotificationsHtml, messengerMentionsHtml].filter(Boolean).join("")
    || '<div class="assignment-bell-empty">Новых назначений и упоминаний нет.</div>';

  const archiveHtml = acknowledgedTasks.length > 0
    ? `
      <div class="assignment-bell-head">
        <div>
          <p class="eyebrow">Archive</p>
          <strong>Ознакомленные</strong>
        </div>
      </div>
      ${acknowledgedTasks.map((task) => `
        <article class="assignment-bell-item">
          <strong>${escapeHtml(task.title || "Задача команды")}</strong>
          <p>${task.deadline ? `Дедлайн: ${escapeHtml(formatDate(task.deadline))}` : "Без дедлайна"}</p>
          <div class="assignment-bell-actions">
            <a class="ghost-button" href="#team-tasks" data-assignment-action="open">Открыть</a>
          </div>
        </article>
      `).join("")}
    `
    : "";

  assignmentBellList.innerHTML = [pendingHtml, archiveHtml].filter(Boolean).join("");
}

function addTeamTaskMember(value, shouldRender = true) {
  const member = normalizeTeamTaskMemberName(value);
  if (!member) return false;

  const alreadyExists = teamTaskMembers.some((item) => item.toLowerCase() === member.toLowerCase());
  if (alreadyExists) return false;

  teamTaskMembers.push(member);
  saveTeamTaskMembers();

  if (shouldRender) {
    renderTeamMembers();
    renderTeamTasks();
    renderTeamTaskAssigneePicker();
  }

  return true;
}

function ensureTeamTaskMembers(names) {
  let changed = false;
  names.forEach((name) => {
    changed = addTeamTaskMember(name, false) || changed;
  });

  if (changed) {
    saveTeamTaskMembers();
  }
}

function renderTeamMembers() {
  teamMemberList.innerHTML = teamTaskMembers
    .map((member) => {
      const isActive = normalizeNotificationIdentity(activeTeamMemberTaskFilter) === normalizeNotificationIdentity(member);
      return `
        <button class="team-member-chip ${isActive ? "is-active" : ""}" type="button" data-team-member-task-filter="${escapeHtml(member)}" aria-pressed="${isActive ? "true" : "false"}" title="Показать задачи участника">
          ${escapeHtml(member)}
        </button>
      `;
    })
    .join("");
}

function setTeamMemberTaskFilter(member) {
  const normalizedMember = normalizeNotificationIdentity(member);
  const shouldClear = normalizedMember && normalizeNotificationIdentity(activeTeamMemberTaskFilter) === normalizedMember;
  activeTeamMemberTaskFilter = shouldClear ? "" : String(member || "").trim();

  TEAM_TASK_DIRECTIONS.forEach((direction) => {
    teamTaskFilters[direction.key].assignee = activeTeamMemberTaskFilter;
  });

  expandedTeamTaskDirections = new Set();
  renderTeamMembers();
  renderTeamTasks();
}

function getSelectedTeamTaskAssignees() {
  return parseTeamTaskAssignees(teamTaskAssigneesInput.value);
}

function setSelectedTeamTaskAssignees(assignees) {
  teamTaskAssigneesInput.value = normalizeTeamTaskMemberList(assignees).join(", ");
  renderTeamTaskAssigneePicker();
}

function toggleTeamTaskAssignee(member) {
  const selectedAssignees = getSelectedTeamTaskAssignees();
  const exists = selectedAssignees.some((assignee) => assignee.toLowerCase() === member.toLowerCase());
  const nextAssignees = exists
    ? selectedAssignees.filter((assignee) => assignee.toLowerCase() !== member.toLowerCase())
    : [...selectedAssignees, member];

  setSelectedTeamTaskAssignees(nextAssignees);
}

function renderTeamTaskAssigneePicker() {
  const selected = new Set(getSelectedTeamTaskAssignees());

  teamTaskAssigneesDatalist.innerHTML = teamTaskMembers
    .map((member) => `<option value="${escapeHtml(member)}"></option>`)
    .join("");

  teamTaskAssigneesPicker.innerHTML = teamTaskMembers
    .map((member) => `
      <button class="team-member-picker-button${selected.has(member) ? " is-selected" : ""}" type="button" data-team-task-assignee="${escapeHtml(member)}" aria-pressed="${selected.has(member)}">
        ${escapeHtml(member)}
      </button>
    `)
    .join("");
}

function isTeamTaskOverdue(task) {
  return Boolean(task.deadline && task.status !== "done" && normalizeDate(task.deadline) < startOfToday());
}

function getTeamTaskDeadlineFilter(task) {
  if (!task.deadline) return "none";
  if (isTeamTaskOverdue(task) || task.status === "overdue") return "overdue";

  const deadlineDate = normalizeDate(task.deadline);
  const today = startOfToday();
  const daysLeft = Math.ceil((deadlineDate - today) / 86_400_000);

  if (daysLeft === 0) return "today";
  if (daysLeft <= 7) return "week";
  return "later";
}

function renderTeamTaskOptions() {
  teamTaskDirectionInput.innerHTML = TEAM_TASK_DIRECTIONS.map(
    (direction) => `<option value="${direction.key}">${escapeHtml(direction.label)}</option>`,
  ).join("");
  teamTaskStatusInput.innerHTML = TEAM_TASK_STATUSES.map(
    (status) => `<option value="${status.key}">${escapeHtml(status.label)}</option>`,
  ).join("");
  teamTaskPriorityInput.innerHTML = TEAM_TASK_PRIORITIES.map(
    (priority) => `<option value="${priority.key}">${escapeHtml(priority.label)}</option>`,
  ).join("");
  renderTeamTaskAssigneePicker();
}

function getFilteredTeamTasks(directionKey) {
  const filters = teamTaskFilters[directionKey];
  const priorityRanks = TEAM_TASK_PRIORITIES.reduce((acc, priority) => {
    acc[priority.key] = priority.rank;
    return acc;
  }, {});

  return teamTasks
    .filter((task) => task.direction === directionKey)
    .filter((task) => !filters.status || task.status === filters.status)
    .filter((task) => !filters.assignee || (task.assignees || []).includes(filters.assignee))
    .filter((task) => !filters.deadline || getTeamTaskDeadlineFilter(task) === filters.deadline)
    .sort((a, b) => {
      if (filters.sort === "priority") {
        return (priorityRanks[b.priority] || 0) - (priorityRanks[a.priority] || 0);
      }

      if (filters.sort === "status") {
        return getTeamTaskStatusMeta(a.status).label.localeCompare(getTeamTaskStatusMeta(b.status).label, "ru");
      }

      const aDeadline = a.deadline || "9999-12-31";
      const bDeadline = b.deadline || "9999-12-31";
      if (aDeadline !== bDeadline) return aDeadline.localeCompare(bDeadline);
      return String(b.updatedAt || "").localeCompare(String(a.updatedAt || ""));
    });
}

function renderTeamTaskCard(task) {
  const status = getTeamTaskStatusMeta(task.status);
  const priority = getTeamTaskPriorityMeta(task.priority);
  const overdue = isTeamTaskOverdue(task);
  const description = task.description || "Описание не заполнено.";
  const assignees = task.assignees?.length ? task.assignees : ["Не назначено"];
  const notes = getTeamTaskVisibleNotes(task);
  const checklist = getTeamTaskChecklist(task);
  const attachments = getTeamTaskAttachments(task);
  const doneChecklistItems = checklist.filter((item) => item.done).length;
  const canAcknowledge = currentUser && isTaskAssignedToCurrentUser(task) && !hasTaskAcknowledgementByCurrentUser(task);

  return `
    <article class="team-task-card${overdue ? " is-overdue" : ""}">
      <div class="team-task-card-head">
        <div>
          <h3>${escapeHtml(task.title)}</h3>
          <p>${escapeHtml(description)}</p>
        </div>
        ${overdue ? '<span class="overdue-flag">Просрочено</span>' : ""}
      </div>

      <div class="team-task-badges">
        <span class="task-status-chip ${status.className}">${status.label}</span>
        <span class="task-priority-chip ${priority.className}">${priority.label}</span>
      </div>

      <div class="team-task-meta">
        <span>Участники:</span>
        ${renderTeamTaskAssignees(assignees)}
        <span>Старт: <strong>${formatDate(task.startDate)}</strong></span>
        <span>Дедлайн: <strong>${formatDate(task.deadline)}</strong></span>
      </div>

      ${notes ? `<p class="team-task-note">${escapeHtml(notes)}</p>` : ""}
      ${checklist.length > 0 ? `
        <div class="team-task-progress">
          <div class="team-task-progress-row">
            <span>Чеклист</span>
            <strong>${doneChecklistItems}/${checklist.length}</strong>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${Math.round((doneChecklistItems / checklist.length) * 100)}%"></div>
          </div>
          <div class="team-task-checklist">
            ${checklist.slice(0, 6).map((item) => `
              <button class="team-check-item${item.done ? " is-done" : ""}" type="button" data-team-task-action="toggle-checklist" data-id="${escapeHtml(task.id)}" data-checklist-id="${escapeHtml(item.id)}">
                <span class="team-check-box">${item.done ? "✓" : ""}</span>
                <span>${escapeHtml(item.text)}</span>
              </button>
            `).join("")}
          </div>
        </div>
      ` : ""}
      ${attachments.length > 0 ? `
        <div class="team-attachments">
          ${attachments.map((item) => `<a class="team-attachment" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.label || getAttachmentLabelFromUrl(item.url))}</a>`).join("")}
        </div>
      ` : ""}
      ${renderTeamTaskAcknowledgements(task)}

      <div class="team-task-actions">
        ${canAcknowledge ? `<button class="primary-button" type="button" data-team-task-action="acknowledge" data-id="${escapeHtml(task.id)}">Ознакомлен</button>` : ""}
        <button class="ghost-button" type="button" data-team-task-action="cycle-status" data-id="${task.id}">Изменить статус</button>
        <button class="icon-button" type="button" data-team-task-action="edit" data-id="${task.id}" aria-label="Редактировать задачу" title="Редактировать">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path>
          </svg>
        </button>
        <button class="icon-button delete-button" type="button" data-team-task-action="delete" data-id="${task.id}" aria-label="Удалить задачу" title="Удалить">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18"></path>
            <path d="M8 6V4h8v2"></path>
            <path d="M19 6l-1 14H6L5 6"></path>
            <path d="M10 11v5M14 11v5"></path>
          </svg>
        </button>
      </div>
    </article>
  `;
}

function getLimitedTeamTaskList(tasks, expanded) {
  return expanded ? tasks : tasks.slice(0, TEAM_TASK_VISIBLE_LIMIT);
}

function renderTeamTaskViewAllButton({ expanded, total, listType, listKey }) {
  if (total <= TEAM_TASK_VISIBLE_LIMIT) return "";

  const hiddenCount = total - TEAM_TASK_VISIBLE_LIMIT;
  const label = expanded ? "Свернуть до 7" : `View all (${hiddenCount})`;

  return `
    <button class="ghost-button team-task-view-all" type="button" data-team-task-action="toggle-task-list" data-list-type="${escapeHtml(listType)}" data-list-key="${escapeHtml(listKey)}">
      ${escapeHtml(label)}
    </button>
  `;
}

function renderTeamTasks() {
  renderTeamTaskOptions();
  const assignees = getTeamTaskAssignees();

  teamTaskBoard.innerHTML = TEAM_TASK_DIRECTIONS.map((direction) => {
    const directionTasks = teamTasks.filter((task) => task.direction === direction.key);
    const visibleTasks = getFilteredTeamTasks(direction.key);
    const isExpanded = expandedTeamTaskDirections.has(direction.key);
    const renderedTasks = getLimitedTeamTaskList(visibleTasks, isExpanded);
    const filters = teamTaskFilters[direction.key];

    return `
      <section class="team-task-column" data-team-task-direction="${direction.key}">
        <div class="team-task-column-head">
          <div>
            <p class="eyebrow">Направление</p>
            <h2>${escapeHtml(direction.label)}</h2>
          </div>
          <span>${formatQuantity(directionTasks.length)}</span>
        </div>

        <button class="primary-button" type="button" data-team-task-action="create" data-direction="${direction.key}">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5v14M5 12h14"></path>
          </svg>
          + Создать задачу
        </button>

        <div class="team-task-filters">
          <select data-team-task-filter="status" data-direction="${direction.key}" aria-label="Фильтр по статусу">
            <option value="">Все статусы</option>
            ${TEAM_TASK_STATUSES.map((status) => `<option value="${status.key}" ${filters.status === status.key ? "selected" : ""}>${escapeHtml(status.label)}</option>`).join("")}
          </select>
          <select data-team-task-filter="assignee" data-direction="${direction.key}" aria-label="Фильтр по участнику">
            <option value="">Все участники</option>
            ${assignees.map((assignee) => `<option value="${escapeHtml(assignee)}" ${filters.assignee === assignee ? "selected" : ""}>${escapeHtml(assignee)}</option>`).join("")}
          </select>
          <select data-team-task-filter="deadline" data-direction="${direction.key}" aria-label="Фильтр по сроку">
            <option value="">Все сроки</option>
            <option value="overdue" ${filters.deadline === "overdue" ? "selected" : ""}>Просроченные</option>
            <option value="today" ${filters.deadline === "today" ? "selected" : ""}>Сегодня</option>
            <option value="week" ${filters.deadline === "week" ? "selected" : ""}>7 дней</option>
            <option value="none" ${filters.deadline === "none" ? "selected" : ""}>Без срока</option>
          </select>
          <select data-team-task-filter="sort" data-direction="${direction.key}" aria-label="Сортировка">
            <option value="deadline" ${filters.sort === "deadline" ? "selected" : ""}>Сначала дедлайн</option>
            <option value="priority" ${filters.sort === "priority" ? "selected" : ""}>Сначала приоритет</option>
            <option value="status" ${filters.sort === "status" ? "selected" : ""}>По статусу</option>
          </select>
        </div>

        <div class="team-task-list">
          ${
            visibleTasks.length > 0
              ? renderedTasks.map(renderTeamTaskCard).join("")
              : '<div class="team-task-empty">Нет задач по выбранным фильтрам.</div>'
          }
          ${renderTeamTaskViewAllButton({
            expanded: isExpanded,
            total: visibleTasks.length,
            listType: "direction",
            listKey: direction.key,
          })}
        </div>
      </section>
    `;
  }).join("");

  if (activeTeamTaskView === "stats") {
    renderTeamTaskStats();
  }

  if (activeTeamTaskView === "kanban") {
    renderTeamTaskKanban();
  }

  renderTodayDashboard();
  renderMyTasks();
}

function sortTeamTasksByDeadline(tasks) {
  return [...tasks].sort((a, b) => {
    const aDeadline = a.deadline || "9999-12-31";
    const bDeadline = b.deadline || "9999-12-31";
    if (aDeadline !== bDeadline) return aDeadline.localeCompare(bDeadline);
    return String(b.updatedAt || "").localeCompare(String(a.updatedAt || ""));
  });
}

function getMyTeamTasks({ includeDone = false } = {}) {
  if (!currentUser) return [];

  return sortTeamTasksByDeadline(
    teamTasks
      .filter(isTaskAssignedToCurrentUser)
      .filter((task) => includeDone || task.status !== "done"),
  );
}

function renderTaskQuickActions(task) {
  const canAcknowledge = currentUser && isTaskAssignedToCurrentUser(task) && !hasTaskAcknowledgementByCurrentUser(task);

  return `
    <div class="team-task-actions">
      ${canAcknowledge ? `<button class="primary-button" type="button" data-team-task-action="acknowledge" data-id="${escapeHtml(task.id)}">Ознакомлен</button>` : ""}
      ${task.status !== "inprogress" && task.status !== "done" ? `<button class="ghost-button" type="button" data-team-task-action="set-status" data-status="inprogress" data-id="${escapeHtml(task.id)}">В работу</button>` : ""}
      ${task.status !== "done" ? `<button class="ghost-button" type="button" data-team-task-action="set-status" data-status="done" data-id="${escapeHtml(task.id)}">Завершить</button>` : ""}
      <button class="ghost-button" type="button" data-team-task-action="edit" data-id="${escapeHtml(task.id)}">Открыть</button>
    </div>
  `;
}

function renderTodayTaskItem(task) {
  const direction = getTeamDirectionMeta(task.direction);
  const status = getTeamTaskStatusMeta(task.status);
  const overdue = isTeamTaskOverdue(task);

  return `
    <article class="today-item${overdue ? " is-overdue" : ""}">
      <strong>${escapeHtml(task.title || "Задача команды")}</strong>
      <span>${escapeHtml(direction.label)} · ${escapeHtml(status.label)} · ${task.deadline ? `Дедлайн: ${formatDate(task.deadline)}` : "Без срока"}</span>
      ${renderTaskQuickActions(task)}
    </article>
  `;
}

function renderTodayInfoItem(title, meta, href = "") {
  const content = `
    <strong>${escapeHtml(title)}</strong>
    <span>${escapeHtml(meta)}</span>
  `;

  return href
    ? `<a class="today-item" href="${escapeHtml(href)}">${content}</a>`
    : `<article class="today-item">${content}</article>`;
}

function renderTodayDashboard() {
  if (!todayMyAssignments) return;

  const myActiveTasks = getMyTeamTasks();
  const newAssignments = getCurrentAssignmentNotifications();
  const overdueTasks = teamTasks.filter((task) => task.status !== "done" && (isTeamTaskOverdue(task) || task.status === "overdue"));
  const weekTasks = teamTasks.filter((task) => task.status !== "done" && getTeamTaskDeadlineFilter(task) === "week");
  const upcomingTasks = sortTeamTasksByDeadline(
    teamTasks.filter((task) => task.status !== "done" && ["today", "week"].includes(getTeamTaskDeadlineFilter(task))),
  ).slice(0, 6);
  const lowStockItems = stockItems
    .filter((item) => Number(item.quantity || 0) <= LOW_STOCK_THRESHOLD)
    .slice(0, 4);
  const licenseRisks = records
    .filter((record) => ["soon", "expired"].includes(getLicenseStatus(record).key))
    .sort((a, b) => String(a.licenseEndDate || "").localeCompare(String(b.licenseEndDate || "")))
    .slice(0, 4);
  const recentActivity = [...teamTasks]
    .sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")))
    .slice(0, 5);

  if (todayMyActiveCount) todayMyActiveCount.textContent = formatQuantity(myActiveTasks.length);
  if (todayNewAssignmentCount) todayNewAssignmentCount.textContent = formatQuantity(newAssignments.length);
  if (todayOverdueCount) todayOverdueCount.textContent = formatQuantity(overdueTasks.length);
  if (todayWeekCount) todayWeekCount.textContent = formatQuantity(weekTasks.length);

  todayMyAssignments.innerHTML = myActiveTasks.length > 0
    ? myActiveTasks.slice(0, 5).map(renderTodayTaskItem).join("")
    : '<div class="team-task-empty">Нет активных задач для текущего пользователя.</div>';

  if (todayUpcomingList) {
    todayUpcomingList.innerHTML = upcomingTasks.length > 0
      ? upcomingTasks.map(renderTodayTaskItem).join("")
      : '<div class="team-task-empty">Ближайших дедлайнов нет.</div>';
  }

  if (todayRisksList) {
    const riskItems = [
      ...overdueTasks.slice(0, 4).map((task) => renderTodayInfoItem(task.title || "Задача команды", `Просрочено · ${formatDate(task.deadline)}`, "#team-tasks")),
      ...lowStockItems.map((item) => renderTodayInfoItem(item.name || "Промо позиция", `Остаток: ${formatQuantity(Number(item.quantity || 0))}`, "#promo")),
      ...licenseRisks.map((record) => {
        const status = getLicenseStatus(record);
        return renderTodayInfoItem(record.systemName || "Система", `${status.label} · ${formatDate(record.licenseEndDate)}`, "#systems");
      }),
    ].slice(0, 8);

    todayRisksList.innerHTML = riskItems.length > 0
      ? riskItems.join("")
      : '<div class="team-task-empty">Критичных рисков нет.</div>';
  }

  if (todayActivityList) {
    todayActivityList.innerHTML = recentActivity.length > 0
      ? recentActivity.map((task) => {
        const latestComment = getTeamTaskComments(task)[0];
        return renderTodayInfoItem(
          task.title || "Задача команды",
          latestComment ? `${latestComment.userName || "SystemHub"}: ${latestComment.text}` : `Обновлено: ${formatAcknowledgementDate(task.updatedAt)}`,
          "#team-tasks",
        );
      }).join("")
      : '<div class="team-task-empty">Активности пока нет.</div>';
  }
}

function renderMyTaskStatusFilter() {
  if (!myTasksStatusFilter) return;

  const selected = myTasksStatusFilter.value;
  myTasksStatusFilter.innerHTML = `
    <option value="">Все статусы</option>
    ${TEAM_TASK_STATUSES.map((status) => `<option value="${status.key}" ${selected === status.key ? "selected" : ""}>${escapeHtml(status.label)}</option>`).join("")}
  `;
}

function getFilteredMyTasks() {
  const query = normalizeNotificationIdentity(myTasksSearchInput?.value || "");
  const statusFilterValue = myTasksStatusFilter?.value || "";
  const deadlineFilterValue = myTasksDeadlineFilter?.value || "";

  return getMyTeamTasks({ includeDone: true })
    .filter((task) => !statusFilterValue || task.status === statusFilterValue)
    .filter((task) => !deadlineFilterValue || getTeamTaskDeadlineFilter(task) === deadlineFilterValue)
    .filter((task) => {
      if (!query) return true;
      return normalizeNotificationIdentity([
        task.title,
        task.description,
        getTeamTaskVisibleNotes(task),
        ...(task.assignees || []),
      ].join(" ")).includes(query);
    });
}

function renderMyTaskCard(task) {
  const direction = getTeamDirectionMeta(task.direction);
  const status = getTeamTaskStatusMeta(task.status);
  const priority = getTeamTaskPriorityMeta(task.priority);
  const checklist = getTeamTaskChecklist(task);
  const doneChecklistItems = checklist.filter((item) => item.done).length;

  return `
    <article class="my-task-card${isTeamTaskOverdue(task) ? " is-overdue" : ""}">
      <div class="team-task-card-head">
        <div>
          <strong>${escapeHtml(task.title || "Задача команды")}</strong>
          <span>${escapeHtml(direction.label)} · ${task.deadline ? `Дедлайн: ${formatDate(task.deadline)}` : "Без срока"}</span>
        </div>
        <span class="task-status-chip ${status.className}">${escapeHtml(status.label)}</span>
      </div>
      <span class="task-priority-chip ${priority.className}">${escapeHtml(priority.label)}</span>
      ${task.description ? `<p>${escapeHtml(task.description)}</p>` : ""}
      ${checklist.length > 0 ? `<span>Чеклист: ${doneChecklistItems}/${checklist.length}</span>` : ""}
      ${renderTaskQuickActions(task)}
    </article>
  `;
}

function renderMyTasks() {
  if (!myTasksList) return;

  renderMyTaskStatusFilter();
  const tasks = getFilteredMyTasks();
  myTasksList.innerHTML = tasks.length > 0
    ? tasks.map(renderMyTaskCard).join("")
    : '<div class="team-task-empty">Для текущего пользователя задач не найдено.</div>';
}

function renderTeamTaskKanban() {
  if (!teamTaskKanbanBoard) return;

  teamTaskKanbanBoard.innerHTML = TEAM_TASK_STATUSES.map((status) => {
    const tasks = sortTeamTasksByDeadline(teamTasks.filter((task) => task.status === status.key));
    const isExpanded = expandedTeamTaskKanbanStatuses.has(status.key);
    const renderedTasks = getLimitedTeamTaskList(tasks, isExpanded);

    return `
      <section class="kanban-column" data-kanban-status="${escapeHtml(status.key)}">
        <div class="kanban-column-head">
          <h3>${escapeHtml(status.label)}</h3>
          <span class="task-status-chip ${status.className}">${formatQuantity(tasks.length)}</span>
        </div>
        ${tasks.length > 0
          ? renderedTasks.map((task) => {
            const priority = getTeamTaskPriorityMeta(task.priority);
            return `
              <article class="kanban-card" draggable="true" data-id="${escapeHtml(task.id)}">
                <strong>${escapeHtml(task.title || "Задача команды")}</strong>
                <span>${task.deadline ? `Дедлайн: ${formatDate(task.deadline)}` : "Без срока"}</span>
                <span class="task-priority-chip ${priority.className}">${escapeHtml(priority.label)}</span>
              </article>
            `;
          }).join("")
          : '<div class="team-task-empty">Нет задач</div>'}
        ${renderTeamTaskViewAllButton({
          expanded: isExpanded,
          total: tasks.length,
          listType: "kanban",
          listKey: status.key,
        })}
      </section>
    `;
  }).join("");
}

function buildGlobalSearchItems() {
  const items = [];
  const pushItem = (type, title, meta, href, searchText = "") => {
    if (!title) return;

    items.push({
      type,
      title,
      meta,
      href,
      searchText: normalizeNotificationIdentity([type, title, meta, searchText].join(" ")),
    });
  };

  records.forEach((record) => {
    pushItem(
      "Система",
      record.systemName,
      `Логин: ${record.login || "не указан"} · Лицензия: ${formatDate(record.licenseEndDate)}`,
      "#systems",
      record.login,
    );
  });

  links.forEach((link) => pushItem("Ссылка", link.description, link.url, "#links", link.url));
  surveyLinks.forEach((link) => pushItem("Опрос", link.description, link.url, "#survey", link.url));
  promoItems.forEach((item) => pushItem("Промо", item.name, `Остаток: ${formatQuantity(Number(item.quantity || 0))}`, "#promo", item.note));
  promoPurchases.forEach((purchase) => pushItem("Покупка", purchase.fullName, [purchase.city, purchase.center].filter(Boolean).join(" · "), "#promo-purchases", purchase.address));
  teamTasks.forEach((task) => {
    pushItem(
      "Задача",
      task.title,
      `${getTeamTaskStatusMeta(task.status).label} · ${task.deadline ? `Дедлайн: ${formatDate(task.deadline)}` : "Без срока"}`,
      "#team-tasks",
      [task.description, getTeamTaskVisibleNotes(task), ...(task.assignees || [])].join(" "),
    );
  });
  messengerState.messages.forEach((message) => {
    const conversation = getMessengerConversation(message.conversationId);
    pushItem(
      "Мессенджер",
      message.text || message.poll?.question || "Сообщение",
      `${getMessengerConversationTitle(conversation)} · ${message.authorName || "SystemHub"}`,
      "#messenger",
      [
        message.text,
        message.poll?.question,
        ...(message.attachments || []).map((attachment) => attachment.name),
      ].join(" "),
    );
  });
  DEFAULT_ELEARNING_TEAM.forEach((employee) => {
    const profile = getElearningEmployee(employee.id);
    pushItem(
      "Сотрудник",
      profile.name,
      [profile.jobTitle, profile.department, profile.workLocation].filter(Boolean).join(" · "),
      "#elearning-team",
      [profile.email, profile.mobile, profile.workPhone].join(" "),
    );
  });
  trmsReleaseTasks.forEach((task) => pushItem("TRMS релиз", task.taskName || task.title || task.releaseName, task.releaseName || "", "#trms-releases", task.link || ""));
  if (isTeamDevelopmentSensitiveUnlocked()) {
    teamDevelopmentResults.forEach((result) => {
      pushItem(
        "Развитие команды",
        result.employeeName,
        `${result.testTitle} · ${result.primaryResult}`,
        "#team-development",
        [result.summary, ...(result.recommendations || [])].join(" "),
      );
    });
  }

  return items;
}

function renderGlobalSearchResults() {
  if (!globalSearch || !globalSearchInput || !globalSearchResults) return;

  globalSearch.hidden = !currentUser;
  if (!currentUser) {
    globalSearchResults.hidden = true;
    return;
  }

  const query = normalizeNotificationIdentity(globalSearchInput.value);
  if (!query) {
    globalSearchResults.hidden = true;
    globalSearchResults.innerHTML = "";
    return;
  }

  const results = buildGlobalSearchItems()
    .filter((item) => item.searchText.includes(query))
    .slice(0, 12);

  globalSearchResults.hidden = false;
  globalSearchResults.innerHTML = results.length > 0
    ? results.map((item) => `
      <a class="global-search-result" href="${escapeHtml(item.href)}" data-global-search-result>
        <span>${escapeHtml(item.type)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(item.meta || "")}</span>
      </a>
    `).join("")
    : '<div class="global-search-empty">Ничего не найдено.</div>';
}

function getTeamTaskStats() {
  const total = teamTasks.length;
  const overdueTasks = teamTasks.filter((task) => isTeamTaskOverdue(task) || task.status === "overdue");
  const completedTasks = teamTasks.filter((task) => task.status === "done");
  const inProgressTasks = teamTasks.filter((task) => task.status === "inprogress");
  const byDirection = TEAM_TASK_DIRECTIONS.map((direction) => ({
    ...direction,
    count: teamTasks.filter((task) => task.direction === direction.key).length,
  }));
  const byStatus = TEAM_TASK_STATUSES.map((status) => ({
    ...status,
    count: teamTasks.filter((task) => task.status === status.key).length,
  }));
  const byAssignee = getTeamTaskAssignees()
    .map((assignee) => ({
      name: assignee,
      count: teamTasks.filter((task) => (task.assignees || []).includes(assignee)).length,
      active: teamTasks.filter((task) => (task.assignees || []).includes(assignee) && task.status !== "done").length,
    }))
    .sort((a, b) => b.count - a.count);
  const upcoming = teamTasks
    .filter((task) => task.deadline && task.status !== "done" && !isTeamTaskOverdue(task))
    .sort((a, b) => a.deadline.localeCompare(b.deadline))
    .slice(0, 6);

  return {
    total,
    overdueTasks,
    completedTasks,
    inProgressTasks,
    byDirection,
    byStatus,
    byAssignee,
    upcoming,
    completionPercent: total > 0 ? Math.round((completedTasks.length / total) * 100) : 0,
  };
}

function renderMiniTaskList(items, emptyText) {
  return items.length > 0
    ? items
        .map((task) => {
          const direction = getTeamDirectionMeta(task.direction);
          const priority = getTeamTaskPriorityMeta(task.priority);
          return `
            <article class="team-mini-task">
              <div>
                <strong>${escapeHtml(task.title)}</strong>
                <span>${escapeHtml(direction.label)} · ${formatDate(task.deadline)}</span>
              </div>
              <span class="task-priority-chip ${priority.className}">${priority.label}</span>
            </article>
          `;
        })
        .join("")
    : `<div class="team-task-empty">${emptyText}</div>`;
}

function renderProgressRows(items, valueKey = "count") {
  const maxValue = Math.max(...items.map((item) => item[valueKey]), 1);
  return items
    .map((item) => {
      const width = Math.round((item[valueKey] / maxValue) * 100);
      return `
        <div class="team-progress-row">
          <div>
            <span>${escapeHtml(item.label || item.name)}</span>
            <strong>${formatQuantity(item[valueKey])}</strong>
          </div>
          <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
        </div>
      `;
    })
    .join("");
}

function renderTeamTaskStats() {
  const stats = getTeamTaskStats();

  teamTaskStatsContent.innerHTML = `
    <section class="team-stats-grid">
      <article class="team-stat-card">
        <span>Всего задач</span>
        <strong>${formatQuantity(stats.total)}</strong>
      </article>
      <article class="team-stat-card">
        <span>Завершено</span>
        <strong>${formatQuantity(stats.completedTasks.length)}</strong>
      </article>
      <article class="team-stat-card">
        <span>В работе</span>
        <strong>${formatQuantity(stats.inProgressTasks.length)}</strong>
      </article>
      <article class="team-stat-card">
        <span>Просрочено</span>
        <strong>${formatQuantity(stats.overdueTasks.length)}</strong>
      </article>
    </section>

    <section class="team-analytics-grid">
      <article class="team-chart-card">
        <div class="team-chart-head">
          <div>
            <p class="eyebrow">Progress</p>
            <h3>Процент выполнения</h3>
          </div>
          <strong>${stats.completionPercent}%</strong>
        </div>
        <div class="team-completion-track">
          <div style="width:${stats.completionPercent}%"></div>
        </div>
      </article>

      <article class="team-chart-card">
        <div class="team-chart-head">
          <div>
            <p class="eyebrow">Статусы</p>
            <h3>Задачи по статусам</h3>
          </div>
        </div>
        <div class="team-progress-list">${renderProgressRows(stats.byStatus)}</div>
      </article>

      <article class="team-chart-card">
        <div class="team-chart-head">
          <div>
            <p class="eyebrow">Направления</p>
            <h3>Задачи по блокам</h3>
          </div>
        </div>
        <div class="team-progress-list">${renderProgressRows(stats.byDirection)}</div>
      </article>

      <article class="team-chart-card">
        <div class="team-chart-head">
          <div>
            <p class="eyebrow">Участники</p>
            <h3>Самые загруженные</h3>
          </div>
        </div>
        <div class="team-progress-list">${renderProgressRows(stats.byAssignee.slice(0, 8))}</div>
      </article>

      <article class="team-chart-card">
        <div class="team-chart-head">
          <div>
            <p class="eyebrow">Риски</p>
            <h3>Просроченные задачи</h3>
          </div>
        </div>
        <div class="team-mini-list">${renderMiniTaskList(stats.overdueTasks.slice(0, 6), "Просроченных задач нет.")}</div>
      </article>

      <article class="team-chart-card">
        <div class="team-chart-head">
          <div>
            <p class="eyebrow">Календарь</p>
            <h3>Ближайшие дедлайны</h3>
          </div>
        </div>
        <div class="team-mini-list">${renderMiniTaskList(stats.upcoming, "Ближайших дедлайнов нет.")}</div>
      </article>
    </section>
  `;
}

function switchTeamTaskView(view) {
  activeTeamTaskView = view;
  teamTaskTabs.querySelectorAll("[data-team-task-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.teamTaskView === view);
  });
  teamTaskDashboardView.hidden = view !== "tasks";
  teamTaskDashboardView.classList.toggle("is-active", view === "tasks");
  teamTaskStatsView.hidden = view !== "stats";
  teamTaskStatsView.classList.toggle("is-active", view === "stats");
  teamTaskKanbanView.hidden = view !== "kanban";
  teamTaskKanbanView.classList.toggle("is-active", view === "kanban");

  if (view === "stats") {
    renderTeamTaskStats();
  }

  if (view === "kanban") {
    renderTeamTaskKanban();
  }
}

function resetTeamTaskForm() {
  teamTaskForm.reset();
  teamTaskIdInput.value = "";
  teamTaskStatusInput.value = "new";
  teamTaskPriorityInput.value = "medium";
  if (teamTaskChecklistInput) teamTaskChecklistInput.value = "";
  if (teamTaskAttachmentsInput) teamTaskAttachmentsInput.value = "";
  if (teamTaskCommentInput) teamTaskCommentInput.value = "";
  teamTaskSubmitText.textContent = "Создать задачу";
  renderTeamTaskAssigneePicker();
}

function openTeamTaskModal(directionKey, taskId = "") {
  resetTeamTaskForm();
  const task = teamTasks.find((item) => item.id === taskId);
  const direction = getTeamDirectionMeta(directionKey || task?.direction);

  teamTaskModal.hidden = false;
  document.body.classList.add("modal-open");
  teamTaskDirectionInput.value = direction.key;
  teamTaskStatusInput.value = "new";
  teamTaskPriorityInput.value = "medium";

  if (task) {
    teamTaskIdInput.value = task.id;
    teamTaskDirectionInput.value = task.direction;
    teamTaskTitleInput.value = task.title;
    teamTaskDescriptionInput.value = task.description || "";
    teamTaskAssigneesInput.value = (task.assignees || []).join(", ");
    teamTaskStatusInput.value = task.status;
    teamTaskStartDateInput.value = task.startDate || "";
    teamTaskDeadlineInput.value = task.deadline || "";
    teamTaskPriorityInput.value = task.priority;
    teamTaskNotesInput.value = getTeamTaskVisibleNotes(task);
    if (teamTaskChecklistInput) teamTaskChecklistInput.value = formatTeamTaskChecklistInput(task.checklist);
    if (teamTaskAttachmentsInput) teamTaskAttachmentsInput.value = formatTeamTaskAttachmentInput(task.attachments);
    if (teamTaskCommentInput) teamTaskCommentInput.value = "";
    teamTaskSubmitText.textContent = "Обновить задачу";
  }

  renderTeamTaskAssigneePicker();
  document.querySelector("#teamTaskModalTitle").textContent = task ? "Редактировать задачу" : `Создать задачу: ${direction.label}`;
  teamTaskTitleInput.focus();
}

function closeTeamTaskModal() {
  teamTaskModal.hidden = true;
  document.body.classList.remove("modal-open");
  resetTeamTaskForm();
}

function createTeamTaskFromForm() {
  const assignees = parseTeamTaskAssignees(teamTaskAssigneesInput.value);
  const existingTask = teamTasks.find((task) => task.id === teamTaskIdInput.value);
  const now = new Date().toISOString();
  const nextStatus = teamTaskStatusInput.value;
  const comments = getTeamTaskComments(existingTask || {});
  const newComment = teamTaskCommentInput?.value.trim() || "";
  ensureTeamTaskMembers(assignees);

  if (!existingTask) {
    comments.unshift(createTeamTaskActivity("Задача создана", "history"));
  }

  if (existingTask && existingTask.status !== nextStatus) {
    comments.unshift(createTeamTaskActivity(`Статус изменен: ${getTeamTaskStatusMeta(existingTask.status).label} → ${getTeamTaskStatusMeta(nextStatus).label}`, "history"));
  }

  if (newComment) {
    comments.unshift(createTeamTaskActivity(newComment, "comment"));
  }

  const acknowledgements = getTaskAcknowledgements(existingTask || {});
  const checklist = parseTeamTaskChecklistInput(teamTaskChecklistInput?.value || "", existingTask?.checklist || []);
  const attachments = parseTeamTaskAttachmentInput(teamTaskAttachmentsInput?.value || "", existingTask?.attachments || []);

  return {
    id: teamTaskIdInput.value || createId(),
    direction: teamTaskDirectionInput.value,
    title: teamTaskTitleInput.value.trim(),
    description: teamTaskDescriptionInput.value.trim(),
    assignees,
    status: nextStatus,
    startDate: teamTaskStartDateInput.value,
    deadline: teamTaskDeadlineInput.value,
    priority: teamTaskPriorityInput.value,
    notes: mergeTeamTaskMetaIntoNotes(teamTaskNotesInput.value.trim(), { acknowledgements, checklist, attachments, comments }),
    acknowledgements,
    checklist,
    attachments,
    comments,
    createdAt: existingTask?.createdAt || now,
    updatedAt: now,
  };
}

function setTeamTaskStatus(id, nextStatus) {
  if (!TEAM_TASK_STATUSES.some((status) => status.key === nextStatus)) return;

  teamTasks = teamTasks.map((task) => {
    if (task.id !== id) return task;
    if (task.status === nextStatus) return task;

    return {
      ...task,
      status: nextStatus,
      comments: [
        createTeamTaskActivity(`Статус изменен: ${getTeamTaskStatusMeta(task.status).label} → ${getTeamTaskStatusMeta(nextStatus).label}`, "history"),
        ...getTeamTaskComments(task),
      ],
      updatedAt: new Date().toISOString(),
    };
  });
  saveTeamTasks();
  renderTeamTasks();
  renderAssignmentBell();
  if (window.SystemHubNotifications?.render) window.SystemHubNotifications.render();
}

function cycleTeamTaskStatus(id) {
  const statusOrder = TEAM_TASK_STATUSES.map((status) => status.key);
  const task = teamTasks.find((item) => item.id === id);
  if (!task) return;

  const currentIndex = statusOrder.indexOf(task.status);
  const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length] || "new";
  setTeamTaskStatus(id, nextStatus);
}

function toggleTeamTaskChecklistItem(taskId, checklistId) {
  teamTasks = teamTasks.map((task) => {
    if (task.id !== taskId) return task;

    const checklist = getTeamTaskChecklist(task).map((item) => (
      item.id === checklistId ? { ...item, done: !item.done } : item
    ));
    const changedItem = checklist.find((item) => item.id === checklistId);
    const actionText = changedItem?.done ? "Пункт чеклиста выполнен" : "Пункт чеклиста возвращен в работу";

    return {
      ...task,
      checklist,
      comments: changedItem ? [
        createTeamTaskActivity(`${actionText}: ${changedItem.text}`, "history"),
        ...getTeamTaskComments(task),
      ] : getTeamTaskComments(task),
      updatedAt: new Date().toISOString(),
    };
  });

  saveTeamTasks();
  renderTeamTasks();
  renderAssignmentBell();
}

function handleTeamTaskAction(button) {
  const { teamTaskAction, id, direction, status, employeeId, checklistId, listType, listKey } = button.dataset;

  if (teamTaskAction === "toggle-task-list") {
    const targetSet = listType === "kanban" ? expandedTeamTaskKanbanStatuses : expandedTeamTaskDirections;

    if (targetSet.has(listKey)) {
      targetSet.delete(listKey);
    } else {
      targetSet.add(listKey);
    }

    if (listType === "kanban") {
      renderTeamTaskKanban();
    } else {
      renderTeamTasks();
    }
    return;
  }

  if (teamTaskAction === "create") {
    openTeamTaskModal(direction);
  }

  if (teamTaskAction === "edit") {
    const task = teamTasks.find((item) => item.id === id);
    if (task) {
      openTeamTaskModal(task.direction, task.id);
    }
  }

  if (teamTaskAction === "cycle-status") {
    cycleTeamTaskStatus(id);
  }

  if (teamTaskAction === "set-status") {
    setTeamTaskStatus(id, status);
  }

  if (teamTaskAction === "acknowledge") {
    acknowledgeTeamTaskAssignment(id);
  }

  if (teamTaskAction === "toggle-checklist") {
    toggleTeamTaskChecklistItem(id, checklistId);
  }

  if (teamTaskAction === "open-profile" && employeeId) {
    openEmployeeModal(employeeId);
  }

  if (teamTaskAction === "delete") {
    const task = teamTasks.find((item) => item.id === id);
    if (!task) return;

    const confirmed = window.confirm(`Удалить задачу "${task.title}"?`);
    if (!confirmed) return;

    teamTasks = teamTasks.filter((item) => item.id !== id);
    saveTeamTasks();
    renderTeamTasks();
    renderAssignmentBell();
    if (window.SystemHubNotifications?.render) window.SystemHubNotifications.render();
  }
}

function getGroupedTrmsReleases() {
  const groups = trmsReleaseTasks.reduce((map, task) => {
    const releaseName = task.releaseName || "Без релиза";
    const release = map.get(releaseName) || {
      name: releaseName,
      tasks: [],
      updatedAt: task.updatedAt,
    };

    release.tasks.push(task);

    if (!release.updatedAt || task.updatedAt > release.updatedAt) {
      release.updatedAt = task.updatedAt;
    }

    map.set(releaseName, release);
    return map;
  }, new Map());

  return [...groups.values()].sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")));
}

function renderJiraLink(url) {
  if (!url) return '<span class="muted-cell">—</span>';

  const normalizedUrl = normalizeLinkUrl(url);
  return `<a class="release-link" href="${escapeHtml(normalizedUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(url)}</a>`;
}

function renderTrmsReleases() {
  const releases = getGroupedTrmsReleases();

  trmsReleasesList.innerHTML = "";
  trmsReleasesEmptyState.hidden = releases.length > 0;

  releases.forEach((release, index) => {
    const card = document.createElement("article");
    card.className = "release-card";

    const sortedTasks = [...release.tasks].sort((a, b) => {
      const aDate = a.taskStartDate || a.taskWrittenDate || a.updatedAt || "";
      const bDate = b.taskStartDate || b.taskWrittenDate || b.updatedAt || "";
      return String(aDate).localeCompare(String(bDate));
    });
    const prodCount = sortedTasks.filter((task) => task.taskProdDate).length;

    card.innerHTML = `
      <div class="release-card-head">
        <div>
          <p class="eyebrow">Release ${index + 1}</p>
          <h2>${escapeHtml(release.name)}</h2>
        </div>
        <div class="release-summary">
          <span>${formatQuantity(sortedTasks.length)} задач</span>
          <strong>${formatQuantity(prodCount)} в проде</strong>
        </div>
      </div>

      <div class="table-wrap release-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Наименование задачи</th>
              <th>JIRA</th>
              <th>Написана</th>
              <th>Старт</th>
              <th>Завершение</th>
              <th>Прод</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            ${sortedTasks
              .map(
                (task) => `
                  <tr>
                    <td>
                      <div class="system-cell">
                        <strong>${escapeHtml(task.taskName)}</strong>
                        <span>ID: ${escapeHtml(task.id.slice(-6))}</span>
                      </div>
                    </td>
                    <td>${renderJiraLink(task.taskUrl)}</td>
                    <td>${formatDate(task.taskWrittenDate)}</td>
                    <td>${formatDate(task.taskStartDate)}</td>
                    <td>${formatDate(task.taskEndDate)}</td>
                    <td>${formatDate(task.taskProdDate)}</td>
                    <td>
                      <div class="row-actions">
                        <button class="icon-button" type="button" data-trms-release-action="edit" data-id="${task.id}" aria-label="Редактировать задачу релиза" title="Редактировать">
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 20h9"></path>
                            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path>
                          </svg>
                        </button>
                        <button class="icon-button delete-button" type="button" data-trms-release-action="delete" data-id="${task.id}" aria-label="Удалить задачу релиза" title="Удалить">
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M3 6h18"></path>
                            <path d="M8 6V4h8v2"></path>
                            <path d="M19 6l-1 14H6L5 6"></path>
                            <path d="M10 11v5M14 11v5"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;

    trmsReleasesList.appendChild(card);
  });
}

function getRowValue(row, keys) {
  for (const key of keys) {
    const value = row[key];
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      return value;
    }
  }

  return "";
}

function parseReportDateValue(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate());
  }

  const text = String(value || "").trim();
  if (!text) return null;

  const isoMatch = text.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  const ruMatch = text.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})/);
  if (ruMatch) {
    const [, day, month, rawYear] = ruMatch;
    const year = rawYear.length === 2 ? `20${rawYear}` : rawYear;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  const serial = Number(text);
  if (Number.isFinite(serial) && serial > 20_000) {
    const excelEpoch = Date.UTC(1899, 11, 30);
    const date = new Date(excelEpoch + serial * 86_400_000);
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  }

  const fallbackDate = new Date(text);
  return Number.isNaN(fallbackDate.getTime())
    ? null
    : new Date(fallbackDate.getFullYear(), fallbackDate.getMonth(), fallbackDate.getDate());
}

function getReportDateKeyFromDate(date) {
  if (!date) return "Без даты";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatReportDateValue(date) {
  return date ? new Intl.DateTimeFormat("ru-RU").format(date) : "-";
}

function formatReportDateIso(date) {
  return date ? getReportDateKeyFromDate(date) : "-";
}

function getReportCategory(row) {
  return String(getRowValue(row, ["category_name", "Training category (name)", "Training category", "Category"]) || "Не указано").trim();
}

function getReportTrainingName(row) {
  return String(getRowValue(row, ["template_name", "event_name", "Training", "Training name", "Название тренинга"]) || "Без названия").trim();
}

function getReportParticipants(row) {
  const participants = splitList(getRowValue(row, ["student", "Full name En", "Full name Ru", "Participant", "Employee"]));
  if (participants.length > 0) return participants;

  return splitList(getRowValue(row, ["student_empnumber", "Personal number", "Employee number"]));
}

function getReportParticipantKeys(row) {
  const keys = splitList(getRowValue(row, ["student_empnumber", "Personal number", "Employee number"]));
  if (keys.length > 0) return keys;

  return getReportParticipants(row);
}

function getReportStudentCount(row) {
  return getReportParticipants(row).length;
}

function getReportDate(row) {
  return parseReportDateValue(getRowValue(row, ["start_date", "Start date", "Start Date"]));
}

function getReportEndDate(row) {
  return parseReportDateValue(getRowValue(row, ["end_date", "End date", "End Date"]));
}

function getReportYear(row) {
  return getReportDate(row)?.getFullYear().toString() || "Без даты";
}

function getReportMonthNumber(row) {
  const date = getReportDate(row);
  if (!date) return "Без даты";
  return String(date.getMonth() + 1).padStart(2, "0");
}

function getReportMonth(row) {
  const date = getReportDate(row);
  if (!date) return "Без даты";

  return new Intl.DateTimeFormat("ru-RU", {
    month: "short",
    year: "numeric",
  }).format(date);
}

function getReportType(row) {
  const text = `${getReportTrainingName(row)} ${getRowValue(row, ["template_name", "event_name"])}`.toLowerCase();
  if (text.includes("recurrent")) return "Recurrent";
  if (text.includes("initial")) return "Initial";
  if (text.includes("cad")) return "CAD";
  if (text.includes("module")) return "Module";
  if (getReportCategory(row).toLowerCase().includes("non-training")) return "Non-training";
  return "Other";
}

function getReportFormat(row) {
  const explicitFormat = getRowValue(row, ["Format", "format"]);
  if (explicitFormat) return String(explicitFormat).trim();

  const text = `${getReportTrainingName(row)} ${row.group_ || ""} ${row.room || ""}`.toLowerCase();
  if (/(online|webinar|zoom|teams|e-learning|elearning)/.test(text)) return "Online";
  if ((row.room || "").trim()) return "Classroom";
  return "Не указано";
}

function getReportModuleCount(row) {
  const explicitModules = getRowValue(row, ["Modules", "modules"]);
  if (explicitModules) return String(explicitModules).trim();

  const text = getReportTrainingName(row);
  const moduleMatch = text.match(/(\d+)\s*module/i);
  if (moduleMatch) return moduleMatch[1];

  const listMatch = text.match(/\)\s*(\d+(?:\s*,\s*\d+)+)\b/);
  if (listMatch) return String(listMatch[1].split(",").length);

  return "Не указано";
}

function getReportTrainingStatus(row) {
  return getRowValue(row, ["factual_status", "Event status", "Training status"]) || "Не указано";
}

function getReportParticipantStatus(row) {
  return getRowValue(row, ["automatic_status", "Attendance status", "Participant status"]) || "Не указано";
}

function getUniqueValues(rows, getter) {
  return [...new Set(rows.map(getter).filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b), "ru", { numeric: true }));
}

function setFilterOptions(select, values, allLabel = "Все") {
  const previousValue = select.value;
  select.innerHTML = [
    `<option value="">${allLabel}</option>`,
    ...values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`),
  ].join("");

  if (values.includes(previousValue)) {
    select.value = previousValue;
  }
}

function setFilterOptionsFromPairs(select, options, allLabel = "Все") {
  const previousValue = select.value;
  select.innerHTML = [
    `<option value="">${allLabel}</option>`,
    ...options.map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`),
  ].join("");

  if (options.some((option) => option.value === previousValue)) {
    select.value = previousValue;
  }
}

function getReportMonthFilterOptions() {
  return getUniqueValues(reportRows, getReportMonthNumber).map((month) => {
    if (month === "Без даты") return month;
    const date = new Date(2026, Number(month) - 1, 1);
    return `${month} - ${new Intl.DateTimeFormat("ru-RU", { month: "long" }).format(date)}`;
  });
}

function getParticipantMonthFilterOptions() {
  return getUniqueValues(reportRows, getReportMonthNumber).map((month) => ({
    value: month,
    label: month === "Без даты"
      ? month
      : new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date(2026, Number(month) - 1, 1)),
  }));
}

function populateReportFilterSet(filters) {
  setFilterOptions(filters.year, getUniqueValues(reportRows, getReportYear), "Все годы");
  setFilterOptions(
    filters.month,
    getReportMonthFilterOptions(),
    "Все месяцы",
  );
  setFilterOptions(filters.category, getUniqueValues(reportRows, getReportCategory), "Все категории");
  setFilterOptions(filters.type, getUniqueValues(reportRows, getReportType), "Все типы");
  setFilterOptions(filters.format, getUniqueValues(reportRows, getReportFormat), "Все форматы");
  setFilterOptions(filters.module, getUniqueValues(reportRows, getReportModuleCount), "Все модули");
  setFilterOptions(filters.trainingStatus, getUniqueValues(reportRows, getReportTrainingStatus), "Все статусы тренингов");
  setFilterOptions(filters.participantStatus, getUniqueValues(reportRows, getReportParticipantStatus), "Все статусы участников");
}

function getDashboardFilterSet() {
  return {
    year: dashboardYearFilter,
    month: dashboardMonthFilter,
    category: dashboardCategoryFilter,
    type: dashboardTypeFilter,
    format: dashboardFormatFilter,
    module: dashboardModuleFilter,
    trainingStatus: dashboardTrainingStatusFilter,
    participantStatus: dashboardParticipantStatusFilter,
  };
}

function getTrainingReportFilterSet() {
  return {
    year: trainingReportYearFilter,
    month: trainingReportMonthFilter,
    category: trainingReportCategoryFilter,
    type: trainingReportTypeFilter,
    format: trainingReportFormatFilter,
    module: trainingReportModuleFilter,
    trainingStatus: trainingReportTrainingStatusFilter,
    participantStatus: trainingReportParticipantStatusFilter,
  };
}

function populateDashboardFilters() {
  populateReportFilterSet(getDashboardFilterSet());
}

function populateTrainingReportFilters() {
  populateReportFilterSet(getTrainingReportFilterSet());
}

function getReportDayFilterOptions() {
  return getUniqueValues(reportRows, (row) => getReportDateKeyFromDate(getReportDate(row))).map((dayKey) => ({
    value: dayKey,
    label: dayKey === "Без даты" ? dayKey : formatReportDateValue(normalizeDate(dayKey)),
  }));
}

function getParticipantReportFilterSet() {
  return {
    year: participantReportYearFilter,
    month: participantReportMonthFilter,
    day: participantReportDayFilter,
    category: participantReportCategoryFilter,
    training: participantReportTrainingFilter,
  };
}

function populateParticipantReportFilters() {
  const filters = getParticipantReportFilterSet();
  const previousDay = filters.day.value;
  const dayOptions = getUniqueValues(reportRows, (row) => getReportDateKeyFromDate(getReportDate(row))).filter((day) => day !== "Без даты");

  setFilterOptions(filters.year, getUniqueValues(reportRows, getReportYear), "Все годы");
  setFilterOptionsFromPairs(filters.month, getParticipantMonthFilterOptions(), "All months");
  filters.day.min = dayOptions[0] || "";
  filters.day.max = dayOptions[dayOptions.length - 1] || "";
  filters.day.value = previousDay && dayOptions.includes(previousDay) ? previousDay : "";
  setFilterOptions(filters.category, getUniqueValues(reportRows, getReportCategory), "Все категории");
  setFilterOptions(filters.training, getUniqueValues(reportRows, getReportTrainingName), "Все тренинги");
}

function getRowsByReportFilters(filters) {
  const selectedMonth = filters.month.value.split(" - ")[0];

  return reportRows.filter((row) => {
    const matchesYear = !filters.year.value || getReportYear(row) === filters.year.value;
    const matchesMonth = !filters.month.value || getReportMonthNumber(row) === selectedMonth || getReportMonthNumber(row) === filters.month.value;
    const matchesCategory = !filters.category.value || getReportCategory(row) === filters.category.value;
    const matchesType = !filters.type.value || getReportType(row) === filters.type.value;
    const matchesFormat = !filters.format.value || getReportFormat(row) === filters.format.value;
    const matchesModule = !filters.module.value || getReportModuleCount(row) === filters.module.value;
    const matchesTrainingStatus = !filters.trainingStatus.value || getReportTrainingStatus(row) === filters.trainingStatus.value;
    const matchesParticipantStatus = !filters.participantStatus.value || getReportParticipantStatus(row) === filters.participantStatus.value;

    return (
      matchesYear &&
      matchesMonth &&
      matchesCategory &&
      matchesType &&
      matchesFormat &&
      matchesModule &&
      matchesTrainingStatus &&
      matchesParticipantStatus
    );
  });
}

function getFilteredReportRows() {
  return getRowsByReportFilters(getDashboardFilterSet());
}

function getFilteredTrainingReportRows() {
  return getRowsByReportFilters(getTrainingReportFilterSet());
}

function getFilteredParticipantReportRows() {
  const filters = getParticipantReportFilterSet();
  const selectedMonth = filters.month.value.split(" - ")[0];

  return reportRows.filter((row) => {
    const matchesYear = !filters.year.value || getReportYear(row) === filters.year.value;
    const matchesMonth = !filters.month.value || getReportMonthNumber(row) === selectedMonth || getReportMonthNumber(row) === filters.month.value;
    const matchesDay = !filters.day.value || getReportDateKeyFromDate(getReportDate(row)) === filters.day.value;
    const matchesCategory = !filters.category.value || getReportCategory(row) === filters.category.value;
    const matchesTraining = !filters.training.value || getReportTrainingName(row) === filters.training.value;

    return matchesYear && matchesMonth && matchesDay && matchesCategory && matchesTraining;
  });
}

function getTrainingInstanceKey(row) {
  const sessionCode = getRowValue(row, ["session_code", "Session code"]);
  if (sessionCode) return `session:${sessionCode}`;

  return [
    getReportCategory(row),
    getReportTrainingName(row),
    getReportDateKeyFromDate(getReportDate(row)),
    getReportDateKeyFromDate(getReportEndDate(row)),
  ].join("|");
}

function buildTrainingInstances(rows) {
  const instances = rows.reduce((map, row) => {
    const key = getTrainingInstanceKey(row);
    const current = map.get(key) || {
      key,
      category: getReportCategory(row),
      trainingName: getReportTrainingName(row),
      startDate: getReportDate(row),
      endDate: getReportEndDate(row),
      participants: new Map(),
    };
    const participantNames = getReportParticipants(row);
    const participantKeys = getReportParticipantKeys(row);

    participantNames.forEach((name, index) => {
      const participantKey = participantKeys[index] || name;
      current.participants.set(participantKey, name);
    });

    map.set(key, current);
    return map;
  }, new Map());

  return [...instances.values()]
    .map((instance) => ({
      ...instance,
      participantList: [...instance.participants.values()].sort((a, b) => a.localeCompare(b, "ru")),
      participantCount: instance.participants.size,
    }))
    .sort((a, b) => (a.startDate?.getTime() || 0) - (b.startDate?.getTime() || 0));
}

function aggregateTrainingInstances(instances, keyGetter) {
  return instances.reduce((map, instance) => {
    const key = keyGetter(instance) || "Не указано";
    const current = map.get(key) || { key, sessions: 0, students: 0 };
    current.sessions += 1;
    current.students += instance.participantCount;
    map.set(key, current);
    return map;
  }, new Map());
}

function getInstanceMonthLabel(instance) {
  if (!instance.startDate) return "Без даты";
  return new Intl.DateTimeFormat("ru-RU", {
    month: "short",
    year: "numeric",
  }).format(instance.startDate);
}

function renderBarChart(container, items, valueKey, labelKey = "key") {
  const maxValue = Math.max(...items.map((item) => item[valueKey]), 0);

  container.innerHTML =
    items.length > 0
      ? items
          .map((item) => {
            const value = item[valueKey];
            const width = maxValue > 0 ? Math.max(4, Math.round((value / maxValue) * 100)) : 0;

            return `
              <div class="bar-row">
                <div class="bar-row-top">
                  <span>${escapeHtml(item[labelKey])}</span>
                  <strong>${formatQuantity(value)}</strong>
                </div>
                <div class="bar-track"><div class="bar-fill" style="width: ${width}%"></div></div>
              </div>
            `;
          })
          .join("")
      : '<div class="muted-cell">Загрузите CSV-файл, чтобы увидеть график.</div>';
}

function getMonthKey(row) {
  const date = getReportDate(row);
  if (!date) return "Без даты";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function getShortMonthLabel(key) {
  if (key === "Без даты") return key;
  const [year, month] = key.split("-");
  return new Intl.DateTimeFormat("ru-RU", { month: "short" }).format(new Date(Number(year), Number(month) - 1, 1));
}

function getTopReportCategories(rows, limit = 3) {
  return [...aggregateBy(rows, getReportCategory, getReportStudentCount).values()]
    .sort((a, b) => b.sessions - a.sessions)
    .slice(0, limit)
    .map((item) => item.key);
}

function renderGroupedColumnChart(container, rows, seriesNames, seriesGetter) {
  const monthKeys = getUniqueValues(rows, getMonthKey).filter((key) => key !== "Без даты").slice(0, 8);
  const seriesColors = ["is-blue", "is-gold", ""];
  const values = monthKeys.flatMap((monthKey) =>
    seriesNames.map((seriesName) => rows.filter((row) => getMonthKey(row) === monthKey && seriesGetter(row) === seriesName).length),
  );
  const maxValue = Math.max(...values, 1);

  container.innerHTML =
    monthKeys.length > 0
      ? monthKeys
          .map((monthKey) => {
            const bars = seriesNames
              .map((seriesName, index) => {
                const value = rows.filter((row) => getMonthKey(row) === monthKey && seriesGetter(row) === seriesName).length;
                const height = Math.max(4, Math.round((value / maxValue) * 160));
                return `
                  <span class="visual-bar ${seriesColors[index] || "is-blue"}" title="${escapeHtml(seriesName)}: ${value}" style="height: ${height}px">
                    <span class="visual-value">${formatQuantity(value)}</span>
                  </span>
                `;
              })
              .join("");

            return `
              <div class="visual-group">
                <div class="visual-bars">${bars}</div>
                <span class="visual-label">${escapeHtml(getShortMonthLabel(monthKey))}</span>
              </div>
            `;
          })
          .join("")
      : '<div class="muted-cell">Загрузите CSV-файл, чтобы увидеть график.</div>';
}

function renderPie(container, legend, items) {
  const colors = ["#0067b1", "#d6a02f", "#2fb7e5", "#002f5f", "#f5c451", "#8cc7ea"];
  const total = items.reduce((sum, item) => sum + item.sessions, 0);
  let current = 0;
  const gradient = items
    .map((item, index) => {
      const start = current;
      const end = current + (item.sessions / Math.max(total, 1)) * 100;
      current = end;
      return `${colors[index % colors.length]} ${start}% ${end}%`;
    })
    .join(", ");

  container.style.background = total > 0 ? `conic-gradient(${gradient})` : "rgba(255,255,255,0.08)";
  legend.innerHTML =
    items.length > 0
      ? items
          .map((item, index) => `
            <span class="legend-item">
              <span class="legend-dot" style="background: ${colors[index % colors.length]}"></span>
              ${escapeHtml(item.key)} · ${formatQuantity(item.sessions)}
            </span>
          `)
          .join("")
      : '<span class="muted-cell">Нет данных</span>';
}

function renderLineChart(container, series) {
  const width = 520;
  const height = 250;
  const padding = 44;
  const allValues = series.flatMap((item) => item.values.map((point) => point.value));
  const maxValue = Math.max(...allValues, 1);
  const pointCount = Math.max(...series.map((item) => item.values.length), 1);
  const colors = ["#2fb7e5", "#d6a02f", "#0067b1", "#f5c451"];
  const lines = series
    .map((item, seriesIndex) => {
      const points = item.values
        .map((point, index) => {
          const x = padding + (index / Math.max(pointCount - 1, 1)) * (width - padding * 2);
          const y = height - padding - (point.value / maxValue) * (height - padding * 2);
          return `${x},${y}`;
        })
        .join(" ");

      return `<polyline points="${points}" fill="none" stroke="${colors[seriesIndex % colors.length]}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />`;
    })
    .join("");
  const points = series
    .map((item, seriesIndex) =>
      item.values
        .map((point, index) => {
          const x = padding + (index / Math.max(pointCount - 1, 1)) * (width - padding * 2);
          const y = height - padding - (point.value / maxValue) * (height - padding * 2);

          return `<circle cx="${x}" cy="${y}" r="4" fill="${colors[seriesIndex % colors.length]}" stroke="#061225" stroke-width="2" />`;
        })
        .join(""),
    )
    .join("");
  const valueLabels = series
    .map((item, seriesIndex) =>
      item.values
        .map((point, index) => {
          const x = padding + (index / Math.max(pointCount - 1, 1)) * (width - padding * 2);
          const y = height - padding - (point.value / maxValue) * (height - padding * 2);
          const offset = seriesIndex % 2 === 0 ? -10 : 18;
          const labelY = Math.min(height - 12, Math.max(14, y + offset));

          return `<text class="line-value-label" x="${x}" y="${labelY}" text-anchor="middle">${formatQuantity(point.value)}</text>`;
        })
        .join(""),
    )
    .join("");
  const labels = series
    .map((item, index) => `<span class="legend-item"><span class="legend-dot" style="background:${colors[index % colors.length]}"></span>${escapeHtml(item.name)}</span>`)
    .join("");

  container.innerHTML =
    series.length > 0
      ? `
        <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Линейный график">
          <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="rgba(255,255,255,.22)" />
          <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" stroke="rgba(255,255,255,.22)" />
          ${lines}
          ${points}
          ${valueLabels}
        </svg>
        <div class="report-legend">${labels}</div>
      `
      : '<div class="muted-cell">Нет данных для графика.</div>';
}

function normalizePdpKey(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/\s+/g, " ")
    .trim();
}

function getPdpSourceValue(row, aliases) {
  const normalizedAliases = aliases.map(normalizePdpKey);
  const entry = Object.entries(row || {}).find(([key]) => normalizedAliases.includes(normalizePdpKey(key)));
  return entry ? entry[1] : "";
}

function parsePdpBoolean(value) {
  return /^(true|1|yes|да|истина)$/i.test(String(value || "").trim());
}

function parsePdpScore(value) {
  const score = Number(String(value || "").replace(",", "."));
  return Number.isFinite(score) ? score : null;
}

function getPdpYear(value, fallbackValue = "") {
  const explicitYear = String(value || "").match(/\b(20\d{2})\b/)?.[1];
  if (explicitYear) return explicitYear;

  return String(fallbackValue || "").match(/\b(20\d{2})\b/)?.[1] || "Без года";
}

function normalizePdpReportRow(row) {
  const formName = getPdpSourceValue(row, ["Наименование формы", "Form name"]);
  const score = parsePdpScore(getPdpSourceValue(row, ["Балл", "Score"]));

  return {
    fullName: String(getPdpSourceValue(row, ["ФИО", "Full name", "Employee"]) || "").trim(),
    employeeId: String(getPdpSourceValue(row, ["Таб.номер", "Табельный номер", "Employee number"]) || "").trim(),
    department: String(getPdpSourceValue(row, ["Департамент", "Департамент ", "Department"]) || "Не указано").trim(),
    position: String(getPdpSourceValue(row, ["Позиция", " Position", "Position", "Должность"]) || "").trim(),
    manager: String(getPdpSourceValue(row, ["Руководитель (кто проводит апрейзл)", "Руководитель \n(кто проводит апрейзл)", "Руководитель", "Manager"]) || "").trim(),
    costCenter: String(getPdpSourceValue(row, ["Кост центр", "Cost center"]) || "").trim(),
    city: String(getPdpSourceValue(row, ["Город", "City"]) || "Не указано").trim(),
    email: String(getPdpSourceValue(row, ["E-mail", "Email"]) || "").trim(),
    formName,
    year: getPdpYear(getPdpSourceValue(row, ["Год", "Year"]), formName),
    stage: String(getPdpSourceValue(row, ["Этап", "Stage"]) || "Не указано").trim(),
    status: String(getPdpSourceValue(row, ["Статус формы", "Статус", "Status"]) || "Не указано").trim(),
    competency: String(getPdpSourceValue(row, ["Компетенция", "Competency"]) || "Не указано").trim(),
    score,
    topic: String(getPdpSourceValue(row, ["Тема", "Topic"]) || "Без темы").trim(),
    employeeSelected: parsePdpBoolean(getPdpSourceValue(row, ["Выбор сотрудника", "Employee choice"])),
    managerSelected: parsePdpBoolean(getPdpSourceValue(row, ["Выбор менеджера", "Manager choice"])),
    priority: String(getPdpSourceValue(row, ["Приоритет", "Priority"]) || "").trim(),
    managerComment: String(getPdpSourceValue(row, ["Комментарий руководителя", "Manager comment"]) || "").trim(),
  };
}

function normalizePdpAnswerRow(row) {
  return {
    fullName: String(getPdpSourceValue(row, ["ФИО", "Full name", "Employee"]) || "").trim(),
    employeeId: String(getPdpSourceValue(row, ["Таб.номер", "Табельный номер", "Employee number"]) || "").trim(),
    department: String(getPdpSourceValue(row, ["Департамент", "Департамент ", "Department"]) || "Не указано").trim(),
    manager: String(getPdpSourceValue(row, ["Руководитель (кто проводит апрейзл)", "Руководитель \n(кто проводит апрейзл)", "Руководитель", "Manager"]) || "").trim(),
    city: String(getPdpSourceValue(row, ["Город", "City"]) || "Не указано").trim(),
    year: getPdpYear(getPdpSourceValue(row, ["Год", "Year"])),
    stage: String(getPdpSourceValue(row, ["Этап", "Stage"]) || "Не указано").trim(),
    status: String(getPdpSourceValue(row, ["Статус", "Статус формы", "Status"]) || "Не указано").trim(),
    question: String(getPdpSourceValue(row, ["Вопрос", "Question"]) || "Без вопроса").trim(),
    owner: String(getPdpSourceValue(row, ["Чей вопрос", "Owner"]) || "Не указано").trim(),
    answer: String(getPdpSourceValue(row, ["Ответ", "Answer"]) || "").trim(),
  };
}

function setPdpReportStatus(message, type = "") {
  if (!pdpReportStatus) return;

  pdpReportStatus.textContent = message;
  pdpReportStatus.className = `sync-status${type ? ` is-${type}` : ""}`;
}

function getPdpEmployeeKey(row) {
  return row.employeeId || row.fullName || row.email || "";
}

function isPdpCompletedStatus(status) {
  return /заверш|completed|complete/i.test(String(status || ""));
}

function populatePdpReportFilters() {
  if (!pdpFiltersForm) return;

  setFilterOptions(pdpYearFilter, getUniqueValues(pdpReportRows, (row) => row.year), "Все годы");
  setFilterOptions(pdpStageFilter, getUniqueValues(pdpReportRows, (row) => row.stage), "Все этапы");
  setFilterOptions(pdpStatusFilter, getUniqueValues(pdpReportRows, (row) => row.status), "Все статусы");
  setFilterOptions(pdpDepartmentFilter, getUniqueValues(pdpReportRows, (row) => row.department), "Все департаменты");
  setFilterOptions(pdpCityFilter, getUniqueValues(pdpReportRows, (row) => row.city), "Все города");
}

function matchesPdpSelectionFilter(row, selectionFilter) {
  if (!selectionFilter) return true;
  if (selectionFilter === "employee") return row.employeeSelected;
  if (selectionFilter === "manager") return row.managerSelected;
  if (selectionFilter === "both") return row.employeeSelected && row.managerSelected;
  if (selectionFilter === "none") return !row.employeeSelected && !row.managerSelected;
  return true;
}

function getFilteredPdpRows() {
  const search = normalizePdpKey(pdpSearchInput?.value || "");

  return pdpReportRows.filter((row) => {
    const haystack = normalizePdpKey([
      row.fullName,
      row.employeeId,
      row.department,
      row.manager,
      row.competency,
      row.topic,
      row.city,
    ].join(" "));

    return (
      (!pdpYearFilter?.value || row.year === pdpYearFilter.value) &&
      (!pdpStageFilter?.value || row.stage === pdpStageFilter.value) &&
      (!pdpStatusFilter?.value || row.status === pdpStatusFilter.value) &&
      (!pdpDepartmentFilter?.value || row.department === pdpDepartmentFilter.value) &&
      (!pdpCityFilter?.value || row.city === pdpCityFilter.value) &&
      matchesPdpSelectionFilter(row, pdpSelectionFilter?.value || "") &&
      (!search || haystack.includes(search))
    );
  });
}

function getFilteredPdpAnswers() {
  const search = normalizePdpKey(pdpSearchInput?.value || "");

  return pdpAnswerRows.filter((row) => {
    const haystack = normalizePdpKey([
      row.fullName,
      row.employeeId,
      row.department,
      row.manager,
      row.question,
      row.answer,
      row.city,
    ].join(" "));

    return (
      (!pdpYearFilter?.value || row.year === pdpYearFilter.value) &&
      (!pdpStageFilter?.value || row.stage === pdpStageFilter.value) &&
      (!pdpStatusFilter?.value || row.status === pdpStatusFilter.value) &&
      (!pdpDepartmentFilter?.value || row.department === pdpDepartmentFilter.value) &&
      (!pdpCityFilter?.value || row.city === pdpCityFilter.value) &&
      (!search || haystack.includes(search))
    );
  });
}

function getPdpEmployeeSummaries(rows) {
  const summaries = new Map();

  rows.forEach((row) => {
    const key = getPdpEmployeeKey(row);
    if (!key) return;

    const current = summaries.get(key) || {
      key,
      fullName: row.fullName || key,
      employeeId: row.employeeId,
      department: row.department,
      manager: row.manager,
      status: row.status,
      selectedTopics: 0,
      scoreSum: 0,
      scoreCount: 0,
    };

    if (row.employeeSelected || row.managerSelected) current.selectedTopics += 1;
    if (row.score !== null) {
      current.scoreSum += row.score;
      current.scoreCount += 1;
    }
    if (isPdpCompletedStatus(row.status)) current.status = row.status;

    summaries.set(key, current);
  });

  return [...summaries.values()].map((summary) => ({
    ...summary,
    averageScore: summary.scoreCount > 0 ? summary.scoreSum / summary.scoreCount : null,
  }));
}

function getPdpGroupSummary(rows, keyGetter) {
  return rows.reduce((map, row) => {
    const key = keyGetter(row) || "Не указано";
    const current = map.get(key) || {
      key,
      rows: 0,
      employeeKeys: new Set(),
      completedEmployeeKeys: new Set(),
      selectedTopics: 0,
      employeeSelected: 0,
      managerSelected: 0,
      scoreSum: 0,
      scoreCount: 0,
    };

    const employeeKey = getPdpEmployeeKey(row);
    current.rows += 1;
    if (employeeKey) current.employeeKeys.add(employeeKey);
    if (employeeKey && isPdpCompletedStatus(row.status)) current.completedEmployeeKeys.add(employeeKey);
    if (row.employeeSelected || row.managerSelected) current.selectedTopics += 1;
    if (row.employeeSelected) current.employeeSelected += 1;
    if (row.managerSelected) current.managerSelected += 1;
    if (row.score !== null) {
      current.scoreSum += row.score;
      current.scoreCount += 1;
    }

    map.set(key, current);
    return map;
  }, new Map());
}

function renderPdpDashboard() {
  const rows = getFilteredPdpRows();
  const answerRows = getFilteredPdpAnswers();
  const employees = getPdpEmployeeSummaries(rows);
  const completedEmployees = employees.filter((employee) => isPdpCompletedStatus(employee.status)).length;
  const selectedTopicCount = rows.filter((row) => row.employeeSelected || row.managerSelected).length;
  const scoreRows = rows.filter((row) => row.score !== null);
  const averageScore = scoreRows.length > 0
    ? scoreRows.reduce((sum, row) => sum + row.score, 0) / scoreRows.length
    : 0;

  if (pdpEmployeeCount) pdpEmployeeCount.textContent = formatQuantity(employees.length);
  if (pdpCompletedRate) pdpCompletedRate.textContent = employees.length > 0 ? `${Math.round((completedEmployees / employees.length) * 100)}%` : "0%";
  if (pdpSelectedTopicCount) pdpSelectedTopicCount.textContent = formatQuantity(selectedTopicCount);
  if (pdpAverageScore) pdpAverageScore.textContent = averageScore.toFixed(1);

  const statusItems = [...employees.reduce((map, employee) => {
    const key = employee.status || "Не указано";
    const current = map.get(key) || { key, count: 0 };
    current.count += 1;
    map.set(key, current);
    return map;
  }, new Map()).values()].sort((a, b) => b.count - a.count);
  renderBarChart(pdpStatusChart, statusItems, "count");

  const topicItems = [...getPdpGroupSummary(
    rows.filter((row) => row.employeeSelected || row.managerSelected),
    (row) => row.topic,
  ).values()]
    .sort((a, b) => b.selectedTopics - a.selectedTopics)
    .slice(0, 12)
    .map((item) => ({ key: item.key, count: item.selectedTopics }));
  renderBarChart(pdpTopicChart, topicItems, "count");

  const competencyItems = [...getPdpGroupSummary(rows, (row) => row.competency).values()]
    .sort((a, b) => b.selectedTopics - a.selectedTopics || a.key.localeCompare(b.key, "ru"))
    .slice(0, 15);
  pdpCompetencyTable.innerHTML =
    competencyItems.length > 0
      ? competencyItems
          .map((item) => `
            <tr>
              <td>${escapeHtml(item.key)}</td>
              <td>${item.scoreCount > 0 ? (item.scoreSum / item.scoreCount).toFixed(1) : "-"}</td>
              <td>${formatQuantity(item.employeeSelected)}</td>
              <td>${formatQuantity(item.managerSelected)}</td>
            </tr>
          `)
          .join("")
      : renderAnalyticsEmptyRow(4, "Загрузите Excel-файл PDP.");

  const departmentItems = [...getPdpGroupSummary(rows, (row) => row.department).values()]
    .sort((a, b) => b.employeeKeys.size - a.employeeKeys.size)
    .slice(0, 15);
  pdpDepartmentTable.innerHTML =
    departmentItems.length > 0
      ? departmentItems
          .map((item) => {
            const completedRate = item.employeeKeys.size > 0
              ? Math.round((item.completedEmployeeKeys.size / item.employeeKeys.size) * 100)
              : 0;
            return `
              <tr>
                <td>${escapeHtml(item.key)}</td>
                <td>${formatQuantity(item.employeeKeys.size)}</td>
                <td>${completedRate}%</td>
                <td>${formatQuantity(item.selectedTopics)}</td>
              </tr>
            `;
          })
          .join("")
      : renderAnalyticsEmptyRow(4, "Нет данных по департаментам.");

  const topEmployees = employees
    .sort((a, b) => b.selectedTopics - a.selectedTopics || (b.averageScore || 0) - (a.averageScore || 0))
    .slice(0, 25);
  pdpEmployeeTable.innerHTML =
    topEmployees.length > 0
      ? topEmployees
          .map((employee) => `
            <tr>
              <td>
                <div class="system-cell">
                  <strong>${escapeHtml(employee.fullName)}</strong>
                  <span>${escapeHtml(employee.employeeId || "-")}</span>
                </div>
              </td>
              <td>${escapeHtml(employee.department || "-")}</td>
              <td>${escapeHtml(employee.manager || "-")}</td>
              <td>${escapeHtml(employee.status || "-")}</td>
              <td>${formatQuantity(employee.selectedTopics)}</td>
              <td>${employee.averageScore !== null ? employee.averageScore.toFixed(1) : "-"}</td>
            </tr>
          `)
          .join("")
      : renderAnalyticsEmptyRow(6, "Нет сотрудников для выбранного среза.");

  const questionItems = [...answerRows.reduce((map, row) => {
    const key = `${row.owner}::${row.question}`;
    const current = map.get(key) || {
      key,
      question: row.question,
      owner: row.owner,
      answered: 0,
      total: 0,
    };

    current.total += 1;
    if (row.answer) current.answered += 1;
    map.set(key, current);
    return map;
  }, new Map()).values()]
    .sort((a, b) => b.total - a.total)
    .slice(0, 12);
  pdpQuestionTable.innerHTML =
    questionItems.length > 0
      ? questionItems
          .map((item) => {
            const answerRate = item.total > 0 ? Math.round((item.answered / item.total) * 100) : 0;
            return `
              <tr>
                <td class="pdp-question-cell">${escapeHtml(item.question)}</td>
                <td>${escapeHtml(item.owner)}</td>
                <td>${formatQuantity(item.answered)}</td>
                <td>${formatQuantity(item.total)}</td>
                <td>${answerRate}%</td>
              </tr>
            `;
          })
          .join("")
      : renderAnalyticsEmptyRow(5, "Во вкладке ответов пока нет данных для выбранного среза.");
}

function clearPdpReportData() {
  pdpReportRows = [];
  pdpAnswerRows = [];
  if (pdpReportFileInput) pdpReportFileInput.value = "";
  if (pdpReportFileLabel) pdpReportFileLabel.textContent = "Выберите Excel-файл PDP";
  if (pdpFiltersForm) pdpFiltersForm.reset();
  setPdpReportStatus("Загрузите Excel-файл PDP. Используются вкладки «Отчет» и «Ответы на вопросы».");
  populatePdpReportFilters();
  renderPdpDashboard();
}

async function loadPdpReportFromFile(file) {
  if (!file) return;

  if (pdpReportFileLabel) pdpReportFileLabel.textContent = `${file.name}: чтение...`;
  setPdpReportStatus("Читаю Excel-файл PDP. Для больших выгрузок это может занять несколько секунд.");

  const workbook = await parseSpreadsheetWorkbook(file);
  const explicitReportSheet = workbook.sheets.find((sheet) => /отчет|report/i.test(sheet.name) && !/ответ|answer/i.test(sheet.name)) || null;
  const answerSheet = workbook.sheets.find((sheet) => /ответ|answer/i.test(sheet.name)) || null;
  const reportSheet = explicitReportSheet || answerSheet || workbook.sheets[0];

  pdpReportRows = (reportSheet?.rows || [])
    .map(normalizePdpReportRow)
    .filter((row) => row.fullName || row.employeeId || row.topic);
  pdpAnswerRows = (answerSheet?.rows || [])
    .map(normalizePdpAnswerRow)
    .filter((row) => row.fullName || row.employeeId || row.question);

  if (pdpReportFileLabel) {
    pdpReportFileLabel.textContent = `${file.name}: ${formatQuantity(pdpReportRows.length)} строк`;
  }

  const warningText = !explicitReportSheet && answerSheet
    ? " Детальная вкладка «Отчет» не прочитана, сводка построена по вкладке «Ответы на вопросы»."
    : "";
  const parserWarnings = workbook.warnings?.length ? ` Предупреждения: ${workbook.warnings.join("; ")}` : "";
  setPdpReportStatus(
    `PDP загружен: ${formatQuantity(pdpReportRows.length)} строк отчета, ${formatQuantity(pdpAnswerRows.length)} строк ответов.${warningText}${parserWarnings}`,
    workbook.warnings?.length ? "warning" : "success",
  );
  populatePdpReportFilters();
  renderPdpDashboard();
}

async function loadPdpReportFromUrl(fileName) {
  try {
    if (pdpReportFileLabel) pdpReportFileLabel.textContent = `Загрузка ${fileName}...`;
    setPdpReportStatus(`Загружаю ${fileName}...`);
    const response = await fetch(fileName);
    if (!response.ok) throw new Error("PDP report file not found");

    const blob = await response.blob();
    const file = new File([blob], fileName, { type: blob.type });
    await loadPdpReportFromFile(file);
  } catch (error) {
    if (pdpReportFileLabel) pdpReportFileLabel.textContent = "Откройте Excel через выбор файла";
    setPdpReportStatus(error.message || "Не удалось загрузить PDP-файл.", "error");
  }
}

function renderDashboards() {
  const rows = getFilteredReportRows();
  const totalSessions = rows.length;
  const totalStudents = rows.reduce((sum, row) => sum + getReportStudentCount(row), 0);
  const uniqueTrainers = new Set(rows.flatMap((row) => splitList(row.trainer))).size;
  const completedSessions = rows.filter((row) => String(getReportTrainingStatus(row) || getReportParticipantStatus(row)).toUpperCase() === "COMPLETED").length;
  const completedRate = totalSessions > 0 ? Math.round((completedSessions / totalSessions) * 100) : 0;

  dashboardSessionCount.textContent = formatQuantity(totalSessions);
  dashboardStudentCount.textContent = formatQuantity(totalStudents);
  dashboardTrainerCount.textContent = formatQuantity(uniqueTrainers);
  dashboardCompletedRate.textContent = `${completedRate}%`;

  const categories = [...aggregateBy(rows, getReportCategory, getReportStudentCount).values()]
    .sort((a, b) => b.sessions - a.sessions)
    .slice(0, 12);

  dashboardCategoriesTable.innerHTML =
    categories.length > 0
      ? categories
          .map((item) => `
            <tr>
              <td>${escapeHtml(item.key)}</td>
              <td>${formatQuantity(item.sessions)}</td>
              <td>${formatQuantity(item.students)}</td>
            </tr>
          `)
          .join("")
      : renderAnalyticsEmptyRow(3, "Загрузите CSV-файл отчета.");

  const statuses = [...aggregateBy(rows, (row) => getReportTrainingStatus(row) || getReportParticipantStatus(row)).values()]
    .sort((a, b) => b.sessions - a.sessions);
  renderBarChart(dashboardStatusesChart, statuses, "sessions");

  const trainerRows = [];
  rows.forEach((row) => {
    splitList(row.trainer).forEach((trainer) => {
      trainerRows.push({ ...row, trainerName: trainer });
    });
  });
  const trainers = [...aggregateBy(trainerRows, (row) => row.trainerName, getReportStudentCount).values()]
    .sort((a, b) => b.sessions - a.sessions)
    .slice(0, 12);

  dashboardTrainersTable.innerHTML =
    trainers.length > 0
      ? trainers
          .map((item) => `
            <tr>
              <td>${escapeHtml(item.key)}</td>
              <td>${formatQuantity(item.sessions)}</td>
              <td>${formatQuantity(item.students)}</td>
            </tr>
          `)
          .join("")
      : renderAnalyticsEmptyRow(3, "Тренеры пока не найдены.");

  const months = [...aggregateBy(rows, getReportMonth, getReportStudentCount).values()];
  renderBarChart(dashboardMonthsChart, months, "sessions");

  const eventsMap = rows.reduce((map, row) => {
    const key = getReportTrainingName(row);
    const current = map.get(key) || { category: getReportCategory(row), key, sessions: 0, students: 0 };
    current.sessions += 1;
    current.students += getReportStudentCount(row);
    map.set(key, current);
    return map;
  }, new Map());
  const events = [...eventsMap.values()].sort((a, b) => b.sessions - a.sessions).slice(0, 20);

  dashboardEventsTable.innerHTML =
    events.length > 0
      ? events
          .map((item) => `
            <tr>
              <td>${escapeHtml(item.key)}</td>
              <td>${escapeHtml(item.category)}</td>
              <td>${formatQuantity(item.sessions)}</td>
              <td>${formatQuantity(item.students)}</td>
            </tr>
          `)
          .join("")
      : renderAnalyticsEmptyRow(4, "Курсы пока не найдены.");
}

function renderTrainingReport() {
  const rows = getFilteredTrainingReportRows();
  const totalSessions = rows.length;
  const totalParticipants = rows.reduce((sum, row) => sum + getReportStudentCount(row), 0);
  const uniqueParticipants = new Set(rows.flatMap(getReportParticipantKeys)).size;
  const initialTrainings = rows.filter((row) => getReportType(row) === "Initial").length;
  const completed = rows.filter((row) => String(getReportTrainingStatus(row) || getReportParticipantStatus(row)).toUpperCase() === "COMPLETED").length;
  const completedRate = totalSessions > 0 ? Math.round((completed / totalSessions) * 100) : 0;

  trainingKpiTrainings.textContent = formatQuantity(totalSessions);
  trainingKpiParticipants.textContent = formatQuantity(totalParticipants);
  trainingKpiUnique.textContent = formatQuantity(uniqueParticipants);
  trainingKpiInitial.textContent = formatQuantity(initialTrainings);
  trainingKpiCompletion.textContent = `${completedRate}%`;

  const topCategories = getTopReportCategories(rows, 3);
  renderGroupedColumnChart(trainingQuantityChart, rows, topCategories, getReportCategory);
  renderGroupedColumnChart(trainingTypeChart, rows, ["Initial", "Recurrent"], getReportType);

  const categoryItems = [...aggregateBy(rows, getReportCategory, getReportStudentCount).values()]
    .sort((a, b) => b.sessions - a.sessions)
    .slice(0, 6);
  renderPie(trainingCategoryPie, trainingCategoryLegend, categoryItems);

  const trainerRows = [];
  rows.forEach((row) => {
    splitList(row.trainer).forEach((trainer) => trainerRows.push({ ...row, trainerName: trainer }));
  });
  const topTrainers = [...aggregateBy(trainerRows, (row) => row.trainerName, getReportStudentCount).values()]
    .sort((a, b) => b.sessions - a.sessions)
    .slice(0, 7)
    .map((item) => item.key);
  const matrixCategories = getTopReportCategories(rows, 4);

  trainingTrainerMatrixHead.innerHTML = `
    <tr>
      <th>Trainers</th>
      ${matrixCategories.map((category) => `<th>${escapeHtml(category)}</th>`).join("")}
      <th>Количество</th>
    </tr>
  `;
  trainingTrainerMatrixBody.innerHTML =
    topTrainers.length > 0
      ? topTrainers
          .map((trainer) => {
            const trainerData = trainerRows.filter((row) => row.trainerName === trainer);
            const cells = matrixCategories
              .map((category) => `<td>${formatQuantity(trainerData.filter((row) => getReportCategory(row) === category).length)}</td>`)
              .join("");

            return `
              <tr>
                <td>${escapeHtml(trainer)}</td>
                ${cells}
                <td>${formatQuantity(trainerData.length)}</td>
              </tr>
            `;
          })
          .join("")
      : renderAnalyticsEmptyRow(matrixCategories.length + 2, "Загрузите CSV-файл отчета.");

  const monthKeys = getUniqueValues(rows, getMonthKey).filter((key) => key !== "Без даты").slice(0, 8);
  const lineCategories = getTopReportCategories(rows, 2);
  renderLineChart(
    trainingEmployeesLine,
    lineCategories.map((category) => ({
      name: category,
      values: monthKeys.map((monthKey) => ({
        key: monthKey,
        value: rows
          .filter((row) => getMonthKey(row) === monthKey && getReportCategory(row) === category)
          .reduce((sum, row) => sum + getReportStudentCount(row), 0),
      })),
    })),
  );
  renderLineChart(
    trainingUniqueLine,
    lineCategories.map((category) => ({
      name: category,
      values: monthKeys.map((monthKey) => ({
        key: monthKey,
        value: new Set(
          rows
            .filter((row) => getMonthKey(row) === monthKey && getReportCategory(row) === category)
            .flatMap(getReportParticipantKeys),
        ).size,
      })),
    })),
  );

  const maxTrainerSessions = Math.max(...topTrainers.map((trainer) => trainerRows.filter((row) => row.trainerName === trainer).length), 1);
  trainingTrainerBars.innerHTML =
    topTrainers.length > 0
      ? `
        <div class="trainer-name-list">${topTrainers.map((trainer) => `<span>${escapeHtml(trainer)}</span>`).join("")}</div>
        <div class="trainer-bar-list">
          ${topTrainers
            .map((trainer) => {
              const count = trainerRows.filter((row) => row.trainerName === trainer).length;
              const width = Math.max(5, Math.round((count / maxTrainerSessions) * 100));
              return `
                <div class="bar-row">
                  <div class="bar-row-top"><span>${escapeHtml(trainer)}</span><strong>${formatQuantity(count)}</strong></div>
                  <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
                </div>
              `;
            })
            .join("")}
        </div>
      `
      : '<div class="muted-cell">Загрузите CSV-файл отчета.</div>';
}

function renderParticipantReports() {
  const rows = getFilteredParticipantReportRows();
  const instances = buildTrainingInstances(rows);
  const totalTrainings = instances.length;
  const totalParticipants = instances.reduce((sum, instance) => sum + instance.participantCount, 0);
  const uniqueParticipants = new Set(rows.flatMap(getReportParticipantKeys)).size;
  const categoryCount = new Set(instances.map((instance) => instance.category)).size;
  const visibleInstances = instances.slice(0, 10);

  participantReportResultCounter.textContent = `Trainings: ${formatQuantity(totalTrainings)} · showing: ${formatQuantity(visibleInstances.length)}`;

  participantReportTrainingCount.textContent = formatQuantity(totalTrainings);
  participantReportParticipantCount.textContent = formatQuantity(totalParticipants);
  participantReportUniqueCount.textContent = formatQuantity(uniqueParticipants);
  participantReportCategoryCount.textContent = formatQuantity(categoryCount);
  participantReportDashboardTrainings.textContent = formatQuantity(totalTrainings);
  participantReportDashboardParticipants.textContent = formatQuantity(totalParticipants);

  const categoryItems = [...aggregateTrainingInstances(instances, (instance) => instance.category).values()]
    .sort((a, b) => b.sessions - a.sessions)
    .slice(0, 12);
  renderBarChart(participantReportCategoryChart, categoryItems, "sessions");

  const monthItems = [...aggregateTrainingInstances(instances, getInstanceMonthLabel).values()]
    .sort((a, b) => String(a.key).localeCompare(String(b.key), "ru", { numeric: true }));
  renderBarChart(participantReportMonthChart, monthItems, "sessions");

  const trainingItems = [...aggregateTrainingInstances(instances, (instance) => instance.trainingName).values()]
    .sort((a, b) => b.students - a.students)
    .slice(0, 12);
  renderBarChart(participantReportTrainingChart, trainingItems, "students");

  participantReportDetailsTable.innerHTML =
    visibleInstances.length > 0
      ? visibleInstances
          .map((instance) => `
            <tr>
              <td>${escapeHtml(instance.category)}</td>
              <td>${escapeHtml(instance.trainingName)}</td>
              <td>${escapeHtml(formatReportDateIso(instance.startDate))}</td>
              <td>${escapeHtml(formatReportDateIso(instance.endDate))}</td>
              <td>${formatQuantity(instance.participantCount)}</td>
              <td class="participant-list-cell">${escapeHtml(instance.participantList.join(", "))}</td>
            </tr>
          `)
          .join("")
      : renderAnalyticsEmptyRow(6, "Загрузите отчет CSV/XLSX или измените фильтры.");

  const summaryRows = [...instances.reduce((map, instance) => {
    const key = instance.trainingName;
    const current = map.get(key) || {
      trainingName: instance.trainingName,
      trainings: 0,
      participants: 0,
    };
    current.trainings += 1;
    current.participants += instance.participantCount;
    map.set(key, current);
    return map;
  }, new Map()).values()].sort((a, b) => b.trainings - a.trainings || b.participants - a.participants);

  participantReportSummaryTable.innerHTML =
    summaryRows.length > 0
      ? summaryRows
          .map((item) => `
            <tr>
              <td>${escapeHtml(item.trainingName)}</td>
              <td>${formatQuantity(item.trainings)}</td>
              <td>${formatQuantity(item.participants)}</td>
            </tr>
          `)
          .join("")
      : renderAnalyticsEmptyRow(3, "Нет данных для итоговой таблицы.");

  participantReportSummaryFoot.innerHTML =
    summaryRows.length > 0
      ? `
        <tr class="summary-row">
          <td>Итого</td>
          <td>${formatQuantity(totalTrainings)}</td>
          <td>${formatQuantity(totalParticipants)}</td>
        </tr>
      `
      : "";
}

function renderStep(name, callback) {
  try {
    callback();
  } catch (error) {
    console.error(`Render failed: ${name}`, error);
  }
}

function render() {
  renderStep("passwordVault", updatePasswordVaultUi);
  renderStep("counters", renderCounters);
  renderStep("links", renderLinks);
  renderStep("surveyLinks", renderSurveyLinks);
  renderStep("promoTable", renderPromoTable);
  renderStep("stockTable", renderStockTable);
  renderStep("promoPurchasePositions", renderPromoPurchasePositions);
  renderStep("promoPurchaseItemFields", renderPromoPurchaseItemFields);
  renderStep("promoPurchaseTable", renderPromoPurchaseTable);
  renderStep("purchaseAnalytics", renderPurchaseAnalytics);
  renderStep("teamMembers", renderTeamMembers);
  renderStep("teamTasks", renderTeamTasks);
  renderStep("todayDashboard", renderTodayDashboard);
  renderStep("myTasks", renderMyTasks);
  renderStep("messenger", renderMessenger);
  renderStep("assignmentBell", renderAssignmentBell);
  renderStep("globalSearch", renderGlobalSearchResults);
  renderStep("elearningTeam", renderElearningTeam);
  renderStep("teamDevelopment", renderTeamDevelopment);
  renderStep("trmsReleases", renderTrmsReleases);
  renderStep("dashboardFilters", populateDashboardFilters);
  renderStep("trainingReportFilters", populateTrainingReportFilters);
  renderStep("participantReportFilters", populateParticipantReportFilters);
  renderStep("pdpReportFilters", populatePdpReportFilters);
  renderStep("dashboards", renderDashboards);
  renderStep("pdpDashboard", renderPdpDashboard);
  renderStep("trainingReport", renderTrainingReport);
  renderStep("participantReports", renderParticipantReports);
  renderStep("googleSheetsSettings", renderGoogleSheetsSettings);
  renderStep("googleCalendarSettings", renderGoogleCalendarSettings);
  renderStep("telegramBotSettings", renderTelegramBotSettings);
  renderStep("systemsTable", renderTable);
  renderStep("language", () => applyLanguage(currentInterfaceLanguage));
}

function resetForm({ focus = true } = {}) {
  form.reset();
  recordIdInput.value = "";
  submitText.textContent = "Сохранить запись";
  passwordInput.type = "password";
  if (focus) {
    systemNameInput.focus();
  }
}

async function createRecordFromForm() {
  return {
    id: recordIdInput.value || createId(),
    systemName: systemNameInput.value.trim(),
    login: loginInput.value.trim(),
    password: await encryptPasswordForStorage(passwordInput.value),
    purchaseDate: purchaseDateInput.value,
    licenseEndDate: licenseEndDateInput.value,
    updatedAt: new Date().toISOString(),
  };
}

function resetLinkForm() {
  linkForm.reset();
  linkIdInput.value = "";
  linkSubmitText.textContent = "Добавить ссылку";
}

function createLinkFromForm() {
  return {
    id: linkIdInput.value || createId(),
    description: linkDescriptionInput.value.trim(),
    url: linkUrlInput.value.trim(),
    updatedAt: new Date().toISOString(),
  };
}

function resetSurveyLinkForm() {
  surveyLinkForm.reset();
  surveyLinkIdInput.value = "";
  surveyLinkSubmitText.textContent = "Добавить форму";
}

function createSurveyLinkFromForm() {
  return {
    id: surveyLinkIdInput.value || createId(),
    description: surveyLinkDescriptionInput.value.trim(),
    url: surveyLinkUrlInput.value.trim(),
    updatedAt: new Date().toISOString(),
  };
}

function hasPromoInputValue(input) {
  return input.value.trim() !== "";
}

function calculatePromoTotals() {
  const hasUnitPriceUsd = hasPromoInputValue(promoUnitPriceUsdInput);
  const hasUnitPriceKzt = hasPromoInputValue(promoUnitPriceKztInput);
  const hasQuantity = hasPromoInputValue(promoQuantityInput);
  const hasExchangeRate = hasPromoInputValue(promoExchangeRateKztInput);
  let unitPriceUsd = hasUnitPriceUsd ? toNumber(promoUnitPriceUsdInput.value) : null;
  let unitPriceKzt = hasUnitPriceKzt ? toNumber(promoUnitPriceKztInput.value) : null;
  const quantity = hasQuantity ? toNumber(promoQuantityInput.value) : 0;
  const exchangeRateKzt = hasExchangeRate ? toNumber(promoExchangeRateKztInput.value) : null;

  if (unitPriceUsd === null && unitPriceKzt !== null && exchangeRateKzt > 0) {
    unitPriceUsd = unitPriceKzt / exchangeRateKzt;
  }

  if (unitPriceKzt === null && unitPriceUsd !== null && exchangeRateKzt > 0) {
    unitPriceKzt = unitPriceUsd * exchangeRateKzt;
  }

  const totalUsd = unitPriceUsd !== null && hasQuantity ? unitPriceUsd * quantity : null;
  const totalKzt = unitPriceKzt !== null && hasQuantity ? unitPriceKzt * quantity : null;

  return {
    unitPriceUsd,
    unitPriceKzt,
    quantity,
    exchangeRateKzt,
    totalUsd,
    totalKzt,
    hasUnitPriceUsd,
    hasUnitPriceKzt,
  };
}

function updatePromoPriceValidation(totals = calculatePromoTotals()) {
  const hasUnitPrice = totals.hasUnitPriceUsd || totals.hasUnitPriceKzt;
  const message = hasUnitPrice ? "" : "Укажите цену за одну единицу в долларах или тенге.";

  promoUnitPriceUsdInput.setCustomValidity(message);
  promoUnitPriceKztInput.setCustomValidity(message);
}

function updatePromoTotals() {
  const totals = calculatePromoTotals();

  updatePromoPriceValidation(totals);
  promoTotalUsdInput.value = totals.totalUsd === null ? "" : totals.totalUsd.toFixed(2);
  promoTotalKztInput.value = totals.totalKzt === null ? "" : totals.totalKzt.toFixed(2);
}

function getPromoUnitPriceUsd(item) {
  const unitPriceUsd = toOptionalNumber(item.unitPriceUsd);
  if (unitPriceUsd !== null) return unitPriceUsd;

  const totalUsd = toOptionalNumber(item.totalUsd);
  const quantity = toNumber(item.quantity);
  return totalUsd !== null && quantity > 0 ? totalUsd / quantity : null;
}

function getPromoUnitPriceKzt(item) {
  const unitPriceKzt = toOptionalNumber(item.unitPriceKzt);
  if (unitPriceKzt !== null) return unitPriceKzt;

  const totalKzt = toOptionalNumber(item.totalKzt);
  const quantity = toNumber(item.quantity);
  if (totalKzt !== null && quantity > 0) return totalKzt / quantity;

  const unitPriceUsd = getPromoUnitPriceUsd(item);
  const exchangeRate = toOptionalNumber(item.exchangeRateKzt);
  return unitPriceUsd !== null && exchangeRate !== null && exchangeRate > 0 ? unitPriceUsd * exchangeRate : null;
}

function getPromoTotalUsd(item) {
  const totalUsd = toOptionalNumber(item.totalUsd);
  if (totalUsd !== null) return totalUsd;

  const unitPriceUsd = getPromoUnitPriceUsd(item);
  return unitPriceUsd !== null ? unitPriceUsd * toNumber(item.quantity) : null;
}

function getPromoTotalKzt(item) {
  const totalKzt = toOptionalNumber(item.totalKzt);
  if (totalKzt !== null) return totalKzt;

  const unitPriceKzt = getPromoUnitPriceKzt(item);
  return unitPriceKzt !== null ? unitPriceKzt * toNumber(item.quantity) : null;
}

function getPromoExchangeRate(item) {
  const exchangeRate = toOptionalNumber(item.exchangeRateKzt);
  if (exchangeRate !== null && exchangeRate > 0) return exchangeRate;

  const unitPriceUsd = getPromoUnitPriceUsd(item);
  const unitPriceKzt = getPromoUnitPriceKzt(item);
  if (unitPriceUsd !== null && unitPriceUsd > 0 && unitPriceKzt !== null) return unitPriceKzt / unitPriceUsd;

  const totalUsd = getPromoTotalUsd(item);
  const totalKzt = getPromoTotalKzt(item);
  return totalUsd !== null && totalUsd > 0 && totalKzt !== null ? totalKzt / totalUsd : null;
}

function resetPromoForm() {
  promoForm.reset();
  promoIdInput.value = "";
  updatePromoTotals();
  promoSubmitText.textContent = "Сохранить позицию";
}

function createPromoItemFromForm() {
  const totals = calculatePromoTotals();

  return {
    id: promoIdInput.value || createId(),
    name: promoNameInput.value.trim(),
    unitPriceUsd: totals.unitPriceUsd,
    unitPriceKzt: totals.unitPriceKzt,
    quantity: totals.quantity,
    exchangeRateKzt: totals.exchangeRateKzt,
    totalUsd: totals.totalUsd,
    totalKzt: totals.totalKzt,
    updatedAt: new Date().toISOString(),
  };
}

function resetStockForm() {
  stockForm.reset();
  stockIdInput.value = "";
  stockSubmitText.textContent = "Сохранить товар";
}

function createStockItemFromForm() {
  return {
    id: stockIdInput.value || createId(),
    name: stockNameInput.value.trim(),
    quantity: toNumber(stockQuantityInput.value),
    note: stockNoteInput.value.trim(),
    updatedAt: new Date().toISOString(),
  };
}

function resetPromoPurchaseForm() {
  promoPurchaseForm.reset();
  promoPurchaseIdInput.value = "";
  promoPurchaseSubmitText.textContent = "Сохранить покупку";
  renderPromoPurchaseItemFields();
}

function getPromoPurchaseItemsFromForm() {
  return [...promoPurchaseItemsFields.querySelectorAll("[data-position-input]")].reduce((acc, input) => {
    const quantity = toNumber(input.value);

    if (quantity > 0) {
      acc[input.dataset.positionInput] = quantity;
    }

    return acc;
  }, {});
}

function createPromoPurchaseFromForm() {
  const existingPurchase = promoPurchases.find((purchase) => purchase.id === promoPurchaseIdInput.value);

  return {
    id: promoPurchaseIdInput.value || createId(),
    fullName: promoPurchaseFullNameInput.value.trim(),
    address: promoPurchaseAddressInput.value.trim(),
    city: promoPurchaseCityInput.value.trim(),
    center: promoPurchaseCenterInput.value.trim(),
    status: existingPurchase?.status || "",
    items: getPromoPurchaseItemsFromForm(),
    updatedAt: new Date().toISOString(),
  };
}

function resetTrmsReleaseForm() {
  trmsReleaseForm.reset();
  trmsReleaseTaskIdInput.value = "";
  trmsReleaseSubmitText.textContent = "Добавить задачу";
}

function createTrmsReleaseTaskFromForm() {
  return {
    id: trmsReleaseTaskIdInput.value || createId(),
    releaseName: trmsReleaseNameInput.value.trim(),
    taskName: trmsTaskNameInput.value.trim(),
    taskUrl: trmsTaskUrlInput.value.trim(),
    taskWrittenDate: trmsTaskWrittenDateInput.value,
    taskStartDate: trmsTaskStartDateInput.value,
    taskEndDate: trmsTaskEndDateInput.value,
    taskProdDate: trmsTaskProdDateInput.value,
    updatedAt: new Date().toISOString(),
  };
}

async function editRecord(id) {
  const record = records.find((item) => item.id === id);
  if (!record) return;

  let password;
  try {
    password = await getRecordPassword(record);
  } catch (error) {
    setPasswordVaultStatus(error.message || "Разблокируйте хранилище для редактирования пароля.", "error");
    return;
  }

  recordIdInput.value = record.id;
  systemNameInput.value = record.systemName;
  loginInput.value = record.login;
  passwordInput.value = password;
  purchaseDateInput.value = record.purchaseDate;
  licenseEndDateInput.value = record.licenseEndDate;
  submitText.textContent = "Обновить запись";
  window.scrollTo({ top: 0, behavior: "smooth" });
  systemNameInput.focus();
}

function editLink(id) {
  const link = links.find((item) => item.id === id);
  if (!link) return;

  linkIdInput.value = link.id;
  linkDescriptionInput.value = link.description;
  linkUrlInput.value = link.url;
  linkSubmitText.textContent = "Обновить ссылку";
  linksPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  linkDescriptionInput.focus();
}

function editSurveyLink(id) {
  const link = surveyLinks.find((item) => item.id === id);
  if (!link) return;

  surveyLinkIdInput.value = link.id;
  surveyLinkDescriptionInput.value = link.description;
  surveyLinkUrlInput.value = link.url;
  surveyLinkSubmitText.textContent = "Обновить форму";
  surveyLinksPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  surveyLinkDescriptionInput.focus();
}

function editPromoItem(id) {
  const item = promoItems.find((promoItem) => promoItem.id === id);
  if (!item) return;

  promoIdInput.value = item.id;
  promoNameInput.value = item.name;
  promoUnitPriceUsdInput.value = getPromoUnitPriceUsd(item) ?? "";
  promoUnitPriceKztInput.value = getPromoUnitPriceKzt(item) ?? "";
  promoQuantityInput.value = item.quantity;
  promoExchangeRateKztInput.value = getPromoExchangeRate(item) ?? "";
  updatePromoTotals();
  promoSubmitText.textContent = "Обновить позицию";
  promoForm.scrollIntoView({ behavior: "smooth", block: "center" });
  promoNameInput.focus();
}

function editStockItem(id) {
  const item = stockItems.find((stockItem) => stockItem.id === id);
  if (!item) return;

  stockIdInput.value = item.id;
  stockNameInput.value = item.name;
  stockQuantityInput.value = item.quantity;
  stockNoteInput.value = item.note;
  stockSubmitText.textContent = "Обновить товар";
  stockForm.scrollIntoView({ behavior: "smooth", block: "center" });
  stockNameInput.focus();
}

function editPromoPurchase(id) {
  const purchase = promoPurchases.find((item) => item.id === id);
  if (!purchase) return;

  promoPurchaseIdInput.value = purchase.id;
  promoPurchaseFullNameInput.value = purchase.fullName || purchase.name || "";
  promoPurchaseAddressInput.value = purchase.address || "";
  promoPurchaseCityInput.value = purchase.city || "";
  promoPurchaseCenterInput.value = purchase.center || "";
  renderPromoPurchaseItemFields(purchase.items || {});
  promoPurchaseSubmitText.textContent = "Обновить покупку";
  promoPurchaseForm.scrollIntoView({ behavior: "smooth", block: "center" });
  promoPurchaseFullNameInput.focus();
}

function editTrmsReleaseTask(id) {
  const task = trmsReleaseTasks.find((item) => item.id === id);
  if (!task) return;

  trmsReleaseTaskIdInput.value = task.id;
  trmsReleaseNameInput.value = task.releaseName;
  trmsTaskNameInput.value = task.taskName;
  trmsTaskUrlInput.value = task.taskUrl;
  trmsTaskWrittenDateInput.value = task.taskWrittenDate;
  trmsTaskStartDateInput.value = task.taskStartDate;
  trmsTaskEndDateInput.value = task.taskEndDate;
  trmsTaskProdDateInput.value = task.taskProdDate;
  trmsReleaseSubmitText.textContent = "Обновить задачу";
  trmsReleaseForm.scrollIntoView({ behavior: "smooth", block: "center" });
  trmsTaskNameInput.focus();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  let formRecord;
  try {
    formRecord = await createRecordFromForm();
  } catch (error) {
    setPasswordVaultStatus(error.message || "Не удалось зашифровать пароль.", "error");
    return;
  }

  const existingIndex = records.findIndex((record) => record.id === formRecord.id);

  if (existingIndex >= 0) {
    records[existingIndex] = formRecord;
  } else {
    records.unshift(formRecord);
  }

  saveRecords();
  clearPasswordRevealTimer(formRecord.id);
  visiblePasswords.delete(formRecord.id);
  decryptedPasswordCache.delete(formRecord.id);
  updatePasswordVaultUi();
  resetForm();
  render();
});

resetFormButton.addEventListener("click", resetForm);

unlockPasswordVaultButton.addEventListener("click", () => {
  unlockPasswordVault();
});

lockPasswordVaultButton.addEventListener("click", lockPasswordVault);

masterPasswordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    unlockPasswordVault();
  }
});

linkForm.addEventListener("submit", (event) => {
  event.preventDefault();

  linkUrlInput.value = normalizeLinkUrl(linkUrlInput.value);

  if (!linkForm.reportValidity()) return;

  if (!isHttpUrl(linkUrlInput.value)) {
    linkUrlInput.setCustomValidity("Введите ссылку с http:// или https://");
    linkUrlInput.reportValidity();
    linkUrlInput.setCustomValidity("");
    return;
  }

  const formLink = createLinkFromForm();
  const existingIndex = links.findIndex((link) => link.id === formLink.id);

  if (existingIndex >= 0) {
    links[existingIndex] = formLink;
  } else {
    links.unshift(formLink);
  }

  saveLinks();
  resetLinkForm();
  renderLinks();
});

resetLinkFormButton.addEventListener("click", resetLinkForm);

surveyLinkForm.addEventListener("submit", (event) => {
  event.preventDefault();

  surveyLinkUrlInput.value = normalizeLinkUrl(surveyLinkUrlInput.value);

  if (!surveyLinkForm.reportValidity()) return;

  if (!isHttpUrl(surveyLinkUrlInput.value)) {
    surveyLinkUrlInput.setCustomValidity("Введите ссылку с http:// или https://");
    surveyLinkUrlInput.reportValidity();
    surveyLinkUrlInput.setCustomValidity("");
    return;
  }

  const formLink = createSurveyLinkFromForm();
  const existingIndex = surveyLinks.findIndex((link) => link.id === formLink.id);

  if (existingIndex >= 0) {
    surveyLinks[existingIndex] = formLink;
  } else {
    surveyLinks.unshift(formLink);
  }

  saveSurveyLinks();
  resetSurveyLinkForm();
  renderSurveyLinks();
});

resetSurveyLinkFormButton.addEventListener("click", resetSurveyLinkForm);

promoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  updatePromoTotals();

  if (!promoForm.reportValidity()) return;

  const formItem = createPromoItemFromForm();
  const existingIndex = promoItems.findIndex((item) => item.id === formItem.id);

  if (existingIndex >= 0) {
    promoItems[existingIndex] = formItem;
  } else {
    promoItems.unshift(formItem);
  }

  savePromoItems();
  resetPromoForm();
  renderPromoTable();
});

resetPromoFormButton.addEventListener("click", resetPromoForm);

[promoUnitPriceUsdInput, promoUnitPriceKztInput, promoQuantityInput, promoExchangeRateKztInput].forEach((input) => {
  input.addEventListener("input", updatePromoTotals);
});

stockForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!stockForm.reportValidity()) return;

  const formItem = createStockItemFromForm();
  const existingIndex = stockItems.findIndex((item) => item.id === formItem.id);

  if (existingIndex >= 0) {
    stockItems[existingIndex] = formItem;
  } else {
    stockItems.unshift(formItem);
  }

  saveStockItems();
  resetStockForm();
  renderStockTable();
  renderPurchaseAnalytics();
});

resetStockFormButton.addEventListener("click", resetStockForm);

reportFileInput.addEventListener("change", async () => {
  return handleReportFileInput(reportFileInput, reportFileLabel);
  const [file] = reportFileInput.files;
  if (!file) return;

  const text = await file.text();
  reportRows = parseCsv(text);
  saveReportRows();
  reportFileLabel.textContent = `${file.name}: ${formatQuantity(reportRows.length)} строк`;
  trainingReportFileLabel.textContent = `${file.name}: ${formatQuantity(reportRows.length)} строк`;
  populateDashboardFilters();
  populateTrainingReportFilters();
  renderDashboards();
  renderTrainingReport();
});

loadDefaultReportButton.addEventListener("click", async () => {
  return loadReportFromUrl("Отчет (3).csv", reportFileLabel);
  try {
    const response = await fetch("Отчет (3).csv");
    if (!response.ok) throw new Error("CSV не найден");

    const text = await response.text();
    reportRows = parseCsv(text);
    saveReportRows();
    reportFileLabel.textContent = `Отчет (3).csv: ${formatQuantity(reportRows.length)} строк`;
    trainingReportFileLabel.textContent = `Отчет (3).csv: ${formatQuantity(reportRows.length)} строк`;
    populateDashboardFilters();
    populateTrainingReportFilters();
    renderDashboards();
    renderTrainingReport();
  } catch {
    reportFileLabel.textContent = "Откройте CSV через выбор файла";
  }
});

clearReportDataButton.addEventListener("click", () => {
  return clearReportData();
  reportRows = [];
  removeStorageValue(REPORT_STORAGE_KEY);
  reportFileInput.value = "";
  trainingReportFileInput.value = "";
  reportFileLabel.textContent = "Выберите CSV файл";
  trainingReportFileLabel.textContent = "Выберите CSV файл";
  populateDashboardFilters();
  populateTrainingReportFilters();
  renderDashboards();
  renderTrainingReport();
});

dashboardFiltersForm.addEventListener("change", renderDashboards);

resetDashboardFiltersButton.addEventListener("click", () => {
  dashboardFiltersForm.reset();
  renderDashboards();
});

if (pdpReportFileInput) {
  pdpReportFileInput.addEventListener("change", async () => {
    const [file] = pdpReportFileInput.files;
    if (!file) return;

    try {
      await loadPdpReportFromFile(file);
    } catch (error) {
      if (pdpReportFileLabel) pdpReportFileLabel.textContent = "Файл не удалось прочитать";
      setPdpReportStatus(error.message || "Файл PDP не удалось прочитать.", "error");
    }
  });
}

if (loadDefaultPdpReportButton) {
  loadDefaultPdpReportButton.addEventListener("click", () => loadPdpReportFromUrl(PDP_DEFAULT_REPORT_FILE));
}

if (clearPdpReportDataButton) {
  clearPdpReportDataButton.addEventListener("click", clearPdpReportData);
}

if (pdpFiltersForm) {
  pdpFiltersForm.addEventListener("change", renderPdpDashboard);
  pdpFiltersForm.addEventListener("input", renderPdpDashboard);
}

if (resetPdpFiltersButton) {
  resetPdpFiltersButton.addEventListener("click", () => {
    pdpFiltersForm.reset();
    renderPdpDashboard();
  });
}

trainingReportFiltersForm.addEventListener("change", renderTrainingReport);

resetTrainingReportFiltersButton.addEventListener("click", () => {
  trainingReportFiltersForm.reset();
  renderTrainingReport();
});

trainingReportFileInput.addEventListener("change", async () => {
  return handleReportFileInput(trainingReportFileInput, trainingReportFileLabel);
  const [file] = trainingReportFileInput.files;
  if (!file) return;

  const text = await file.text();
  reportRows = parseCsv(text);
  saveReportRows();
  trainingReportFileLabel.textContent = `${file.name}: ${formatQuantity(reportRows.length)} строк`;
  reportFileLabel.textContent = `${file.name}: ${formatQuantity(reportRows.length)} строк`;
  populateDashboardFilters();
  populateTrainingReportFilters();
  renderDashboards();
  renderTrainingReport();
});

trainingReportLoadDefaultButton.addEventListener("click", async () => {
  return loadReportFromUrl("Отчет (3).csv", trainingReportFileLabel);
  try {
    const response = await fetch("Отчет (3).csv");
    if (!response.ok) throw new Error("CSV не найден");

    const text = await response.text();
    reportRows = parseCsv(text);
    saveReportRows();
    trainingReportFileLabel.textContent = `Отчет (3).csv: ${formatQuantity(reportRows.length)} строк`;
    reportFileLabel.textContent = `Отчет (3).csv: ${formatQuantity(reportRows.length)} строк`;
    populateDashboardFilters();
    populateTrainingReportFilters();
    renderDashboards();
    renderTrainingReport();
  } catch {
    trainingReportFileLabel.textContent = "Откройте CSV через выбор файла";
  }
});

participantReportFileInput.addEventListener("change", () => handleReportFileInput(participantReportFileInput, participantReportFileLabel));

loadParticipantDefaultReportButton.addEventListener("click", () => {
  loadReportFromUrl("Report.xlsx", participantReportFileLabel);
});

clearParticipantReportDataButton.addEventListener("click", clearReportData);

participantReportFiltersForm.addEventListener("change", renderParticipantReports);

resetParticipantReportFiltersButton.addEventListener("click", () => {
  participantReportFiltersForm.reset();
  renderParticipantReports();
});

promoPurchasePositionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!promoPurchasePositionForm.reportValidity()) return;

  const positionName = promoPurchasePositionNameInput.value.trim();
  const alreadyExists = promoPurchasePositions.some((position) => position.name.toLowerCase() === positionName.toLowerCase());

  if (alreadyExists) {
    promoPurchasePositionNameInput.setCustomValidity("Такая позиция уже есть");
    promoPurchasePositionNameInput.reportValidity();
    promoPurchasePositionNameInput.setCustomValidity("");
    return;
  }

  const currentItems = getPromoPurchaseItemsFromForm();
  promoPurchasePositions.push({
    id: createId(),
    name: positionName,
    updatedAt: new Date().toISOString(),
  });

  savePromoPurchasePositions();
  promoPurchasePositionForm.reset();
  renderPromoPurchasePositions();
  renderPromoPurchaseItemFields(currentItems);
  renderPromoPurchaseTable();
  renderPurchaseAnalytics();
});

promoPurchaseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!promoPurchaseForm.reportValidity()) return;

  const formPurchase = createPromoPurchaseFromForm();
  const existingIndex = promoPurchases.findIndex((purchase) => purchase.id === formPurchase.id);

  if (existingIndex >= 0) {
    promoPurchases[existingIndex] = formPurchase;
  } else {
    promoPurchases.unshift(formPurchase);
  }

  savePromoPurchases();
  resetPromoPurchaseForm();
  renderPromoPurchaseTable();
  renderPurchaseAnalytics();
});

resetPromoPurchaseFormButton.addEventListener("click", resetPromoPurchaseForm);

teamMemberForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const added = addTeamTaskMember(teamMemberNameInput.value);
  teamMemberNameInput.value = "";
  teamMemberNameInput.focus();

  if (!added) {
    teamMemberNameInput.setCustomValidity("Такой участник уже есть или имя не заполнено");
    teamMemberNameInput.reportValidity();
    teamMemberNameInput.setCustomValidity("");
  }
});

if (teamMemberList) {
  teamMemberList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-team-member-task-filter]");
    if (!button) return;

    setTeamMemberTaskFilter(button.dataset.teamMemberTaskFilter);
  });
}

teamTaskTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-team-task-view]");
  if (!button) return;
  switchTeamTaskView(button.dataset.teamTaskView);
});

teamTaskBoard.addEventListener("click", (event) => {
  const button = event.target.closest("[data-team-task-action]");
  if (!button) return;
  handleTeamTaskAction(button);
});

teamTaskBoard.addEventListener("change", (event) => {
  const select = event.target.closest("[data-team-task-filter]");
  if (!select) return;

  const { direction, teamTaskFilter } = select.dataset;
  teamTaskFilters[direction][teamTaskFilter] = select.value;
  if (teamTaskFilter === "assignee") {
    activeTeamMemberTaskFilter = "";
    renderTeamMembers();
  }
  expandedTeamTaskDirections.delete(direction);
  renderTeamTasks();
});

[
  myTasksList,
  todayMyAssignments,
  todayUpcomingList,
].forEach((container) => {
  if (!container) return;

  container.addEventListener("click", (event) => {
    const button = event.target.closest("[data-team-task-action]");
    if (!button) return;
    handleTeamTaskAction(button);
  });
});

if (myTasksSearchInput) {
  myTasksSearchInput.addEventListener("input", renderMyTasks);
}

if (myTasksStatusFilter) {
  myTasksStatusFilter.addEventListener("change", renderMyTasks);
}

if (myTasksDeadlineFilter) {
  myTasksDeadlineFilter.addEventListener("change", renderMyTasks);
}

if (teamTaskKanbanBoard) {
  teamTaskKanbanBoard.addEventListener("click", (event) => {
    const button = event.target.closest("[data-team-task-action]");
    if (button) {
      handleTeamTaskAction(button);
      return;
    }

    const card = event.target.closest(".kanban-card");
    if (!card) return;
    const task = teamTasks.find((item) => item.id === card.dataset.id);
    if (task) openTeamTaskModal(task.direction, task.id);
  });

  teamTaskKanbanBoard.addEventListener("dragstart", (event) => {
    const card = event.target.closest(".kanban-card");
    if (!card) return;

    event.dataTransfer.setData("text/plain", card.dataset.id);
    event.dataTransfer.effectAllowed = "move";
  });

  teamTaskKanbanBoard.addEventListener("dragover", (event) => {
    const column = event.target.closest("[data-kanban-status]");
    if (!column) return;

    event.preventDefault();
    column.classList.add("is-drag-over");
  });

  teamTaskKanbanBoard.addEventListener("dragleave", (event) => {
    const column = event.target.closest("[data-kanban-status]");
    if (column) column.classList.remove("is-drag-over");
  });

  teamTaskKanbanBoard.addEventListener("drop", (event) => {
    const column = event.target.closest("[data-kanban-status]");
    if (!column) return;

    event.preventDefault();
    column.classList.remove("is-drag-over");
    const taskId = event.dataTransfer.getData("text/plain");
    if (taskId) setTeamTaskStatus(taskId, column.dataset.kanbanStatus);
  });
}

teamTaskAssigneesInput.addEventListener("input", renderTeamTaskAssigneePicker);

teamTaskAssigneesPicker.addEventListener("click", (event) => {
  const button = event.target.closest("[data-team-task-assignee]");
  if (!button) return;

  toggleTeamTaskAssignee(button.dataset.teamTaskAssignee);
});

teamTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!teamTaskForm.reportValidity()) return;

  const formTask = createTeamTaskFromForm();
  const existingIndex = teamTasks.findIndex((task) => task.id === formTask.id);
  const previousTask = existingIndex >= 0 ? teamTasks[existingIndex] : null;

  if (existingIndex >= 0) {
    teamTasks[existingIndex] = formTask;
  } else {
    teamTasks.unshift(formTask);
  }

  saveTeamTasks();
  closeTeamTaskModal();
  renderTeamMembers();
  renderTeamTasks();
  renderAssignmentBell();
  notifyTeamTaskAssignmentInTelegram(formTask, previousTask);
});

closeTeamTaskModalButton.addEventListener("click", closeTeamTaskModal);
cancelTeamTaskFormButton.addEventListener("click", closeTeamTaskModal);

teamTaskModal.addEventListener("click", (event) => {
  if (event.target === teamTaskModal) {
    closeTeamTaskModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !teamTaskModal.hidden) {
    closeTeamTaskModal();
  }
});

if (assignmentBellButton) {
  assignmentBellButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = assignmentBellButton.getAttribute("aria-expanded") === "true";
    setAssignmentBellOpen(!isOpen);
  });
}

if (assignmentBellPanel) {
  assignmentBellPanel.addEventListener("click", (event) => {
    const acknowledgeButton = event.target.closest('[data-assignment-action="acknowledge"]');
    const openLink = event.target.closest('[data-assignment-action="open"]');
    const messengerReadButton = event.target.closest("[data-messenger-mention-read]");
    const messengerOpenLink = event.target.closest("[data-messenger-open]");

    if (acknowledgeButton) {
      acknowledgeTeamTaskAssignment(acknowledgeButton.dataset.id);
    }

    if (messengerReadButton) {
      markMessengerMessageRead(messengerReadButton.dataset.messengerMentionRead);
    }

    if (messengerOpenLink) {
      activeMessengerConversationId = messengerOpenLink.dataset.messengerOpen || MESSENGER_GENERAL_CONVERSATION_ID;
      markMessengerMessageRead(messengerOpenLink.dataset.messengerMessageId || "");
      renderMessenger();
      setAssignmentBellOpen(false);
    }

    if (openLink) {
      setAssignmentBellOpen(false);
    }
  });
}

if (messengerThreadList) {
  messengerThreadList.addEventListener("click", (event) => {
    const threadButton = event.target.closest("[data-messenger-thread]");
    if (!threadButton) return;

    activeMessengerConversationId = threadButton.dataset.messengerThread || MESSENGER_GENERAL_CONVERSATION_ID;
    renderMessenger();
  });
}

if (startDirectMessengerButton) {
  startDirectMessengerButton.addEventListener("click", () => {
    startDirectMessengerConversation(messengerDirectSelect?.value || "");
  });
}

if (refreshMessengerButton) {
  refreshMessengerButton.addEventListener("click", async () => {
    updateMessengerSyncStatus("Обновление...");
    await loadSharedMessengerState({ silent: false });
    renderMessenger();
  });
}

if (messengerForm) {
  messengerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      await sendMessengerMessage();
    } catch (error) {
      window.alert(error?.message || "Не удалось отправить сообщение.");
    }
  });
}

if (clearMessengerFormButton) {
  clearMessengerFormButton.addEventListener("click", resetMessengerForm);
}

if (messengerMessageList) {
  messengerMessageList.addEventListener("click", async (event) => {
    const readButton = event.target.closest("[data-messenger-read]");
    const voteButton = event.target.closest("[data-messenger-poll-vote]");
    const deleteButton = event.target.closest("[data-messenger-delete]");

    if (deleteButton) {
      try {
        await deleteMessengerMessage(deleteButton.dataset.messengerDelete);
      } catch (error) {
        window.alert(error?.message || "Не удалось удалить сообщение.");
      }
      return;
    }

    if (readButton) {
      markMessengerMessageRead(readButton.dataset.messengerRead);
    }

    if (voteButton) {
      voteMessengerPoll(voteButton.dataset.messengerPollVote, voteButton.dataset.optionId);
    }
  });
}

document.addEventListener("click", (event) => {
  if (assignmentBell && !assignmentBell.contains(event.target)) {
    setAssignmentBellOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setAssignmentBellOpen(false);
  }
});

if (globalSearchInput) {
  globalSearchInput.addEventListener("input", renderGlobalSearchResults);
  globalSearchInput.addEventListener("focus", renderGlobalSearchResults);
  globalSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      globalSearchInput.value = "";
      renderGlobalSearchResults();
      globalSearchInput.blur();
    }
  });
}

if (globalSearchResults) {
  globalSearchResults.addEventListener("click", (event) => {
    const result = event.target.closest("[data-global-search-result]");
    if (!result) return;

    globalSearchInput.value = "";
    globalSearchResults.hidden = true;
  });
}

document.addEventListener("click", (event) => {
  if (globalSearch && !globalSearch.contains(event.target)) {
    if (globalSearchResults) globalSearchResults.hidden = true;
  }
});

if (elearningTeamTree) {
  elearningTeamTree.addEventListener("click", (event) => {
    const card = event.target.closest("[data-employee-id]");
    if (!card) return;

    openEmployeeModal(card.dataset.employeeId);
  });
}

if (employeeProfileForm) {
  employeeProfileForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!employeeProfileForm.reportValidity()) return;

    saveEmployeeProfile();
    closeEmployeeModal();
  });
}

if (employeePhotoInput) {
  employeePhotoInput.addEventListener("change", async () => {
    const file = employeePhotoInput.files?.[0];
    if (!file || !activeEmployeeId) return;

    try {
      pendingEmployeePhoto = await readEmployeePhoto(file);
      setEmployeePhotoPreview({
        ...getElearningEmployee(activeEmployeeId),
        photo: pendingEmployeePhoto,
      });
    } catch (error) {
      console.error(error);
      window.alert("Не удалось загрузить фото.");
    }
  });
}

if (removeEmployeePhotoButton) {
  removeEmployeePhotoButton.addEventListener("click", () => {
    if (!activeEmployeeId) return;

    pendingEmployeePhoto = "";
    if (employeePhotoInput) employeePhotoInput.value = "";
    setEmployeePhotoPreview({
      ...getElearningEmployee(activeEmployeeId),
      photo: "",
    });
  });
}

if (closeEmployeeModalButton) {
  closeEmployeeModalButton.addEventListener("click", closeEmployeeModal);
}

if (cancelEmployeeProfileButton) {
  cancelEmployeeProfileButton.addEventListener("click", closeEmployeeModal);
}

if (employeeModal) {
  employeeModal.addEventListener("click", (event) => {
    if (event.target === employeeModal) {
      closeEmployeeModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && employeeModal && !employeeModal.hidden) {
    closeEmployeeModal();
  }
});

if (teamDevelopmentTabs) {
  teamDevelopmentTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-development-test]");
    if (!button) return;

    setActiveTeamDevelopmentTest(button.dataset.developmentTest);
  });
}

if (teamDevelopmentTestContent) {
  teamDevelopmentTestContent.addEventListener("submit", (event) => {
    event.preventDefault();

    const formElement = event.target.closest("#teamDevelopmentTestForm");
    if (!formElement || !formElement.reportValidity()) return;

    const testKey = formElement.dataset.testKey || activeTeamDevelopmentTest;
    const test = getTeamDevelopmentTest(testKey);
    const answers = collectTeamDevelopmentAnswers(formElement, test);
    pendingTeamDevelopmentResult = calculateTeamDevelopmentResult(testKey, answers);
    renderTeamDevelopmentResult(pendingTeamDevelopmentResult);
  });

  teamDevelopmentTestContent.addEventListener("change", (event) => {
    if (!event.target.matches('input[type="radio"][name^="developmentQuestion"]')) return;
    updateTeamDevelopmentProgress(event.target.closest("#teamDevelopmentTestForm"));
  });

  teamDevelopmentTestContent.addEventListener("reset", (event) => {
    window.setTimeout(() => updateTeamDevelopmentProgress(event.target.closest("#teamDevelopmentTestForm")), 0);
  });
}

if (teamDevelopmentResult) {
  teamDevelopmentResult.addEventListener("click", (event) => {
    const button = event.target.closest('[data-development-action="save-result"]');
    if (!button) return;

    saveTeamDevelopmentFinalResult();
  });
}

if (teamDevelopmentAccessForm) {
  teamDevelopmentAccessForm.addEventListener("submit", (event) => {
    event.preventDefault();
    unlockTeamDevelopmentSensitiveAccess();
  });
}

if (lockTeamDevelopmentAccessButton) {
  lockTeamDevelopmentAccessButton.addEventListener("click", () => {
    lockTeamDevelopmentSensitiveAccess({ focus: true });
  });
}

if (teamDevelopmentEmployeeInput) {
  teamDevelopmentEmployeeInput.addEventListener("change", () => {
    activeTeamDevelopmentPortraitEmployee = getTeamDevelopmentEmployeeName();
    renderTeamDevelopmentPortrait();
  });
}

if (teamDevelopmentPortraitEmployeeSelect) {
  teamDevelopmentPortraitEmployeeSelect.addEventListener("change", () => {
    activeTeamDevelopmentPortraitEmployee = teamDevelopmentPortraitEmployeeSelect.value;
    renderTeamDevelopmentPortrait();
  });
}

if (teamDevelopmentSavedResults) {
  teamDevelopmentSavedResults.addEventListener("click", (event) => {
    if (!isTeamDevelopmentSensitiveUnlocked()) return;

    const deleteButton = event.target.closest("[data-development-result-delete]");
    if (deleteButton) {
      deleteTeamDevelopmentResult(deleteButton.dataset.developmentResultDelete);
      return;
    }

    const viewButton = event.target.closest("[data-development-result-view]");
    if (!viewButton) return;

    const resultId = viewButton.dataset.developmentResultView;
    const result = teamDevelopmentResults.find((item) => item.id === resultId);
    if (result?.employeeName) activeTeamDevelopmentPortraitEmployee = result.employeeName;
    activeTeamDevelopmentSavedResultId = activeTeamDevelopmentSavedResultId === resultId ? "" : resultId;
    renderTeamDevelopmentSavedResults();
    renderTeamDevelopmentPortrait();
  });
}

if (exportTeamDevelopmentResultsButton) {
  exportTeamDevelopmentResultsButton.addEventListener("click", exportTeamDevelopmentResultsCsv);
}

if (clearTeamDevelopmentResultsButton) {
  clearTeamDevelopmentResultsButton.addEventListener("click", () => {
    if (!isTeamDevelopmentSensitiveUnlocked()) {
      window.alert("Сначала откройте доступ логином 14524 или 14962.");
      return;
    }

    if (teamDevelopmentResults.length === 0) return;

    const confirmed = window.confirm("Очистить все сохраненные финальные ответы сотрудников?");
    if (!confirmed) return;

    teamDevelopmentResults = [];
    activeTeamDevelopmentSavedResultId = "";
    activeTeamDevelopmentPortraitEmployee = getTeamDevelopmentEmployeeName();
    saveTeamDevelopmentResults();
    renderTeamDevelopmentSavedResults();
    renderTeamDevelopmentPortrait();
    renderGlobalSearchResults();
  });
}

trmsReleaseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!trmsReleaseForm.reportValidity()) return;

  const formTask = createTrmsReleaseTaskFromForm();
  const existingIndex = trmsReleaseTasks.findIndex((task) => task.id === formTask.id);

  if (existingIndex >= 0) {
    trmsReleaseTasks[existingIndex] = formTask;
  } else {
    trmsReleaseTasks.unshift(formTask);
  }

  saveTrmsReleaseTasks();
  resetTrmsReleaseForm();
  renderTrmsReleases();
});

resetTrmsReleaseFormButton.addEventListener("click", resetTrmsReleaseForm);

googleSheetsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateGoogleScriptUrlFromInput();
  renderGoogleSheetsSettings();
  refreshGoogleSheetsData({ force: true, showStatus: true }).catch((error) => {
    setGoogleSheetsStatus(error.message, "error");
  });
  scheduleGoogleSheetsRefresh(true);
});

testGoogleSheetsButton.addEventListener("click", testGoogleSheetsConnection);
pushToGoogleSheetsButton.addEventListener("click", pushGoogleSheetsData);
pullFromGoogleSheetsButton.addEventListener("click", pullGoogleSheetsData);

if (googleCalendarForm) {
  googleCalendarForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateGoogleCalendarSettingsFromInput();
    renderGoogleCalendarSettings();
  });
}

if (testGoogleCalendarButton) {
  testGoogleCalendarButton.addEventListener("click", testGoogleCalendarConnection);
}

if (syncGoogleCalendarButton) {
  syncGoogleCalendarButton.addEventListener("click", () => syncGoogleCalendarEvents());
}

if (telegramBotForm) {
  telegramBotForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    updateTelegramBotSettingsFromInput();
    setTelegramBotStatus("Сохраняю общие Telegram-настройки...");
    const savedSharedSettings = await saveSharedTelegramSettings();
    if (savedSharedSettings) {
      renderTelegramBotSettings();
      setTelegramBotStatus("Telegram-настройки сохранены и будут доступны другим пользователям.", "success");
    }
  });
}

if (testTelegramBotButton) {
  testTelegramBotButton.addEventListener("click", testTelegramBotConnection);
}

trmsReleasesList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-trms-release-action]");
  if (!button) return;

  const { trmsReleaseAction, id } = button.dataset;

  if (trmsReleaseAction === "edit") {
    editTrmsReleaseTask(id);
  }

  if (trmsReleaseAction === "delete") {
    const task = trmsReleaseTasks.find((item) => item.id === id);
    if (!task) return;

    const confirmed = window.confirm(`Удалить задачу "${task.taskName}" из "${task.releaseName}"?`);
    if (!confirmed) return;

    trmsReleaseTasks = trmsReleaseTasks.filter((item) => item.id !== id);
    saveTrmsReleaseTasks();
    renderTrmsReleases();
  }
});

togglePasswordButton.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePasswordButton.setAttribute("aria-label", isHidden ? "Скрыть пароль" : "Показать пароль");
  togglePasswordButton.setAttribute("title", isHidden ? "Скрыть пароль" : "Показать пароль");
});

searchInput.addEventListener("input", renderTable);
statusFilter.addEventListener("change", renderTable);

tableBody.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const { action, id } = button.dataset;

  if (action === "toggle-row-password") {
    if (visiblePasswords.has(id)) {
      visiblePasswords.delete(id);
      decryptedPasswordCache.delete(id);
      clearPasswordRevealTimer(id);
    } else {
      const record = records.find((item) => item.id === id);
      if (!record) return;

      try {
        await getRecordPassword(record);
      } catch (error) {
        setPasswordVaultStatus(error.message || "Разблокируйте хранилище для просмотра пароля.", "error");
        return;
      }

      visiblePasswords.add(id);
      schedulePasswordAutoHide(id);
    }
    renderTable();
  }

  if (action === "copy-row-password") {
    const record = records.find((item) => item.id === id);
    if (!record) return;

    try {
      const password = await getRecordPassword(record);
      await copyTextToClipboard(password);
      setPasswordVaultStatus("Пароль скопирован в буфер обмена.", "success");
    } catch (error) {
      setPasswordVaultStatus(error.message || "Не удалось скопировать пароль.", "error");
    }
  }

  if (action === "edit") {
    editRecord(id);
  }

  if (action === "delete") {
    const record = records.find((item) => item.id === id);
    if (!record) return;

    const confirmed = window.confirm(`Удалить запись "${record.systemName}"?`);
    if (!confirmed) return;

    records = records.filter((item) => item.id !== id);
    visiblePasswords.delete(id);
    decryptedPasswordCache.delete(id);
    clearPasswordRevealTimer(id);
    saveRecords();
    updatePasswordVaultUi();
    render();
  }
});

linksList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-link-action]");
  if (!button) return;

  const { linkAction, id } = button.dataset;

  if (linkAction === "edit") {
    editLink(id);
  }

  if (linkAction === "delete") {
    const link = links.find((item) => item.id === id);
    if (!link) return;

    const confirmed = window.confirm(`Удалить ссылку "${link.description}"?`);
    if (!confirmed) return;

    links = links.filter((item) => item.id !== id);
    saveLinks();
    renderLinks();
  }
});

surveyLinksList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-survey-action]");
  if (!button) return;

  const { surveyAction, id } = button.dataset;

  if (surveyAction === "edit") {
    editSurveyLink(id);
  }

  if (surveyAction === "delete") {
    const link = surveyLinks.find((item) => item.id === id);
    if (!link) return;

    const confirmed = window.confirm(`Удалить ссылку на форму "${link.description}"?`);
    if (!confirmed) return;

    surveyLinks = surveyLinks.filter((item) => item.id !== id);
    saveSurveyLinks();
    renderSurveyLinks();
  }
});

promoTable.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-promo-action]");
  if (!button) return;

  const { promoAction, id } = button.dataset;

  if (promoAction === "edit") {
    editPromoItem(id);
  }

  if (promoAction === "delete") {
    const item = promoItems.find((promoItem) => promoItem.id === id);
    if (!item) return;

    const confirmed = window.confirm(`Удалить промо продукцию "${item.name}"?`);
    if (!confirmed) return;

    promoItems = promoItems.filter((promoItem) => promoItem.id !== id);
    savePromoItems();
    renderPromoTable();
  }
});

stockTable.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-stock-action]");
  if (!button) return;

  const { stockAction, id } = button.dataset;

  if (stockAction === "edit") {
    editStockItem(id);
  }

  if (stockAction === "delete") {
    const item = stockItems.find((stockItem) => stockItem.id === id);
    if (!item) return;

    const confirmed = window.confirm(`Удалить товар "${item.name}"?`);
    if (!confirmed) return;

    stockItems = stockItems.filter((stockItem) => stockItem.id !== id);
    saveStockItems();
    renderStockTable();
    renderPurchaseAnalytics();
  }
});

promoPurchasePositionsList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-position-action]");
  if (!button) return;

  const { positionAction, id } = button.dataset;

  if (positionAction === "delete") {
    const position = promoPurchasePositions.find((item) => item.id === id);
    if (!position) return;

    const confirmed = window.confirm(`Удалить позицию "${position.name}" из таблицы?`);
    if (!confirmed) return;

    promoPurchasePositions = promoPurchasePositions.filter((item) => item.id !== id);
    promoPurchases = promoPurchases.map((purchase) => {
      const { [id]: _removed, ...items } = purchase.items || {};
      return { ...purchase, items };
    });

    savePromoPurchasePositions();
    savePromoPurchases();
    renderPromoPurchasePositions();
    renderPromoPurchaseItemFields(getPromoPurchaseItemsFromForm());
    renderPromoPurchaseTable();
    renderPurchaseAnalytics();
  }
});

promoPurchaseTable.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-promo-purchase-action]");
  if (!button) return;

  const { promoPurchaseAction, id } = button.dataset;

  if (promoPurchaseAction === "edit") {
    editPromoPurchase(id);
  }

  if (promoPurchaseAction === "delete") {
    const purchase = promoPurchases.find((item) => item.id === id);
    if (!purchase) return;

    const confirmed = window.confirm(`Удалить покупку "${purchase.fullName || purchase.name}"?`);
    if (!confirmed) return;

    promoPurchases = promoPurchases.filter((item) => item.id !== id);
    savePromoPurchases();
    renderPromoPurchaseTable();
    renderPurchaseAnalytics();
  }
});

promoPurchaseTable.addEventListener("change", (event) => {
  const select = event.target.closest("select[data-promo-purchase-status]");
  if (!select) return;

  const purchase = promoPurchases.find((item) => item.id === select.dataset.promoPurchaseStatus);
  if (!purchase) return;

  purchase.status = select.value;
  purchase.updatedAt = new Date().toISOString();
  savePromoPurchases();
  renderPromoPurchaseTable();
  renderPurchaseAnalytics();
});

if (loginForm) {
  loginForm.addEventListener("submit", handleLoginSubmit);
}

if (logoutButton) {
  logoutButton.addEventListener("click", logoutCurrentUser);
}

if (adminUserForm) {
  adminUserForm.addEventListener("submit", handleAdminUserSubmit);
}

if (adminUserResetButton) {
  adminUserResetButton.addEventListener("click", resetAdminUserForm);
}

if (adminUsersTable) {
  adminUsersTable.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-admin-user-action]");
    if (!button) return;

    const { adminUserAction, login } = button.dataset;
    if (adminUserAction === "edit") {
      fillAdminUserForm(login);
    }

    if (adminUserAction === "delete") {
      deleteAuthUser(login);
    }
  });
}

if (themeToggleButton) {
  themeToggleButton.addEventListener("click", toggleTheme);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setInterfaceLanguage(button.dataset.languageChoice);
  });
});

window.addEventListener("hashchange", () => {
  showPage(getPageFromHash());
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden && currentUser) {
    refreshGoogleSheetsData({ force: true }).catch((error) => {
      setGoogleSheetsStatus(error.message, "error");
    });
  }
});

applyTheme(getSavedTheme());
applyLanguage(currentInterfaceLanguage);
initializeAuth();
