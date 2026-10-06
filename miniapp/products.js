/* VapeOasis — каталог: базовые товары с вложенными вариантами (вкус/цвет).
   Карточка товара -> детальный экран -> выбор вкуса/цвета -> в корзину. */
const PRODUCTS = [
  // ---- ЖИДКОСТИ: вкусы внутри базового товара ----
  {id:"bjorn", cat:"liquids", brand:"Bjorn", line:"Темный Хор",
   name:"Bjorn Темный Хор", desc:"Солевая жидкость 30ml, 80mg. Линейка «Темный Хор».",
   price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml",
   flavors:[
     {name:"Арбуз мята"}, {name:"Клубника мята"}, {name:"Лимон лайм"},
     {name:"Мятная жвачка"}, {name:"Чистая мята"}, {name:"Эвкалипт мята"},
     {name:"Ягоды мята"}
   ]},
  {id:"fox", cat:"liquids", brand:"Ice Fox", line:"Premium",
   name:"Ice Fox Premium", desc:"Премиум линейка, 20mg, 30ml.",
   price:650, strength:"medium", strengthLabel:"Medium 2%", volume:"30ml",
   flavors:[
     {name:"Земляничный мохито"}, {name:"Кислая чёрная смородина"},
     {name:"Кислая малина лимон"}, {name:"Малина с арбузом"},
     {name:"Малина с фантой"}, {name:"Клубника земляника"},
     {name:"Мармеладные ягоды"}, {name:"Фанта голубая малина"},
     {name:"Черничные червяки"}, {name:"Чёрный виноград"}
   ]},
  {id:"pr", cat:"liquids", brand:"Пошлая Рабыня", line:"Extra Hard",
   name:"Пошлая Рабыня", desc:"Дерзкая линейка, 80mg, 30ml.",
   price:690, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml",
   flavors:[
     {name:"Ягодная содовая"}, {name:"Ананасовый сок"}, {name:"Мультифрукт"},
     {name:"Цитрусовый микс"}, {name:"Клюквенный морс"},
     {name:"Апельсин виноград"}, {name:"Кока-кола с ванилью"}
   ]},

  // ---- ПОДЫ / ДЕВАЙСЫ: выбор цвета корпуса ----
  {id:"dev1", cat:"pods", brand:"Geekvape", name:"Aegis Legend 5 Kit 200W", price:6490, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Флагманский боксмод 200W, влагозащита.",
   colors:["Чёрный","Серый","Камуфляж"]},
  {id:"dev2", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 6", price:2990, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Под-система, экран, регулировка затяжки.",
   colors:["Чёрный","Серебристый","Мятный","Голубой","Розовый"]},
  {id:"dev3", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 5", price:2790, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Хит продаж, вкус и автономность.",
   colors:["Чёрный","Серебристый","Голубой","Розовый"]},
  {id:"dev4", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 6 Mini", price:2490, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Компактная версия XROS 6.",
   colors:["Чёрный","Голубой","Розовый"]},
  {id:"dev5", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 5 Mini", price:2290, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Мини-формат, тот же вкус.",
   colors:["Чёрный","Серебристый","Голубой"]},
  {id:"dev6", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 5 Nano", price:2690, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Nano-формат с экраном.",
   colors:["Чёрный","Серебристый","Розовый"]},
  {id:"dev7", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS Mini", price:1990, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Базовый мини-под.",
   colors:["Чёрный","Серебристый"]},
  {id:"dev8", cat:"pods", brand:"Geekvape", name:"Aegis HERO 2", price:3490, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Компактный подмод, защита IP67.",
   colors:["Чёрный","Серый","Зелёный"]},
  {id:"dev9", cat:"pods", brand:"Geekvape", name:"Aegis HERO 5 Classic", price:3990, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Новое поколение HERO.",
   colors:["Чёрный","Серебристый","Зелёный"]},
  {id:"dev10", cat:"pods", brand:"Geekvape", name:"HERO 5 Racing Edition", price:4190, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Гоночная лимитка.",
   colors:["Чёрный","Красный","Жёлтый"]},
  {id:"dev11", cat:"pods", brand:"Geekvape", name:"Aegis Hero Q", price:2890, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Лёгкий Q-формат.",
   colors:["Чёрный","Голубой","Розовый"]},
  {id:"dev12", cat:"pods", brand:"Smoant", name:"Smoant Pasito 2", price:3290, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Легенда Pasito, RBA-база.",
   colors:["Чёрный","Серебристый"]},
  {id:"dev13", cat:"pods", brand:"Geekvape", name:"Aegis Force", price:4590, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Новинка Force.",
   colors:["Чёрный","Серый"]},
  {id:"dev14", cat:"pods", brand:"Geekvape", name:"Aegis Boost PRO 2", price:4990, strength:"-", strengthLabel:"—", volume:"—",
   desc:"PRO 2, мощность и вкус.",
   colors:["Чёрный","Серый"]},
  {id:"dev15", cat:"pods", brand:"Geekvape", name:"Aegis Boost 3", price:4690, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Третье поколение Boost.",
   colors:["Чёрный","Зелёный"]},

  // ---- ОДНОРАЗКИ: одна позиция, внутри модели/вкусы ----
  {id:"dis", cat:"disposable", brand:"Elf Bar / Waka / HQD", line:"Одноразки",
   name:"Одноразки", desc:"Одноразовые электронные сигареты. Выбери модель и вкус.",
   price:1190, strength:"medium", strengthLabel:"2%", volume:"от 5000 затяжек",
   flavors:[
     {name:"Черника малина", price:1290, desc:"Waka 10000 • 10000 затяжек"},
     {name:"Арбуз лед", price:1190, desc:"Elf Bar BC5000 • 5000 затяжек"},
     {name:"Виноград", price:1190, desc:"Lost Mary 5000 • 5000 затяжек"},
     {name:"Мята", price:1290, desc:"HQD 7000 • 7000 затяжек"},
     {name:"Кола", price:1390, desc:"Oxbar 8000 • 8000 затяжек"}
   ]},

  // ---- КАРТРИДЖИ (без вариантов) ----
  {id:"pod1", cat:"cartridges", brand:"Vaporesso", name:"Картридж XROS (4 шт)", price:890, strength:"-", strengthLabel:"—", volume:"2ml",
   desc:"Оригинальные картриджи XROS."},
  {id:"pod2", cat:"cartridges", brand:"Geekvape", name:"Картридж Hero (3 шт)", price:790, strength:"-", strengthLabel:"—", volume:"2ml",
   desc:"Картриджи Hero series."},
  {id:"pod3", cat:"cartridges", brand:"Smoant", name:"Испаритель Pasito (3 шт)", price:750, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Испарители Pasito 2."},

  // ---- СНЮС (без вариантов) ----
  {id:"sn1", cat:"snus", brand:"Iceberg", name:"Iceberg — Strong Mint", price:550, strength:"extra", strengthLabel:"Extra strong", volume:"—",
   desc:"Снюс Iceberg, вкус мята."},
  {id:"sn2", cat:"snus", brand:"Siberia", name:"Siberia — Red", price:590, strength:"extra", strengthLabel:"Extra strong", volume:"—",
   desc:"Снюс Siberia."},
  {id:"sn3", cat:"snus", brand:"Odens", name:"Odens — Cold Dry", price:520, strength:"medium", strengthLabel:"Medium", volume:"—",
   desc:"Снюс Odens."}
];

const CATS = [
  {id:"all", name:"Все"},
  {id:"liquids", name:"Жидкости"},
  {id:"pods", name:"Поды"},
  {id:"disposable", name:"Одноразки"},
  {id:"cartridges", name:"Картриджи"},
  {id:"snus", name:"Снюс"}
];

// Цвета корпусов подов -> hex для кружка-выбора
const COLOR_HEX = {
  "Чёрный":"#2A2A2E","Серый":"#8B8B8F","Серебристый":"#C9CCD4","Мятный":"#7FD9C2",
  "Голубой":"#5BB8E8","Розовый":"#F29AB8","Зелёный":"#3E9B57","Красный":"#D64545",
  "Жёлтый":"#E8C34A","Камуфляж":"linear-gradient(135deg,#5A5F4A 40%,#8B8F74 60%)",
  "Прозрачный":"rgba(200,200,210,.35)"
};

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