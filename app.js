const PORTFOLIO = {
  about: {
    index: '01', kicker: 'ABOUT', title: 'About', mood: 'mood-curious',
    html: `
      <p class="lede">I like work that sits between <em>numbers, people, and systems.</em> I’m most interested in finance, strategy, risk, entrepreneurship, and building software that makes messy problems easier to understand.</p>
      <div class="tag-row">
        <span class="tag">QUANTITATIVE FINANCE</span><span class="tag">RISK ANALYSIS</span><span class="tag">STRATEGY</span><span class="tag">SALES</span><span class="tag">MARKETING</span><span class="tag">PROGRAMMING</span>
      </div>
      <hr class="section-rule">
      <div class="card-grid">
        <article class="info-card"><span class="card-index">01 / HOW I THINK</span><h3>Start with the actual problem.</h3><p>Before choosing a model, deck, script, or tool, I try to understand what decision someone is really trying to make.</p></article>
        <article class="info-card"><span class="card-index">02 / WHAT I LIKE</span><h3>Build, test, iterate.</h3><p>I enjoy turning an idea into something usable—whether that means analysis, outreach systems, a pitch, or a product prototype.</p></article>
        <article class="info-card"><span class="card-index">03 / WHERE I ADD VALUE</span><h3>Business + technical.</h3><p>I’m comfortable moving between market research, communication, data, programming, and presentation design.</p></article>
        <article class="info-card"><span class="card-index">04 / OUTSIDE THE SCREEN</span><h3>Competitive mindset.</h3><p>Golf has taught me to stay patient, make decisions under pressure, and treat small improvements as a long-term advantage.</p></article>
      </div>`
  },
  work: {
    index: '02', kicker: 'WORK', title: 'Work', mood: 'mood-focus',
    html: `
      <p class="lede">A few places where I’ve applied that mix of <em>analysis, communication, and execution.</em></p>
      <div class="card-grid">
        <article class="info-card"><span class="card-index">CURRENT / MARKETS</span><h3>Portfolio Manager & Trader</h3><p>Independent market research, quantitative and technical analysis, risk management, and long-term portfolio construction.</p></article>
        <article class="info-card"><span class="card-index">COMMERCIAL REAL ESTATE</span><h3>B3 Investors</h3><p>Prospecting, local business research, property revitalization work, CRM-style pipeline organization, and automated outreach tooling.</p></article>
        <article class="info-card"><span class="card-index">COMMUNITY / EVENTS</span><h3>Youth Leadership</h3><p>Event planning, community engagement, sponsorship and partner outreach, and cross-functional execution.</p></article>
        <article class="info-card"><span class="card-index">CYBER / ANALYSIS</span><h3>Deloitte Job Simulation</h3><p>Worked through a simulated client cybersecurity investigation focused on interpreting data and communicating findings clearly.</p></article>
      </div>
      <div class="callout"><p><strong>Want the conventional version?</strong>The résumé keeps the same work in a faster, recruiter-friendly format.</p><a href="https://canva.link/h4nv8c463fl6r59" target="_blank" rel="noopener">Open résumé ↗</a></div>`
  },
  projects: {
    index: '03', kicker: 'PROJECTS', title: 'Projects', mood: 'mood-wow',
    html: `
      <p class="lede">The portfolio is less a folder of files and more a trail of <em>problems I decided to chase.</em> Open anything that looks interesting.</p>
      <div class="card-grid">
        ${project('01','DECA ICDC Report','Finance Operations Research','Customer-driven financial inclusion and CSR strategy.','https://canva.link/mx9tk5k88jsbgel')}
        ${project('02','DECA ICDC Slides','Presentation','The presentation version of the same research and strategy.','https://canva.link/vcnjg5nixm8c9pz')}
        ${project('03','Asia Consulting Pitch','Strategy / Consulting','A structured consulting-style recommendation and presentation.','https://canva.link/t70yi8uq7v8dfm1')}
        ${project('04','B3 Investors — Bayfair','Commercial Real Estate','Research and prospecting work connected to Bayfair-area revitalization.','https://canva.link/6k2btciat5ohitr')}
        ${project('05','Fusion Marketing','Marketing','Brand, positioning, and marketing-focused project work.','https://canva.link/wldqghskn356nx7')}
        ${project('06','Irvington Fusion Pitch','Pitch / Strategy','A concise pitch built around a school/community opportunity.','https://canva.link/n4cqb38wg15nbdh')}
        ${project('07','B3 Investors Summary','Experience Recap','A visual summary of work completed with B3 Investors.','https://canva.link/gtpsjl9ljdb9w0p')}
        ${project('08','Get to Know Jamie','Intro Deck','The original, more personal introduction to who I am.','https://canva.link/50kiakbew7sqf70')}
      </div>`
  },
  leadership: {
    index: '04', kicker: 'LEADERSHIP', title: 'Leadership', mood: 'mood-happy',
    html: `
      <p class="lede">Leadership, to me, is mostly about <em>making it easier for other people to do their best work.</em></p>
      <div class="card-grid">
        <article class="info-card"><span class="card-index">YOUTH LEADERSHIP</span><h3>Events + community</h3><p>Helped coordinate high-visibility community events, work across teams, and build relationships with sponsors and partners.</p></article>
        <article class="info-card"><span class="card-index">PUBLICATIONS</span><h3>Creative direction + execution</h3><p>Led photo/editorial workflows and supported marketing and sales efforts for a student publication.</p></article>
        <article class="info-card"><span class="card-index">CLUB BUILDING</span><h3>From idea to system</h3><p>I’m drawn to student organizations where I can improve the structure behind the experience—not just hold a title.</p></article>
        <article class="info-card"><span class="card-index">SPORT</span><h3>Competitive golf</h3><p>Golf keeps me honest: one shot at a time, constant feedback, and no way to hide from your own decision-making.</p></article>
      </div>
      <div class="callout"><p><strong>Leadership portfolio</strong>A more visual look at community and team-based work.</p><a href="https://canva.link/xh9246xwx1yc0jm" target="_blank" rel="noopener">Open deck ↗</a></div>`
  },
  contact: {
    index: '05', kicker: 'CONTACT', title: 'Contact', mood: 'mood-wink',
    html: `
      <p class="lede">If something here made you curious, <em>that’s probably a good reason to talk.</em></p>
      <div class="contact-stack">
        <a class="contact-link" href="mailto:djamiechen@gmail.com"><span>Email</span><span>↗</span></a>
        <a class="contact-link" href="https://www.linkedin.com/in/jamiedchen/" target="_blank" rel="noopener"><span>LinkedIn</span><span>↗</span></a>
        <a class="contact-link" href="https://www.instagram.com/djamiechen/" target="_blank" rel="noopener"><span>Instagram</span><span>↗</span></a>
      </div>
      <hr class="section-rule">
      <p style="color:var(--muted);font-size:.78rem;line-height:1.7;max-width:34rem">Built as an interactive portfolio rather than a traditional landing page. The orb is the index: drag it, tap around, and let the site react.</p>`
  }
};

