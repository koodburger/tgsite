/* VapeOasis — каталог по ассортименту канала t.me/iVapeOasisAbkn (пост 27.08.2026).
   Карточка товара -> детальный экран -> выбор вкуса/цвета -> в корзину. */
const PRODUCTS = [
  // ---- ЖИДКОСТИ: вкусы внутри базового товара ----
  {id:"bjorn", cat:"liquids", brand:"Bjorn", line:"Темный Хор",
   name:"Bjorn Темный Хор", desc:"Солевая жидкость 30мл, 80мг. Линейка «Темный Хор».",
   price:550, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", photo:"img/bjorn.jpg",
   flavors:[
     {name:"Арбуз мята"}, {name:"Клубника мята"}, {name:"Лимон лайм"},
     {name:"Мятная жвачка"}, {name:"Чистая мята"}, {name:"Эвкалипт мята"},
     {name:"Ягоды мята"}
   ]},
  {id:"fox", cat:"liquids", brand:"Ice Fox by Iceberg", line:"Premium",
   name:"Ice Fox by Iceberg", desc:"Премиум линейка 30мл, 20мг.",
   price:600, strength:"medium", strengthLabel:"Medium 2%", volume:"30ml", photo:"img/fox.jpg",
   flavors:[
     {name:"Земляничный мохито"}, {name:"Кислая чёрная смородина"},
     {name:"Кислая малина лимон"}, {name:"Кислая малина с арбузом"},
     {name:"Кислая малина с фантой"}, {name:"Кислые ленточки клубника земляника"},
     {name:"Кислые мармеладные ягоды"}, {name:"Фанта с голубой малиной"},
     {name:"Чернично-земляничные червяки"}, {name:"Чёрный виноград"}
   ]},
  {id:"pr", cat:"liquids", brand:"Пошлая Рабыня", line:"Extra Hard",
   name:"Пошлая Рабыня", desc:"Солевая 30мл, 80мг. От 3 штук — 350₽/шт.",
   price:400, strength:"extra", strengthLabel:"Extra Hard 8%", volume:"30ml", photo:"img/pr.jpg",
   flavors:[
     {name:"Ягодная содовая"}, {name:"Ананасовый сок"}, {name:"Мультифрукт"},
     {name:"Цитрусовый микс"}, {name:"Клюквенный морс"},
     {name:"Апельсин виноград"}, {name:"Кока-кола с ванилью"}
   ]},
  {id:"flav", cat:"liquids", brand:"FLAV", line:"Medium",
   name:"FLAV", desc:"Солевая жидкость 30мл, 20мг (Medium 2%).",
   price:400, strength:"medium", strengthLabel:"Medium 2%", volume:"30ml", photo:"img/flav.jpg",
   flavors:[
     {name:"Грейпфрут вишня"}, {name:"Кола вишня"}, {name:"Манго персик"},
     {name:"Тропическое манго"}, {name:"Черника арбуз"}
   ]},
  {id:"kil", cat:"liquids", brand:"Кислая Убивашка", line:"Extra Hard",
   name:"Кислая Убивашка", desc:"Солевая жидкость 30мл, 90мг (Extra Hard 9%).",
   price:550, strength:"extra", strengthLabel:"Extra Hard 9%", volume:"30ml", photo:"img/kil.jpg"},
  {id:"lab", cat:"liquids", brand:"Злая Лабубу", line:"Energy",
   name:"Злая Лабубу Energy", desc:"Солевая жидкость 30мл, 70мг (Extra Hard 7%).",
   price:500, strength:"extra", strengthLabel:"Extra Hard 7%", volume:"30ml", photo:"img/lab.jpg"},

  // ---- ПОДЫ / ДЕВАЙСЫ: выбор цвета корпуса ----
  {id:"dev1", cat:"pods", brand:"Geekvape", name:"Aegis Legend 5 Kit 200W", price:4990, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Боксмод 200W. Комплект: бак Z Sub-Ohm, 2 испарителя, доп. стекло, 2×18650, провод.",
   photo:"img/dev1.jpg",
   colors:["Glacier Green","Twilight Blue"]},
  {id:"dev2", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 6", price:2690, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Под-система: 2 картриджа, провод, документация.",
   photo:"img/dev2.jpg",
   colors:["Aurora Blue","Cosmic Black","Pearl White","Silk Brown","Silk Gray","Silk Green","Slate Black","Abyssal Blue","Carbon Fiber Gray","Dreamy Pink"]},
  {id:"dev3", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 5", price:2200, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Хит продаж: 2 картриджа, провод, документация.",
   photo:"img/dev3.jpg",
   colors:["Carbon Stripes","Blue Silk","Coral Red","Grey Silk","Jade Green","Lavender Purple","Opal White","Violet Silk"]},
  {id:"dev4", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 6 Mini", price:2090, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Компактная версия XROS 6: картридж, документация.",
   photo:"img/dev4.jpg",
   colors:["Brown","Jelly Pink","Plume White","Titanium Black","Titanium Silver","Black","Jelly Blue","Jelly Green","Jelly Orange","Plume Pink"]},
  {id:"dev5", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 5 Mini", price:1790, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Мини-формат: картридж, провод, документация.",
   photo:"img/dev5.jpg",
   colors:["Cool Black","Cool Pink","Mist Black","Mist White","Retro Orange","Retro Pink","Black","Sky Blue","Titanium Silver","Purple","Flowing Blue","Rose Red","Flowing Pink","Flowing Green","Pastel Crystal","Carbon Black"]},
  {id:"dev6", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS 5 Nano", price:2500, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Nano-формат: 2 картриджа, ланьярд, провод, документация.",
   photo:"img/dev6.jpg",
   colors:["Blue Leatherette","Black Satin","Color Burst","Damascus Pink","Damascus Silver","Nacre","Orange Leatherette","Yellow Satin"]},
  {id:"dev7", cat:"pods", brand:"Vaporesso", name:"Vaporesso XROS Mini", price:1400, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Базовый мини-под: картридж, провод, документация.",
   photo:"img/dev7.jpg",
   colors:["Orange Red","Cherry Red","Grape Purple","Violet","Neon","Forest Green","Midnight Blue","Lime Green","Silver","Vitality"]},
  {id:"dev8", cat:"pods", brand:"Geekvape", name:"Aegis HERO 2", price:2600, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Компактный подмод, защита IP67. Ключ, 2 испарителя, провод, документация.",
   photo:"img/dev8.jpg",
   colors:["Grayish Blue","Light Green","Lime Green","Mint Green","Rubber White","Sky Blue"]},
  {id:"dev9", cat:"pods", brand:"Geekvape", name:"Aegis HERO 5 Classic", price:2790, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Новое поколение HERO: ключ, 2 испарителя, провод, документация.",
   photo:"img/dev9.jpg",
   colors:["Iron Black","Racing Green","Turbo Blue","Blaze Red","Steel Silver","Red & White"]},
  {id:"dev10", cat:"pods", brand:"Geekvape", name:"HERO 5 Racing Edition", price:2990, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Гоночная лимитка: 2 испарителя, документация.",
   photo:"img/dev10.jpg",
   colors:["Speed Red","Racing Blue","Vibe Green","Quantum Cyan","Lightning Yellow"]},
  {id:"dev11", cat:"pods", brand:"Geekvape", name:"Aegis Hero Q", price:1700, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Лёгкий Q: 2 картриджа, ланьярд, провод, документация.",
   photo:"img/dev11.jpg",
   colors:["Black","Blue","Ocean Blue","Green","Wood Brown","Snow Pink","Emerald Green","Gray"]},
  {id:"dev12", cat:"pods", brand:"Smoant", name:"Smoant Pasito 2", price:2490, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Легенда Pasito: 2 испарителя, провод, документация.",
   photo:"img/dev12.jpg",
   colors:["Ink","Malachite","Leather","Nymph","Marble","Prism","Pink Cyan"]},
  {id:"dev13", cat:"pods", brand:"Geekvape", name:"Aegis Force", price:2990, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Новинка: дриптип, 2 испарителя, провод, документация.",
   photo:"img/dev13.jpg",
   colors:["Canyon Orange","Carbon Black","Chameleon Prism","Iris Purple","Ivory White","Moss Green"]},
  {id:"dev14", cat:"pods", brand:"Geekvape", name:"Aegis Boost PRO 2", price:3300, strength:"-", strengthLabel:"—", volume:"—",
   desc:"PRO 2: ключ, 2 испарителя, аккумулятор 18650, провод, документация.",
   photo:"img/dev14.jpg",
   colors:["Bottle Green","Golden Red","Pink Purple","Mint Blue","Silver"]},
  {id:"dev15", cat:"pods", brand:"Geekvape", name:"Aegis Boost 3", price:2890, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Третье поколение Boost: ключ, 2 испарителя, провод, документация.",
   photo:"img/dev15.jpg",
   colors:["Midnight Gold","Black","Rainbow Purple","Midnight Red","Sapphire Blue","Sunset Red","Teal Blue","Silver"]},
  {id:"dev16", cat:"pods", brand:"Geekvape", name:"Aegis nano 3", price:2490, strength:"-", strengthLabel:"—", volume:"—",
   desc:"Новинка nano: 2 картриджа, документация.",
   photo:"img/dev16.jpg",
   colors:["Arctic Blue","Jungle Green","Midnight Dark","Polar Silver","Purple Bloom","Sunset Red"]},

  // ---- ОДНОРАЗКИ: модель/вкус внутри позиции ----
  {id:"elf", cat:"disposable", brand:"ELF BAR", line:"Triplex 30000",
   name:"ELF BAR Triplex 30000", desc:"Одноразка, до 30 000 затяжек. Выбери вкус.",
   price:1390, strength:"-", strengthLabel:"—", volume:"до 30000 тяг", photo:"img/elf.jpg",
   flavors:[
     {name:"Апельсиновый всплеск"}, {name:"Виноград клюква"},
     {name:"Кислая ежевика лёд"}, {name:"Клубника персик вишня"},
     {name:"Ледяной арбуз"}, {name:"Черная смородина грейпфрут"},
     {name:"Черника малина лёд"}
   ]},
  {id:"son", cat:"disposable", brand:"Funky Lands x Lost Mary", line:"Sonic-X",
   name:"Sonic-X (Бездымный режим)", desc:"Одноразка с бездымным режимом, до 30 000 затяжек.",
   price:1490, strength:"-", strengthLabel:"—", volume:"до 30000 тяг", photo:"img/son.jpg",
   flavors:[
     {name:"Арбуз кислый персик"}, {name:"Кислая клюква ананас"},
     {name:"Кислое яблоко лёд"}, {name:"Кислый виноград лёд"},
     {name:"Клюква лимон сода"}, {name:"Лимон лайм"},
     {name:"Лимончелло"}, {name:"Черника гранат лайм"}
   ]},
  {id:"mel", cat:"disposable", brand:"Meloso", line:"X25000",
   name:"Meloso X25000", desc:"Одноразка, до 25 000 затяжек. Выбери вкус.",
   price:790, strength:"-", strengthLabel:"—", volume:"до 25000 тяг", photo:"img/mel.jpg",
   flavors:[
     {name:"Арбуз Лед"}, {name:"Виноград Малина Лед"},
     {name:"Кислый Виноград Лед"}, {name:"Клубничная Жвачка"},
     {name:"Клюква Виноград Лед"}, {name:"Малина"},
     {name:"Черника Лед"}, {name:"Ягодный Микс Лед"}
   ]},

  // ---- СНЮС / НИКОТИНОВЫЕ ----
  {id:"sn1", cat:"snus", brand:"Iceberg", name:"Iceberg — Emerald", price:470, strength:"hard", strengthLabel:"Hard 150mg", volume:"20шт",
   desc:"Снюс Iceberg, крепость Hard (150мг).", photo:"img/sn1.jpg",
   flavors:[{name:"Emerald"}]},
  {id:"dual", cat:"snus", brand:"DUALL", name:"DUALL Extra Hard", price:470, strength:"extra", strengthLabel:"Extra Hard 200mg", volume:"20шт",
   desc:"Снюс DUALL, крепость Extra Hard (200мг).", photo:"img/dual.jpg",
   flavors:[
     {name:"Мятные леденцы эвкалипт"}, {name:"Вишня мята"},
     {name:"Сладкая мята"}, {name:"Мятная жвачка"}, {name:"Полярная мята"}
   ]},
  {id:"faf", cat:"snus", brand:"Faff", name:"Faff Hard", price:470, strength:"hard", strengthLabel:"Hard 150mg", volume:"20шт",
   desc:"Снюс Faff, крепость Hard (150мг).", photo:"img/faf.jpg",
   flavors:[
     {name:"Cactus"}, {name:"Energy Cola"}, {name:"Orange soda"},
     {name:"Peach tea"}, {name:"Top Mint"}
   ]},
  {id:"guc", cat:"snus", brand:"GUCCI", name:"GUCCI Hard", price:470, strength:"hard", strengthLabel:"Hard 150–200mg", volume:"20шт",
   desc:"Снюс GUCCI, крепость Hard (150–200мг).", photo:"img/guc.jpg",
   flavors:[
     {name:"Клубничный мохито", desc:"150мг"}, {name:"Банан", desc:"150мг"},
     {name:"Баблгам", desc:"150мг"}, {name:"Конфеты", desc:"150мг"},
     {name:"Виски кола вишня", desc:"150мг"}, {name:"Классическая мята", desc:"150мг"},
     {name:"DrPepper cherry", desc:"200мг"}, {name:"Haribo", desc:"200мг"},
     {name:"Fanta grape", desc:"200мг"}, {name:"Mountain dew", desc:"200мг"}
   ]},
  {id:"dlt", cat:"snus", brand:"D.L.T.A", line:"Energy",
   name:"D.L.T.A Energy", price:470, strength:"hard", strengthLabel:"Hard 150mg", volume:"20шт",
   desc:"Никпэки D.L.T.A Energy, крепость Hard (150мг).", photo:"img/dlt.jpg",
   flavors:[
     {name:"Adrenaline Rush Mango"}, {name:"Adrenaline Rush Lichee"},
     {name:"Adrenaline Rush ICE EFFECT"}, {name:"Burn Energy Fruit Punch"},
     {name:"Burn Energy apple kiwi"}, {name:"Candy Blueberry Lemon"},
     {name:"Green Grape Mint"}, {name:"Lime Mint"}
   ]},
  {id:"che", cat:"snus", brand:"CHEWE", line:"Жвачки",
   name:"CHEWE (жвачки)", price:400, strength:"hard", strengthLabel:"Hard 80mg", volume:"40шт",
   desc:"Никотиновые жвачки CHEWE, 40 шт, Hard (80мг).", photo:"img/che.jpg",
   flavors:[
     {name:"Мята"}, {name:"Гуава"}, {name:"Арбуз"}, {name:"Персик"}
   ]},
  {id:"dltw", cat:"snus", brand:"D.L.T.A", line:"Ватки",
   name:"D.L.T.A Energy (ватки)", price:400, strength:"hard", strengthLabel:"Hard 75mg", volume:"70шт",
   desc:"Никотиновые ватки D.L.T.A, 70 шт, Hard (75мг).", photo:"img/dltw.jpg",
   flavors:[
     {name:"Adrenaline Rush Lychee"}, {name:"Burn Original"}
   ]},
  {id:"sn3", cat:"snus", brand:"Odens", line:"Табак",
   name:"Odens (табак)", price:470, strength:"medium", strengthLabel:"Medium 60mg", volume:"20шт",
   desc:"Жевательный табак Odens, 20 шт, Medium (60мг).", photo:"img/sn3.jpg"},

  // ---- РАСХОДНИКИ: испары, картриджи, баки, никобустер ----
  {id:"car", cat:"cartridges", brand:"Geekvape / Vaporesso / Smoant", line:"Испары и картриджи",
   name:"Испары и картриджи", desc:"Расходники для подов. Цена за 1 шт.", vlabel:"Модель",
   price:300, strength:"-", strengthLabel:"—", volume:"1 шт", photo:"img/car.jpg",
   flavors:[
     {name:"Geekvape B 0.2"}, {name:"Geekvape Q 0.6"}, {name:"Geekvape P 0.15"},
     {name:"Geekvape Aegis nano 0.6"}, {name:"Voopoo PnP-TW15 0.15Ω"},
     {name:"Rincoe Manto Aio 0.3Ω"}, {name:"Smoant K5 0.15"},
     {name:"Xros 0.6 (3мл)"}, {name:"Xros 0.4 (3мл)"}
   ]},
  {id:"tank", cat:"cartridges", brand:"Geekvape / Smoant / Rincoe", line:"Баки",
   name:"Баки (танки)", desc:"Баки для устройств. Цена за 1 шт.", vlabel:"Модель",
   price:500, strength:"-", strengthLabel:"—", volume:"1 шт", photo:"img/tank.jpg",
   flavors:[
     {name:"Geek Vape B60"}, {name:"Geek Vape H45"}, {name:"Geek Vape Hero 5"},
     {name:"Geek Vape B100"}, {name:"Smoant Pasito III"}, {name:"Rincoe Manto Aio 80W"}
   ]},
  {id:"nic", cat:"cartridges", brand:"NicBoost", line:"Никобустер",
   name:"Никобустер", desc:"Бустер крепости для жидкостей. Цена за 1 шт.", vlabel:"Крепость",
   price:150, strength:"-", strengthLabel:"—", volume:"1 шт", photo:"img/nic.jpg",
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
  dev1: {"Glacier Green":"img/c/dev1__glacier-green.jpg", "Twilight Blue":"img/c/dev1__twilight-blue.jpg"},
  dev2: {"Aurora Blue":"img/c/dev2__aurora-blue.jpg", "Cosmic Black":"img/c/dev2__cosmic-black.jpg", "Pearl White":"img/c/dev2__pearl-white.jpg", "Silk Brown":"img/c/dev2__silk-brown.jpg", "Silk Gray":"img/c/dev2__silk-gray.jpg", "Silk Green":"img/c/dev2__silk-green.jpg", "Slate Black":"img/c/dev2__slate-black.jpg", "Abyssal Blue":"img/c/dev2__abyssal-blue.jpg", "Carbon Fiber Gray":"img/c/dev2__carbon-fiber-gray.jpg", "Dreamy Pink":"img/c/dev2__dreamy-pink.jpg"},
  dev3: {"Carbon Stripes":"img/c/dev3__carbon-stripes.jpg", "Blue Silk":"img/c/dev3__blue-silk.jpg", "Coral Red":"img/c/dev3__coral-red.jpg", "Grey Silk":"img/c/dev3__grey-silk.jpg", "Jade Green":"img/c/dev3__jade-green.jpg", "Lavender Purple":"img/c/dev3__lavender-purple.jpg", "Opal White":"img/c/dev3__opal-white.jpg", "Violet Silk":"img/c/dev3__violet-silk.jpg"},
  dev4: {"Brown":"img/c/dev4__brown.jpg", "Jelly Pink":"img/c/dev4__jelly-pink.jpg", "Plume White":"img/c/dev4__plume-white.jpg", "Titanium Black":"img/c/dev4__titanium-black.jpg", "Titanium Silver":"img/c/dev4__titanium-silver.jpg", "Black":"img/c/dev4__black.jpg", "Jelly Blue":"img/c/dev4__jelly-blue.jpg", "Jelly Green":"img/c/dev4__jelly-green.jpg", "Jelly Orange":"img/c/dev4__jelly-orange.jpg", "Plume Pink":"img/c/dev4__plume-pink.jpg"},
  dev5: {"Cool Black":"img/c/dev5__cool-black.jpg", "Cool Pink":"img/c/dev5__cool-pink.jpg", "Mist Black":"img/c/dev5__mist-black.jpg", "Mist White":"img/c/dev5__mist-white.jpg", "Retro Orange":"img/c/dev5__retro-orange.jpg", "Retro Pink":"img/c/dev5__retro-pink.jpg", "Black":"img/c/dev5__black.jpg", "Sky Blue":"img/c/dev5__sky-blue.jpg", "Titanium Silver":"img/c/dev5__titanium-silver.jpg", "Purple":"img/c/dev5__purple.jpg", "Flowing Blue":"img/c/dev5__flowing-blue.jpg", "Rose Red":"img/c/dev5__rose-red.jpg", "Flowing Pink":"img/c/dev5__flowing-pink.jpg", "Flowing Green":"img/c/dev5__flowing-green.jpg", "Pastel Crystal":"img/c/dev5__pastel-crystal.jpg", "Carbon Black":"img/c/dev5__carbon-black.jpg"},
  dev6: {"Blue Leatherette":"img/c/dev6__blue-leatherette.jpg", "Black Satin":"img/c/dev6__black-satin.jpg", "Color Burst":"img/c/dev6__color-burst.jpg", "Damascus Pink":"img/c/dev6__damascus-pink.jpg", "Damascus Silver":"img/c/dev6__damascus-silver.jpg", "Nacre":"img/c/dev6__nacre.jpg", "Orange Leatherette":"img/c/dev6__orange-leatherette.jpg", "Yellow Satin":"img/c/dev6__yellow-satin.jpg"},
  dev7: {"Orange Red":"img/c/dev7__orange-red.jpg", "Cherry Red":"img/c/dev7__cherry-red.jpg", "Grape Purple":"img/c/dev7__grape-purple.jpg", "Violet":"img/c/dev7__violet.jpg", "Neon":"img/c/dev7__neon.jpg", "Forest Green":"img/c/dev7__forest-green.jpg", "Midnight Blue":"img/c/dev7__midnight-blue.jpg", "Lime Green":"img/c/dev7__lime-green.jpg", "Silver":"img/c/dev7__silver.jpg", "Vitality":"img/c/dev7__vitality.jpg"},
  dev8: {"Grayish Blue":"img/c/dev8__grayish-blue.jpg", "Light Green":"img/c/dev8__light-green.jpg", "Lime Green":"img/c/dev8__lime-green.jpg", "Mint Green":"img/c/dev8__mint-green.jpg", "Rubber White":"img/c/dev8__rubber-white.jpg", "Sky Blue":"img/c/dev8__sky-blue.jpg"},
  dev9: {"Iron Black":"img/c/dev9__iron-black.jpg", "Racing Green":"img/c/dev9__racing-green.jpg", "Turbo Blue":"img/c/dev9__turbo-blue.jpg", "Blaze Red":"img/c/dev9__blaze-red.jpg", "Steel Silver":"img/c/dev9__steel-silver.jpg", "Red & White":"img/c/dev9__red-white.jpg"},
  dev10: {"Speed Red":"img/c/dev10__speed-red.jpg", "Racing Blue":"img/c/dev10__racing-blue.jpg", "Vibe Green":"img/c/dev10__vibe-green.jpg", "Quantum Cyan":"img/c/dev10__quantum-cyan.jpg", "Lightning Yellow":"img/c/dev10__lightning-yellow.jpg"},
  dev11: {"Black":"img/c/dev11__black.jpg", "Blue":"img/c/dev11__blue.jpg", "Ocean Blue":"img/c/dev11__ocean-blue.jpg", "Green":"img/c/dev11__green.jpg", "Wood Brown":"img/c/dev11__wood-brown.jpg", "Snow Pink":"img/c/dev11__snow-pink.jpg", "Emerald Green":"img/c/dev11__emerald-green.jpg", "Gray":"img/c/dev11__gray.jpg"},
  dev12: {"Ink":"img/c/dev12__ink.jpg", "Malachite":"img/c/dev12__malachite.jpg", "Leather":"img/c/dev12__leather.jpg", "Nymph":"img/c/dev12__nymph.jpg", "Marble":"img/c/dev12__marble.jpg", "Prism":"img/c/dev12__prism.jpg", "Pink Cyan":"img/c/dev12__pink-cyan.jpg"},
  dev13: {"Canyon Orange":"img/c/dev13__canyon-orange.jpg", "Carbon Black":"img/c/dev13__carbon-black.jpg", "Chameleon Prism":"img/c/dev13__chameleon-prism.jpg", "Iris Purple":"img/c/dev13__iris-purple.jpg", "Ivory White":"img/c/dev13__ivory-white.jpg", "Moss Green":"img/c/dev13__moss-green.jpg"},
  dev14: {"Bottle Green":"img/c/dev14__bottle-green.jpg", "Golden Red":"img/c/dev14__golden-red.jpg", "Pink Purple":"img/c/dev14__pink-purple.jpg", "Mint Blue":"img/c/dev14__mint-blue.jpg", "Silver":"img/c/dev14__silver.jpg"},
  dev15: {"Midnight Gold":"img/c/dev15__midnight-gold.jpg", "Black":"img/c/dev15__black.jpg", "Rainbow Purple":"img/c/dev15__rainbow-purple.jpg", "Midnight Red":"img/c/dev15__midnight-red.jpg", "Sapphire Blue":"img/c/dev15__sapphire-blue.jpg", "Sunset Red":"img/c/dev15__sunset-red.jpg", "Teal Blue":"img/c/dev15__teal-blue.jpg", "Silver":"img/c/dev15__silver.jpg"},
  dev16: {"Arctic Blue":"img/c/dev16__arctic-blue.jpg", "Jungle Green":"img/c/dev16__jungle-green.jpg", "Midnight Dark":"img/c/dev16__midnight-dark.jpg", "Polar Silver":"img/c/dev16__polar-silver.jpg", "Purple Bloom":"img/c/dev16__purple-bloom.jpg", "Sunset Red":"img/c/dev16__sunset-red.jpg"},
};

const SHOP = {
  name: "VapeOasis",
  manager: "@lzllllzll",
  bonusPercent: 2,          // % бонусами с заказа
  referBonus: 150,          // бонус за друга (каркас, localStorage)
  deliveryCourier: 300,     // курьер, руб
  deliveryFreeFrom: 3000,   // бесплатно от суммы
  payments: ["СБП", "Наличные при получении"],
  deliveryTypes: ["Самовывоз", "Курьер"]
};