# Jamie Chen — Interactive Portfolio v4

A static interactive portfolio centered on the original Canva work and a simple draggable orb companion.

## Experience

- The avatar is the first character the visitor meets and directs them to **Get to Know Jamie**.
- The rest of the portfolio unlocks only after the profile link is opened and the visitor returns.
- On return, the avatar greets the visitor and guides them toward the selected work.
- The avatar can be dragged with mouse or touch, carries momentum, and reacts to fast taps.
- Five rapid taps trigger a dizzy spiral-eye animation.
- Inactivity triggers sleep and floating `Zzz`; activity wakes it.
- Supported phones use device orientation as gentle physics input so the avatar slides when the device tilts. iOS motion permission is requested from the entry tap.
- A particle fish system based on the supplied fish effect swims continuously behind the portfolio.
- A fullscreen WGSL/WebGPU background follows the uploaded VGPU canary's fragment-effect pattern. It uses explicit uniforms for time, resolution, and pointer position; browsers without WebGPU fall back to the CSS atmosphere.
- Music remains opt-in and can be toggled from the header.

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Files

- `index.html` — page structure and profile-first flow
- `style.css` — responsive layout, glass layers, avatar states, interactions
- `app.js` — profile gate, music, avatar physics, gyro, fish particles, WebGPU effect
- `music.mp3` — retained portfolio soundtrack
