const tg = window.Telegram?.WebApp; tg?.expand?.();
const UID = tg?.initDataUnsafe?.user?.id || "guest";
const START_PARAM = tg?.initDataUnsafe?.start_param || new URLSearchParams(location.search).get("startapp") || "";

const LS_CART="vo_cart", LS_BONUS="vo_bonus", LS_HIST="vo_hist", LS_REF="vo_ref_done", LS_BONUS_EXP="vo_bonus_exp";
let cart = JSON.parse(localStorage.getItem(LS_CART)||"{}");
// чистка: отбрасываем ключи от старой версии каталога / битые записи
(function(){
  if(!cart) return;
  let changed=false;
  for(const k of Object.keys(cart)){
    if(!PRODUCTS.some(p=>p.id===k.split("||")[0])){ delete cart[k]; changed=true; }
  }
  if(changed) localStorage.setItem(LS_CART, JSON.stringify(cart));
})();
let deliveryType = "Самовывоз", payment = "СБП";
let activeCat = "all";
let det = null; // состояние открытой карточки товара: {pid, flavor, color, qty}
let discountPick = localStorage.getItem("vo_disc") || null; // жижа, на которую клиент применил скидку −50%

const $ = s=>document.querySelector(s);
const money = n=>n+"₽";
const IMG_VER = "20261010o";
const imgv = u => u ? (u.indexOf("?")>=0 ? u : u+"?v="+IMG_VER) : u;
const byId = id=>PRODUCTS.find(p=>p.id===id);
const catEmoji = c=>({liquids:"🧪",pods:"🔌",disposable:"💨",cartridges:"♻️",snus:"📦"}[c]||"•");
// подбор hex-цвета для кружка: русский из COLOR_HEX, английский — по ключевым словам
function enSwatch(c){
  const s = c.toLowerCase();
  const map = [
    ["black","#2A2A2E"],["white","#F2F2F6"],["pearl","#F6F0E4"],["ivory","#F4EFE4"],["opal","#F1ECEF"],
    ["crystal","#D8E8F4"],["marble","#DEDBD4"],["nacre","#E8DCF0"],["silver","#C9CCD4"],
    ["steel","#9AA3AE"],["slate","#5E6673"],["carbon","#3A3D45"],["ink","#1E2126"],
    ["gray","#8B8B8F"],["grey","#8B8B8F"],["mist","#9AA0AD"],
    ["teal","#3BA9A0"],["azure","#4FA8E0"],["cyan","#4FD0E0"],["blue","#5BB8E8"],
    ["jade","#3EA98B"],["mint","#7FD9C2"],["lime","#A6D350"],["emerald","#2F9E6E"],
    ["malachite","#1E9E6E"],["jungle","#2E7D4F"],["forest","#2C6B3E"],["green","#3E9B57"],
    ["coral","#F0745A"],["cherry","#C22E3A"],["blaze","#E8503F"],["rose","#E8636F"],
    ["crimson","#B3242E"],["red","#D64545"],
    ["pink","#F29AB8"],["plume","#E8B4C6"],["flamingo","#F08B9E"],
    ["lavender","#B79CE8"],["iris","#7C6FD6"],["violet","#8A63C9"],["grape","#7A4FA8"],
    ["prism","#B48FD6"],["purple","#9B6DD9"],
    ["canyon","#D8733A"],["retro","#E08A52"],["orange","#E8873A"],
    ["gold","#E0B038"],["lemon","#E8D350"],["lightning","#E8C84A"],["yellow","#E8C34A"],
    ["leather","#A06B3F"],["wood","#9A7B4F"],["chocolate","#6E4A2E"],["brown","#8B5E3C"],
    ["neon","#B44AE8"],["vitality","#4AC85A"],["prism","#B48FD6"]
  ];
  for(const [word,hex] of map){ if(s.includes(word)) return hex; }
  let h=0; for(const ch of s) h=(h*31+ch.codePointAt(0))%360;
  return `hsl(${h},40%,55%)`;
}
const itemKey = (p,fl,col)=>`${p.id}||${fl||""}||${col||""}`;
function parseKey(k){ const [id,fl,col]=k.split("||"); return {id,fl,col}; }
// цена товара с учётом выбранного вкуса (у части вкусов своя цена)
function priceOf(p, fl){ const f = fl&&p.flavors? p.flavors.find(x=>x.name===fl):null; return f&&f.price? f.price : p.price; }
function itemInfo(k){
  const {id,fl,col} = parseKey(k); const p = byId(id); if(!p) return null;
  const f = fl&&p.flavors? p.flavors.find(x=>x.name===fl):null;
  return {p, fl, col, price: f&&f.price? f.price : p.price,
          label:[p.name, fl, col].filter(Boolean).join(" · ")};
}
function minPrice(p){ return p.flavors? Math.min(...p.flavors.map(f=>f.price||p.price)) : p.price; }
function priceText(p){
  if(p.flavors && p.flavors.some(f=>f.price && f.price!==p.price)) return "от "+money(minPrice(p));
  return money(p.price);
}
function optHint(p){ if(p.flavors) return p.flavors.length+" вкусов"; if(p.colors) return p.colors.length+" цветов"; return ""; }

