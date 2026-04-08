/* ═══════════════ DATA ═══════════════ */
const products = [
  {
    id: 1,
    name: "Aurum 320",
    category: "Трактор колісний",
    tag: "Premium entry",
    power: "32 к.с.",
    drive: "4×4",
    weight: "1 850 кг",
    engine: "Дизельний, 3-цил.",
    gearbox: "8+2 передачі",
    hitch: "Категорія I",
    fuel: "25 л/год",
    desc: "Компактний та надійний трактор для малих і середніх господарств. Ідеальний для обробітку городів, садів та виконання комунальних робіт. Економічний двигун і зручне управління роблять Aurum 320 незамінним помічником.",
    color: "#b5e02a",
    inStock: true,
  },
  {
    id: 2,
    name: "Vector 605",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "60 к.с.",
    drive: "4×4",
    weight: "2 960 кг",
    engine: "Дизельний, 4-цил.",
    gearbox: "12+4 передачі",
    hitch: "Категорія II",
    fuel: "6.2 л/год",
    desc: "Універсальний трактор середнього класу для польових робіт. Потужний 4-циліндровий двигун дозволяє ефективно виконувати оранку, культивацію та транспортні роботи. Висока надійність і економічність.",
    color: "#7fcc1a",
    inStock: true,
  },
  {
    id: 3,
    name: "Dominant 880",
    category: "Трактор колісний",
    tag: "Best choice",
    power: "88 к.с.",
    drive: "4×4",
    weight: "4 100 кг",
    engine: "Дизельний, 4-цил. турбо",
    gearbox: "16+8 передачі",
    hitch: "Категорія II/III",
    fuel: "8.5 л/год",
    desc: "Флагман середнього класу з турбодвигуном. Dominant 880 поєднує потужність та маневреність, роблячи його ідеальним для різноманітних сільськогосподарських операцій — від оранки до збирання врожаю.",
    color: "#b5e02a",
    inStock: true,
  },
  {
    id: 4,
    name: "Imperium 1400",
    category: "Трактор колісний",
    tag: "Flagship",
    power: "140 к.с.",
    drive: "4×4",
    weight: "6 800 кг",
    engine: "Дизельний, 6-цил. турбо",
    gearbox: "24+12 передачі",
    hitch: "Категорія III/IV",
    fuel: "12.8 л/год",
    desc: "Преміальний 6-циліндровий трактор для великих агропідприємств. Максимальна потужність, комфортна кабіна з кондиціонером та кліматконтролем, електронне управління всіма системами. Техніка вищого класу.",
    color: "#cff04a",
    inStock: false,
  },
  {
    id: 5,
    name: "Terra 550",
    category: "Трактор колісний",
    tag: "Новинка",
    power: "55 к.с.",
    drive: "4×4",
    weight: "2 700 кг",
    engine: "Дизельний, 4-цил.",
    gearbox: "12+12 передачі",
    hitch: "Категорія I/II",
    fuel: "5.8 л/год",
    desc: "Нова модель з покращеною гідравлікою та зручним оглядом оператора. Terra 550 — це сучасні технології управління та висока продуктивність для фермерських господарств і агробізнесу.",
    color: "#8ab818",
    inStock: true,
  },
  {
    id: 6,
    name: "Maximus 2200",
    category: "Трактор колісний",
    tag: "Топ потужності",
    power: "220 к.с.",
    drive: "4×4",
    weight: "9 500 кг",
    engine: "Дизельний, 6-цил. турбо Common Rail",
    gearbox: "36+12 powershift",
    hitch: "Категорія IV",
    fuel: "19 л/год",
    desc: "Надпотужний трактор для великих аграрних підприємств та агрохолдингів. Система Powershift без розриву потужності, GPS-керування, повний моніторинг усіх систем в режимі реального часу. Вершина агроінженерії.",
    color: "#cff04a",
    inStock: false,
  }
];

