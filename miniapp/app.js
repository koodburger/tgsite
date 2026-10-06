const tg = window.Telegram?.WebApp; tg?.expand?.();
const UID = tg?.initDataUnsafe?.user?.id || "guest";
const START_PARAM = tg?.initDataUnsafe?.start_param || new URLSearchParams(location.search).get("startapp") || "";

const LS_CART="vo_cart", LS_BONUS="vo_bonus", LS_HIST="vo_hist", LS_REF="vo_ref_done";
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

const $ = s=>document.querySelector(s);
const money = n=>n+"₽";
const byId = id=>PRODUCTS.find(p=>p.id===id);
const catEmoji = c=>({liquids:"🧪",pods:"🔌",disposable:"💨",cartridges:"♻️",snus:"📦"}[c]||"•");
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
function getBonus(){ return parseInt(localStorage.getItem(LS_BONUS)||"0"); }
function deliveryFee(sub){ if(deliveryType==="Самовывоз") return 0; return sub>=SHOP.deliveryFreeFrom?0:SHOP.deliveryCourier; }

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
    const shop = b.dataset.nav==="shop";
    $("#shopView").style.display = shop?"":"none"; $("#cabView").style.display = shop?"none":"";
    if(!shop) renderCab();
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
      <div class="ph ph-${p.cat}">${catEmoji(p.cat)}</div>
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
  const swatch = c=> COLOR_HEX[c] || (()=>{let h=0;for(const ch of c)h=(h*31+ch.codePointAt(0))%360;return `hsl(${h},40%,55%)`;})();
  const needFlavor = !!p.flavors?.length, needColor = !!p.colors?.length;
  const ready = (!needFlavor || fSel) && (!needColor || cSel);
  const price = priceOf(p, fSel) * det.qty;
  let html = `<h3>${catEmoji(p.cat)} ${p.name}</h3>`;
  html += `<p class="small">${p.desc||""}</p>`;
  html += `<div class="row"><span>Бренд</span><b>${p.brand}</b></div>`;
  if(p.strengthLabel!=="—") html += `<div class="row"><span>Крепость</span><b>${p.strengthLabel}</b></div>`;
  if(p.volume!=="—") html += `<div class="row"><span>Объём</span><b>${p.volume}</b></div>`;
  if(needFlavor){
    html += `<h4>Вкус${p.flavors.some(f=>f.price&&f.price!==p.price)?" (цена может отличаться)":""}</h4>`;
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
  const btnText = !ready
    ? (needFlavor && !fSel ? "Сначала выбери вкус" : "Сначала выбери цвет")
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
  const n = cartCount(), sub = cartSubtotal();
  $("#cartInfo").textContent = n?`В корзине ${n} шт • ${money(sub)}`:"Корзина пуста";
  $("#totalInfo").textContent = n?`+ бонусы ${Math.floor(sub*SHOP.bonusPercent/100)}⭐`:"";
}
$("#openCart").onclick = openSheet; $("#checkoutBtn").onclick = openSheet;
function openSheet(){ renderSheet(); $("#sheet").classList.add("open"); }
$("#sheet").onclick = e=>{ if(e.target.id==="sheet") $("#sheet").classList.remove("open"); };

