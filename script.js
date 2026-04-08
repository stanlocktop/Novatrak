const products = [
  {
    id: 1,
    name: "EUROFENG 554DХLС",
    category: "Трактор колісний",
    tag: "Новинка",
    power: "50 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 4-цил.",
    gearbox: "8+2 передачі",
    hitch: "Категорія II",
    fuel: "—",
    desc: "Колісний трактор EUROFENG 554DХLС з 4-циліндровим 4-тактним дизельним двигуном потужністю 50 к.с. Колісна формула 4×4, блокування заднього диференціалу, шестерний редуктор. Підходить для широкого спектру польових і комунальних робіт.",
    color: "#138503ff",
    inStock: true,
    image: "img/EUROFENG 554DХLС.png",
  },
  {
    id: 2,
    name: "EUROFENG 554LUX",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "50 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 4-цил.",
    gearbox: "8+2 передачі",
    hitch: "Категорія II",
    fuel: "—",
    desc: "Трактор EUROFENG 554LUX у комплектації LUX — 4-циліндровий дизель 50 к.с., повний привід 4×4, блокування заднього диференціалу. Електричний стартер, водяне охолодження, шестерний редуктор.",
    color: "#138503ff",
    inStock: true,
    image: "img/EUROFENG 554LUX.png",
  },
  {
    id: 3,
    name: "EUROFENG 554DXL",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "50 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 4-цил.",
    gearbox: "8+2 передачі",
    hitch: "Категорія II",
    fuel: "—",
    desc: "EUROFENG 554DXL — надійний колісний трактор з 4-циліндровим 4-тактним дизелем 50 к.с., повним приводом 4×4 та шестерним редуктором. Поставляється в комплекті з ЗІП для збирання та обслуговування.",
    color: "#138503ff",
    inStock: true,
    image: "img/EUROFENG 554DXL.png",
  },
  {
    id: 4,
    name: "TERRA FORCE 254B",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "24 к.с.",
    drive: "4×2",
    weight: "—",
    engine: "Дизельний, 1-цил.",
    gearbox: "8+2 передачі",
    hitch: "Категорія I",
    fuel: "—",
    desc: "Міні-трактор TERRA FORCE 254B з одноциліндровим дизелем 24 к.с. і кліноременевою передачею. Колісна формула 4×2, ручний та електричний стартер. Компактна і маневрена техніка для присадибних і фермерських господарств.",
    color: "#138503ff",
    inStock: true,
    image: "img/TERRA FORCE 254B.png",
  },
  {
    id: 5,
    name: "TERRA FORCE 255Х",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "24 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 3-цил.",
    gearbox: "6+2 передачі",
    hitch: "Категорія I",
    fuel: "—",
    desc: "TERRA FORCE 255X — компактний трактор 4×4 з 3-циліндровим дизелем 24 к.с. і прямою передачею. Блокування заднього диференціалу, водяне охолодження, шестерний редуктор. Оптимальний вибір для малих господарств.",
    color: "#138503ff",
    inStock: true,
    image: "img/TERRA FORCE 255Х.png",
  },
  {
    id: 6,
    name: "TERRA FORCE 255ХL",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "24 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 3-цил.",
    gearbox: "8+2 передачі",
    hitch: "Категорія I",
    fuel: "—",
    desc: "TERRA FORCE 255XL — версія з подовженою колісною базою та ширшими шинами (11.20-24.0). 3-циліндровий дизель 24 к.с., повний привід 4×4, 8 передач вперед. Підвищена стійкість і прохідність на будь-яких ґрунтах.",
    color: "#138503ff",
    inStock: true,
    image: "img/TERRA FORCE 255ХL.png",
  },
  {
    id: 7,
    name: "TERRA FORCE 3254HX",
    category: "Трактор колісний",
    tag: "Новинка",
    power: "24 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 3-цил.",
    gearbox: "8+2 передачі",
    hitch: "Категорія I",
    fuel: "—",
    desc: "TERRA FORCE 3254HX 2025 року випуску — 3-циліндровий дизель 24 к.с., колісна формула 4×4, шини 7.50-16.0 / 11.20-24.0. Блокування диференціалу, шестерний редуктор, 8 передач вперед. Сучасна надійна техніка.",
    color: "#138503ff",
    inStock: true,
    image: "img/TERRA FORCE 3254HX.png",
  },
  {
    id: 8,
    name: "TERRA FORCE 404HXC",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "40 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 4-цил.",
    gearbox: "8+8 передачі",
    hitch: "Категорія I/II",
    fuel: "—",
    desc: "TERRA FORCE 404HXC — 4-циліндровий дизельний трактор 40 к.с. із повним приводом 4×4. Трансмісія (4+4)×2 — 8 передач вперед і назад, шини 7.50-20.0 / 11.20-28.0. Потужна і універсальна машина для середніх господарств.",
    color: "#138503ff",
    inStock: true,
    image: "img/TERRA FORCE 404HXC.png",
  },
  {
    id: 9,
    name: "TERRA FORCE 544XLС",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "50 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 4-цил.",
    gearbox: "8+8 передачі",
    hitch: "Категорія II",
    fuel: "—",
    desc: "TERRA FORCE 544XLС — трактор 50 к.с. з 4-циліндровим дизелем і трансмісією (4+4)×2. Колісна формула 4×4, шини 7.50-20.0 / 11.20-28.0, блокування диференціалу. Надійна техніка для польових і транспортних робіт.",
    color: "#138503ff",
    inStock: true,
    image: "img/TERRA FORCE 544XLС.png",
  },
  {
    id: 10,
    name: "TERRA FORCE 554",
    category: "Трактор колісний",
    tag: "Топ вибір",
    power: "50 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 4-цил.",
    gearbox: "8+8 передачі",
    hitch: "Категорія II",
    fuel: "—",
    desc: "TERRA FORCE 554 — базова модель серії з 4-циліндровим дизелем 50 к.с. і приводом 4×4. Трансмісія (4+4)×2, шини 7.50-20.0 / 11.20-28.0. Оптимальний баланс потужності та вартості для фермерських господарств.",
    color: "#138503ff",
    inStock: true,
    image: "img/TERRA FORCE 554.png",
  },
  {
    id: 11,
    name: "TERRA FORCE 554DXL",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "50 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 4-цил.",
    gearbox: "8+8 передачі",
    hitch: "Категорія II",
    fuel: "—",
    desc: "TERRA FORCE 554DXL — розширена версія з 4-циліндровим дизелем 50 к.с., широкими шинами 8.30-20.0 / 12.40-28.0 та трансмісією (4+4)×2. Повний привід 4×4, блокування диференціалу. Поставляється з комплектом ЗІП.",
    color: "#138503ff",
    inStock: true,
    image: "img/TERRA FORCE 554DXL.png",
  },
  {
    id: 12,
    name: "TERRA FORCE T-251",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "24 к.с.",
    drive: "4×2",
    weight: "—",
    engine: "Дизельний, 1-цил.",
    gearbox: "6+2 передачі",
    hitch: "Категорія I",
    fuel: "—",
    desc: "TERRA FORCE T-251 — компактний міні-трактор з одноциліндровим 4-тактним дизелем 24 к.с. і кліноременевою передачею. Колісна формула 4×2, ручний і електричний стартер. Ідеальний для малих присадибних ділянок.",
    color: "#138503ff",
    inStock: true,
    image: "img/TERRA FORCE T-251.png",
  },
  {
    id: 13,
    name: "TERRA FORCE 140925",
    category: "Ґрунтофреза",
    tag: "В наявності",
    power: "—",
    drive: "—",
    weight: "—",
    engine: "Від міні-трактора",
    gearbox: "300 об/хв",
    hitch: "Категорія I",
    fuel: "—",
    desc: "Ґрунтофреза TERRA FORCE 140925 з горизонтальною конфігурацією. 26 ножів, ширина обробки 1420 мм, глибина 80–210 мм. Привід від міні-трактора колісного. Призначена для стандартної сухої обробки ґрунту.",
    color: "#138503ff",
    inStock: true,
    image: "img/TERRA FORCE 140925.png",
  },
  {
    id: 14,
    name: "ДМТЗ 220Х",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "22 к.с.",
    drive: "4×2",
    weight: "—",
    engine: "Дизельний, 1-цил.",
    gearbox: "6+2 передачі",
    hitch: "Категорія I",
    fuel: "—",
    desc: "ДМТЗ 220X — легкий і економічний міні-трактор з одноциліндровим дизелем 22 к.с. і прямою передачею. Колісна формула 4×2, блокування диференціалу, електричний стартер. Оптимальний для городніх і присадибних робіт.",
    color: "#138503ff",
    inStock: true,
    image: "img/ДМТЗ 220Х.png",
  },
  {
    id: 15,
    name: "ДМТЗ 244Х",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "24 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 3-цил.",
    gearbox: "8+2 передачі",
    hitch: "Категорія I",
    fuel: "—",
    desc: "ДМТЗ 244X — компактний трактор 4×4 з 3-циліндровим дизелем 24 к.с. і прямою передачею. Шини 7.50-16.0 / 11.20-24.0, блокування диференціалу, шестерний редуктор. Надійна техніка для малих і середніх господарств.",
    color: "#138503ff",
    inStock: true,
    image: "img/ДМТЗ 244Х.png",
  },
  {
    id: 16,
    name: "ДМТЗ 254В",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "24 к.с.",
    drive: "4×2",
    weight: "—",
    engine: "Дизельний, 1-цил.",
    gearbox: "8+2 передачі",
    hitch: "Категорія I",
    fuel: "—",
    desc: "ДМТЗ 254B — міні-трактор з одноциліндровим дизелем 24 к.с. і кліноременевою передачею (4 ременя). Колісна формула 4×2, ручний і електричний стартер. Економічна і надійна техніка для невеликих господарств.",
    color: "#138503ff",
    inStock: true,
    image: "img/ДМТЗ 254В.png",
  },
  {
    id: 17,
    name: "ДМТЗ 255Х",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "24 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 3-цил.",
    gearbox: "6+2 передачі",
    hitch: "Категорія I",
    fuel: "—",
    desc: "ДМТЗ 255X — трактор 4×4 з 3-циліндровим дизелем 24 к.с. і прямою передачею. Шини 6.00-14.0 / 9.50-20.0, блокування диференціалу, 6 передач вперед. Маневрений і ефективний для польових робіт.",
    color: "#138503ff",
    inStock: true,
    image: "img/ДМТЗ 255Х.png",
  },
  {
    id: 18,
    name: "ДМТЗ 255ХL",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "24 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 3-цил.",
    gearbox: "8+2 передачі",
    hitch: "Категорія I",
    fuel: "—",
    desc: "ДМТЗ 255XL — версія з розширеною колісною базою, шинами 9.50-24.0 та 8 передачами вперед. 3-циліндровий дизель 24 к.с., привід 4×4, блокування диференціалу. Підвищена стійкість і прохідність.",
    color: "#138503ff",
    inStock: true,
    image: "img/ДМТЗ 255ХL.png",
  },
  {
    id: 19,
    name: "ДМТЗ 404ХС",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "40 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 4-цил.",
    gearbox: "8+8 передачі",
    hitch: "Категорія I/II",
    fuel: "—",
    desc: "ДМТЗ 404XС — 4-циліндровий трактор 40 к.с. з повним приводом 4×4 і трансмісією (4+4)×2. Шини 7.50-20.0 / 11.20-28.0, блокування диференціалу. Потужна і продуктивна техніка для середніх аграрних господарств.",
    color: "#138503ff",
    inStock: true,
    image: "img/ДМТЗ 404ХС.png",
  },
  {
    id: 20,
    name: "ДМТЗ 544Х",
    category: "Трактор колісний",
    tag: "Топ вибір",
    power: "50 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 4-цил.",
    gearbox: "8+8 передачі",
    hitch: "Категорія II",
    fuel: "—",
    desc: "ДМТЗ 544X — трактор 50 к.с. з 4-циліндровим дизелем і трансмісією (4+4)×2. Повний привід 4×4, шини 7.50-20.0 / 11.20-28.0, блокування диференціалу. Висока потужність і універсальність для широкого спектру робіт.",
    color: "#138503ff",
    inStock: true,
    image: "img/ДМТЗ 544Х.png",
  },
  {
    id: 21,
    name: "ДМТЗ 544ХС",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "50 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 4-цил.",
    gearbox: "8+8 передачі",
    hitch: "Категорія II",
    fuel: "—",
    desc: "ДМТЗ 544XС — трактор 50 к.с. у комплектації ХС з 4-циліндровим дизелем і трансмісією (4+4)×2. Привід 4×4, шини 7.50-20.0 / 11.20-28.0. Надійна і потужна техніка для інтенсивного сільськогосподарського використання.",
    color: "#138503ff",
    inStock: true,
    image: "img/ДМТЗ 544ХС.png",
  },
  {
    id: 22,
    name: "ДМТЗ 554Х",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "50 к.с.",
    drive: "4×4",
    weight: "—",
    engine: "Дизельний, 4-цил.",
    gearbox: "8+8 передачі",
    hitch: "Категорія II",
    fuel: "—",
    desc: "ДМТЗ 554X — 4-циліндровий дизельний трактор 50 к.с. з повним приводом 4×4. Трансмісія (4+4)×2, шини 7.50-20.0 / 11.20-28.0, блокування заднього диференціалу. Висока продуктивність для польових і транспортних операцій.",
    color: "#138503ff",
    inStock: true,
    image: "img/ДМТЗ 554Х.png",
  },
  {
    id: 23,
    name: "ДМТЗ Т-251",
    category: "Трактор колісний",
    tag: "В наявності",
    power: "24 к.с.",
    drive: "4×2",
    weight: "—",
    engine: "Дизельний, 1-цил.",
    gearbox: "6+2 передачі",
    hitch: "Категорія I",
    fuel: "—",
    desc: "ДМТЗ T-251 — компактний міні-трактор з одноциліндровим 4-тактним дизелем 24 к.с. і кліноременевою передачею. Колісна формула 4×2, ручний і електричний стартер. Ідеальний для невеликих присадибних і городніх робіт.",
    color: "#138503ff",
    inStock: true,
    image: "img/МТЗ Т-251.png",
  },
  {
    id: 24,
    name: "ДМТЗ 140925",
    category: "Ґрунтофреза",
    tag: "В наявності",
    power: "—",
    drive: "—",
    weight: "—",
    engine: "Від міні-трактора",
    gearbox: "300 об/хв",
    hitch: "Категорія I",
    fuel: "—",
    desc: "Ґрунтофреза ДМТЗ 140925 горизонтальної конфігурації. 26 ножів, ширина обробки 1420 мм, глибина обробки 80–210 мм. Агрегатується з міні-тракторами колісними. Призначена для стандартної сухої обробки ґрунту.",
    color: "#138503ff",
    inStock: true,
    image: "img/ДМТЗ 140925.png",
  },
];

