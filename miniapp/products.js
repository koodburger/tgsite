/* VapeOasis — каталог по ассортименту канала t.me/iVapeOasisAbkn (пост 27.08.2026).
   Карточка товара -> детальный экран -> выбор вкуса/цвета -> в корзину. */
const PRODUCTS = [
  // ---- ЖИДКОСТИ: вкусы внутри базового товара ----
  {id:"bjorn", cat:"liquids", brand:"Bjorn", line:"Темный Хор",
   name:"Bjorn Темный Хор", desc:"Солевая жидкость 30мл, 80мг. Линейка «Темный Хор».",
   price:550, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", photo:"img/bjorn.png",
   flavors:[
     {name:"Арбуз мята"}, {name:"Клубника мята"}, {name:"Лимон лайм"},
     {name:"Мятная жвачка"}, {name:"Чистая мята"}, {name:"Эвкалипт мята"},
     {name:"Ягоды мята"}
   ]},
  {id:"fox", cat:"liquids", brand:"Ice Fox by Iceberg", line:"Premium",
   name:"Ice Fox by Iceberg", desc:"Премиум линейка 30мл, 20мг.",
   price:600, strength:"medium", strengthLabel:"Medium 2%", volume:"30ml", photo:"img/fox.png",
   flavors:[
     {name:"Земляничный мохито"}, {name:"Кислая чёрная смородина"},
     {name:"Кислая малина лимон"}, {name:"Кислая малина с арбузом"},
     {name:"Кислая малина с фантой"}, {name:"Кислые ленточки клубника земляника"},
     {name:"Кислые мармеладные ягоды"}, {name:"Фанта с голубой малиной"},
     {name:"Чернично-земляничные червяки"}, {name:"Чёрный виноград"}
   ]},
  {id:"pr", cat:"liquids", brand:"Пошлая Рабыня", line:"Extra Hard",
   name:"Пошлая Рабыня", desc:"Солевая 30мл, 80мг. От 3 штук — 350₽/шт.",
   price:400, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", photo:"img/pr.png",
   flavors:[
     {name:"Ягодная содовая"}, {name:"Ананасовый сок"}, {name:"Мультифрукт"},
     {name:"Цитрусовый микс"}, {name:"Клюквенный морс"},
     {name:"Апельсин виноград"}, {name:"Кока-кола с ванилью"}
   ]},

  // ---- ПОДЫ / ДЕВАЙСЫ: выбор цвета корпуса ----
  {id:"dev1", cat:"pods", brand:"Geekvape", name:"Aegis Legend 5 Kit 200W", price:4990, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Боксмод 200W. Комплект: бак Z Sub-Ohm, 2 испарителя, доп. стекло, 2×18650, провод.",
   photo:"img/dev1.png",
   colors:["Glacier Green","Twilight Blue"]},
  {id:"dev2", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 6", price:2690, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Под-система: 2 картриджа, провод, документация.",
   photo:"img/dev2.png",
   colors:["Aurora Blue","Cosmic Black","Pearl White","Silk Brown","Silk Gray","Silk Green","Slate Black","Abyssal Blue","Carbon Fiber Gray","Dreamy Pink"]},
  {id:"dev3", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 5", price:2200, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Хит продаж: 2 картриджа, провод, документация.",
   photo:"img/dev3.png",
   colors:["Carbon Stripes","Blue Silk","Coral Red","Grey Silk","Jade Green","Lavender Purple","Opal White","Violet Silk"]},
  {id:"dev4", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 6 Mini", price:2090, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Компактная версия XROS 6: картридж, документация.",
   photo:"img/dev4.png",
   colors:["Brown","Jelly Pink","Plume White","Titanium Black","Titanium Silver","Black","Jelly Blue","Jelly Green","Jelly Orange","Plume Pink"]},
  {id:"dev5", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 5 Mini", price:1790, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Мини-формат: картридж, провод, документация.",
   photo:"img/dev5.png",
   colors:["Cool Black","Cool Pink","Mist Black","Mist White","Retro Orange","Retro Pink","Black","Sky Blue","Titanium Silver","Purple","Flowing Blue","Rose Red","Flowing Pink","Flowing Green","Pastel Crystal","Carbon Black"]},
  {id:"dev6", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 5 Nano", price:2500, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Nano-формат: 2 картриджа, ланьярд, провод, документация.",
   photo:"img/dev6.png",
   colors:["Blue Leatherette","Black Satin","Color Burst","Damascus Pink","Damascus Silver","Nacre","Orange Leatherette","Yellow Satin"]},
  {id:"dev8", cat:"pods", brand:"Geekvape", name:"Aegis HERO 2", price:2600, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Компактный подмод, защита IP67. Ключ, 2 испарителя, провод, документация.",
   photo:"img/dev8.png",
   colors:["Grayish Blue","Light Green","Lime Green","Mint Green","Rubber White","Sky Blue"]},
  {id:"dev9", cat:"pods", brand:"Geekvape", name:"Aegis HERO 5 Classic", price:2790, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Новое поколение HERO: ключ, 2 испарителя, провод, документация.",
   photo:"img/dev9.png",
   colors:["Iron Black","Racing Green","Turbo Blue","Blaze Red","Steel Silver","Red & White"]},
  {id:"dev10", cat:"pods", brand:"Geekvape", name:"HERO 5 Racing Edition", price:2990, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Гоночная лимитка: 2 испарителя, документация.",
   photo:"img/dev10.png",
   colors:["Speed Red","Racing Blue","Vibe Green","Quantum Cyan","Lightning Yellow"]},
  {id:"dev13", cat:"pods", brand:"Geekvape", name:"Aegis Force", price:2990, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Новинка: дриптип, 2 испарителя, провод, документация.",
   photo:"img/dev13.png",
   colors:["Canyon Orange","Carbon Black","Chameleon Prism","Iris Purple","Ivory White","Moss Green"]},
  {id:"dev14", cat:"pods", brand:"Geekvape", name:"Aegis Boost PRO 2", price:3300, strength:"-", strengthLabel:"—", volume:"—",
   desc:"PRO 2: ключ, 2 испарителя, аккумулятор 18650, провод, документация.",
   photo:"img/dev14.png",
   colors:["Bottle Green","Golden Red","Pink Purple","Mint Blue","Silver"]},
  {id:"dev15", cat:"pods", brand:"Geekvape", name:"Aegis Boost 3", price:2890, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Третье поколение Boost: ключ, 2 испарителя, провод, документация.",
   photo:"img/dev15.png",
   colors:["Midnight Gold","Black","Rainbow Purple","Midnight Red","Sapphire Blue","Sunset Red","Teal Blue","Silver"]},
  {id:"dev16", cat:"pods", brand:"Geekvape", name:"Aegis nano 3", price:2490, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Новинка nano: 2 картриджа, документация.",
   photo:"img/dev16.png",
   colors:["Arctic Blue","Jungle Green","Midnight Dark","Polar Silver","Purple Bloom","Sunset Red"]},

  // ---- ОДНОРАЗКИ: модель/вкус внутри позиции ----
  {id:"elf", cat:"disposable", brand:"ELF BAR", line:"Triplex 30000",
   name:"ELF BAR Triplex 30000", desc:"Одноразка, до 30 000 затяжек. Выбери вкус.",
   price:1390, strength:"-", strengthLabel:"—", volume:"до 30000 тяг", photo:"img/elf.png",
   flavors:[
     {name:"Апельсиновый всплеск"}, {name:"Виноград клюква"},
     {name:"Кислая ежевика лёд"}, {name:"Клубника персик вишня"},
     {name:"Ледяной арбуз"}, {name:"Черная смородина грейпфрут"},
     {name:"Черника малина лёд"}
   ]},
  {id:"son", cat:"disposable", brand:"Funky Lands x Lost Mary", line:"Sonic-X",
   name:"Sonic-X (Бездымный режим)", desc:"Одноразка с бездымным режимом, до 30 000 затяжек.",
   price:1490, strength:"-", strengthLabel:"—", volume:"до 30000 тяг", photo:"img/son.png",
   flavors:[
     {name:"Арбуз кислый персик"}, {name:"Кислая клюква ананас"},
     {name:"Кислое яблоко лёд"}, {name:"Кислый виноград лёд"},
     {name:"Клюква лимон сода"}, {name:"Лимон лайм"},
     {name:"Лимончелло"}, {name:"Черника гранат лайм"}
   ]},
  {id:"mel", cat:"disposable", brand:"Meloso", line:"X25000",
   name:"Meloso X25000", desc:"Одноразка, до 25 000 затяжек. Выбери вкус.",
   price:790, strength:"-", strengthLabel:"—", volume:"до 25000 тяг", photo:"img/mel.png",
   flavors:[
     {name:"Арбуз Лед"}, {name:"Виноград Малина Лед"},
     {name:"Кислый Виноград Лед"}, {name:"Клубничная Жвачка"},
     {name:"Клюква Виноград Лед"}, {name:"Малина"},
     {name:"Черника Лед"}, {name:"Ягодный Микс Лед"}
   ]},

  // ---- СНЮС / НИКОТИНОВЫЕ ----
  {id:"sn1", cat:"snus", brand:"Iceberg", name:"Iceberg — Emerald", price:470, strength:"hard", strengthLabel:"Hard 150mg", volume:"20шт",
   desc:"Снюс Iceberg, крепость Hard (150мг).", photo:"img/sn1.png",
   flavors:[{name:"Emerald"}]},
  {id:"dual", cat:"snus", brand:"DUALL", name:"DUALL Extra Hard", price:470, strength:"extra", strengthLabel:"Extra Hard 200mg", volume:"20шт",
   desc:"Снюс DUALL, крепость Extra Hard (200мг).", photo:"img/dual.png",
   flavors:[
     {name:"Мятные леденцы эвкалипт"}, {name:"Вишня мята"},
     {name:"Сладкая мята"}, {name:"Мятная жвачка"}, {name:"Полярная мята"}
   ]},
  {id:"faf", cat:"snus", brand:"Faff", name:"Faff Hard", price:470, strength:"hard", strengthLabel:"Hard 150mg", volume:"20шт",
   desc:"Снюс Faff, крепость Hard (150мг).", photo:"img/faf.png",
   flavors:[
     {name:"Cactus"}, {name:"Energy Cola"}, {name:"Orange soda"},
     {name:"Peach tea"}, {name:"Top Mint"}
   ]},
  {id:"guc", cat:"snus", brand:"GUCCI", name:"GUCCI Hard", price:470, strength:"hard", strengthLabel:"Hard 150–200mg", volume:"20шт",
   desc:"Снюс GUCCI, крепость Hard (150–200мг).", photo:"img/guc.png",
   flavors:[
     {name:"Клубничный мохито", desc:"150мг"}, {name:"Банан", desc:"150мг"},
     {name:"Баблгам", desc:"150мг"}, {name:"Конфеты", desc:"150мг"},
     {name:"Виски кола вишня", desc:"150мг"}, {name:"Классическая мята", desc:"150мг"},
     {name:"DrPepper cherry", desc:"200мг"}, {name:"Haribo", desc:"200мг"},
     {name:"Fanta grape", desc:"200мг"}, {name:"Mountain dew", desc:"200мг"}
   ]},
  {id:"dlt", cat:"snus", brand:"D.L.T.A", line:"Energy",
   name:"D.L.T.A Energy", price:470, strength:"hard", strengthLabel:"Hard 150mg", volume:"20шт",
   desc:"Никпэки D.L.T.A Energy, крепость Hard (150мг).", photo:"img/dlt.png",
   flavors:[
     {name:"Adrenaline Rush Mango"}, {name:"Adrenaline Rush Lichee"},
     {name:"Adrenaline Rush ICE EFFECT"}, {name:"Burn Energy Fruit Punch"},
     {name:"Burn Energy apple kiwi"}, {name:"Candy Blueberry Lemon"},
     {name:"Green Grape Mint"}, {name:"Lime Mint"}
   ]},
  {id:"che", cat:"snus", brand:"CHEWE", line:"Жвачки",
   name:"CHEWE (жвачки)", price:400, strength:"hard", strengthLabel:"Hard 80mg", volume:"40шт",
   desc:"Никотиновые жвачки CHEWE, 40 шт, Hard (80мг).", photo:"img/che.png",
   flavors:[
     {name:"Мята"}, {name:"Гуава"}, {name:"Арбуз"}, {name:"Персик"}
   ]},
  {id:"dltw", cat:"snus", brand:"D.L.T.A", line:"Ватки",
   name:"D.L.T.A Energy (ватки)", price:400, strength:"hard", strengthLabel:"Hard 75mg", volume:"70шт",
   desc:"Никотиновые ватки D.L.T.A, 70 шт, Hard (75мг).", photo:"img/dltw.png",
   flavors:[
     {name:"Adrenaline Rush Lychee"}, {name:"Burn Original"}
   ]},
  {id:"sn3", cat:"snus", brand:"Odens", line:"Табак",
   name:"Odens (табак)", price:470, strength:"medium", strengthLabel:"Medium 60mg", volume:"20шт",
   desc:"Жевательный табак Odens, 20 шт, Medium (60мг).", photo:"img/sn3.png"},

  // ---- РАСХОДНИКИ: испары, картриджи, баки, никобустер ----
  {id:"car", cat:"cartridges", brand:"Geekvape / Vaporesso / Smoant", line:"Испары и картриджи",
   name:"Испары и картриджи", desc:"Расходники для подов. Цена за 1 шт.", vlabel:"Модель",
   price:300, strength:"-", strengthLabel:"—", volume:"1 шт", photo:"img/car.png",
   flavors:[
     {name:"Geekvape B 0.2"}, {name:"Geekvape Q 0.6"}, {name:"Geekvape P 0.15"},
     {name:"Geekvape Aegis nano 0.6"}, {name:"Voopoo PnP-TW15 0.15Ω"},
     {name:"Rincoe Manto Aio 0.3Ω"}, {name:"Smoant K5 0.15"},
     {name:"Xros 0.6 (3мл)"}, {name:"Xros 0.4 (3мл)"}
   ]},
  {id:"tank", cat:"cartridges", brand:"Geekvape / Smoant / Rincoe", line:"Баки",
   name:"Баки (танки)", desc:"Баки для устройств. Цена за 1 шт.", vlabel:"Модель",
   price:500, strength:"-", strengthLabel:"—", volume:"1 шт", photo:"img/tank.png",
   flavors:[
     {name:"Geek Vape B60"}, {name:"Geek Vape H45"}, {name:"Geek Vape Hero 5"},
     {name:"Geek Vape B100"}, {name:"Smoant Pasito III"}, {name:"Rincoe Manto Aio 80W"}
   ]},
  {id:"nic", cat:"cartridges", brand:"NicBoost", line:"Никобустер",
   name:"Никобустер", desc:"Бустер крепости для жидкостей. Цена за 1 шт.", vlabel:"Крепость",
   price:150, strength:"-", strengthLabel:"—", volume:"1 шт", photo:"img/nic.png",
   flavors:[
     {name:"Strong 4% (40мг)", desc:"Strong"}, {name:"Extra hard 6% (60мг)", desc:"Extra hard"}
   ]}
];