function renderSheet(){
  const entries = Object.entries(cart).filter(([k])=>itemInfo(k));
  const sub = entries.reduce((s,[k,q])=>{const it=itemInfo(k);return s+it.price*q;},0);
  const fee = deliveryFee(sub), total = sub+fee;
  const earn = Math.floor(total*SHOP.bonusPercent/100);
  let html = `<h3>🛒 Корзина</h3>`;
  if(!entries.length) html += `<p>Пусто. Тапни на товар и выбери вкус/цвет 👆</p>`;
  html += entries.map(([k,q])=>{const it=itemInfo(k);return `
    <div class="row"><span>${it.label}<br><small>${money(it.price)} × ${q} = ${money(it.price*q)}</small></span>
    <span class="qty"><button data-dec="${k}">−</button><b>${q}</b><button data-inc="${k}">+</button></span></div>`;}).join("");
  html += `<h4>Доставка</h4><div class="seg">${SHOP.deliveryTypes.map(t=>`<button class="${t===deliveryType?'on':''}" data-dt="${t}">${t}${t==="Курьер"?` ${money(SHOP.deliveryCourier)}`:" • 0₽"}</button>`).join("")}</div>
  <div class="small">Курьер бесплатно от ${money(SHOP.deliveryFreeFrom)}. Сейчас: ${money(fee)}</div>
  <h4>Оплата (вручную)</h4><div class="seg">${SHOP.payments.map(t=>`<button class="${t===payment?'on':''}" data-pay="${t}">${t}</button>`).join("")}</div>
  <div class="small">Доставка и оплата товара заказанного вами будет на месте, то есть договорно в ЛС. Заказ отдается при встрече. Напиши ему: ${SHOP.manager}</div>
  <input class="fld" id="fio" placeholder="Имя + комментарий (необязательно)">
  <div class="row"><span>Товары</span><b>${money(sub)}</b></div>
  <div class="row"><span>Доставка</span><b>${money(fee)}</b></div>
  <div class="row"><span>Итого</span><b>${money(total)}</b></div>
  <div class="row"><span>⭐ Начислят бонусов</span><b class="ok">+${earn} (баланс ${getBonus()+earn})</b></div>`;
  if(entries.length) html += `<button class="btn gold" id="sendOrder" style="width:100%;margin-top:10px">✅ Оформить через менеджера</button>
  <p class="small">Нажми — заказ улетит боту, владелец получит уведомление, а тебе бот напишет про ${SHOP.manager}.</p>`;
  $("#sheetIn").innerHTML = html;
  document.querySelectorAll("[data-inc]").forEach(b=>b.onclick=()=>{cart[b.dataset.inc]++;saveCart();renderSheet();});
  document.querySelectorAll("[data-dec]").forEach(b=>b.onclick=()=>{const k=b.dataset.dec;cart[k]--;if(cart[k]<=0)delete cart[k];saveCart();renderSheet();});
  document.querySelectorAll("[data-dt]").forEach(b=>b.onclick=()=>{deliveryType=b.dataset.dt;renderSheet();});
  document.querySelectorAll("[data-pay]").forEach(b=>b.onclick=()=>{payment=b.dataset.pay;renderSheet();});
  $("#sendOrder") && ($("#sendOrder").onclick = sendOrder);
}

function sendOrder(){
  const entries = Object.entries(cart).filter(([k])=>itemInfo(k));
  if(!entries.length) return;
  const sub = entries.reduce((s,[k,q])=>{const it=itemInfo(k);return s+it.price*q;},0);
  const fee = deliveryFee(sub), total = sub+fee;
  const earn = Math.floor(total*SHOP.bonusPercent/100);
  const comment = document.querySelector("#fio")?.value || "";
  const order = {
    items: entries.map(([k,q])=>{const it=itemInfo(k);return {id:it.p.id, name:it.label, price:it.price, qty:q};}),
    subtotal: sub, deliveryFee: fee, total, deliveryType, payment, comment,
    bonusEarn: earn, refer: localStorage.getItem(LS_REF)||"",
    from: UID
  };
  const hist = JSON.parse(localStorage.getItem(LS_HIST)||"[]");
  hist.unshift({date:new Date().toLocaleString(), total, items:entries.length, deliveryType});
  localStorage.setItem(LS_HIST, JSON.stringify(hist.slice(0,30)));
  localStorage.setItem(LS_BONUS, String(getBonus()+earn));
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
  const hist = JSON.parse(localStorage.getItem(LS_HIST)||"[]");
  $("#history").innerHTML = hist.length?hist.map(h=>`<div class="row"><span>${h.date}<br><small>${h.items} поз • ${h.deliveryType}</small></span><b>${money(h.total)}</b></div>`).join(""):"<p class='small'>Пока пусто.</p>";
}

renderCats(); renderGrid(); renderBottom();

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