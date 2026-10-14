/* VapeOasis — каталог по ассортименту канала t.me/iVapeOasisAbkn (пост 11.10.2026).
   Карточка товара -> детальный экран -> выбор вкуса/цвета -> в корзину. */
const PRODUCTS = [
  // ---- ЖИДКОСТИ: вкусы внутри базового товара ----
  {id:"podonki", cat:"liquids", brand:"PODONKI", line:"v1v2",
   name:"PODONKI v1v2", desc:"Солевая жидкость 30мл, Extra Hard 7% (70мг). Линейка PODONKI v1v2.",
   price:500, strength:"extra", strengthLabel:"Extra Hard 7% (70mg)", volume:"30ml", photo:"img/podonki.png",
   flavors:[
     {name:"Брусника Клюква Малина"}, {name:"Кактус Виноград Жвачка"},
     {name:"Клубника Малина Жвачка"}, {name:"Лесные Ягоды"},
     {name:"Лимонад Смородиновый"}, {name:"Личи Виноград Мята"},
     {name:"Малина Вишня"}, {name:"Малиновый лимонад"},
     {name:"Смородиновый Холс"}, {name:"Тропические Фрукты"},
     {name:"Черника Малина Мята"}
   ]},
  {id:"monh", cat:"liquids", brand:"Злая монашка", line:"Х Duall",
   name:"Злая монашка Х Duall", desc:"Солевая жидкость 30мл, Extra Hard 7% (70мг). Линейка «Злая монашка» Х Duall.",
   price:550, strength:"extra", strengthLabel:"Extra Hard 7% (70mg)", volume:"30ml", photo:"img/monh.png",
   flavors:[
     {name:"Арбуз Клубника", desc:"Tasty"}, {name:"Вишневый Чупа Чупс", desc:"Tasty"},
     {name:"Жвачка Клубника Киви", desc:"Tasty"}, {name:"Желейные Мишка", desc:"Tasty"},
     {name:"Клубника Банан", desc:"Tasty"}, {name:"Малина Черника Мята", desc:"Tasty"},
     {name:"Сладкая Мята", desc:"Tasty"}, {name:"Спелый Арбуз", desc:"Tasty"},
     {name:"Фрутелла Малина Клюква", desc:"Tasty"}, {name:"Черника Клубника", desc:"Tasty"},
     {name:"Черника Малина", desc:"Tasty"}, {name:"Яблоко Виноград", desc:"Tasty"},
     {name:"Ягодная Жвачка", desc:"Tasty"}, {name:"Мятная Жвачка с Малиной", desc:"Tasty"},
     {name:"Мятная Жвачка", desc:"Tasty"},
     {name:"Кислая Вишня Малина", desc:"sour"}, {name:"Кислая Вишня", desc:"sour"},
     {name:"Кислая Жвачка Виноград", desc:"sour"}, {name:"Кислая Малина Ежевика", desc:"sour"},
     {name:"Кислая Малина Лимонад", desc:"sour"}, {name:"Кислая Смородина Виноград", desc:"sour"},
     {name:"Кислая Черника", desc:"sour"}, {name:"Кислая Яблоко Киви", desc:"sour"},
     {name:"Кислые Ягоды", desc:"sour"}, {name:"Кислый Скитлс Ежевика", desc:"sour"},
     {name:"Кислый Скитлс", desc:"sour"}, {name:"Кислый Цитрусовый Микс", desc:"sour"},
     {name:"Кислый Энергетик Вишня", desc:"sour"}, {name:"Кислый Энергетик Ягоды", desc:"sour"},
     {name:"Кислый Ягодный Чупа Чупс", desc:"sour"},
     {name:"Арбузный Лимонад со Льдом", desc:"ice"}, {name:"Морозная Вишня", desc:"ice"},
     {name:"Морозная Ежевика Виноград", desc:"ice"}, {name:"Холодная Малина", desc:"ice"},
     {name:"Холодная Смородина Лайм", desc:"ice"}, {name:"Холодный Арбуз с Дыней", desc:"ice"},
     {name:"Холодный Лесные Ягоды", desc:"ice"}, {name:"Холодный Спрайт Арбуз", desc:"ice"},
     {name:"Холодный Энергетик Вишня", desc:"ice"}
   ]},
  {id:"monb", cat:"liquids", brand:"Злая монашка", line:"Bubble",
   name:"Злая монашка Bubble", desc:"Солевая жидкость 30мл, Extra Hard 8% (80мг). Линейка «Злая монашка» Bubble.",
   price:550, strength:"extra", strengthLabel:"Extra Hard 8% (80mg)", volume:"30ml", photo:"img/monb.png",
   flavors:[
     {name:"Арбузная конфета"}, {name:"Виноградная жвачка"},
     {name:"Виноградный скитлс"}, {name:"Вишневый тик-так"},
     {name:"Ежевика виноград ментос"}, {name:"Арбуз дыня жвачка"},
     {name:"Жвачка киви с малиной"}, {name:"Жвачка с кислой малиной"},
     {name:"Кислая мармеладная лента"}, {name:"Кислый земляничный чупа-чупс"},
     {name:"Кислый скиттлс черешня"}, {name:"Клубничный бабл-гам"},
     {name:"Мятная жвачка"}, {name:"Смородиновый холлс"},
     {name:"Земляника черника хуба-буба"}, {name:"Хуба-буба с яблоком"},
     {name:"Цитрусовый бабл-гам"}, {name:"Черничный бабл-гам"},
     {name:"Чупа-чупс с колой"}, {name:"Ягодная жвачка"}
   ]},
  {id:"suic", cat:"liquids", brand:"Самоубийца", line:"v2 Danger",
   name:"Самоубийца v2 Danger", desc:"Солевая жидкость 30мл, Extra Hard 10% (100мг). Линейка «Самоубийца» v2 Danger.",
   price:600, strength:"extra", strengthLabel:"Extra Hard 10% (100mg)", volume:"30ml", photo:"img/suic.png",
   flavors:[
     {name:"Виноград смородина мята"}, {name:"Классический энергетик"},
     {name:"Арбузно дынный фреш"}, {name:"Ягодная жвачка"},
     {name:"Малина виноград"}, {name:"Малиново яблочный мохито"},
     {name:"Мармеладный энергетик"}, {name:"Земляничный спрайт"},
     {name:"Земляника малина"}, {name:"Зеленый скитлс"},
     {name:"Земляника виноград"}, {name:"Кислое яблоко с ежевикой"},
     {name:"Мультфрукт"}, {name:"Энергетик персик"},
     {name:"Вишневый холс"}
   ]},
  {id:"bjorn", cat:"liquids", brand:"Bjorn", line:"Темный Хор",
   name:"Bjorn Темный Хор", desc:"Солевая жидкость 30мл, Extra Hard 8% (80мг). Линейка «Темный Хор».",
   price:550, strength:"extra", strengthLabel:"Extra Hard 8% (80mg)", volume:"30ml", photo:"img/bjorn.png",
   flavors:[
     {name:"Клубника мята"}, {name:"Лимон лайм"}, {name:"Мятная жвачка"},
     {name:"Чистая мята"}, {name:"Эвкалипт мята"}
   ]},
  {id:"fox", cat:"liquids", brand:"Ice Fox by Iceberg", line:"Premium",
   name:"Ice Fox by Iceberg", desc:"Премиум линейка 30мл, Medium 2% (20мг).",
   price:600, strength:"medium", strengthLabel:"Medium 2% (20mg)", volume:"30ml", photo:"img/fox.png",
   flavors:[
     {name:"Земляничный мохито"}, {name:"Кислая чёрная смородина"},
     {name:"Кислая малина лимон"}, {name:"Кислая малина с арбузом"},
     {name:"Кислая малина с фантой"}, {name:"Кислые ленточки клубника земляника"},
     {name:"Кислые мармеладные ягоды"}, {name:"Фанта с голубой малиной"},
     {name:"Чернично-земляничные червяки"}, {name:"Чёрный виноград"}
   ]},
  {id:"pr", cat:"liquids", brand:"Пошлая Рабыня", line:"Extra Hard",
   name:"Пошлая Рабыня", desc:"Солевая жидкость 30мл, Extra Hard 8% (80мг). От 3 шт — 350₽/шт.",
   price:400, strength:"extra", strengthLabel:"Extra Hard 8% (80mg)", volume:"30ml", photo:"img/pr.png",
   flavors:[
     {name:"Ягодная содовая"}, {name:"Ананасовый сок"}, {name:"Цитрусовый микс"},
     {name:"Клюквенный морс"}, {name:"Апельсин виноград"}, {name:"Кока-кола с ванилью"}
   ]},
  {id:"skala", cat:"liquids", brand:"Skala", line:"Only skittles",
   name:"Skala (Only skittles)", desc:"Солевая жидкость 30мл, Hard 5% (50мг). Линейка Only Skittles.",
   price:500, strength:"hard", strengthLabel:"Hard 5% (50mg)", volume:"30ml", photo:"img/skala.png",
   flavors:[
     {name:"Виноградный скиттлс"}, {name:"Вишневый скиттлс"},
     {name:"Ежевика черника скиттлс"}, {name:"Кислый скиттлс"},
     {name:"Малиновый скиттлс"}, {name:"Скитллс радужная жвачка"},
     {name:"Скиттлс арбуз"}, {name:"Скиттлс вишневая кола"},
     {name:"Скиттлс мятная конфета"}, {name:"Скиттлс энергетик"}
   ]},

  // ---- ПОДЫ / ВЕЙПЫ: цвета внутри базового товара ----
  {id:"dev1", cat:"pods", brand:"Geekvape", line:"Aegis",
   name:"Aegis Legend 5 Kit 200W", desc:"Боксмод 200W. Комплект: бак Z Sub-Ohm Tank, 2 испарителя, доп. стекло, 2×18650, провод.",
   price:4990, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev1.png",
   colors:["Glacier Green"]},
  {id:"dev2", cat:"pods", brand:"Vaporesso", line:"XROS",
   name:"VAPORESSO XROS 6", desc:"Под-система. Комплект: под, два картриджа, провод, документация.",
   price:2690, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev2.png",
   colors:["Aurora Blue","Cosmic Black","Pearl White","Silk Brown","Silk Gray","Silk Green","Slate Black","Abyssal Blue","Carbon Fiber Gray","Dreamy Pink"]},
  {id:"dev4", cat:"pods", brand:"Vaporesso", line:"XROS",
   name:"VAPORESSO XROS 6 MINI", desc:"Под-система. Комплект: под, картридж, документация.",
   price:2090, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev4.png",
   colors:["Brown","Jelly Pink","Plume White","Titanium Black","Titanium Silver","Black","Jelly Blue","Jelly Green","Jelly Orange","Plume Pink"]},
  {id:"dev5", cat:"pods", brand:"Vaporesso", line:"XROS",
   name:"VAPORESSO XROS 5 MINI", desc:"Под-система. Комплект: под, картридж, провод, документация.",
   price:1790, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev5.png",
   colors:["Cool Black","Cool Pink","Mist Black","Mist White","Retro Orange","Retro Pink","Black","Sky Blue","Titanium Silver","Purple","Flowing Blue","Rose Red","Flowing Pink","Flowing Green","Pastel Crystal","Carbon Black"]},
  {id:"dev6", cat:"pods", brand:"Vaporesso", line:"XROS",
   name:"VAPORESSO XROS 5 NANO", desc:"Под-система. Комплект: под, два картриджа, ланьярд, провод, документация.",
   price:2500, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev6.png",
   colors:["Blue Leatherette","Black Satin","Color Burst","Damascus Pink","Damascus Silver","Nacre","Orange Leatherette","Yellow Satin"]},
  {id:"dev17", cat:"pods", brand:"Vaporesso", line:"XROS",
   name:"XROS MINI (Fresh edition)", desc:"Под-система. Комплект: под, картридж, провод, документация.",
   price:1500, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev17.png",
   colors:["Baby Blue","Dark Indigo","Matte Silver","Spring Green","Space Gray"]},
  {id:"dev8", cat:"pods", brand:"Geekvape", line:"Aegis",
   name:"Aegis HERO 2", desc:"Под-система. Комплект: под, ключ, два испарителя, провод, документация.",
   price:2600, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev8.png",
   colors:["Grayish Blue","Light Green","Lime Green","Mint Green","Rubber White","Sky Blue"]},
  {id:"dev18", cat:"pods", brand:"Geekvape", line:"Aegis",
   name:"H45 Classic", desc:"Под-система. Комплект: под, ключ, два испарителя, провод, документация.",
   price:2490, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev18.png",
   colors:["Aqua","Black","Blue","Grey","Lavender","Sakura"]},
  {id:"dev10", cat:"pods", brand:"Geekvape", line:"Aegis",
   name:"HERO 5 Racing Edition", desc:"Под-система. Комплект: под, два испарителя, провод, документация.",
   price:2990, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev10.png",
   colors:["Speed Red","Racing Blue","Vibe Green","Quantum Cyan","Lightning Yellow"]},
  {id:"dev9", cat:"pods", brand:"Geekvape", line:"Aegis",
   name:"Aegis HERO 5 Classic", desc:"Под-система. Комплект: под, два испарителя, провод, документация.",
   price:2790, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev9.png",
   colors:["Iron Black","Racing Green","Turbo Blue","Blaze Red","Steel Silver","Red & White"]},
  {id:"dev19", cat:"pods", brand:"Geekvape", line:"Aegis",
   name:"Aegis HERO 5 Gradient", desc:"Под-система. Комплект: под, два испарителя, провод, документация.",
   price:2890, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev19.png",
   colors:["Fizzy Black","Fizzy Purple","Fizzy Blue","Fizzy Red"]},
  {id:"dev20", cat:"pods", brand:"Sonder", line:"Q2",
   name:"Sonder Q2", desc:"Под-система. Комплект: под, картридж, документация.",
   price:1090, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev20.png",
   colors:["Ocean Blue","Olive Green","Moonlight Silver","Fizzy Peach","Metallic Purple","Misty Blue"]},
  {id:"dev21", cat:"pods", brand:"Smoant", line:"Pasito",
   name:"SMOANT PASITO 3", desc:"Под-система. Комплект: под, два испарителя, провод, документация.",
   price:3500, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev21.png",
   colors:["Blue Azure","Blue Nuit","Camouflage Green","Classical Red","Matte Black","Pepper White","Rococo Purple","Space Gray"]},
  {id:"dev13", cat:"pods", brand:"Geekvape", line:"Aegis",
   name:"Aegis Force", desc:"Новинка. Комплект: под, дриптип, два испарителя, провод, документация.",
   price:2990, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev13.png",
   colors:["Canyon Orange","Carbon Black","Chameleon Prism","Iris Purple","Ivory White","Moss Green"]},
  {id:"dev14", cat:"pods", brand:"Geekvape", line:"Aegis",
   name:"Aegis Boost PRO 2", desc:"Комплект: под, ключ, два испарителя, провод, документация, аккумулятор 18650.",
   price:3300, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev14.png",
   colors:["Bottle Green","Golden Red","Pink Purple","Mint Blue","Silver"]},
  {id:"dev15", cat:"pods", brand:"Geekvape", line:"Aegis",
   name:"Aegis Boost 3", desc:"Комплект: под, ключ, два испарителя, провод, документация.",
   price:2890, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev15.png",
   colors:["Midnight Gold","Black","Rainbow Purple","Midnight Red","Sapphire Blue","Sunset Red","Teal Blue","Silver"]},
  {id:"dev16", cat:"pods", brand:"Geekvape", line:"Aegis",
   name:"Aegis nano 3", desc:"Комплект: под, два картриджа, документация.",
   price:2490, strength:"-", strengthLabel:"—", volume:"—", photo:"img/dev16.png",
   colors:["Arctic Blue","Jungle Green","Midnight Dark","Polar Silver","Purple Bloom","Sunset Red"]},

  // ---- ОДНОРАЗКИ ----
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
     {name:"Малина"}, {name:"Черника Лед"}, {name:"Ягодный Микс Лед"}
   ]},

  // ---- СНЮС / НИКОТИНОВЫЕ ----
  {id:"dual", cat:"snus", brand:"DUALL", name:"DUALL Extra Hard", price:470, strength:"extra", strengthLabel:"Extra Hard 200mg", volume:"20шт",
   desc:"Никпэки DUALL, крепость Extra Hard (200мг).", photo:"img/dual.png",
   flavors:[
     {name:"Мятные леденцы эвкалипт"}, {name:"Вишня мята"},
     {name:"Сладкая мята"}, {name:"Мятная жвачка"}, {name:"Полярная мята"}
   ]},
  {id:"faf", cat:"snus", brand:"Faff", name:"Faff Hard", price:470, strength:"hard", strengthLabel:"Hard 150mg", volume:"20шт",
   desc:"Никпэки Faff, крепость Hard (150мг).", photo:"img/faf.png",
   flavors:[
     {name:"Cactus"}, {name:"Energy Cola"}, {name:"Orange soda"},
     {name:"Peach tea"}, {name:"Top Mint"}
   ]},
  {id:"guc", cat:"snus", brand:"GUCCI", name:"GUCCI Hard", price:470, strength:"hard", strengthLabel:"Hard 150–200mg", volume:"20шт",
   desc:"Никпэки GUCCI, крепость Hard (150–200мг).", photo:"img/guc.png",
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
     {name:"Adrenaline Rush ICE EFFECT"}, {name:"Burn Energy apple kiwi"},
     {name:"Candy Blueberry Lemon"}, {name:"Lime Mint"}
   ]},
  {id:"sn1", cat:"snus", brand:"Iceberg", line:"mini",
   name:"ICEBERG (mini)", price:470, strength:"hard", strengthLabel:"Hard 150mg", volume:"20шт",
   desc:"Никпэки Iceberg mini, крепость Hard (150мг).", photo:"img/sn1.png",
   flavors:[
     {name:"Двойная мята"}, {name:"Ментол"}, {name:"Black"}
   ]},
  {id:"sn3", cat:"snus", brand:"Odens", line:"Табак",
   name:"Odens (табак)", price:470, strength:"medium", strengthLabel:"Medium 60mg", volume:"20шт",
   desc:"Жевательный табак Odens, 20 шт, Medium (60мг).", photo:"img/sn3.png"},
  {id:"che", cat:"snus", brand:"CHEWE", line:"Жвачки",
   name:"CHEWE (жвачки)", price:400, strength:"hard", strengthLabel:"Hard 80mg", volume:"40шт",
   desc:"Никотиновые жвачки CHEWE, 40 шт, Hard (80мг).", photo:"img/che.png",
   flavors:[
     {name:"Мята"}, {name:"Гуава"}, {name:"Арбуз"}, {name:"Персик"}
   ]},
  {id:"loop", cat:"snus", brand:"LOOP x LIT", line:"ENERGY",
   name:"LOOP x LIT ENERGY", price:400, strength:"hard", strengthLabel:"Hard 75mg", volume:"60шт",
   desc:"Никпэки LOOP x LIT ENERGY, 60 шт, Hard (75мг).", photo:"img/loop.png",
   flavors:[
     {name:"Berry Coconut"}, {name:"Blueberry"}, {name:"Citrus Punch"},
     {name:"Classic"}, {name:"Cola"}, {name:"Granat"}, {name:"Malina Crush"},
     {name:"Coconut"}, {name:"Original"}, {name:"Peach"}, {name:"Strawberry Bubble Gum"}
   ]},

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