function saveCart(){ localStorage.setItem(LS_CART, JSON.stringify(cart)); renderBottom(); }
function cartCount(){ return Object.values(cart).reduce((a,b)=>a+b,0); }
function cartSubtotal(){ return Object.entries(cart).reduce((s,[k,q])=>{const it=itemInfo(k);return it?s+it.price*q:s;},0); }
// --- бонусы: живут 21 день, потом сгорают ---
const BONUS_BURN_DAYS = 21;
function bonusExp(){ const t=parseInt(localStorage.getItem(LS_BONUS_EXP)||"0"); return t>0?t:0; }
function burnBonusIfExpired(){ const exp=bonusExp(); if(exp && Date.now()>=exp){ localStorage.setItem(LS_BONUS,"0"); localStorage.removeItem(LS_BONUS_EXP); } }
function touchBonusExpiry(){ localStorage.setItem(LS_BONUS_EXP, String(Date.now()+BONUS_BURN_DAYS*86400000)); }
function bonusBurnText(){
  const b=getBonus(); if(b<=0) return "";
  const exp=bonusExp(); if(!exp) return "";
  const pad=n=>String(n).padStart(2,"0");
  const d=new Date(exp);
  const days=Math.max(0, Math.ceil((exp-Date.now())/86400000));
  return `🔥 сгорят ${pad(d.getDate())}.${pad(d.getMonth()+1)}.${d.getFullYear()} (через ${days} дн.)`;
}
function getBonus(){ burnBonusIfExpired(); const v=parseInt(localStorage.getItem(LS_BONUS)||"0"); if(v>0 && !bonusExp()) touchBonusExpiry(); return v; }
function deliveryFee(sub){ if(deliveryType==="Самовывоз") return 0; return sub>=SHOP.deliveryFreeFrom?0:SHOP.deliveryCourier; }
// Единый расчёт корзины: скидка на жижу −50% при наличии пода (вейпа)
function cartTotals(){
  const entries = Object.entries(cart).filter(([k])=>itemInfo(k));
  const sub = entries.reduce((s,[k,q])=>{const it=itemInfo(k);return s+it.price*q;},0);
  const hasPod = entries.some(([k])=>{const it=itemInfo(k);return it&&it.p.cat==="pods";});
  const hasLiquid = entries.some(([k])=>{const it=itemInfo(k);return it&&it.p.cat==="liquids";});
  // скидка −50% на ОДНУ жижу, которую выбрал клиент (только при наличии пода)
  let discountKey = null, discount = 0;
  if(hasPod && hasLiquid){
    const liquidKeys = entries.filter(([k])=>{const it=itemInfo(k);return it&&it.p.cat==="liquids";}).map(([k])=>k);
    if(!discountPick || !liquidKeys.includes(discountPick)) discountPick = liquidKeys[0];
    discountKey = discountPick;
    discount = Math.round(itemInfo(discountKey).price*0.5);
  }
  const goods = sub - discount;
  const fee = deliveryFee(goods), total = goods + fee;
  const earn = Math.floor(total*SHOP.bonusPercent/100);
  return {entries, sub, hasPod, hasLiquid, discount, discountKey, goods, fee, total, earn};
}

