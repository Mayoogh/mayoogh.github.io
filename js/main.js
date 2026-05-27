// Pixel SVG illustrations — add new keys here for custom motifs
const MOTIFS = {
  chip: `<svg class="motif" viewBox="0 0 52 52" fill="currentColor" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/><rect x="32" y="0" width="4" height="4"/><rect x="44" y="0" width="4" height="4"/><rect x="4" y="4" width="4" height="4"/><rect x="44" y="4" width="4" height="4"/><rect x="16" y="8" width="20" height="4"/><rect x="12" y="12" width="8" height="4"/><rect x="32" y="12" width="8" height="4"/><rect x="8" y="16" width="8" height="4"/><rect x="36" y="16" width="8" height="4"/><rect x="0" y="20" width="4" height="4"/><rect x="8" y="20" width="8" height="4"/><rect x="36" y="20" width="8" height="4"/><rect x="48" y="20" width="4" height="4"/><rect x="8" y="24" width="8" height="4"/><rect x="36" y="24" width="8" height="4"/><rect x="12" y="28" width="8" height="4"/><rect x="32" y="28" width="8" height="4"/><rect x="16" y="32" width="20" height="4"/><rect x="4" y="36" width="4" height="4"/><rect x="20" y="36" width="12" height="4"/><rect x="44" y="36" width="4" height="4"/><rect x="8" y="40" width="4" height="4"/><rect x="20" y="40" width="12" height="4"/><rect x="40" y="40" width="4" height="4"/><rect x="20" y="44" width="12" height="4"/><rect x="16" y="48" width="8" height="4"/><rect x="28" y="48" width="8" height="4"/></svg>`,
  arm: `<svg class="motif" viewBox="0 0 48 52" fill="currentColor" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="0" width="4" height="4"/><rect x="12" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/><rect x="28" y="0" width="4" height="4"/><rect x="4" y="4" width="4" height="4"/><rect x="12" y="4" width="4" height="4"/><rect x="20" y="4" width="4" height="4"/><rect x="28" y="4" width="4" height="4"/><rect x="4" y="8" width="4" height="4"/><rect x="12" y="8" width="4" height="4"/><rect x="20" y="8" width="4" height="4"/><rect x="28" y="8" width="4" height="4"/><rect x="4" y="12" width="4" height="4"/><rect x="12" y="12" width="4" height="4"/><rect x="20" y="12" width="4" height="4"/><rect x="28" y="12" width="4" height="4"/><rect x="4" y="16" width="4" height="4"/><rect x="12" y="16" width="4" height="4"/><rect x="20" y="16" width="4" height="4"/><rect x="28" y="16" width="4" height="4"/><rect x="0" y="20" width="32" height="4"/><rect x="36" y="20" width="4" height="4"/><rect x="0" y="24" width="40" height="4"/><rect x="0" y="28" width="40" height="4"/><rect x="4" y="32" width="32" height="4"/><rect x="4" y="36" width="32" height="4"/><rect x="8" y="40" width="24" height="4"/><rect x="12" y="44" width="16" height="4"/><rect x="12" y="48" width="16" height="4"/></svg>`,
  car: `<svg class="motif" viewBox="0 0 64 44" fill="currentColor" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="4" width="20" height="4"/><rect x="20" y="8" width="8" height="4"/><rect x="40" y="8" width="8" height="4"/><rect x="16" y="12" width="36" height="4"/><rect x="12" y="16" width="44" height="4"/><rect x="8" y="20" width="52" height="4"/><rect x="4" y="24" width="60" height="4"/><rect x="4" y="28" width="60" height="4"/><rect x="4" y="32" width="12" height="4"/><rect x="20" y="32" width="24" height="4"/><rect x="48" y="32" width="12" height="4"/><rect x="8" y="36" width="4" height="4"/><rect x="24" y="36" width="16" height="4"/><rect x="52" y="36" width="4" height="4"/><rect x="8" y="40" width="4" height="4"/><rect x="24" y="40" width="16" height="4"/><rect x="52" y="40" width="4" height="4"/></svg>`,
  rocket: `<svg class="motif" viewBox="0 0 56 56" fill="currentColor" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="0" width="8" height="4"/><rect x="24" y="4" width="8" height="4"/><rect x="20" y="8" width="16" height="4"/><rect x="16" y="12" width="24" height="4"/><rect x="16" y="16" width="24" height="4"/><rect x="12" y="20" width="32" height="4"/><rect x="12" y="24" width="32" height="4"/><rect x="8" y="28" width="40" height="4"/><rect x="8" y="32" width="40" height="4"/><rect x="4" y="36" width="48" height="4"/><rect x="0" y="40" width="56" height="4"/><rect x="0" y="44" width="56" height="4"/><rect x="20" y="48" width="16" height="4"/><rect x="24" y="52" width="8" height="4"/></svg>`
};

