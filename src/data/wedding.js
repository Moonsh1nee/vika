// ═══════════════════════════════════════════════════════════════
//  ЗАМЕНИТЕ ВСЁ НИЖЕ НА СВОИ ДАННЫЕ
// ═══════════════════════════════════════════════════════════════

export const wedding = {
  couple: {
    groom: "Георгий",
    bride: "Виктория",
    hashtag: "#ГеоргийИВиктория2026",
  },

  date: {
    full: "29 августа 2026",
    day: "29",
    month: "августа",
    year: "2026",
    iso: "2026-08-29T16:00:00",
    weekday: "суббота",
  },

  announcement: {
    photo: "photos/ring.jpg",
  },

  venue: {
    ceremony: {
      title: "Церемония",
      time: "14:00",
      place: "Замок Камелот",
      address: "Волгоградская область, город Михайловка, Парковая улица, 1А",
      mapUrl: "https://maps.app.goo.gl/z9RpeAk4bHuUKk6t6",
    },
    reception: {
      title: "Банкет",
      time: "18:00",
      place: "Замок Камелот",
      address: "Волгоградская область, город Михайловка, Парковая улица, 1А",
      mapUrl: "https://maps.app.goo.gl/z9RpeAk4bHuUKk6t6",
    },
    photos: [
      "photos/kamelot3.jpg",
      "photos/kamelot2.jpg",
      "photos/kamelot1.jpg",
    ],
  },

  story: {
    title: "Наша история",
    text: "Мы встретились в солнечный день и с тех пор каждый момент вместе — это маленькое чудо. Теперь мы хотим разделить самый важный день нашей жизни с вами.",
    photos: [
      { src: "photos/all1.jpg", alt: "Фото 1" },
      { src: "photos/all3.jpg", alt: "Фото 2" },
      { src: "photos/all4.jpg", alt: "Фото 3" },
    ],
  },

  schedule: [
    {
      time: "12:20",
      scriptTitle: "We Meet",
      title: "Церемония",
      desc: "Церемония регистрации",
      icon: "HeartPin",
    },
    {
      time: "14:00",
      scriptTitle: "We Do",
      title: "Выездная регистрация",
      desc: "Выездная регистрация",
      icon: "Rings",
    },
    {
      time: "15:00",
      scriptTitle: "We Party",
      title: "Начало банкета",
      desc: "Начало банкета",
      icon: "Cake",
    },
    {
      time: "21:00",
      scriptTitle: "The End",
      title: "Завершение вечера",
      desc: "Завершение вечера",
      icon: "Fireworks",
    },
  ],

  gallery: {
    title: "Галерея",
    photos: Array.from({ length: 8 }, (_, i) => ({
      src: null,
      alt: `Фото ${i + 1}`,
    })),
  },

  rsvp: {
    title: "Подтвердите присутствие",
    subtitle: "Пожалуйста, подтвердите ваше присутствие на нашей свадьбе до:",
    deadline: ["01", "07", "26"],
    endpoint: null,
    contactEmail: "wedding@example.com",
  },

  contacts: {
    bride: { name: "Виктория", phone: "+7 (937) 096-96-77", telegram: "@vika" },
    groom: {
      name: "Георгий",
      phone: "+7 (937) 088-84-17",
      telegram: "@georgiy",
    },
    organizer: null,
  },

  wishes: {
    title: "Пожелания",
    text: "Наш праздник будет окружён обилием цветов, поэтому мы будем очень благодарны, если вместо букетов вы внесёте вклад в бюджет нашей молодой семьи.",
  },

  music: {
    src: "music/music.mp3",
    title: "Наша песня",
  },

  hero: {
    photo: "photos/all2.jpg",
  },
};