function project(index, title, type, desc, url) {
  return `<a class="project-card" href="${url}" target="_blank" rel="noopener" data-project-card>
    <span class="card-index">${index}</span><span class="card-arrow">↗</span>
    <h3>${title}</h3><p>${desc}</p><span class="card-type">${type.toUpperCase()}</span>
  </a>`;
}

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const gate = $('#gate');
const app = $('#app');
const orbButton = $('#guide-orb');
const mainOrb = $('.orb--main');
const gateOrb = $('.orb--gate');
const audio = $('#music');
const musicToggle = $('#music-toggle');
const detailShell = $('#detail-shell');
const detailPanel = $('.detail-panel');
const detailContent = $('#detail-content');
const sectionIndicator = $('#section-indicator');
const progressBar = $('#detail-progress-bar');
const caption = $('#orb-caption');
const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

let musicWanted = false;
let audioCtx = null, analyser = null, sourceNode = null, freq = null;
let drag = null;
let activePortal = null;
let homePos = { x: innerWidth/2, y: innerHeight*.53 };
let cursor = { x: innerWidth/2, y: innerHeight/2 };
let sectionOpen = null;

function setMusicUI(on) {
  musicToggle.classList.toggle('music-on', on);
  musicToggle.setAttribute('aria-label', on ? 'Pause music' : 'Play music');
}

async function startAudio() {
  musicWanted = true;
  audio.volume = .48;
  try {
    await audio.play();
    setMusicUI(true);
    setupAudioReactive();
  } catch { setMusicUI(false); }
}

function setupAudioReactive() {
  if (analyser || !window.AudioContext && !window.webkitAudioContext) return;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AC();
    sourceNode = audioCtx.createMediaElementSource(audio);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 64;
    analyser.smoothingTimeConstant = .84;
    freq = new Uint8Array(analyser.frequencyBinCount);
    sourceNode.connect(analyser);
    analyser.connect(audioCtx.destination);
    reactiveLoop();
  } catch {}
}