const CATS = [
  {id:"all", name:"Все"},
  {id:"liquids", name:"Жидкости"},
  {id:"pods", name:"Поды"},
  {id:"disposable", name:"Одноразки"},
  {id:"cartridges", name:"Расходники"},
  {id:"snus", name:"Снюс и никотин"}
];

// Русские цвета подов -> hex (выбор кружком). Для английских используется подбор в app.js.
const COLOR_HEX = {
  "Чёрный":"#2A2A2E","Серый":"#8B8B8F","Серебристый":"#C9CCD4","Мятный":"#7FD9C2",
  "Голубой":"#5BB8E8","Розовый":"#F29AB8","Зелёный":"#3E9B57","Красный":"#D64545",
  "Жёлтый":"#E8C34A","Камуфляж":"linear-gradient(135deg,#5A5F4A 40%,#8B8F74 60%)",
  "Прозрачный":"rgba(200,200,210,.35)"
};

// Настройки доставки/оплаты (менеджер канала)
const COLOR_PHOTOS = {
  dev1: {"Glacier Green":"img/c/dev1__glacier-green.png", "Twilight Blue":"img/c/dev1__twilight-blue.png"},
  dev2: {"Aurora Blue":"img/c/dev2__aurora-blue.png", "Cosmic Black":"img/c/dev2__cosmic-black.png", "Pearl White":"img/c/dev2__pearl-white.png", "Silk Brown":"img/c/dev2__silk-brown.png", "Silk Gray":"img/c/dev2__silk-gray.png", "Silk Green":"img/c/dev2__silk-green.png", "Slate Black":"img/c/dev2__slate-black.png", "Abyssal Blue":"img/c/dev2__abyssal-blue.png", "Carbon Fiber Gray":"img/c/dev2__carbon-fiber-gray.png", "Dreamy Pink":"img/c/dev2__dreamy-pink.png"},
  dev3: {"Carbon Stripes":"img/c/dev3__carbon-stripes.png", "Blue Silk":"img/c/dev3__blue-silk.png", "Coral Red":"img/c/dev3__coral-red.png", "Grey Silk":"img/c/dev3__grey-silk.png", "Jade Green":"img/c/dev3__jade-green.png", "Lavender Purple":"img/c/dev3__lavender-purple.png", "Opal White":"img/c/dev3__opal-white.png", "Violet Silk":"img/c/dev3__violet-silk.png"},
  dev4: {"Brown":"img/c/dev4__brown.png", "Jelly Pink":"img/c/dev4__jelly-pink.png", "Plume White":"img/c/dev4__plume-white.png", "Titanium Black":"img/c/dev4__titanium-black.png", "Titanium Silver":"img/c/dev4__titanium-silver.png", "Black":"img/c/dev4__black.png", "Jelly Blue":"img/c/dev4__jelly-blue.png", "Jelly Green":"img/c/dev4__jelly-green.png", "Jelly Orange":"img/c/dev4__jelly-orange.png", "Plume Pink":"img/c/dev4__plume-pink.png"},
  dev5: {"Cool Black":"img/c/dev5__cool-black.png", "Cool Pink":"img/c/dev5__cool-pink.png", "Mist Black":"img/c/dev5__mist-black.png", "Mist White":"img/c/dev5__mist-white.png", "Retro Orange":"img/c/dev5__retro-orange.png", "Retro Pink":"img/c/dev5__retro-pink.png", "Black":"img/c/dev5__black.png", "Sky Blue":"img/c/dev5__sky-blue.png", "Titanium Silver":"img/c/dev5__titanium-silver.png", "Purple":"img/c/dev5__purple.png", "Flowing Blue":"img/c/dev5__flowing-blue.png", "Rose Red":"img/c/dev5__rose-red.png", "Flowing Pink":"img/c/dev5__flowing-pink.png", "Flowing Green":"img/c/dev5__flowing-green.png", "Pastel Crystal":"img/c/dev5__pastel-crystal.png", "Carbon Black":"img/c/dev5__carbon-black.png"},
  dev6: {"Blue Leatherette":"img/c/dev6__blue-leatherette.png", "Black Satin":"img/c/dev6__black-satin.png", "Color Burst":"img/c/dev6__color-burst.png", "Damascus Pink":"img/c/dev6__damascus-pink.png", "Damascus Silver":"img/c/dev6__damascus-silver.png", "Nacre":"img/c/dev6__nacre.png", "Orange Leatherette":"img/c/dev6__orange-leatherette.png", "Yellow Satin":"img/c/dev6__yellow-satin.png"},
  dev8: {"Grayish Blue":"img/c/dev8__grayish-blue.png", "Light Green":"img/c/dev8__light-green.png", "Lime Green":"img/c/dev8__lime-green.png", "Mint Green":"img/c/dev8__mint-green.png", "Rubber White":"img/c/dev8__rubber-white.png", "Sky Blue":"img/c/dev8__sky-blue.png"},
  dev9: {"Iron Black":"img/c/dev9__iron-black.png", "Racing Green":"img/c/dev9__racing-green.png", "Turbo Blue":"img/c/dev9__turbo-blue.png", "Blaze Red":"img/c/dev9__blaze-red.png", "Steel Silver":"img/c/dev9__steel-silver.png", "Red & White":"img/c/dev9__red-white.png"},
  dev10: {"Speed Red":"img/c/dev10__speed-red.png", "Racing Blue":"img/c/dev10__racing-blue.png", "Vibe Green":"img/c/dev10__vibe-green.png", "Quantum Cyan":"img/c/dev10__quantum-cyan.png", "Lightning Yellow":"img/c/dev10__lightning-yellow.png"},
  dev13: {"Canyon Orange":"img/c/dev13__canyon-orange.png", "Carbon Black":"img/c/dev13__carbon-black.png", "Chameleon Prism":"img/c/dev13__chameleon-prism.png", "Iris Purple":"img/c/dev13__iris-purple.png", "Ivory White":"img/c/dev13__ivory-white.png", "Moss Green":"img/c/dev13__moss-green.png"},
  dev14: {"Bottle Green":"img/c/dev14__bottle-green.png", "Golden Red":"img/c/dev14__golden-red.png", "Pink Purple":"img/c/dev14__pink-purple.png", "Mint Blue":"img/c/dev14__mint-blue.png", "Silver":"img/c/dev14__silver.png"},
  dev15: {"Midnight Gold":"img/c/dev15__midnight-gold.png", "Black":"img/c/dev15__black.png", "Rainbow Purple":"img/c/dev15__rainbow-purple.png", "Midnight Red":"img/c/dev15__midnight-red.png", "Sapphire Blue":"img/c/dev15__sapphire-blue.png", "Sunset Red":"img/c/dev15__sunset-red.png", "Teal Blue":"img/c/dev15__teal-blue.png", "Silver":"img/c/dev15__silver.png"},
  dev16: {"Arctic Blue":"img/c/dev16__arctic-blue.png", "Jungle Green":"img/c/dev16__jungle-green.png", "Midnight Dark":"img/c/dev16__midnight-dark.png", "Polar Silver":"img/c/dev16__polar-silver.png", "Purple Bloom":"img/c/dev16__purple-bloom.png", "Sunset Red":"img/c/dev16__sunset-red.png"},
};

const SHOP = {
  name: "VapeOasis",
  manager: "@lzllllzll",
  bonusPercent: 2,          // % бонусами с заказа
  referBonus: 40,           // бонус за друга
  deliveryCourier: 300,     // курьер, руб
  deliveryFreeFrom: 3000,   // бесплатно от суммы
  payments: ["СБП", "Наличные при получении"],
  deliveryTypes: ["Самовывоз", "Курьер"]
};