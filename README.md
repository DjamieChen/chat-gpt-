# Jamie Chen — Interactive Portfolio

A static, responsive portfolio built around an interactive orb interface.

## Run locally

Because the site uses local audio, serve it over HTTP instead of opening `index.html` directly.

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Main interactions

- Opening gate: **Enter with music** or **Enter muted**.
- Desktop: drag the orb into one of the five section portals.
- Mobile: tap the bottom navigation; the same orb changes expression for each section.
- Project cards open the existing Canva portfolio links in a new tab.
- Music can be toggled from the top-right button.

## Customize content

All portfolio copy, categories, and external links are in the `PORTFOLIO` object at the top of `app.js`.

## Files

- `index.html` — app structure
- `style.css` — layout, orb appearance, responsive design
- `app.js` — drag interaction, facial states, section data, music, particles
- `music.mp3` — retained from the previous portfolio