// --- рефералка (каркас) ---
(function(){
  if(START_PARAM?.startsWith("ref_") && !localStorage.getItem(LS_REF)){
    const inviter = START_PARAM.slice(4);
    if(String(inviter)!==String(UID)){ localStorage.setItem(LS_REF, inviter); }
  }
  $("#refBonus").textContent = SHOP.referBonus;
  const link = `https://t.me/${"VapeOasis_bot"}?startapp=ref_${UID}`;
  $("#refLink").textContent = "Твоя ссылка: "+link;
  $("#refBtn").onclick = ()=>{
    const txt = `Заглядывай в VapeOasis 🌿 ${link}`;
    if(navigator.share){ navigator.share({text:txt}).catch(()=>{}); }
    else { navigator.clipboard?.writeText(txt); alert("Ссылка скопирована!"); }
  };
})();

// --- каталог ---
function renderCats(){
  $("#cats").innerHTML = CATS.map(c=>`<button class="tab ${c.id===activeCat?'active':''}" data-cat="${c.id}">${c.name}</button>`).join("");
  document.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{activeCat=b.dataset.cat;renderCats();renderGrid();});
  document.querySelectorAll("[data-nav]").forEach(b=>b.onclick=()=>{
    document.querySelectorAll("[data-nav]").forEach(x=>x.classList.remove("active")); b.classList.add("active");
    const v = b.dataset.nav;
    $("#shopView").style.display = v==="shop"?"":"none";
    $("#cabView").style.display = v==="cab"?"":"none";
    const bv = $("#bonusView"); if(bv) bv.style.display = v==="bonus"?"":"none";
    if(v==="cab") renderCab();
    if(v==="bonus") renderBonus();
  });
}
function renderGrid(){
  const st = $("#strength").value, sort = $("#sort").value;
  let list = PRODUCTS.filter(p=>(activeCat==="all"||p.cat===activeCat)&&(st==="all"||p.strength===st));
  if(sort==="cheap") list=[...list].sort((a,b)=>a.price-b.price);
  if(sort==="exp") list=[...list].sort((a,b)=>b.price-a.price);
  $("#count").textContent = `Позиций: ${list.length} • ${SHOP.name} • оплата вручную через ${SHOP.manager}`;
  $("#grid").innerHTML = list.map(p=>`
    <div class="card" data-detail="${p.id}" role="button" tabindex="0">
      ${p.photo?`<img class="ph" src="${imgv(p.photo)}" alt="${p.name}" loading="lazy">`:`<div class="ph ph-${p.cat}">${catEmoji(p.cat)}</div>`}
      <div class="b">
        <div class="brand">${p.brand}${p.line?" • "+p.line:""}</div>
        <div class="name">${p.name}</div>
        <div class="meta">${p.strengthLabel!=="—"?"Крепость: "+p.strengthLabel+"<br>":""}${p.volume!=="—"?"Объём: "+p.volume:""}</div>
        <div class="price">${priceText(p)}</div>
        <div class="hint">${optHint(p)}</div>
        <button class="add">Выбрать</button>
      </div>
    </div>`).join("");
  document.querySelectorAll("[data-detail]").forEach(c=>{
    c.addEventListener("click", ()=>openDetail(c.dataset.detail));
    c.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); openDetail(c.dataset.detail); } });
  });
}
$("#strength").onchange = renderGrid; $("#sort").onchange = renderGrid;