// Фото товара по выбранному цвету (если нет — показывается базовое фото).
const COLOR_PHOTOS = {
  dev1: {"Glacier Green":"img/c/dev1__glacier-green.png"},
  dev2: {"Aurora Blue":"img/c/dev2__aurora-blue.png", "Cosmic Black":"img/c/dev2__cosmic-black.png", "Pearl White":"img/c/dev2__pearl-white.png", "Silk Brown":"img/c/dev2__silk-brown.png", "Silk Gray":"img/c/dev2__silk-gray.png", "Silk Green":"img/c/dev2__silk-green.png", "Slate Black":"img/c/dev2__slate-black.png", "Abyssal Blue":"img/c/dev2__abyssal-blue.png", "Carbon Fiber Gray":"img/c/dev2__carbon-fiber-gray.png", "Dreamy Pink":"img/c/dev2__dreamy-pink.png"},
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
  dev17: {"Baby Blue":"img/c/dev17__baby-blue.png", "Dark Indigo":"img/c/dev17__dark-indigo.png", "Matte Silver":"img/c/dev17__matte-silver.png", "Spring Green":"img/c/dev17__spring-green.png", "Space Gray":"img/c/dev17__space-gray.png"},
  dev18: {"Aqua":"img/c/dev18__aqua.png", "Black":"img/c/dev18__black.png", "Blue":"img/c/dev18__blue.png", "Grey":"img/c/dev18__grey.png", "Lavender":"img/c/dev18__lavender.png", "Sakura":"img/c/dev18__sakura.png"},
  dev19: {"Fizzy Black":"img/c/dev19__fizzy-black.png", "Fizzy Purple":"img/c/dev19__fizzy-purple.png", "Fizzy Blue":"img/c/dev19__fizzy-blue.png", "Fizzy Red":"img/c/dev19__fizzy-red.png"},
  dev20: {"Ocean Blue":"img/c/dev20__ocean-blue.png", "Olive Green":"img/c/dev20__olive-green.png", "Moonlight Silver":"img/c/dev20__moonlight-silver.png", "Fizzy Peach":"img/c/dev20__fizzy-peach.png", "Metallic Purple":"img/c/dev20__metallic-purple.png", "Misty Blue":"img/c/dev20__misty-blue.png"},
  dev21: {"Blue Azure":"img/c/dev21__blue-azure.png", "Blue Nuit":"img/c/dev21__blue-nuit.png", "Camouflage Green":"img/c/dev21__camouflage-green.png", "Classical Red":"img/c/dev21__classical-red.png", "Matte Black":"img/c/dev21__matte-black.png", "Pepper White":"img/c/dev21__pepper-white.png", "Rococo Purple":"img/c/dev21__rococo-purple.png", "Space Gray":"img/c/dev21__space-gray.png"},
};

const SHOP = {
  name: "VapeOasis",
  manager: "@lzllllzll",
  bonusPercent: 2,          // % бонусами с заказа
  referBonus: 40,           // бонус за друга
  deliveryCourier: 100,     // курьер, руб (минимум, «от»)
  deliveryFreeFrom: 2000,   // бесплатно от суммы
  payments: ["СБП", "Наличные при получении"],
  deliveryTypes: ["Самовывоз", "Курьер"]
};
