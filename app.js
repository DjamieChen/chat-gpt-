(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const entry = $('#entry');
  const site = $('#site');
  const music = $('#music');
  const sound = $('#sound');
  const enterMusic = $('#enter-music');
  const enterMuted = $('#enter-muted');
  const introLink = $('#intro-presentation');
  const gateProgress = $('#gate-progress');
  const gateStatus = $('#gate-status');
  const projects = $('#projects');
  const projectsNav = $('#projects-nav');
  const unlockMessage = $('#unlock-message');

  const companion = $('#avatar-companion');
  const avatarButton = $('#avatar-button');
  const leftEye = $('#left-eye');
  const rightEye = $('#right-eye');
  const note = $('#avatar-note');

  let musicWanted = false;
  let noteTimer = null;
  let idleTimer = null;
  let sleepy = false;
  let dizzy = false;
  let introOpened = false;
  let introLeftPage = false;
  let lastPointer = { x: innerWidth / 2, y: innerHeight / 2 };
  let eyeX = 0;
  let eyeY = 0;
  let targetEyeX = 0;
  let targetEyeY = 0;
  let expression = 'neutral';
  const clickTimes = [];

  const EXPRESSIONS = {
    neutral: { w: 26, h: 42 },
    happy: { w: 28, h: 27 },
    excited: { w: 30, h: 49 },
    focus: { w: 29, h: 17 },
    curious: { w: 25, h: 42, split: true },
    proud: { w: 28, h: 30 },
    wink: { w: 27, h: 39, wink: true },
    sleeping: { w: 31, h: 5 },
  };

  function say(text, duration = 1700) {
    if (!text || sleepy) return;
    note.textContent = text;
    note.classList.add('is-visible');
    clearTimeout(noteTimer);
    noteTimer = setTimeout(() => note.classList.remove('is-visible'), duration);
  }

  function setExpression(name = 'neutral') {
    if (dizzy || sleepy) return;
    expression = EXPRESSIONS[name] ? name : 'neutral';
  }

  function setMusicUI(on) {
    sound.classList.toggle('is-on', on);
    sound.setAttribute('aria-label', on ? 'Pause music' : 'Play music');
  }

  async function playMusic() {
    musicWanted = true;
    try {
      music.volume = 0.52;
      await music.play();
      setMusicUI(true);
    } catch (_) {
      setMusicUI(false);
    }
  }

  function pauseMusic() {
    musicWanted = false;
    music.pause();
    setMusicUI(false);
  }

  function enterSite(withMusic) {
    entry.classList.add('is-gone');
    site.classList.add('is-visible');
    site.setAttribute('aria-hidden', 'false');
    if (withMusic) playMusic(); else pauseMusic();
    say('first, meet me.', 2300);
    resetIdle();
  }

  enterMusic.addEventListener('click', () => enterSite(true));
  enterMuted.addEventListener('click', () => enterSite(false));
  sound.addEventListener('click', () => music.paused ? playMusic() : pauseMusic());

  function unlockPortfolio() {
    if (!projects.classList.contains('is-locked')) return;
    sessionStorage.setItem('jamie-intro-seen', '1');
    projects.classList.remove('is-locked');
    projects.classList.add('is-unlocked');
    projects.setAttribute('aria-hidden', 'false');
    projectsNav.classList.remove('nav-link--locked');
    projectsNav.removeAttribute('aria-disabled');
    unlockMessage.classList.add('is-visible');
    unlockMessage.setAttribute('aria-hidden', 'false');
    gateProgress.classList.add('is-ready');
    gateStatus.textContent = 'Unlocked — thanks for watching.';
    setExpression('excited');
    say('welcome back ✦', 2600);
    setTimeout(() => unlockMessage.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350);
  }

  if (sessionStorage.getItem('jamie-intro-seen') === '1') {
    introOpened = true;
    introLeftPage = true;
    unlockPortfolio();
  }

  introLink.addEventListener('click', () => {
    introOpened = true;
    introLeftPage = false;
    gateStatus.textContent = 'Watching for your return…';
    gateProgress.classList.add('is-ready');
    setExpression('happy');
    say('see you in a minute.', 2200);
  });

  const markAway = () => {
    if (introOpened && !projects.classList.contains('is-unlocked')) introLeftPage = true;
  };
  window.addEventListener('blur', markAway);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) markAway();
    else if (introOpened && introLeftPage) unlockPortfolio();
  });
  window.addEventListener('focus', () => {
    if (introOpened && introLeftPage) unlockPortfolio();
    if (musicWanted && music.paused) music.play().then(() => setMusicUI(true)).catch(() => {});
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && !music.paused) music.pause();
    else if (!document.hidden && musicWanted && music.paused) music.play().then(() => setMusicUI(true)).catch(() => {});
  });

  function updateTarget(x, y) {
    lastPointer = { x, y };
    const rect = avatarButton.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = x - cx;
    const dy = y - cy;
    const mag = Math.max(1, Math.hypot(dx, dy));
    const strength = Math.min(1, mag / 260);
    targetEyeX = (dx / mag) * 20 * strength;
    targetEyeY = (dy / mag) * 17 * strength;
  }

  function eyeLoop() {
    eyeX += (targetEyeX - eyeX) * 0.14;
    eyeY += (targetEyeY - eyeY) * 0.14;

    if (!dizzy) {
      const cfg = sleepy ? EXPRESSIONS.sleeping : EXPRESSIONS[expression] || EXPRESSIONS.neutral;
      const w = cfg.w;
      const h = cfg.h;
      const baseY = 109 - h / 2;
      const split = cfg.split ? 5 : 0;
      const blinkH = companion.classList.contains('is-blinking') ? 3 : h;
      const winkLeftH = cfg.wink ? 4 : blinkH;

      leftEye.setAttribute('width', w);
      leftEye.setAttribute('height', winkLeftH);
      leftEye.setAttribute('rx', Math.min(w / 2, winkLeftH / 2));
      leftEye.setAttribute('ry', Math.min(w / 2, winkLeftH / 2));
      leftEye.setAttribute('x', 76 + eyeX - split);
      leftEye.setAttribute('y', 109 - winkLeftH / 2 + eyeY);

      rightEye.setAttribute('width', w);
      rightEye.setAttribute('height', blinkH);
      rightEye.setAttribute('rx', Math.min(w / 2, blinkH / 2));
      rightEye.setAttribute('ry', Math.min(w / 2, blinkH / 2));
      rightEye.setAttribute('x', 132 + eyeX + split);
      rightEye.setAttribute('y', baseY + eyeY + (h - blinkH) / 2);
    }
    requestAnimationFrame(eyeLoop);
  }
  eyeLoop();

  function blink() {
    if (sleepy || dizzy) return;
    companion.classList.add('is-blinking');
    setTimeout(() => companion.classList.remove('is-blinking'), 145);
  }
  function scheduleBlink() {
    setTimeout(() => { blink(); scheduleBlink(); }, 2200 + Math.random() * 3000);
  }
  scheduleBlink();

  function boop() {
    companion.classList.remove('is-booped');
    void companion.offsetWidth;
    companion.classList.add('is-booped');
    setTimeout(() => companion.classList.remove('is-booped'), 380);
  }

  function triggerDizzy() {
    if (dizzy) return;
    wakeUp();
    dizzy = true;
    companion.classList.add('is-dizzy');
    note.textContent = 'woah…';
    note.classList.add('is-visible');
    targetEyeX = targetEyeY = 0;
    setTimeout(() => {
      companion.classList.remove('is-dizzy');
      dizzy = false;
      expression = 'neutral';
      note.textContent = 'i’m okay.';
      setTimeout(() => note.classList.remove('is-visible'), 1200);
    }, 3000);
  }

  avatarButton.addEventListener('pointerup', () => {
    const now = performance.now();
    clickTimes.push(now);
    while (clickTimes.length && now - clickTimes[0] > 1200) clickTimes.shift();
    boop();
    if (clickTimes.length >= 5) {
      clickTimes.length = 0;
      triggerDizzy();
    } else if (!dizzy) {
      const reactions = ['happy', 'excited', 'wink', 'curious'];
      expression = reactions[(clickTimes.length - 1) % reactions.length];
      setTimeout(() => { if (!dizzy && !sleepy) expression = 'neutral'; }, 650);
    }
  });

  function sleep() {
    if (dizzy || entry && !entry.classList.contains('is-gone')) {
      resetIdle();
      return;
    }
    sleepy = true;
    companion.classList.add('is-sleeping');
    note.classList.remove('is-visible');
    targetEyeX = targetEyeY = 0;
  }

  function wakeUp() {
    if (!sleepy) return;
    sleepy = false;
    companion.classList.remove('is-sleeping');
    expression = 'excited';
    say('oh—hi.', 1000);
    setTimeout(() => { if (!dizzy && !sleepy) expression = 'neutral'; }, 700);
  }

  function resetIdle() {
    if (sleepy) wakeUp();
    clearTimeout(idleTimer);
    idleTimer = setTimeout(sleep, 18000);
  }

  ['pointermove', 'pointerdown', 'touchstart', 'keydown', 'wheel', 'scroll'].forEach(eventName => {
    window.addEventListener(eventName, resetIdle, { passive: true });
  });

  window.addEventListener('pointermove', e => updateTarget(e.clientX, e.clientY), { passive: true });
  window.addEventListener('touchmove', e => {
    const t = e.touches && e.touches[0];
    if (t) updateTarget(t.clientX, t.clientY);
  }, { passive: true });

  const reactives = $$('[data-expression]');
  reactives.forEach(el => {
    const enter = () => {
      setExpression(el.dataset.expression || 'neutral');
      say(el.dataset.say || '', 1600);
    };
    const leave = () => {
      if (!sleepy && !dizzy) expression = 'neutral';
    };
    el.addEventListener('mouseenter', enter);
    el.addEventListener('focus', enter);
    el.addEventListener('mouseleave', leave);
    el.addEventListener('blur', leave);
  });

  const cards = $$('.project-card');
  if ('IntersectionObserver' in window && matchMedia('(max-width: 900px)').matches) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible || sleepy || dizzy) return;
      expression = visible.target.dataset.expression || 'neutral';
    }, { threshold: [0.45, 0.7] });
    cards.forEach(card => observer.observe(card));
  }

  resetIdle();
})();
