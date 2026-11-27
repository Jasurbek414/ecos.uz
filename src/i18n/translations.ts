export type Language = 'uz' | 'ru';

export interface Translations {
  nav: {
    home: string;
    products: string;
    about: string;
    advantages: string;
    pricing: string;
    contact: string;
    loginBtn: string;
  };
  hero: {
    badge: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
    startBtn: string;
    watchVideoBtn: string;
  };
  ecosystem: Array<{
    name: string;
    desc: string;
    icon: string;
  }>;
  whyUs: {
    tag: string;
    title: string;
    description: string;
    aboutBtn: string;
    items: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  };
  showcase: {
    tag: string;
    title: string;
    description: string;
    allBtn: string;
    items: Array<{
      name: string;
      desc: string;
      img: string;
      icon: string;
    }>;
  };
  stats: Array<{
    val: string;
    label: string;
    icon: string;
  }>;
  testimonials: {
    tag: string;
    title: string;
    description: string;
    quote: string;
    author: string;
    company: string;
  };
  cta: {
    titlePrefix: string;
    titleHighlight: string;
    titleMiddle: string;
    titleHighlight2: string;
    subtitle: string;
    startBtn: string;
  };
  footer: {
    slogan: string;
    rights: string;
  };
  contactModal: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    closeBtn: string;
  };
}

