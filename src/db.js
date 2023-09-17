// Поиск полюбоve
// Сортировка по категориям
// Админка любая удобная но не ADminLTE
// СЕО поля в админке для каждой страницы
// Сколько бонусов сегодня добавлено цифра

export const bonus_codes = [
  {
    id: 1,
    title: "125 Free Spins at Fair Go Casino",
    logo: "/img/casinos/2.png",
    casino_link: "",
    used: 45,
    cashout: {
      max: 180,
      min: 20,
    },
    // Надо делать и лайки и дизлайки и подумать значение которые скажет лайкал ли пользователь или дизлайкал
    rating: {
      likes: 123, //  default 0
      dislikes: 12, //  default 0
    },
    slug: "test",
    country: "USA",
    wagering: "60xB",
    bonus_code: "P8HD^&JDA",
    amount: 20,
    games_allowed: [
      { id: 1, title: "Keno" },
      { id: 2, title: "Scratch Cards" },
      { id: 3, title: "Slots" },
    ],
    //  Тут какой-то текстовый редактор что вернет то и распарсим
    description:
      "<p>No multiple accounts or free bonuses in a row are allowed. If your last transaction was a free bonus please make a deposit before using this bonus.</p><br><p>Only players who opened their account at the casino through chipy.com can receive our special bonuses for that casino. </p>",
    // Он поставит в админке срок истекания кода, мы должны посчитать оставшиеся дни
    expires_in: "2023-09-15T17:49:20.000000Z",
    created_at: "2023-09-15T17:49:20.000000Z",
    updated_at: "2023-09-15T17:49:20.000000Z",
  },
  {
    id: 1,
    title: "125 Free Spins at Fair Go Casino",
    logo: "/img/casinos/2.png",
    casino_link: "",
    used: 45,
    cashout: {
      max: 180,
      min: 20,
    },
    // Надо делать и лайки и дизлайки и подумать значение которые скажет лайкал ли пользователь или дизлайкал
    rating: {
      likes: 123, //  default 0
      dislikes: 12, //  default 0
    },
    slug: "test",
    country: "USA",
    wagering: "60xB",
    bonus_code: "P8HD^&JDA",
    amount: 20,
    games_allowed: [
      { id: 1, title: "Keno" },
      { id: 2, title: "Scratch Cards" },
      { id: 3, title: "Slots" },
    ],
    //  Тут какой-то текстовый редактор что вернет то и распарсим
    description:
      "<p>No multiple accounts or free bonuses in a row are allowed. If your last transaction was a free bonus please make a deposit before using this bonus.</p><br><p>Only players who opened their account at the casino through chipy.com can receive our special bonuses for that casino. </p>",
    // Он поставит в админке срок истекания кода, мы должны посчитать оставшиеся дни
    expires_in: "2023-09-15T17:49:20.000000Z",
    created_at: "2023-09-15T17:49:20.000000Z",
    updated_at: "2023-09-15T17:49:20.000000Z",
  },
  {
    id: 1,
    title: "125 Free Spins at Fair Go Casino",
    logo: "/img/casinos/2.png",
    casino_link: "",
    used: 45,
    cashout: {
      max: 180,
      min: 20,
    },
    // Надо делать и лайки и дизлайки и подумать значение которые скажет лайкал ли пользователь или дизлайкал
    rating: {
      likes: 123, //  default 0
      dislikes: 12, //  default 0
    },
    slug: "test",
    country: "USA",
    wagering: "60xB",
    bonus_code: "P8HD^&JDA",
    amount: 20,
    games_allowed: [
      { id: 1, title: "Keno" },
      { id: 2, title: "Scratch Cards" },
      { id: 3, title: "Slots" },
    ],
    //  Тут какой-то текстовый редактор что вернет то и распарсим
    description:
      "<p>No multiple accounts or free bonuses in a row are allowed. If your last transaction was a free bonus please make a deposit before using this bonus.</p><br><p>Only players who opened their account at the casino through chipy.com can receive our special bonuses for that casino. </p>",
    // Он поставит в админке срок истекания кода, мы должны посчитать оставшиеся дни
    expires_in: "2023-09-15T17:49:20.000000Z",
    created_at: "2023-09-15T17:49:20.000000Z",
    updated_at: "2023-09-15T17:49:20.000000Z",
  },
  {
    id: 1,
    title: "125 Free Spins at Fair Go Casino",
    logo: "/img/casinos/2.png",
    casino_link: "",
    used: 45,
    cashout: {
      max: 180,
      min: 20,
    },
    // Надо делать и лайки и дизлайки и подумать значение которые скажет лайкал ли пользователь или дизлайкал
    rating: {
      likes: 123, //  default 0
      dislikes: 12, //  default 0
    },
    slug: "test",
    country: "USA",
    wagering: "60xB",
    bonus_code: "P8HD^&JDA",
    amount: 20,
    games_allowed: [
      { id: 1, title: "Keno" },
      { id: 2, title: "Scratch Cards" },
      { id: 3, title: "Slots" },
    ],
    //  Тут какой-то текстовый редактор что вернет то и распарсим
    description:
      "<p>No multiple accounts or free bonuses in a row are allowed. If your last transaction was a free bonus please make a deposit before using this bonus.</p><br><p>Only players who opened their account at the casino through chipy.com can receive our special bonuses for that casino. </p>",
    // Он поставит в админке срок истекания кода, мы должны посчитать оставшиеся дни
    expires_in: "2023-09-15T17:49:20.000000Z",
    created_at: "2023-09-15T17:49:20.000000Z",
    updated_at: "2023-09-15T17:49:20.000000Z",
  },
];

