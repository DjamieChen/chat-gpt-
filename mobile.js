(() => {
  const isPhone = () => matchMedia('(max-width: 760px) and (pointer: coarse)').matches;
  const avatarSvg = document.getElementById('avatar-svg');
  if (!avatarSvg || !isPhone() || typeof DeviceOrientationEvent === 'undefined') return;

  let base = null;
  let current = { x: 0, y: 0, z: 0 };
  let target = { x: 0, y: 0, z: 0 };
  let listening = false;

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  function normalize(beta, gamma) {
    let b = beta;
    let g = gamma;
    const angle = screen.orientation?.angle ?? window.orientation ?? 0;
    if (angle === 90) [g, b] = [b, -g];
    else if (angle === 270 || angle === -90) [g, b] = [-b, g];
    else if (Math.abs(angle) === 180) [g, b] = [-g, -b];
    return { b, g };
  }

  function onOrientation(e) {
    if (e.beta == null || e.gamma == null) return;
    const n = normalize(e.beta, e.gamma);
    if (!base) base = n;

    const dx = clamp(n.g - base.g, -32, 32);
    const dy = clamp(n.b - base.b, -32, 32);

    // Head follows the physical tilt without moving the entire companion.
    target.y = dx * 0.34;
    target.x = -dy * 0.24;
    target.z = dx * 0.10;
  }

  function animate() {
    current.x += (target.x - current.x) * 0.14;
    current.y += (target.y - current.y) * 0.14;
    current.z += (target.z - current.z) * 0.14;
    avatarSvg.style.setProperty('--gyro-head-x', `${current.x.toFixed(2)}deg`);
    avatarSvg.style.setProperty('--gyro-head-y', `${current.y.toFixed(2)}deg`);
    avatarSvg.style.setProperty('--gyro-head-z', `${current.z.toFixed(2)}deg`);
    requestAnimationFrame(animate);
  }

  function startListening() {
    if (listening) return;
    listening = true;
    window.addEventListener('deviceorientation', onOrientation, { passive: true });
    window.addEventListener('orientationchange', () => { base = null; }, { passive: true });
    animate();
  }

  async function enableGyro() {
    try {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        const permission = await DeviceOrientationEvent.requestPermission();
        if (permission !== 'granted') return;
      }
      startListening();
    } catch (_) {}
  }

  // Permission-gated iPhones require a user gesture; Android starts here too.
  ['enter-music', 'enter-muted'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', enableGyro, { once: true });
  });
})();