function reactiveLoop() {
  if (!analyser) return;
  analyser.getByteFrequencyData(freq);
  const avg = freq.reduce((a,b)=>a+b,0) / freq.length / 255;
  document.documentElement.style.setProperty('--beat', avg.toFixed(3));
  if (mainOrb) mainOrb.style.filter = `brightness(${1 + avg*.1})`;
  requestAnimationFrame(reactiveLoop);
}

async function enter(withMusic) {
  if (withMusic) await startAudio();
  musicWanted = withMusic;
  gate.classList.add('is-leaving');
  app.classList.add('is-live');
  app.setAttribute('aria-hidden','false');
  setMusicUI(withMusic && !audio.paused);
  setTimeout(()=>{ gate.hidden = true; resetOrb(true); }, 700);
}

$('#enter-music').addEventListener('click', ()=>enter(true));
$('#enter-muted').addEventListener('click', ()=>enter(false));
musicToggle.addEventListener('click', async ()=>{
  if (audio.paused) await startAudio();
  else { audio.pause(); musicWanted = false; setMusicUI(false); }
});

function moveEyes(orb, x, y, strength=1) {
  if (!orb) return;
  const rect = orb.getBoundingClientRect();
  const cx = rect.left + rect.width/2, cy = rect.top + rect.height/2;
  const dx = x-cx, dy = y-cy;
  const mag = Math.hypot(dx,dy) || 1;
  const max = rect.width*.045*strength;
  const ox = Math.max(-max, Math.min(max, dx/mag*max));
  const oy = Math.max(-max, Math.min(max, dy/mag*max));
  $$('.eye', orb).forEach(e => e.style.translate = `${ox}px ${oy}px`);
}

document.addEventListener('pointermove', e=>{
  cursor = {x:e.clientX,y:e.clientY};
  moveEyes(gateOrb, e.clientX,e.clientY,1.35);
  if (!drag) moveEyes(mainOrb,e.clientX,e.clientY,1.1);
});

document.addEventListener('touchmove', e=>{
  const t=e.touches?.[0]; if(t){ moveEyes(gateOrb,t.clientX,t.clientY); moveEyes(mainOrb,t.clientX,t.clientY); }
},{passive:true});

function getHome() {
  const mobile = innerWidth <= 900;
  return { x: innerWidth/2, y: mobile ? (64 + (innerHeight-64-76)*.56) : (76 + (innerHeight-76)*.53) };
}
function positionOrb(x,y, animate=false) {
  orbButton.style.transition = animate ? `left .65s var(--ease), top .65s var(--ease), transform .65s var(--ease)` : 'none';
  orbButton.style.left = `${x}px`; orbButton.style.top = `${y}px`;
  if (animate) setTimeout(()=> orbButton.style.transition='', 700);
}
function resetOrb(animate=true) {
  homePos = getHome();
  positionOrb(homePos.x, homePos.y, animate);
  setMood('mood-neutral');
  caption.textContent = innerWidth <= 900 ? 'tap a topic' : 'grab me';
}
function setMood(mood) {
  ['mood-neutral','mood-curious','mood-happy','mood-focus','mood-wow','mood-wink'].forEach(c=>orbButton.classList.remove(c));
  orbButton.classList.add(mood || 'mood-neutral');
}

function findPortal(x,y) {
  let winner=null, best=Infinity;
  $$('.portal').forEach(p=>{
    const r=p.getBoundingClientRect(); const cx=r.left+r.width/2, cy=r.top+r.height/2;
    const d=Math.hypot(x-cx,y-cy);
    if(d<best){best=d;winner=p;}
  });
  return best < 125 ? winner : null;
}

orbButton.addEventListener('pointerdown', e=>{
  if (innerWidth <= 900 || sectionOpen) return;
  e.preventDefault();
  orbButton.setPointerCapture(e.pointerId);
  const rect=orbButton.getBoundingClientRect();
  drag={id:e.pointerId, offsetX:e.clientX-(rect.left+rect.width/2), offsetY:e.clientY-(rect.top+rect.height/2)};
  orbButton.classList.add('is-dragging');
});
orbButton.addEventListener('pointermove', e=>{
  if(!drag || drag.id!==e.pointerId) return;
  const x=e.clientX-drag.offsetX, y=e.clientY-drag.offsetY;
  positionOrb(x,y,false); moveEyes(mainOrb,e.clientX,e.clientY,1.5);
  const next=findPortal(x,y);
  if(next!==activePortal){
    if(activePortal) activePortal.classList.remove('is-hot');
    activePortal=next;
    $$('.portal').forEach(p=>p.classList.toggle('is-hot',p===activePortal));
    orbButton.classList.toggle('is-targeting',!!activePortal);
    if(activePortal){ setMood(PORTFOLIO[activePortal.dataset.section].mood); caption.textContent='release'; }
    else { setMood('mood-neutral'); caption.textContent='grab me'; }
  }
});
function finishDrag(e){
  if(!drag || drag.id!==e.pointerId) return;
  const chosen=activePortal;
  drag=null; orbButton.classList.remove('is-dragging','is-targeting');
  $$('.portal').forEach(p=>p.classList.remove('is-hot')); activePortal=null;
  if(chosen) openSection(chosen.dataset.section, chosen);
  else resetOrb(true);
}
orbButton.addEventListener('pointerup',finishDrag);
orbButton.addEventListener('pointercancel',finishDrag);