/* ═══════════════ SVG PLACEHOLDER ═══════════════ */
function tractorSVG(c) {
  return `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:80%;opacity:0.85">
    <rect x="75" y="50" width="150" height="65" rx="10" fill="#1a2210" stroke="${c}44" stroke-width="1.5"/>
    <rect x="148" y="30" width="65" height="48" rx="7" fill="#141b0b" stroke="${c}55" stroke-width="1.5"/>
    <rect x="155" y="38" width="51" height="32" rx="4" fill="${c}11" stroke="${c}22" stroke-width="1"/>
    <rect x="75" y="56" width="75" height="44" rx="7" fill="#101508" stroke="${c}22" stroke-width="1"/>
    <rect x="100" y="30" width="6" height="22" rx="3" fill="${c}55"/>
    <circle cx="100" cy="122" r="26" fill="#0e1208" stroke="${c}70" stroke-width="2"/>
    <circle cx="100" cy="122" r="16" fill="${c}09" stroke="${c}30" stroke-width="1"/>
    <circle cx="100" cy="122" r="5" fill="${c}66"/>
    <circle cx="200" cy="122" r="18" fill="#0e1208" stroke="${c}55" stroke-width="1.5"/>
    <circle cx="200" cy="122" r="11" fill="${c}07" stroke="${c}20" stroke-width="1"/>
    <circle cx="200" cy="122" r="4" fill="${c}55"/>
    <rect x="75" y="65" width="10" height="7" rx="2.5" fill="${c}99"/>
    <rect x="75" y="73" width="150" height="3" rx="1.5" fill="${c}25"/>
  </svg>`;
}

/* ═══════════════ RENDER CARDS ═══════════════ */
function renderProducts() {
  const container = document.getElementById('productsContainer');
  const html = products.map((p, i) => `
    <div class="col-sm-6 col-lg-4">
      <div class="product-card" onclick="openModal(${p.id})" style="animation-delay:${i * 0.1}s">
        <div class="card-img-wrap">
          <div class="card-img-placeholder">${tractorSVG(p.color)}</div>
          <div class="card-tag">${p.tag}</div>
          <div class="card-wishlist" onclick="event.stopPropagation()">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </div>
        </div>
        <div class="card-body-wrap">
          <div class="card-name">${p.name}</div>
          <div class="card-chips">
            <span class="chip">${p.power}</span>
            <span class="chip">${p.drive}</span>
            ${p.inStock ? '<span class="chip" style="color:var(--c-lime);border-color:rgba(181,224,42,0.3)">В наявності</span>' : '<span class="chip">Під замовлення</span>'}
          </div>
          <div class="card-price">Уточнити по телефону</div>
          <div class="card-actions">
            <button class="btn-card-primary" onclick="event.stopPropagation();openModal(${p.id})">Запросити</button>
            <button class="btn-card-outline" onclick="event.stopPropagation();openModal(${p.id})">Детальніше</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  container.innerHTML = html;
}

/* ═══════════════ MODAL ═══════════════ */
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('m-name').textContent = p.name;
  document.getElementById('m-cat').textContent = p.category + ' · ' + p.tag;
  document.getElementById('m-img').innerHTML = tractorSVG(p.color);
  document.getElementById('m-desc').textContent = p.desc;
  const specs = [
    {l:'Потужність', v: p.power},
    {l:'Привід', v: p.drive},
    {l:'Маса', v: p.weight},
    {l:'Двигун', v: p.engine},
    {l:'Коробка', v: p.gearbox},
    {l:'Зчіпка', v: p.hitch},
    {l:'Витрата', v: p.fuel},
    {l:'Наявність', v: p.inStock ? 'В наявності' : 'Під замовлення'},
  ];
  document.getElementById('m-specs').innerHTML = specs.map(s => `
    <div class="spec-box">
      <div class="spec-box-label">${s.l}</div>
      <div class="spec-box-val" style="${s.l==='Наявність'&&p.inStock?'color:var(--c-lime)':''}">${s.v}</div>
    </div>
  `).join('');
  document.getElementById('productModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if (e.target.id === 'productModal') closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });

/* ═══════════════ SCROLL REVEAL ═══════════════ */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

/* ═══════════════ INIT ═══════════════ */
renderProducts();

/* Re-observe cards after render */
setTimeout(() => {
  document.querySelectorAll('.product-card').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.55s ease ${parseFloat(el.style.animationDelay||0)*1000+200}ms, transform 0.55s ease ${parseFloat(el.style.animationDelay||0)*1000+200}ms`;
    obs.observe(el);
  });
}, 100);