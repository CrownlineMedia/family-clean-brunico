# Family Clean Brunico — Website

Premium cleaning-services website for **Family Clean Brunico** (Brunico, Italy).
Plain HTML/CSS/JS — no build tools, no installs.

## Brand
- **Name:** Family Clean Brunico
- **Location:** Brunico, Italy (and nearby areas)
- **Phone:** +39 388 8271051 → `tel:+393888271051`
- **Email:** familyclean.brunico@icloud.com → `mailto:familyclean.brunico@icloud.com`
- **Palette:** deep navy · charcoal · soft gray · white · light neutral
- **Type:** Inter (UI), Fraunces (loaded, available for accent use)

## Files
- `index.html` — page structure & content (Home, Services, About, Why, Contact, Footer)
- `styles.css` — full design system (tokens at top: colors, spacing, radius, type)
- `script.js` — header scroll state, mobile menu, scroll-reveal animations
- `logo-full.png` — official logo (used in header + favicon)
- `README.md` — this file

## Images
The hero and About visuals currently load from **Unsplash** (placeholder photography)
with a navy gradient + solid-color fallback, so the page still looks intentional offline.
**For production, replace them with your own photos** by editing the two `background-image`
URLs in `styles.css` (`.hero-bg` and `.about-img`). Recommended: drop real photos into an
`images/` folder and point those URLs at them.

## Contact approach
No online booking. All calls-to-action are phone/email only:
- Header: "Call +39 388 8271051" (phone)
- Hero: "Call for a Free Estimate" / "View Services"
- Services / About / Contact: "Call for a Free Estimate" / "Email Us"

## How to run
Double-click `index.html` to open it in your browser. Edit a file → save → refresh (F5).

## Easy edits
- **Colors:** change `--navy` / `--bg-soft` etc. in the `:root` block of `styles.css`
- **Services:** edit/add `<article class="card">` blocks in `index.html`
- **Hero/About images:** swap the `background-image` URLs in `styles.css`