// --- карточка товара: выбор вкуса/цвета перед корзиной ---
function openDetail(id){
  const p = byId(id); if(!p) return;
  det = {pid:id, flavor:null, color:null, qty:1};
  renderDetail();
  $("#sheet").classList.add("open");
}
function renderDetail(){
  const p = byId(det.pid); if(!p) return;
  const fSel = det.flavor, cSel = det.color;
  const swatch = c=> COLOR_HEX[c] || enSwatch(c);
  const needFlavor = !!p.flavors?.length, needColor = !!p.colors?.length;
  const ready = (!needFlavor || fSel) && (!needColor || cSel);
  const price = priceOf(p, fSel) * det.qty;
  const cp = (typeof COLOR_PHOTOS!=="undefined" && COLOR_PHOTOS[p.id]) || {};
  const photo = (cSel && cp[cSel]) || p.photo;
  let html = photo?`<img class="det-ph" src="${imgv(photo)}" alt="${p.name}">`:"";
  html += `<h3>${catEmoji(p.cat)} ${p.name}</h3>`;
  html += `<p class="small">${p.desc||""}</p>`;
  html += `<div class="row"><span>Бренд</span><b>${p.brand}</b></div>`;
  if(p.strengthLabel!=="—") html += `<div class="row"><span>Крепость</span><b>${p.strengthLabel}</b></div>`;
  if(p.volume!=="—") html += `<div class="row"><span>Объём</span><b>${p.volume}</b></div>`;
  if(needFlavor){
    html += `<h4>${p.vlabel||"Вкус"}${p.flavors.some(f=>f.price&&f.price!==p.price)?" (цена может отличаться)":""}</h4>`;
    html += `<div class="chips">${p.flavors.map(f=>
      `<button class="chip ${f.name===fSel?"on":""}" data-flavor="${f.name}">${f.name}${f.desc?'<br><small class="tiny">'+f.desc+'</small>':''}${f.price?` <small class="tiny">${money(f.price)}</small>`:""}</button>`
    ).join("")}</div>`;
  }
  if(needColor){
    html += `<h4>Цвет корпуса</h4>`;
    html += `<div class="chips">${p.colors.map(c=>
      `<button class="chip color ${c===cSel?"on":""}" data-color="${c}" style="--swatch:${swatch(c)}"><i class="sw"></i>${c}</button>`
    ).join("")}</div>`;
  }
  html += `<div class="row"><span>Количество</span><span class="qty"><button data-dq>−</button><b>${det.qty}</b><button data-iq>+</button></span></div>`;
  html += `<div class="row"><span>Итого</span><b id="detPrice">${money(price)}</b></div>`;
  if(p.cat==="pods") html += `<div class="promo">🎁 Возьми жижу к этому поду — на неё скидка <b>−50%</b></div>`;
  if(p.cat==="liquids") html += `<div class="promo">🎁 Добавь под в корзину — на эту жижу будет скидка <b>−50%</b></div>`;
  const btnText = !ready
    ? (needFlavor && !fSel ? "Сначала выбери "+(p.vlabel||"вкус").toLowerCase() : "Сначала выбери цвет")
    : `В корзину • ${money(price)}`;
  html += `<button class="btn gold" id="detAdd" style="width:100%;margin-top:10px" ${ready?"":"disabled"}>${btnText}</button>`;
  $("#sheetIn").innerHTML = html;
  document.querySelectorAll("[data-flavor]").forEach(b=>b.onclick=()=>{det.flavor=b.dataset.flavor;renderDetail();});
  document.querySelectorAll("[data-color]").forEach(b=>b.onclick=()=>{det.color=b.dataset.color;renderDetail();});
  document.querySelectorAll("[data-iq]").forEach(b=>b.onclick=()=>{det.qty++;renderDetail();});
  document.querySelectorAll("[data-dq]").forEach(b=>b.onclick=()=>{if(det.qty>1)det.qty--;renderDetail();});
  $("#detAdd")?.addEventListener("click", ()=>{
    const key = itemKey(p, det.flavor, det.color);
    cart[key] = (cart[key]||0) + det.qty;
    saveCart(); renderGrid();
    $("#sheet").classList.remove("open");
    tg?.HapticFeedback?.impactOccurred?.("medium");
    openSheet(); // сразу показываем корзину
  });
}