export const translations: Record<Language, Translations> = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      products: "Mahsulotlar",
      about: "Biz haqimizda",
      advantages: "Afzalliklar",
      pricing: "Narxlar",
      contact: "Bog'lanish",
      loginBtn: "Kirish",
    },
    hero: {
      badge: "O'zbekistonda innovatsion IT yechimlar",
      titleHighlight: "ECOS — ",
      titleSuffix: "Bizning raqamli kelajagimiz!",
      description: "Biznesingiz, ish jarayoningiz va kundalik hayotingiz uchun zamonaviy, qulay va ishonchli IT mahsulotlar.",
      startBtn: "Boshlash",
      watchVideoBtn: "Video ko'rish",
    },
    ecosystem: [
      { name: "EcosHR", desc: "Kadrlar boshqaruvi", icon: "users" },
      { name: "EcosPOS", desc: "Savdo tizimi", icon: "cart" },
      { name: "EcosCRM", desc: "Mijozlar boshqaruvi", icon: "chart" },
      { name: "EcosVision", desc: "Kuzatuv va tahlil", icon: "eye" },
      { name: "EcosChat", desc: "Onlayn chat", icon: "chat" },
      { name: "EcosPhone", desc: "Aloqa tizimi", icon: "phone" },
    ],
    whyUs: {
      tag: "Nega aynan ECOS?",
      title: "Biz sizga ko'proq imkoniyat beramiz",
      description: "ECOS — bu zamonaviy texnologiyalar, qulay interfeys va ishonchli xizmatdir.",
      aboutBtn: "Biz haqimizda",
      items: [
        { title: "Tez va qulay", desc: "Barcha yechimlar maksimal tezlikda ishlaydi.", icon: "zap" },
        { title: "Ishonchlilik", desc: "Ma'lumotlaringiz har doim himoyalangan.", icon: "shield" },
        { title: "24/7 Texnik yordam", desc: "Har doim sizning xizmatingizda.", icon: "headset" },
        { title: "Moslashuvchanlik", desc: "Biznesingizga mos yechimlar.", icon: "settings" },
        { title: "Bulutli texnologiya", desc: "Har joydan kirish imkoniyati.", icon: "cloud" },
        { title: "Rivojlanish", desc: "Doimiy yangilanish va yangi imkoniyatlar.", icon: "trending" },
      ],
    },
    showcase: {
      tag: "Bizning mahsulotlarimiz",
      title: "Bitta ekotizim — bir nechta imkoniyat",
      description: "ECOS mahsulotlari bilan biznesingizni avtomatlashtiring va rivojlantiring.",
      allBtn: "Barcha mahsulotlar",
      items: [
        {
          name: "EcosHR",
          desc: "Xodimlar nazorati va davomat",
          img: "/images/mockup-hr.png",
          icon: "users",
        },
        {
          name: "EcosPOS",
          desc: "Savdo jarayonini soddalashtiring",
          img: "/images/mockup-pos.png",
          icon: "cart",
        },
        {
          name: "EcosCRM",
          desc: "Mijozlar bilan yanada yaqinroq bo'ling",
          img: "/images/mockup-crm.png",
          icon: "chart",
        },
      ],
    },
    stats: [
      { val: "10+", label: "Muvaffaqiyatli loyiha", icon: "users" },
      { val: "1000+", label: "Mamnun mijozlar", icon: "building" },
      { val: "12", label: "Viloyat qamrovi", icon: "map" },
      { val: "99%", label: "Mijozlar ishonchi", icon: "star" },
    ],
    testimonials: {
      tag: "Mijozlarimiz fikri",
      title: "Ular biz bilan mamnun",
      description: "ECOS xizmatlari haqida mijozlarimiz nima deydi?",
      quote: "ECOS bilan ishlash juda qulay! EcosPOS bizning savdo jarayonimizni ancha yengillashtirdi. Rahmat ECOS jamoasiga!",
      author: "Azizbek Karimov",
      company: 'Namangan, "SmartMarket" MChJ',
    },
    cta: {
      titlePrefix: "Bugundan boshlab ",
      titleHighlight: "ECOS",
      titleMiddle: " bilan kelajagingizni ",
      titleHighlight2: "quring!",
      subtitle: "Innovatsion yechimlar siz uchun!",
      startBtn: "Boshlash",
    },
    footer: {
      slogan: "Innovatsiya. Imkoniyat. Rivojlanish.",
      rights: "Barcha huquqlar himoyalangan.",
    },
    contactModal: {
      title: "ECOS bilan bog'lanish",
      subtitle: "Ma'lumotlaringizni qoldiring, mutaxassisimiz 10 daqiqa ichida siz bilan bog'lanadi.",
      namePlaceholder: "Ismingiz yoki kompaniya nomi",
      phonePlaceholder: "+998 90 123 45 67",
      submitBtn: "Yuborish",
      submittingBtn: "Yuborilmoqda...",
      successTitle: "Murojaatingiz qabul qilindi!",
      successDesc: "Tez orada mutaxassisimiz siz bilan bog'lanadi.",
      closeBtn: "Yopish",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      products: "Продукты",
      about: "О нас",
      advantages: "Преимущества",
      pricing: "Тарифы",
      contact: "Контакты",
      loginBtn: "Войти",
    },
    hero: {
      badge: "Инновационные IT-решения в Узбекистане",
      titleHighlight: "ECOS — ",
      titleSuffix: "Наше цифровое будущее!",
      description: "Современные, удобные и надежные IT-продукты для вашего бизнеса, рабочих процессов и повседневной жизни.",
      startBtn: "Начать",
      watchVideoBtn: "Смотреть видео",
    },
    ecosystem: [
      { name: "EcosHR", desc: "Управление кадрами", icon: "users" },
      { name: "EcosPOS", desc: "Торговая система", icon: "cart" },
      { name: "EcosCRM", desc: "Управление клиентами", icon: "chart" },
      { name: "EcosVision", desc: "Мониторинг и анализ", icon: "eye" },
      { name: "EcosChat", desc: "Онлайн-чат", icon: "chat" },
      { name: "EcosPhone", desc: "Система связи", icon: "phone" },
    ],
    whyUs: {
      tag: "Почему именно ECOS?",
      title: "Мы даем вам больше возможностей",
      description: "ECOS — это современные технологии, удобный интерфейс и надежный сервис.",
      aboutBtn: "О нас",
      items: [
        { title: "Быстро и удобно", desc: "Все решения работают на максимальной скорости.", icon: "zap" },
        { title: "Надежность", desc: "Ваши данные всегда надежно защищены.", icon: "shield" },
        { title: "24/7 Поддержка", desc: "Всегда к вашим услугам без перерывов.", icon: "headset" },
        { title: "Гибкость", desc: "Решения, адаптированные под ваш бизнес.", icon: "settings" },
        { title: "Облачные технологии", desc: "Доступ из любой точки мира.", icon: "cloud" },
        { title: "Развитие", desc: "Постоянные обновления и новые функции.", icon: "trending" },
      ],
    },
    showcase: {
      tag: "Наши продукты",
      title: "Единая экосистема — множество возможностей",
      description: "Автоматизируйте и развивайте свой бизнес с решениями ECOS.",
      allBtn: "Все продукты",
      items: [
        {
          name: "EcosHR",
          desc: "Контроль сотрудников и посещаемость",
          img: "/images/mockup-hr.png",
          icon: "users",
        },
        {
          name: "EcosPOS",
          desc: "Упростите процесс торговли и учета",
          img: "/images/mockup-pos.png",
          icon: "cart",
        },
        {
          name: "EcosCRM",
          desc: "Станьте ближе к вашим клиентам.",
          img: "/images/mockup-crm.png",
          icon: "chart",
        },
      ],
    },
    stats: [
      { val: "10+", label: "Успешных проектов", icon: "users" },
      { val: "1000+", label: "Довольных клиентов", icon: "building" },
      { val: "12", label: "Регионов покрытия", icon: "map" },
      { val: "99%", label: "Доверие клиентов", icon: "star" },
    ],
    testimonials: {
      tag: "Отзывы клиентов",
      title: "Они довольны сотрудничеством с нами",
      description: "Что говорят наши клиенты о сервисах ECOS?",
      quote: "Работать с ECOS невероятно удобно! EcosPOS значительно упростил наши торговые процессы. Спасибо команде ECOS!",
      author: "Азизбек Каримов",
      company: 'г. Наманган, ООО "SmartMarket"',
    },
    cta: {
      titlePrefix: "Начните строить будущее с ",
      titleHighlight: "ECOS",
      titleMiddle: " уже ",
      titleHighlight2: "сегодня!",
      subtitle: "Инновационные решения для вашего успеха!",
      startBtn: "Начать",
    },
    footer: {
      slogan: "Инновация. Возможность. Развитие.",
      rights: "Все права защищены.",
    },
    contactModal: {
      title: "Связаться с ECOS",
      subtitle: "Оставьте заявку, и наш специалист свяжется с вами в течение 10 минут.",
      namePlaceholder: "Ваше имя или название компании",
      phonePlaceholder: "+998 90 123 45 67",
      submitBtn: "Отправить",
      submittingBtn: "Отправка...",
      successTitle: "Заявка успешно принята!",
      successDesc: "Наш специалист свяжется с вами в ближайшее время.",
      closeBtn: "Закрыть",
    },
  },
};
