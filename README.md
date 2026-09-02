# DanGlo Fast Foods & Drinks — Website Build Notes

Static site. No build step, no framework, no backend. Works fully with JavaScript disabled (JS only adds the live open/closed indicator and menu-item accordions, neither of which exist yet on this build).

## File structure

```
/
├── index.html          Homepage
├── menu.html           Full menu (flat list, no categories)
├── robots.txt
├── sitemap.xml
├── css/
│   ├── tokens.css      Design tokens (colors, spacing, type — see "Pending" below)
│   ├── base.css        Reset + global element styles
│   └── components.css  Header, hero, menu cards, buttons, sticky bar, footer
├── js/
│   └── app.js          Progressive enhancement only (open/closed status, accordion)
├── data/
│   └── menu-items.js   Canonical menu reference (NOT fetched at runtime — see note in file)
└── images/
    ├── danglo-logo-header.png   Compressed logo for header use
    └── danglo-og.jpg            Compressed image for social share previews
```

## ⚠️ Placeholder domain

`danglofastfoods.com` is used throughout (canonical URLs, sitemap, Schema.org `url`/`hasMenu` fields) as a **placeholder only** — no real domain has been confirmed yet. Before deployment, find-and-replace this with the actual domain once chosen.

## Pending items (non-blocking — site works without them, but should be resolved)

| Item | Where it matters | Current state |
|---|---|---|
| Primary phone number | Sticky bar `Call` button, header `Call` button | Currently defaults to 07033408517 (first-listed). Both numbers appear in the footer. Swap if DanGlo designates the other as primary. |
| Exact brand colors | `css/tokens.css` | Values are photo-estimated from the logo image, not sampled. Open `danglo-logo-header.png` (or the original logo file) in an image editor's eyedropper tool and update `--color-primary`, `--color-secondary`, `--color-accent-gold` in `tokens.css` if the sampled values differ meaningfully. |
| Precise map coordinates | `index.html` map iframe + all "Get Directions" links | Currently uses a Google Maps **text search** on the landmark address (functional, but not as precise as a pinned coordinate). Verify the actual resolved pin after deployment; if DanGlo later provides a Google Maps pin, replace the `query=` parameter with `lat,lng` in both the iframe `src` and all Directions `href` links (search for `Adjacent%20Taishan` to find every instance). |
| Food photography | Menu preview, menu page | **Deliberately deferred, not a blocker.** No real DanGlo food photography exists yet. Text-only menu cards are the correct interim state — do not substitute stock photography under any circumstance. Add real photos whenever a photo session happens; the photography-first grid structure is already built and will accept real images without any redesign. |
| Favicon | `<head>` of both HTML files | Intentionally omitted — the full illustrated logo is too detailed for a favicon and no wordmark-only asset exists. Add `<link rel="icon" href="...">` once a simplified mark is supplied. Do not improvise one. Optional for initial launch. |
| Hosting/domain | Deployment | Not yet chosen. Any static host works (Netlify, Vercel, GitHub Pages, or existing hosting under the Google Business Profile work). |

**Confirmed and resolved:** Sunday hours are now confirmed **Closed** and reflected consistently in the homepage status text, footer (both pages), the `noscript` fallback, `js/app.js`'s live status logic, and Schema.org (Sunday is correctly omitted from `openingHoursSpecification`, which is the valid convention for "closed" — no separate zero-hours entry needed).

## How the WhatsApp links work

Every "Ask about this" link is a static, pre-built `wa.me` URL with a fixed, pre-approved message template — there is no cart and no itemized multi-item message construction (see project decisions). Two templates only:

- **Per-item inquiry:** `Hi DanGlo, is the [ITEM] available? I'd also like to know today's price.`
- **General ordering:** `Hi DanGlo, I'd like to place an order. Please let me know today's available options and prices.`

If the menu ever changes, regenerate the encoded URLs for any new/renamed items rather than hand-editing the encoded string (URL-encoding by hand is error-prone). A short Python snippet using `urllib.parse.quote` on the message text is enough.

## No-JS guarantee

Every Call, WhatsApp, and Directions link in this build is a real, static `<a href="...">` — none of them are constructed by JavaScript. Disabling JavaScript in a browser and testing both pages confirms all core actions still work; only the live "Open now / Closed now" indicator and any future accordion interactions are JS-only enhancements.