// --- низ ---
function renderBottom(){
  const {entries, sub, discount, total} = cartTotals();
  const n = entries.length;
  const count = Object.values(cart).reduce((a,b)=>a+b,0);
  $("#cartInfo").textContent = count?`В корзине ${count} шт • ${money(total)}`:"Корзина пуста";
  $("#totalInfo").textContent = count?(discount?`🎁 −${money(discount)} • итого ${money(total)}`:`+ бонусы ${Math.floor(total*SHOP.bonusPercent/100)}⭐`):"";
}
$("#openCart").onclick = openSheet; $("#checkoutBtn").onclick = openSheet;
function openSheet(){ renderSheet(); $("#sheet").classList.add("open"); }
$("#sheet").onclick = e=>{ if(e.target.id==="sheet") $("#sheet").classList.remove("open"); };

function renderSheet(){
  const {entries, sub, hasPod, hasLiquid, discount, discountKey, fee, total, earn} = cartTotals();
  let html = `<h3>🛒 Корзина</h3>`;
  if(!entries.length) html += `<p>Пусто. Тапни на товар и выбери вкус/цвет 👆</p>`;
  html += entries.map(([k,q])=>{const it=itemInfo(k);const dis=(k===discountKey);return `
    <div class="row"><span>${it.label}${dis?` <small class="ok">−50% на 1 шт</small>`:""}<br><small>${money(it.price)} × ${q} = ${money(it.price*q)}</small></span>
    <span class="qty"><button data-dec="${k}">−</button><b>${q}</b><button data-inc="${k}">+</button></span></div>`;}).join("");
  if(hasPod && hasLiquid){
    html += `<h4>🎁 Жижа со скидкой −50% (выбери одну)</h4>`;
    html += `<div class="chips">${entries.filter(([k])=>{const it=itemInfo(k);return it&&it.p.cat==="liquids";}).map(([k])=>{const it=itemInfo(k);return `<button class="chip ${k===discountKey?'on':''}" data-disc="${k}">${it.label}</button>`;}).join("")}</div>`;
    html += `<div class="promo on">Скидка на выбранную жижу <b>−50%</b>: <b>−${money(discount)}</b></div>`;
  }
  else if(hasPod) html += `<div class="promo">🎁 Добавь жижу — на неё будет скидка <b>−50%</b></div>`;
  else if(hasLiquid) html += `<div class="promo">🎁 Добавь под (вейп) — на жижу будет скидка <b>−50%</b></div>`;
  html += `<h4>Доставка</h4><div class="seg">${SHOP.deliveryTypes.map(t=>`<button class="${t===deliveryType?'on':''}" data-dt="${t}">${t}${t==="Курьер"?` ${money(SHOP.deliveryCourier)}`:" • 0₽"}</button>`).join("")}</div>
  <div class="small">Курьер бесплатно от ${money(SHOP.deliveryFreeFrom)}. Сейчас: ${money(fee)}</div>
  <h4>Оплата (вручную)</h4><div class="seg">${SHOP.payments.map(t=>`<button class="${t===payment?'on':''}" data-pay="${t}">${t}</button>`).join("")}</div>
  <div class="small">Доставка и оплата товара заказанного вами будет на месте, то есть договорно в ЛС. Заказ отдается при встрече. Напиши ему: ${SHOP.manager}</div>
  <input class="fld" id="fio" placeholder="Имя + комментарий (необязательно)">
  <div class="row"><span>Товары</span><b>${money(sub)}</b></div>
  ${discount?`<div class="row"><span>🎁 Скидка на жижу −50%</span><b class="ok">−${money(discount)}</b></div>`:""}
  <div class="row"><span>Доставка</span><b>${money(fee)}</b></div>
  <div class="row"><span>Итого</span><b>${money(total)}</b></div>
  <div class="row"><span>⭐ Начислят бонусов</span><b class="ok">+${earn} (баланс ${getBonus()+earn})</b></div>`;
  if(entries.length) html += `<button class="btn gold" id="sendOrder" style="width:100%;margin-top:10px">✅ Оформить через менеджера</button>
  <p class="small">Нажми — заказ улетит боту, владелец получит уведомление, а тебе бот напишет про ${SHOP.manager}.</p>`;
  $("#sheetIn").innerHTML = html;
  document.querySelectorAll("[data-inc]").forEach(b=>b.onclick=()=>{cart[b.dataset.inc]++;saveCart();renderSheet();});
  document.querySelectorAll("[data-dec]").forEach(b=>b.onclick=()=>{const k=b.dataset.dec;cart[k]--;if(cart[k]<=0)delete cart[k];saveCart();renderSheet();});
  document.querySelectorAll("[data-disc]").forEach(b=>b.onclick=()=>{discountPick=b.dataset.disc;localStorage.setItem("vo_disc",discountPick);renderSheet();});
  document.querySelectorAll("[data-dt]").forEach(b=>b.onclick=()=>{deliveryType=b.dataset.dt;renderSheet();});
  document.querySelectorAll("[data-pay]").forEach(b=>b.onclick=()=>{payment=b.dataset.pay;renderSheet();});
  $("#sendOrder") && ($("#sendOrder").onclick = sendOrder);
}