$$('[data-section]').forEach(btn=>btn.addEventListener('click', ()=>{
  if (drag) return;
  openSection(btn.dataset.section, btn.classList.contains('portal') ? btn : null);
}));

function openSection(key, portal=null) {
  const data=PORTFOLIO[key]; if(!data) return;
  sectionOpen=key;
  setMood(data.mood);
  sectionIndicator.textContent=`${data.kicker} / ${data.index}`;
  $('#detail-kicker').textContent=`${data.index} / ${data.kicker}`;
  $('#detail-title').textContent=data.title;
  detailContent.innerHTML=data.html;
  detailShell.classList.add('is-open');
  detailShell.setAttribute('aria-hidden','false');
  caption.textContent=data.title.toLowerCase();

  if(innerWidth>900){
    const target=portal || $(`.portal[data-section="${key}"]`);
    if(target){ const r=target.getBoundingClientRect(); positionOrb(r.left+r.width/2,r.top+r.height/2,true); }
  }
  setTimeout(()=>detailPanel.focus?.(),300);
  bindProjectMood(); updateProgress();
}

function closeSection(){
  sectionOpen=null;
  detailShell.classList.remove('is-open');
  detailShell.setAttribute('aria-hidden','true');
  sectionIndicator.textContent='ORBIT / 00';
  setTimeout(()=>resetOrb(true),180);
}
$$('[data-close-detail]').forEach(el=>el.addEventListener('click',closeSection));
$('#home-link').addEventListener('click',e=>{e.preventDefault(); if(sectionOpen)closeSection(); else resetOrb(true);});
document.addEventListener('keydown',e=>{ if(e.key==='Escape' && sectionOpen) closeSection(); });

function bindProjectMood(){
  $$('[data-project-card]',detailContent).forEach(card=>{
    card.addEventListener('mouseenter',()=>setMood('mood-wow'));
    card.addEventListener('mouseleave',()=>setMood(PORTFOLIO[sectionOpen]?.mood));
  });
}
function updateProgress(){
  if(!detailPanel) return;
  const max=detailPanel.scrollHeight-detailPanel.clientHeight;
  const p=max>0 ? detailPanel.scrollTop/max : 0;
  progressBar.style.width=`${Math.max(0,Math.min(1,p))*100}%`;
}
detailPanel.addEventListener('scroll',updateProgress,{passive:true});

window.addEventListener('resize',()=>{
  if(!drag && !sectionOpen) resetOrb(false);
  if(innerWidth<=900) orbButton.style.transition='none';
  resizeAmbient();
});

document.addEventListener('visibilitychange',()=>{
  if(document.hidden && !audio.paused){ audio.pause(); }
  else if(!document.hidden && musicWanted){ audio.play().then(()=>setMusicUI(true)).catch(()=>{}); }
});

// Ambient particles: intentionally subtle so the orb stays the main interaction.
const canvas=$('#ambient-canvas'), ctx=canvas.getContext('2d');
let particles=[];
function resizeAmbient(){
  const dpr=Math.min(devicePixelRatio||1,2); canvas.width=innerWidth*dpr; canvas.height=innerHeight*dpr; canvas.style.width=innerWidth+'px'; canvas.style.height=innerHeight+'px'; ctx.setTransform(dpr,0,0,dpr,0,0);
  const count=Math.max(18,Math.min(52,Math.round(innerWidth/32)));
  particles=Array.from({length:count},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.2+.35,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12,a:Math.random()*.18+.035}));
}
function ambientLoop(){
  ctx.clearRect(0,0,innerWidth,innerHeight);
  for(const p of particles){
    p.x+=p.vx; p.y+=p.vy; if(p.x<0)p.x=innerWidth;if(p.x>innerWidth)p.x=0;if(p.y<0)p.y=innerHeight;if(p.y>innerHeight)p.y=0;
    ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(10,10,11,${p.a})`;ctx.fill();
  }
  requestAnimationFrame(ambientLoop);
}
resizeAmbient(); if(!prefersReducedMotion) ambientLoop();
resetOrb(false);