// Это популярные казино за месяц! Надо подумать как их определять
export const featured_casinos = [
  {
    id: 1,
    slug: "royspins_online_casino",
    title: "Royspins Online Casino",
    image: "/img/casinos/1.png",
    link: "asd",
    bonuses: [
      {
        id: 1,
        title: "100% Bonus",
        icon: "asd",
        description: "sada",
        style: "success",
      },
      { id: 2, title: "Free spins", icon: "asd", description: "sada" },
    ],
  },
  {
    id: 2,
    slug: "royspins_online_casino",
    title: "Platinum Reels Casino Review",
    image: "/img/casinos/2.png",
    link: "asd",
    bonuses: [{ id: 1, title: "Free spins" }],
  },
  {
    id: 3,
    slug: "royspins_online_casino",
    title: "COINS GAME CASINO",
    image: "/img/casinos/3.png",
    link: "asd",
    bonuses: [{ id: 1, title: "Free spins" }],
  },
  {
    id: 4,
    slug: "royspins_online_casino",
    title: "Platinum Reels Casino",
    image: "/img/casinos/4.png",
    link: "asd",
    bonuses: [{ id: 1, title: "Top Bonus" }],
  },
  {
    id: 5,
    slug: "royspins_online_casino",
    title: "Casiqo Casino",
    image: "/img/casinos/5.png",
    link: "asd",
    bonuses: [{ id: 1, title: "Top Bonus" }],
  },
];

// Это ссылки возможно для меня, а возможно будут возращаться с бека
export const links = [
  { id: 1, title: "BONUSES", link: "/bonuses" },
  { id: 2, title: "CASINOS", link: "/casinos" },
  { id: 3, title: "soft", link: "/soft" },
  { id: 4, title: "free", link: "/free" },
  { id: 5, title: "blog", link: "" },
];

// Список казино
export const casinos = [
  {
    id: 2,
    title: "Casino Top Casino",
    slug: "/testcasino",
    logo: "/img/casinos/2.png",
    //  Тут какой-то текстовый редактор что вернет то и распарсим
    description:
      "<p>No multiple accounts or free bonuses in a row are allowed. If your last transaction was a free bonus please make a deposit before using this bonus.</p><br><p>Only players who opened their account at the casino through chipy.com can receive our special bonuses for that casino. </p>",
    bonus: [
      {
        id: 1,
        title: "100% Bonus",
        icon: "asd",
        description: "sada",
        style: "success",
      },
      { id: 2, title: "Free spins", icon: "asd", description: "sada" },
    ],
    created_at: "2023-09-15T17:49:20.000000Z",
    updated_at: "2023-09-15T17:49:20.000000Z",
  },
  {
    id: 1,
    title: "Casino",
    slug: "/testcasino",
    logo: "/img/casinos/3.png",
    //  Тут какой-то текстовый редактор что вернет то и распарсим
    description:
      "<p>No multiple accounts or free bonuses in a row are allowed. If your last transaction was a free bonus please make a deposit before using this bonus.</p><br><p>Only players who opened their account at the casino through chipy.com can receive our special bonuses for that casino. </p>",
    bonus: [
      {
        id: 1,
        title: "100% Bonus",
        icon: "asd",
        description: "sada",
        style: "success",
      },
      { id: 2, title: "Free spins", icon: "asd", description: "sada" },
    ],
    created_at: "2023-09-15T17:49:20.000000Z",
    updated_at: "2023-09-15T17:49:20.000000Z",
  },
];

// Список популярных бонусов (хз как определять)
const popular_bonuses = [
  {
    id: 1,
    title: "50 Free Spins at BonusBlitz",
    bonus_code: "P8HD^&JDA",
    used_count: 432,
  },
  {
    id: 2,
    title: "50 Free Spins at BonusBlitz",
    bonus_code: "P8HD^&JDA",
    used_count: 432,
  },
  {
    id: 3,
    title: "50 Free Spins at BonusBlitz",
    bonus_code: "P8HD^&JDA",
    used_count: 432,
  },
  {
    id: 4,
    title: "50 Free Spins at BonusBlitz",
    bonus_code: "P8HD^&JDA",
    used_count: 432,
  },
];