function sendOrder(){
  const {entries, sub, discount, fee, total, earn} = cartTotals();
  if(!entries.length) return;
  const comment = document.querySelector("#fio")?.value || "";
  const order = {
    items: entries.map(([k,q])=>{const it=itemInfo(k);return {id:it.p.id, name:it.p.name, brand:it.p.brand, cat:it.p.cat, flavor:it.fl||"", color:it.col||"", label:it.label, price:it.price, qty:q};}),
    subtotal: sub, discount, deliveryFee: fee, total, deliveryType, payment, comment,
    bonusEarn: earn, refer: localStorage.getItem(LS_REF)||"",
    from: UID
  };
  const hist = JSON.parse(localStorage.getItem(LS_HIST)||"[]");
  hist.unshift({date:new Date().toLocaleString(), total, items:entries.length, deliveryType});
  localStorage.setItem(LS_HIST, JSON.stringify(hist.slice(0,30)));
  localStorage.setItem(LS_BONUS, String(getBonus()+earn));
  if(earn>0) touchBonusExpiry();
  Object.keys(cart).forEach(k=>delete cart[k]); saveCart(); renderGrid();
  $("#sheet").classList.remove("open"); renderBottom();

  if(tg?.sendData){
    tg.sendData(JSON.stringify(order));
  } else {
    const txt = `Заказ VapeOasis: ${order.items.map(i=>`${i.name} x${i.qty}`).join("; ")} | Итого ${total}₽ (${deliveryType}, ${payment})`;
    $("#sheetIn").innerHTML = `<h3>✅ Заказ собран!</h3><p>Ты открыл мини-апп в браузере, поэтому отправь это менеджеру ${SHOP.manager}:</p><pre>${txt}</pre><p>Доставка и оплата — на месте, договорно в ЛС. Заказ отдается при встрече.</p>`;
    $("#sheet").classList.add("open");
  }
}

function renderCab(){

  const u = tg?.initDataUnsafe?.user;
  if(u){
    const name = [u.first_name, u.last_name].filter(Boolean).join(" ") || "Без имени";
    $("#profName").textContent = name;
    $("#profSub").textContent = (u.username ? "@"+u.username+" • " : "") + "ID " + u.id;
    if(u.photo_url){ $("#profAva").innerHTML = `<img src="${u.photo_url}" alt="">`; }
  } else {
    $("#profName").textContent = "Гость (открыто в браузере)";
    $("#profSub").textContent = "Открой через Telegram — увидишь имя и аватар";
  }
  $("#myBonus").textContent = getBonus();
  const be = $("#myBonusExp"); if(be) be.textContent = bonusBurnText();
  const hist = JSON.parse(localStorage.getItem(LS_HIST)||"[]");
  $("#history").innerHTML = hist.length?hist.map(h=>`<div class="row"><span>${h.date}<br><small>${h.items} поз • ${h.deliveryType}</small></span><b>${money(h.total)}</b></div>`).join(""):"<p class='small'>Пока пусто.</p>";
}

