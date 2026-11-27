export type Language = 'uz' | 'ru';

export interface Translations {
  nav: {
    about: string;
    competencies: string;
    values: string;
    contact: string;
    consultBtn: string;
    callPhone: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    description: string;
    contactBtn: string;
    telegramBtn: string;
    metric1Val: string;
    metric1Label: string;
    metric2Val: string;
    metric2Label: string;
    metric3Val: string;
    metric3Label: string;
    metric4Val: string;
    metric4Label: string;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    bullets: string[];
    cardTitle: string;
    cardSubtitle: string;
    stat1Val: string;
    stat1Label: string;
    stat2Val: string;
    stat2Label: string;
    stat3Val: string;
    stat3Label: string;
    stat4Val: string;
    stat4Label: string;
  };
  competencies: {
    badge: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      details: string[];
    }>;
  };
  values: {
    badge: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    newRequestBtn: string;
    infoPhone: string;
    infoEmail: string;
    infoAddress: string;
    infoHours: string;
    addressVal: string;
    hoursVal: string;
    directCall: string;
    directTelegram: string;
  };
  footer: {
    desc: string;
    rights: string;
    address: string;
  };
}

export const translations: Record<Language, Translations> = {
  uz: {
    nav: {
      about: "Kompaniya haqida",
      competencies: "Yo'nalishlar",
      values: "Qadriyatlarimiz",
      contact: "Aloqa",
      consultBtn: "Bog'lanish",
      callPhone: "+998 (97) 050-42-02",
    },
    hero: {
      badge: "Axborot Texnologiyalari va Smart Tizimlar",
      titlePart1: "Biznesingiz uchun mustahkam ",
      titleHighlight: "raqamli poydevor",
      titlePart2: " va zamonaviy texnologiyalar",
      description: "ECOS Technologies — korxonalar faoliyatini kompleks raqamlashtirish, muhandislik dasturiy ta'minoti, aqlli biometriya va xavfsiz tarmoq infratuzilmasini yaratuvchi texnologik kompaniya.",
      contactBtn: "Hamkorlik uchun bog'lanish",
      telegramBtn: "Telegram orqali yozish",
      metric1Val: "5+ Yil",
      metric1Label: "Muhandislik va ishlab chiqish tajribasi",
      metric2Val: "99.9%",
      metric2Label: "Server va tizimlar barqarorligi",
      metric3Val: "100%",
      metric3Label: "Rasmiy shartnoma va kafolat",
      metric4Val: "24/7",
      metric4Label: "Uzluksiz texnik ko'mak",
    },
    about: {
      badge: "Biz haqimizda",
      title: "Zamonaviy biznes talablariga javob beradigan muhandislik madaniyati",
      p1: "ECOS Technologies O'zbekiston bo'ylab korxona va tashkilotlarga zamonaviy axborot texnologiyalari, murakkab korporativ tizimlar hamda aqlli apparat yechimlarini yetkazib berishga ixtisoslashgan.",
      p2: "Bizning maqsadimiz — mijozlarimizga tarqoq vositalar emas, balki yaxlit, o'zaro muvofiqlashtirilgan va yuqori ishonchlilikka ega tizimli yechimlarni taqdim etishdir. Loyihalashtirishdan boshlab to'liq ishga tushirish va xodimlarni o'qitishgacha barcha mas'uliyatni o'z zimmamizga olamiz.",
      bullets: [
        "100% rasmiy shartnoma va hisob-kitoblar",
        "Ma'lumotlar maxfiyligi bo'yicha qat'iy kafolat (NDA)",
        "Yuqori barqarorlikka ega shaxsiy server arxitekturasi",
        "O'zbekiston bo'ylab operativ texnik ko'mak va servis",
      ],
      cardTitle: "ECOS Technologies MCHJ",
      cardSubtitle: "Texnologik tizimlar integratori",
      stat1Val: "100+",
      stat1Label: "Joriy etilgan korporativ tizimlar",
      stat2Val: "50+",
      stat2Label: "Doimiy korporativ mijozlar",
      stat3Val: "99.9%",
      stat3Label: "Tizimlar uptime ko'rsatkichi",
      stat4Val: "1 Yil",
      stat4Label: "To'liq kafolatli texnik servis",
    },
    competencies: {
      badge: "Asosiy yo'nalishlarimiz",
      title: "Kompaniyamizning asosiy muhandislik kompetensiyalari",
      description: "Biz biznesingizning turli bosqichlaridagi vazifalarni professional darajada hal qiluvchi 4 ta strategik yo'nalishda faoliyat yuritamiz.",
      items: [
        {
          title: "Korporativ Dasturiy Ta'minot",
          description: "Murakkab biznes jarayonlari, resurslar boshqaruvi (ERP), mijozlar bilan munosabatlar (CRM) va ichki tahliliy tizimlarni loyihalash hamda joriy qilish.",
          details: [
            "Modulli va kengayuvchan arxitektura",
            "Mavjud buxgalteriya va davlat tizimlari bilan integratsiya",
            "Xavfsiz va tezkor ma'lumotlar bazalari",
          ],
        },
        {
          title: "Smart Uskunalar va Biometriya",
          description: "Zamonaviy Face ID biometrik uskunalari, smart turniketlar, xodimlar davomati va xavfsizlik perimetrini boshqarish apparat majmualari.",
          details: [
            "Tiriklikni tekshiruvchi (Anti-spoofing) yuz skanerlari",
            "Avtomatlashtirilgan davomat va kirish nazorati",
            "Tarmoq bilan uzluksiz sinxronizatsiya",
          ],
        },
        {
          title: "Sun'iy Intellekt va Jarayonlar Avtomatizatsiyasi",
          description: "Muntazam inson aralashuvini talab qiladigan operatsiyalarni avtomatlashtirish, tahliliy modellar va aqlli yordamchi tizimlarni integratsiya qilish.",
          details: [
            "Ma'lumotlarni tahlil qilish va bashoratlash",
            "24/7 ishlovchi aqlli mijozlar aloqa kanallari",
            "Inson omilidagi xatoliklarni minimallashtirish",
          ],
        },
        {
          title: "Kiberxavfsizlik va Bulutli Infratuzilma",
          description: "Korxona axborot resurslarini tashqi va ichki xatarlardan himoya qilish, shifrlangan korporativ tarmoqlar (VPN) va server barqarorligini ta'minlash.",
          details: [
            "Zero-Trust shifrlangan aloqa kanallari",
            "Avtomatlashtirilgan ko'p bosqichli zaxira nusxalash (Backup)",
            "DDoS va tarmoq hujumlaridan ishonchli himoya",
          ],
        },
      ],
    },
    values: {
      badge: "Qadriyatlarimiz",
      title: "Hamkorlarimiz nima uchun bizga ishonishadi?",
      description: "Bizning faoliyatimiz asosi — uzoq muddatli sheriklik, texnik mukammallik va so'zsiz javobgarlik tamoyillariga qurilgan.",
      items: [
        {
          title: "Yaxlit Javobgarlik (Bitta jamoa)",
          description: "Dasturiy ta'minot, apparat qurilmalari va tarmoq infratuzilmasiga to'liq bitta jamoa javob beradi. Bir-biriga ayb ag'darish holatlari mutlaqo bo'lmaydi.",
        },
        {
          title: "Ma'lumotlar Daxlsizligi va Maxfiylik",
          description: "Mijozlarimizning ichki tijoriy sirlari, moliyaviy ma'lumotlari va xodimlar ma'lumotlari xalqaro shifrlash standartlari hamda qat'iy NDA bilan himoyalangan.",
        },
        {
          title: "Qonuniylik va Rasmiy Kafolat",
          description: "Barcha loyihalar shartnoma asosida amalga oshiriladi. O'rnatilgan har bir tizim va dasturga 1 yillik rasmiy kafolat hamda bepul servis xizmati taqdim etiladi.",
        },
        {
          title: "Doimiy Texnik Hamrohlik",
          description: "Tizim topshirilgandan keyin ham jamoamiz xodimlarni o'qitish, yangilanishlarni kiritish va 24/7 yordam ko'rsatishda davom etadi.",
        },
      ],
    },
    contact: {
      badge: "Aloqa va Hamkorlik",
      title: "Biz bilan bog'laning",
      description: "Biznesingizni yangi texnologik bosqichga olib chiqish bo'yicha maslahat olish yoki hamkorlik qilish uchun biz bilan to'g'ridan-to'g'ri bog'laning.",
      formTitle: "Xabar yoki so'rov qoldiring",
      formSubtitle: "Mutaxassislarimiz qisqa vaqt ichida siz bilan bog'lanib, kerakli ma'lumotlarni berishadi.",
      nameLabel: "Ismingiz yoki Tashkilot nomi",
      namePlaceholder: "Masalan: Jamshid Usmonov",
      phoneLabel: "Telefon raqamingiz",
      messageLabel: "Xabar yoki talablaringiz (ixtiyoriy)",
      messagePlaceholder: "Sizni qiziqtirgan masalani qisqacha yozishingiz mumkin...",
      submitBtn: "Xabarni yuborish",
      submittingBtn: "Yuborilmoqda...",
      successTitle: "Murojaatingiz qabul qilindi!",
      successDesc: "Tez orada mutaxassisimiz ko'rsatilgan telefon raqami orqali siz bilan bog'lanadi.",
      newRequestBtn: "Yana xabar yuborish",
      infoPhone: "To'g'ridan-to'g'ri telefon",
      infoEmail: "Rasmiy elektron pochta",
      infoAddress: "Bosh ofis manzili",
      infoHours: "Ish tartibi",
      addressVal: "Namangan shahri, IT Park majmuasi",
      hoursVal: "Dushanba — Shanba: 09:00 — 18:00",
      directCall: "Qo'ng'iroq qilish",
      directTelegram: "Telegram'da yozish",
    },
    footer: {
      desc: "ECOS Technologies — korporativ dasturiy ta'minot, aqlli tizimlar va xavfsiz texnologik infratuzilma kompaniyasi.",
      rights: "ECOS Technologies. Barcha huquqlar himoyalangan.",
      address: "Namangan shahri, IT Park majmuasi",
    },
  },
  ru: {
    nav: {
      about: "О компании",
      competencies: "Компетенции",
      values: "Принципы",
      contact: "Контакты",
      consultBtn: "Связаться",
      callPhone: "+998 (97) 050-42-02",
    },
    hero: {
      badge: "Информационные и Smart Технологии",
      titlePart1: "Надежный ",
      titleHighlight: "цифровой фундамент",
      titlePart2: " и передовые технологии для вашего бизнеса",
      description: "ECOS Technologies — технологическая компания, специализирующаяся на комплексной цифровизации предприятий, разработке корпоративного ПО, биометрии и безопасной сетевой инфраструктуре.",
      contactBtn: "Обсудить сотрудничество",
      telegramBtn: "Написать в Telegram",
      metric1Val: "5+ Лет",
      metric1Label: "Опыта инженерной разработки",
      metric2Val: "99.9%",
      metric2Label: "Бесперебойность систем и серверов",
      metric3Val: "100%",
      metric3Label: "Официальный договор и гарантия",
      metric4Val: "24/7",
      metric4Label: "Постоянная техническая поддержка",
    },
    about: {
      badge: "О компании",
      title: "Инженерная культура, отвечающая современным требованиям бизнеса",
      p1: "ECOS Technologies специализируется на проектировании и внедрении высоконадежных информационных систем, корпоративного программного обеспечения и интеллектуального оборудования по всему Узбекистану.",
      p2: "Наша ключевая цель — предоставить партнерам не набор разрозненных инструментов, а целостную, согласованную и масштабируемую систему. Мы берем на себя полную ответственность: от проектирования до ввода в эксплуатацию и обучения сотрудников.",
      bullets: [
        "100% официальная деятельность по договору",
        "Строгая конфиденциальность данных и соглашение NDA",
        "Собственная отказоустойчивая серверная инфраструктура",
        "Оперативное сервисное обслуживание по всему Узбекистану",
      ],
      cardTitle: "ООО ECOS Technologies",
      cardSubtitle: "Интегратор технологических систем",
      stat1Val: "100+",
      stat1Label: "Реализованных корпоративных систем",
      stat2Val: "50+",
      stat2Label: "Постоянных корпоративных партнеров",
      stat3Val: "99.9%",
      stat3Label: "Показатель Uptime систем",
      stat4Val: "1 Год",
      stat4Label: "Полная гарантия и сервисная поддержка",
    },
    competencies: {
      badge: "Направления",
      title: "Ключевые инженерные компетенции компании",
      description: "Мы работаем в 4 стратегических направлениях, профессионально решая задачи бизнеса на каждом этапе его развития.",
      items: [
        {
          title: "Корпоративное Программное Обеспечение",
          description: "Проектирование и внедрение ERP, CRM систем, платформ управления ресурсами, финансами и глубокой аналитикой.",
          details: [
            "Модульная масштабируемая архитектура",
            "Интеграция с государственными и бухгалтерскими системами",
            "Высокопроизводительные и защищенные базы данных",
          ],
        },
        {
          title: "Smart Оборудование и Биометрия",
          description: "Интеллектуальные терминалы распознавания лиц (Face ID), турникеты, контроль рабочего времени и управление доступом.",
          details: [
            "Защита от подделок (Anti-spoofing) по живым лицам",
            "Автоматизированный учет трудовой дисциплины",
            "Бесшовная сетевая интеграция в корпоративную сеть",
          ],
        },
        {
          title: "Искусственный Интеллект и Автоматизация",
          description: "Автоматизация рутинных процессов, внедрение прогнозных аналитических алгоритмов и интеллектуальных сервисов.",
          details: [
            "Анализ данных и автоматическая отчетность",
            "Интеллектуальные каналы взаимодействия с клиентами 24/7",
            "Сведение человеческого фактора к минимуму",
          ],
        },
        {
          title: "Кибербезопасность и Облачная Инфраструктура",
          description: "Защита корпоративной информации от внешних и внутренних угроз, построение изолированных корпоративных VPN и отказоустойчивых серверов.",
          details: [
            "Шифрование данных и каналы Zero-Trust",
            "Многоуровневое автоматическое резервное копирование",
            "Надежная защита от DDoS и несанкционированного доступа",
          ],
        },
      ],
    },
    values: {
      badge: "Наши принципы",
      title: "Почему нам доверяют корпоративные клиенты?",
      description: "Фундамент нашей работы — долгосрочное партнерство, техническое качество и безусловная ответственность.",
      items: [
        {
          title: "Единая Ответственность",
          description: "За ПО, сетевую безопасность и оборудование отвечает одна команда инженеров. Полное отсутствие перекладывания ответственности.",
        },
        {
          title: "Конфиденциальность и Безопасность",
          description: "Коммерческая тайна, финансовые потоки и персональные данные клиентов защищены современными стандартами криптографии и строгим NDA.",
        },
        {
          title: "Официальный Договор и Гарантия",
          description: "Все взаиморасчеты и этапы работы строго формализованы. На все решения действует официальная гарантия 1 год и сервисное сопровождение.",
        },
        {
          title: "Постоянная Техническая Поддержка",
          description: "После ввода систем в эксплуатацию мы продолжаем поддерживать инфраструктуру, обучать персонал и оперативно внедрять обновления.",
        },
      ],
    },
    contact: {
      badge: "Связь и Сотрудничество",
      title: "Свяжитесь с нами",
      description: "Свяжитесь с нами напрямую, чтобы обсудить сотрудничество или получить экспертную консультацию для вашей компании.",
      formTitle: "Оставить обращение или запрос",
      formSubtitle: "Наши специалисты оперативно свяжутся с вами для уточнения деталей.",
      nameLabel: "Ваше имя или название организации",
      namePlaceholder: "Например: ООО Прогресс / Джамшид",
      phoneLabel: "Номер телефона",
      messageLabel: "Сообщение или задачи (необязательно)",
      messagePlaceholder: "Кратко опишите сферу деятельности или ваши требования...",
      submitBtn: "Отправить запрос",
      submittingBtn: "Отправка...",
      successTitle: "Ваш запрос успешно принят!",
      successDesc: "Наш специалист свяжется с вами по указанному номеру телефона в ближайшее время.",
      newRequestBtn: "Отправить еще запрос",
      infoPhone: "Прямой телефон",
      infoEmail: "Официальная почта",
      infoAddress: "Адрес главного офиса",
      infoHours: "График работы",
      addressVal: "г. Наманган, комплекс IT Park",
      hoursVal: "Понедельник — Суббота: 09:00 — 18:00",
      directCall: "Позвонить",
      directTelegram: "Написать в Telegram",
    },
    footer: {
      desc: "ECOS Technologies — компания корпоративного ПО, интеллектуальных систем и безопасной технологической инфраструктуры.",
      rights: "ECOS Technologies. Все права защищены.",
      address: "г. Наманган, комплекс IT Park",
    },
  },
};