/* ═══════════════ SVG PLACEHOLDER (використовується якщо фото не знайдено) ═══════════════ */
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

/* ── Рендер зображення (фото або SVG-заглушка) ── */
function productImage(p, cls = '') {
  return `<img
    src="${p.image}"
    alt="${p.name}"
    class="prod-img-real ${cls}"
    onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
  /><div class="prod-img-fallback" style="display:none">${tractorSVG(p.color)}</div>`;
}

/* ═══════════════ CAROUSEL ═══════════════ */
let carouselIndex = 0;
let carouselAutoTimer = null;
const CAROUSEL_INTERVAL = 4500;

function renderCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots  = document.getElementById('carouselDots');
  if (!track || !dots) return;

  track.innerHTML = products.map((p, i) => `
    <div class="carousel-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
      <div class="carousel-img-wrap">
        ${productImage(p, 'carousel-photo')}
      </div>
      <div class="carousel-info">
        <div class="carousel-tag">${p.tag}</div>
        <div class="carousel-name">${p.name}</div>
        <div class="carousel-chips">
          <span class="chip">${p.power}</span>
          <span class="chip">${p.drive}</span>
          ${p.inStock
            ? '<span class="chip chip-green">В наявності</span>'
            : '<span class="chip">Під замовлення</span>'}
        </div>
        <p class="carousel-desc">${p.desc.slice(0, 120)}…</p>
        <button class="btn-primary-custom" onclick="openModal(${p.id})">Детальніше</button>
      </div>
    </div>
  `).join('');

  dots.innerHTML = products.map((_, i) =>
    `<button class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></button>`
  ).join('');
}

