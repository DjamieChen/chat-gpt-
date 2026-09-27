# Jamie Chen Interactive Portfolio — v3

A static interactive portfolio centered on direct Canva work links and the original simple black-orb avatar.

## Interaction flow

1. Visitor chooses **Allow music** or **Continue muted**.
2. Visitor must open **Get to Know Jamie** first.
3. When they return from the Canva presentation, the rest of the portfolio unlocks.
4. The avatar remains fixed on screen throughout the experience.

## Avatar interactions

- Eyes track the mouse/touch position.
- Automatic blinking and subtle floating motion.
- Project hover/focus changes the eye expression without adding a complicated face.
- Five rapid taps/clicks trigger swirly dizzy eyes and a wobble.
- After 18 seconds without interaction, the avatar falls asleep and animated Zzz appear.
- Any interaction wakes it back up.

## Run locally

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.
