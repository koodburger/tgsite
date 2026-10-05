/* VapeOasis — каталог ~50 позиций. Каркас: фото заменишь на свои, цены/описания поправь. */
const PRODUCTS = [
  // ---- ЖИДКОСТИ: Bjorn Темный Хор / EXTRA HARD 8% / 30ml / 690р ----
  {id:"bjorn1", cat:"liquids", brand:"Bjorn", line:"Темный Хор", name:"Bjorn Темный Хор — Арбуз мята", price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", flavor:"Арбуз мята", desc:"Солевая жидкость 30ml, 80mg. Вкус: арбуз мята."},
  {id:"bjorn2", cat:"liquids", brand:"Bjorn", line:"Темный Хор", name:"Bjorn Темный Хор — Клубника мята", price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", flavor:"Клубника мята", desc:"Солевая жидкость 30ml, 80mg."},
  {id:"bjorn3", cat:"liquids", brand:"Bjorn", line:"Темный Хор", name:"Bjorn Темный Хор — Лимон лайм", price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", flavor:"Лимон лайм", desc:"Солевая жидкость 30ml, 80mg."},
  {id:"bjorn4", cat:"liquids", brand:"Bjorn", line:"Темный Хор", name:"Bjorn Темный Хор — Мятная жвачка", price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", flavor:"Мятная жвачка", desc:"Солевая жидкость 30ml, 80mg."},
  {id:"bjorn5", cat:"liquids", brand:"Bjorn", line:"Темный Хор", name:"Bjorn Темный Хор — Чистая мята", price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", flavor:"Чистая мята", desc:"Солевая жидкость 30ml, 80mg."},
  {id:"bjorn6", cat:"liquids", brand:"Bjorn", line:"Темный Хор", name:"Bjorn Темный Хор — Эвкалипт мята", price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", flavor:"Эвкалипт мята", desc:"Солевая жидкость 30ml, 80mg."},
  {id:"bjorn7", cat:"liquids", brand:"Bjorn", line:"Темный Хор", name:"Bjorn Темный Хор — Ягоды мята", price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", flavor:"Ягоды мята", desc:"Солевая жидкость 30ml, 80mg."},

  // ---- ЖИДКОСТИ: ICE FOX PREMIUM / Medium 2% / 30ml / 650р ----
  {id:"fox1", cat:"liquids", brand:"Ice Fox", line:"Premium", name:"Ice Fox — Земляничный мохито", price:650, strength:"medium", strengthLabel:"Medium 2%", volume:"30ml", flavor:"Земляничный мохито", desc:"Премиум линейка Iceberg, 20mg, 30ml."},
  {id:"fox2", cat:"liquids", brand:"Ice Fox", line:"Premium", name:"Ice Fox — Кислая чёрная смородина", price:650, strength:"medium", strengthLabel:"Medium 2%", volume:"30ml", flavor:"Кислая чёрная смородина", desc:"Премиум линейка Iceberg, 20mg, 30ml."},
  {id:"fox3", cat:"liquids", brand:"Ice Fox", line:"Premium", name:"Ice Fox — Кислая малина лимон", price:650, strength:"medium", strengthLabel:"Medium 2%", volume:"30ml", flavor:"Кислая малина лимон", desc:"Премиум линейка Iceberg, 20mg, 30ml."},
  {id:"fox4", cat:"liquids", brand:"Ice Fox", line:"Premium", name:"Ice Fox — Малина с арбузом", price:650, strength:"medium", strengthLabel:"Medium 2%", volume:"30ml", flavor:"Кислая малина с арбузом", desc:"Премиум линейка Iceberg, 20mg, 30ml."},
  {id:"fox5", cat:"liquids", brand:"Ice Fox", line:"Premium", name:"Ice Fox — Малина с фантой", price:650, strength:"medium", strengthLabel:"Medium 2%", volume:"30ml", flavor:"Кислая малина с фантой", desc:"Премиум линейка Iceberg, 20mg, 30ml."},
  {id:"fox6", cat:"liquids", brand:"Ice Fox", line:"Premium", name:"Ice Fox — Клубника земляника", price:650, strength:"medium", strengthLabel:"Medium 2%", volume:"30ml", flavor:"Кислые ленточки", desc:"Премиум линейка Iceberg, 20mg, 30ml."},
  {id:"fox7", cat:"liquids", brand:"Ice Fox", line:"Premium", name:"Ice Fox — Мармеладные ягоды", price:650, strength:"medium", strengthLabel:"Medium 2%", volume:"30ml", flavor:"Кислые мармеладные ягоды", desc:"Премиум линейка Iceberg, 20mg, 30ml."},
  {id:"fox8", cat:"liquids", brand:"Ice Fox", line:"Premium", name:"Ice Fox — Фанта голубая малина", price:650, strength:"medium", strengthLabel:"Medium 2%", volume:"30ml", flavor:"Фанта с голубой малиной", desc:"Премиум линейка Iceberg, 20mg, 30ml."},
  {id:"fox9", cat:"liquids", brand:"Ice Fox", line:"Premium", name:"Ice Fox — Черничные червяки", price:650, strength:"medium", strengthLabel:"Medium 2%", volume:"30ml", flavor:"Чернично-земляничные червяки", desc:"Премиум линейка Iceberg, 20mg, 30ml."},
  {id:"fox10", cat:"liquids", brand:"Ice Fox", line:"Premium", name:"Ice Fox — Чёрный виноград", price:650, strength:"medium", strengthLabel:"Medium 2%", volume:"30ml", flavor:"Чёрный виноград", desc:"Премиум линейка Iceberg, 20mg, 30ml."},

  // ---- ЖИДКОСТИ: ПОШЛАЯ РАБЫНЯ / EXTRA HARD 8% / 30ml / 690р ----
  {id:"pr1", cat:"liquids", brand:"Пошлая Рабыня", line:"Extra Hard", name:"Пошлая Рабыня — Ягодная содовая", price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", flavor:"Ягодная содовая", desc:"Дерзкая линейка, 80mg, 30ml."},
  {id:"pr2", cat:"liquids", brand:"Пошлая Рабыня", line:"Extra Hard", name:"Пошлая Рабыня — Ананасовый сок", price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", flavor:"Ананасовый сок", desc:"Дерзкая линейка, 80mg, 30ml."},
  {id:"pr3", cat:"liquids", brand:"Пошлая Рабыня", line:"Extra Hard", name:"Пошлая Рабыня — Мультифрукт", price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", flavor:"Мультифрукт", desc:"Дерзкая линейка, 80mg, 30ml."},
  {id:"pr4", cat:"liquids", brand:"Пошлая Рабыня", line:"Extra Hard", name:"Пошлая Рабыня — Цитрусовый микс", price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", flavor:"Цитрусовый микс", desc:"Дерзкая линейка, 80mg, 30ml."},
  {id:"pr5", cat:"liquids", brand:"Пошлая Рабыня", line:"Extra Hard", name:"Пошлая Рабыня — Клюквенный морс", price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", flavor:"Клюквенный морс", desc:"Дерзкая линейка, 80mg, 30ml."},
  {id:"pr6", cat:"liquids", brand:"Пошлая Рабыня", line:"Extra Hard", name:"Пошлая Рабыня — Апельсин виноград", price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", flavor:"Апельсин виноград", desc:"Дерзкая линейка, 80mg, 30ml."},
  {id:"pr7", cat:"liquids", brand:"Пошлая Рабыня", line:"Extra Hard", name:"Пошлая Рабыня — Кола с ванилью", price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", flavor:"Кока-кола с ванилью", desc:"Дерзкая линейка, 80mg, 30ml."},

  // ---- ПОДЫ / ДЕВАЙСЫ (выделенные бренды) ----
  {id:"dev1", cat:"pods", brand:"Geekvape", name:"Aegis Legend 5 Kit 200W", price:6490, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Флагманский боксмод 200W, влагозащита. Каркас: добавь фото/описание поставщика."},
  {id:"dev2", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 6", price:2990, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Под-система, экран, регулировка затяжки."},
  {id:"dev3", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 5", price:2790, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Хит продаж, вкус и автономность."},
  {id:"dev4", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 6 Mini", price:2490, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Компактная версия XROS 6."},
  {id:"dev5", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 5 Mini", price:2290, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Мини-формат, тот же вкус."},
  {id:"dev6", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 5 Nano", price:2690, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Nano-формат с экраном."},
  {id:"dev7", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS Mini", price:1990, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Базовый мини-под."},
  {id:"dev8", cat:"pods", brand:"Geekvape", name:"Aegis HERO 2", price:3490, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Компактный подмод, защита IP67."},
  {id:"dev9", cat:"pods", brand:"Geekvape", name:"Aegis HERO 5 Classic", price:3990, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Новое поколение HERO."},
  {id:"dev10", cat:"pods", brand:"Geekvape", name:"HERO 5 Racing Edition", price:4190, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Гоночная лимитка."},
  {id:"dev11", cat:"pods", brand:"Geekvape", name:"Aegis Hero Q", price:2890, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Легкий Q-формат."},
  {id:"dev12", cat:"pods", brand:"Smoant", name:"Smoant Pasito 2", price:3290, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Легенда Pasito, RBA-база."},
  {id:"dev13", cat:"pods", brand:"Geekvape", name:"Aegis Force", price:4590, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Новинка Force."},
  {id:"dev14", cat:"pods", brand:"Geekvape", name:"Aegis Boost PRO 2", price:4990, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"PRO 2, мощность и вкус."},
  {id:"dev15", cat:"pods", brand:"Geekvape", name:"Aegis Boost 3", price:4690, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Третье поколение Boost."},

  // ---- ОДНОРАЗКИ (5) ----
  {id:"dis1", cat:"disposable", brand:"Waka", name:"Waka 10000 — Черника малина", price:1290, strength:"medium", strengthLabel:"2%", volume:"10000 затяжек", flavor:"Черника малина", desc:"Одноразка 10000 тяг."},
  {id:"dis2", cat:"disposable", brand:"Elf Bar", name:"Elf Bar BC5000 — Арбуз лед", price:1190, strength:"medium", strengthLabel:"2%", volume:"5000 затяжек", flavor:"Арбуз лед", desc:"Одноразка 5000 тяг."},
  {id:"dis3", cat:"disposable", brand:"Lost Mary", name:"Lost Mary 5000 — Виноград", price:1190, strength:"medium", strengthLabel:"2%", volume:"5000 затяжек", flavor:"Виноград", desc:"Одноразка 5000 тяг."},
  {id:"dis4", cat:"disposable", brand:"HQD", name:"HQD 7000 — Мята", price:1290, strength:"medium", strengthLabel:"2%", volume:"7000 затяжек", flavor:"Мята", desc:"Одноразка 7000 тяг."},
  {id:"dis5", cat:"disposable", brand:"Oxbar", name:"Oxbar 8000 — Кола", price:1390, strength:"medium", strengthLabel:"2%", volume:"8000 затяжек", flavor:"Кола", desc:"Одноразка 8000 тяг."},

  // ---- КАРТРИДЖИ (3) ----
  {id:"pod1", cat:"cartridges", brand:"Vaporesso", name:"Картридж XROS (4 шт)", price:890, strength:"-", strengthLabel:"—", volume:"2ml", flavor:"—", desc:"Оригинальные картриджи XROS."},
  {id:"pod2", cat:"cartridges", brand:"Geekvape", name:"Картридж Hero (3 шт)", price:790, strength:"-", strengthLabel:"—", volume:"2ml", flavor:"—", desc:"Картриджи Hero series."},
  {id:"pod3", cat:"cartridges", brand:"Smoant", name:"Испаритель Pasito (3 шт)", price:750, strength:"-", strengthLabel:"—", volume:"—", flavor:"—", desc:"Испарители Pasito 2."},

  // ---- СНЮС (3) ----
  {id:"sn1", cat:"snus", brand:"Iceberg", name:"Iceberg — Strong Mint", price:550, strength:"extra", strengthLabel:"Extra strong", volume:"—", flavor:"Мята", desc:"Каркас позиции, фото/описание поставщика."},
  {id:"sn2", cat:"snus", brand:"Siberia", name:"Siberia — Red", price:590, strength:"extra", strengthLabel:"Extra strong", volume:"—", flavor:"—", desc:"Каркас позиции."},
  {id:"sn3", cat:"snus", brand:"Odens", name:"Odens — Cold Dry", price:520, strength:"medium", strengthLabel:"Medium", volume:"—", flavor:"—", desc:"Каркас позиции."}
];

const CATS = [
  {id:"all", name:"Все"},
  {id:"liquids", name:"Жидкости"},
  {id:"pods", name:"Поды"},
  {id:"disposable", name:"Одноразки"},
  {id:"cartridges", name:"Картриджи"},
  {id:"snus", name:"Снюс"}
];

// Настройки доставки/оплаты (поменяй под себя)
const SHOP = {
  name: "VapeOasis",
  manager: "@lzllllzll",
  bonusPercent: 5,          // % бонусами с заказа
  referBonus: 150,          // бонус за друга (каркас, localStorage)
  deliveryCourier: 300,     // курьер, руб
  deliveryFreeFrom: 3000,   // бесплатно от суммы
  payments: ["СБП", "Наличные при получении"],
  deliveryTypes: ["Самовывоз", "Курьер"]
};