function renderBonus(){
  const bonus = getBonus();
  const bcount = $("#bonusCount");
  if(bcount) bcount.textContent = `Баланс бонусов: ${bonus} ⭐` + (bonus>0 && bonusBurnText() ? ` • ${bonusBurnText()}` : "");
  const bg = $("#bonusGrid");
  if(!bg) return;
  const list = PRODUCTS.slice().sort((a,b)=> (a.price-b.price));
  bg.innerHTML = list.map(p=>{
    const can = bonus >= p.price;
    return `<div class="card ${can?"":"disabled"}" data-bonus="${p.id}" role="button" tabindex="${can?0:-1}">
      ${p.photo?`<img class="ph" src="${imgv(p.photo)}" alt="${p.name}" loading="lazy">`:`<div class="ph ph-${p.cat}">${catEmoji(p.cat)}</div>`}
      <div class="b">
        <div class="brand">${p.brand}${p.line?" • "+p.line:""}</div>
        <div class="name">${p.name}</div>
        <div class="meta">${p.strengthLabel!=="—"?"Крепость: "+p.strengthLabel+"<br>":""}${p.volume!=="—"?"Объём: "+p.volume:""}</div>
        <div class="price">Цена: ${money(p.price)} • ${p.price} ⭐</div>
        <div class="hint">${optHint(p)} ${can?"":" • не хватает бонусов"}</div>
        <button class="add" ${can?"":"disabled"}>${can?"Купить за бонусы":"Недостаточно"}</button>
      </div>
    </div>`;
  }).join("");
  document.querySelectorAll("[data-bonus]").forEach(c=>{
    c.addEventListener("click", ()=>openBonusDetail(c.dataset.bonus));
    c.addEventListener("keydown", e=>{ if((e.key==="Enter"||e.key===" ") && !c.classList.contains("disabled")){ e.preventDefault(); openBonusDetail(c.dataset.bonus); }});
  });
}

function openBonusDetail(id){
  const p = byId(id); if(!p) return;
  const b = getBonus();
  const can = b >= p.price;
  const needFlavor = !!p.flavors?.length, needColor = !!p.colors?.length;
  const cp = (typeof COLOR_PHOTOS!=="undefined" && COLOR_PHOTOS[p.id]) || {};
  let fSel = null, cSel = null;
  function renderBD(){
    const ready = (!needFlavor || fSel) && (!needColor || cSel);
    const photo = (cSel && cp[cSel]) || p.photo;
    let html = `<h3>⭐ Купить за бонусы</h3>`;
    if(photo) html += `<img class="det-ph" src="${imgv(photo)}" alt="${p.name}">`;
    html += `<h3>${catEmoji(p.cat)} ${p.name}</h3>`;
    html += `<p class="small">${p.desc||""}</p>`;
    html += `<div class="row"><span>Цена</span><b>${money(p.price)} • ${p.price} ⭐</b></div>`;
    html += `<div class="row"><span>Твой баланс</span><b>${b} ⭐</b></div>`;
    if(needFlavor){
      html += `<h4>${p.vlabel||"Вкус"}</h4>`;
      html += `<div class="chips">${p.flavors.map(f=>
        `<button class="chip ${f.name===fSel?"on":""}" data-bf="${f.name}">${f.name}</button>`).join("")}</div>`;
    }
    if(needColor){
      html += `<h4>Цвет корпуса</h4>`;
      html += `<div class="chips">${p.colors.map(c=>{
        const sw = COLOR_HEX[c] || enSwatch(c);
        return `<button class="chip color ${c===cSel?"on":""}" data-bc="${c}" style="--swatch:${sw}"><i class="sw"></i>${c}</button>`;
      }).join("")}</div>`;
    }
    html += `<button class="btn gold" id="bpBuy" style="width:100%;margin-top:10px" ${(can&&ready)?"":"disabled"}>${!ready?(needFlavor&&!fSel?"Сначала выбери вкус":"Сначала выбери цвет"):(can?`Купить за ${p.price} ⭐`:"Не хватает бонусов")}</button>`;
    html += `<button class="btn ghost" id="bpClose" style="width:100%;margin-top:8px">Назад</button>`;
    $("#sheetIn").innerHTML = html;
    document.querySelectorAll("[data-bf]").forEach(x=>x.onclick=()=>{fSel=x.dataset.bf;renderBD();});
    document.querySelectorAll("[data-bc]").forEach(x=>x.onclick=()=>{cSel=x.dataset.bc;renderBD();});
    $("#bpClose")?.addEventListener("click", ()=>{$("#sheet").classList.remove("open");});
    $("#bpBuy")?.addEventListener("click", ()=>{
      if(!can || !ready) return;
      const order = {
        type:"bonus",
        items:[{id:p.id,name:p.name,brand:p.brand,cat:p.cat,flavor:fSel||"",color:cSel||"",label:[p.name,fSel,cSel].filter(Boolean).join(" · "),price:p.price,qty:1}],
        subtotal:p.price, discount:0, deliveryFee:0, total:p.price, bonusPay:p.price,
        deliveryType, payment, comment:"Покупка за бонусы", bonusEarn:0,
        refer: localStorage.getItem(LS_REF)||"", from:UID
      };
      const hist = JSON.parse(localStorage.getItem(LS_HIST)||"[]");
      hist.unshift({date:new Date().toLocaleString(), total:p.price, items:1, deliveryType, type:"bonus"});
      localStorage.setItem(LS_HIST, JSON.stringify(hist.slice(0,30)));
      localStorage.setItem(LS_BONUS, String(Math.max(0,b-p.price)));
      if(getBonus()<=0) localStorage.removeItem(LS_BONUS_EXP); else if(!bonusExp()) touchBonusExpiry();
      $("#sheet").classList.remove("open");
      if(tg?.sendData){ tg.sendData(JSON.stringify(order)); }
      else { $("#sheetIn").innerHTML = `<h3>✅ Заказ за бонусы собран!</h3><pre>${JSON.stringify(order,null,2)}</pre>`; $("#sheet").classList.add("open"); }
      renderBonus(); renderCab(); renderBottom();
    });
  }
  renderBD();
  $("#sheet").classList.add("open");
}