// ── Split-flap effect ────────────────────────────────────────────
const FF = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?#&+-><./';

function flipEl(el, baseDelay) {
  if (!el.dataset.orig) el.dataset.orig = el.textContent;
  const text = el.dataset.orig;
  el.innerHTML = [...text].map(ch =>
    ch.trim()
      ? `<span class="ff-c" data-t="${ch}">${FF[~~(Math.random() * FF.length)]}</span>`
      : ch
  ).join('');
  el.querySelectorAll('.ff-c').forEach((s, i) => {
    const tgt = s.dataset.t;
    const ticks = 5 + ~~(Math.random() * 9);
    let t = 0;
    setTimeout(() => {
      const iv = setInterval(() => {
        if (++t >= ticks) {
          s.textContent = tgt;
          s.classList.add('ff-done');
          clearInterval(iv);
        } else {
          s.textContent = FF[~~(Math.random() * FF.length)];
        }
      }, 50);
    }, baseDelay + i * 36);
  });
}

function flipScreen(id) {
  const screen = document.getElementById(id);
  if (!screen) return;
  let d = 0;
  screen.querySelectorAll('h1 .stack, h2.screen-title, .kicker, .role').forEach(el => {
    flipEl(el, d);
    d += 90;
  });
}

// ── Project detail page ───────────────────────────────────────────
function openProject(p) {
  const screen = document.getElementById('project');
  screen.style.setProperty('--accent', p.color);
  const c = p.color;

  const media = p.video
    ? `<a class="proj-yt" href="https://www.youtube.com/watch?v=${p.video}" target="_blank" rel="noopener">
        <img src="https://img.youtube.com/vi/${p.video}/maxresdefault.jpg" alt="${p.title} — watch on YouTube">
        <span class="proj-yt-btn">&#9654;</span>
        <span class="proj-yt-label">WATCH ON YOUTUBE</span>
       </a>`
    : '';

  const sections = p.story
    ? p.story.map(s => `
        <div class="proj-section" style="border-color:${c}">
          <div class="proj-section-lbl" style="color:${c}">${s.title}</div>
          <div class="proj-section-body">${s.content}</div>
        </div>`).join('')
    : `
        ${p.problem ? `<div class="proj-section" style="border-color:${c}"><div class="proj-section-lbl" style="color:${c}">// PROBLEM</div><p>${p.problem}</p></div>` : ''}
        <div class="proj-section" style="border-color:${c}"><div class="proj-section-lbl" style="color:${c}">// BUILT</div><p>${p.description}</p>${p.photo ? `<img class="proj-photo" src="${p.photo}" alt="${p.title}" style="margin-top:20px">` : ''}</div>
        ${p.outcome ? `<div class="proj-section" style="border-color:${c}"><div class="proj-section-lbl" style="color:${c}">// OUTCOME</div><p>${p.outcome}</p></div>` : ''}`;

  document.getElementById('project-content').innerHTML = `
    <button class="back-btn" id="backBtn">&#9664; BACK TO BUILDS</button>
    ${media}
    <div class="proj-label" style="color:${c}">${p.label} &nbsp;&#183;&nbsp; ${p.id}</div>
    <h2 class="screen-title">${p.title}</h2>
    <div class="proj-date">${p.date}</div>
    <div class="proj-pills">${p.pills.map(t => `<span class="pill" style="background:${c};color:#0c0c0c">&#9632; ${t}</span>`).join('')}</div>
    ${sections}
  `;

  document.getElementById('backBtn').addEventListener('click', () => show('builds'));
  show('project');
}

// ── Builds grid ───────────────────────────────────────────────────
function renderBuilds() {
  const grid = document.getElementById('builds-grid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => `
    <div class="build" style="--c:${p.color}">
      <div class="media">${p.photo ? `<img class="media-photo" src="${p.photo}" alt="${p.title}">` : (MOTIFS[p.motif] || '')}</div>
      <span class="lvl">${p.label}</span>
      <div class="idx">${p.id}</div>
      <h3 class="build-title">${p.title}</h3>
      <div class="date">${p.date}</div>
      <p>${p.description}</p>
      <div class="pills">${p.pills.map(t => `<span class="pill">&#9632; ${t}</span>`).join('')}</div>
      <div class="card-open">&#9654; OPEN CASE STUDY</div>
    </div>
  `).join('');

  grid.querySelectorAll('.build').forEach((el, i) => {
    el.addEventListener('mouseenter', () => {
      blip(440);
      flipEl(el.querySelector('.build-title'), 0);
    });
    el.addEventListener('click', () => openProject(PROJECTS[i]));
  });
}

// ── Navigation & SFX ─────────────────────────────────────────────
const navBtns = document.querySelectorAll('.nav-btn');
const screens = document.querySelectorAll('.screen');
const hud = document.getElementById('hud');
let sfxOn = true, actx = null;

function blip(freq) {
  if (!sfxOn) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = 'square'; o.frequency.value = freq;
    g.gain.setValueAtTime(.05, actx.currentTime);
    g.gain.exponentialRampToValueAtTime(.0001, actx.currentTime + .12);
    o.connect(g); g.connect(actx.destination);
    o.start(); o.stop(actx.currentTime + .12);
  } catch(e) {}
}

function show(id) {
  screens.forEach(s => s.classList.toggle('active', s.id === id));
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.screen === id));
  hud.classList.remove('open');
  window.scrollTo({ top: 0 });
  blip(id === 'home' ? 660 : 520);
  flipScreen(id);
}

// ── CRT avatar pixelation ────────────────────────────────────────
(function() {
  const img = document.getElementById('avatar-img');
  if (!img) return;
  const RES = 72;
  function pixelate() {
    try {
      const c = document.createElement('canvas');
      c.width = RES; c.height = RES;
      const ctx = c.getContext('2d');
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0, RES, RES);
      img.src = c.toDataURL('image/png');
    } catch(e) {}
  }
  if (img.complete && img.naturalWidth) pixelate();
  else img.addEventListener('load', pixelate, { once: true });
})();

// ── Live age counter ─────────────────────────────────────────────
(function() {
  const DOB = new Date('1997-09-11T00:00:00');
  const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;
  const el = document.getElementById('age-counter');
  function tick() {
    if (el) el.textContent = ((Date.now() - DOB) / MS_PER_YEAR).toFixed(10);
    requestAnimationFrame(tick);
  }
  tick();
})();

renderBuilds();
flipScreen('home');

navBtns.forEach(b => b.addEventListener('click', () => show(b.dataset.screen)));
document.querySelectorAll('[data-goto]').forEach(b => b.addEventListener('click', () => { blip(880); show(b.dataset.goto); }));
document.getElementById('menuToggle').addEventListener('click', () => hud.classList.toggle('open'));
document.getElementById('soundBtn').addEventListener('click', function() {
  sfxOn = !sfxOn;
  this.classList.toggle('off', !sfxOn);
  if (sfxOn) blip(740);
});
document.querySelectorAll('.c-btn').forEach(el => el.addEventListener('mouseenter', () => blip(440)));

// Konami code easter egg
const seq = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let pos = 0;
document.addEventListener('keydown', e => {
  pos = (e.keyCode === seq[pos]) ? pos + 1 : 0;
  if (pos === seq.length) {
    document.body.style.filter = document.body.style.filter ? '' : 'invert(1)';
    blip(990);
    pos = 0;
  }
});