function goToSlide(idx) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dotBtns = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;

  slides[carouselIndex].classList.remove('active');
  dotBtns[carouselIndex].classList.remove('active');

  carouselIndex = (idx + products.length) % products.length;

  slides[carouselIndex].classList.add('active');
  dotBtns[carouselIndex].classList.add('active');

  resetCarouselAuto();
}

function carouselNext() { goToSlide(carouselIndex + 1); }
function carouselPrev() { goToSlide(carouselIndex - 1); }

function resetCarouselAuto() {
  clearInterval(carouselAutoTimer);
  carouselAutoTimer = setInterval(carouselNext, CAROUSEL_INTERVAL);
}

/* Свайп на мобільних */
function initCarouselSwipe() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) dx < 0 ? carouselNext() : carouselPrev();
  });
}

/* ═══════════════ RENDER CARDS ═══════════════ */
function renderProducts() {
  const container = document.getElementById('productsContainer');
  const html = products.map((p, i) => `
    <div class="col-sm-6 col-lg-4">
      <div class="product-card scroll-reveal" onclick="openModal(${p.id})" style="--delay:${i * 80}ms">
        <div class="card-img-wrap">
          <div class="card-img-placeholder">
            <img src="${p.image}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="card-tag" style="background-color: ${p.color};">${p.tag}</div>
          <div class="card-wishlist" onclick="event.stopPropagation()">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </div>
        </div>
        <div class="card-body-wrap">
          <div class="card-name">${p.name}</div>
          <div class="card-chips">
            <span class="chip">${p.power}</span>
            <span class="chip">${p.drive}</span>
            ${p.inStock
              ? '<span class="chip chip-green">В наявності</span>'
              : '<span class="chip">Під замовлення</span>'}
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
  
  if (typeof observeScrollReveal === 'function') {
    observeScrollReveal();
  }
}

function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('m-name').textContent = p.name;
  document.getElementById('m-cat').textContent = p.category + ' · ' + p.tag;
  document.getElementById('m-img').innerHTML = productImage(p, 'modal-photo');
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

function observeScrollReveal() {
  const items = document.querySelectorAll('.scroll-reveal:not(.sr-done)');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.style.getPropertyValue('--delay') || '0ms';
        setTimeout(() => {
          el.classList.add('sr-visible');
          el.classList.add('sr-done');
        }, parseInt(delay));
        io.unobserve(el);
      }
    });
  }, { threshold: 0.08 });
  items.forEach(el => io.observe(el));
}

function initNavbarShrink() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('navbar-scrolled', window.scrollY > 60);
  }, { passive: true });
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  if (isNaN(target)) return;
  const suffix = el.dataset.suffix || '';
  const duration = 1600;
  const start = performance.now();
  const isInt = Number.isInteger(target);
  function frame(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = target * eased;
    el.textContent = (isInt ? Math.round(val) : val.toFixed(1)) + suffix;
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => io.observe(el));
}

function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    hero.style.setProperty('--parallax-y', `${y * 0.3}px`);
  }, { passive: true });
}

function initCursorGlow() {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  let mx = -200, my = -200, cx = -200, cy = -200;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function tick() {
    cx += (mx - cx) * 0.1;
    cy += (my - cy) * 0.1;
    glow.style.transform = `translate(${cx - 150}px, ${cy - 150}px)`;
    requestAnimationFrame(tick);
  }
  tick();
}

function initMarquee() {
  const m = document.querySelector('.marquee-inner');
  if (!m) return;
  m.innerHTML += m.innerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  renderCarousel();
  renderProducts();
  observeScrollReveal();
  initNavbarShrink();
  initCounters();
  initParallax();
  initCursorGlow();
  initMarquee();
  resetCarouselAuto();
  initCarouselSwipe();

  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.01 });
  revealEls.forEach(el => revealObs.observe(el));
});