renderCats(); renderGrid(); renderBottom(); renderBonus();

// --- темы + плавные анимации ---
const THEMES = {
  oasis:   {deco:"<b>🏝️ Оазис</b> — фирменный стиль VapeOasis"},
  glacier: {deco:"<b class='shimmer'>❄️ Ледник</b> — свежо и красиво 🏔️✨"},
  flame:   {deco:"<b>🔥 Пламя</b> — ярко и дерзко"},
  forest:  {deco:"<b>🌲 Лес</b> — спокойно и зелено"},
  neon:    {deco:"<b>🌌 Нуар</b> — фото на фоне и неоновый фиолет 💜"}
};
const FX = {oasis:[], glacier:["❄","❅","❆","💎","✨"], flame:["🔥","✨","💥"], forest:["🍃","🌿","💧"], neon:["✨","⚡","💜","🌟"]};
function applyTheme(name, save=true){
  if(!THEMES[name]) name="oasis";
  document.documentElement.dataset.theme = name==="oasis"?"":name;
  if(name==="oasis") document.documentElement.removeAttribute("data-theme");
  if(save) localStorage.setItem("vo_theme", name);
  document.querySelectorAll(".theme-btn").forEach(b=>b.classList.toggle("on", b.dataset.theme===name));
  $("#themeDeco").innerHTML = THEMES[name].deco;
  spawnFx(name);
  tg?.HapticFeedback?.impactOccurred?.("light");
}
function spawnFx(name){
  const box = $("#fx"); box.innerHTML = "";
  const parts = FX[name]||[];
  if(!parts.length) return;
  for(let i=0;i<22;i++){
    const s = document.createElement("span");
    s.textContent = parts[i%parts.length];
    s.style.left = Math.random()*100+"vw";
    s.style.fontSize = (12+Math.random()*18)+"px";
    s.style.animationDuration = (5+Math.random()*7)+"s";
    s.style.animationDelay = (-Math.random()*8)+"s";
    box.appendChild(s);
  }
}
document.querySelectorAll(".theme-btn").forEach(b=>b.onclick=()=>applyTheme(b.dataset.theme));
applyTheme(localStorage.getItem("vo_theme")||"neon", false);