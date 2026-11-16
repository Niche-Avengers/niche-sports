# Project Progress Log

A step-by-step record of how the NSPN website was built: what we started with, what we changed, what we improved and what we added later. Newest work is at the bottom. Planned work is listed at the end.

Group 2 — IST 4310 Web Technologies

---

## Stage 1 — Planning (early October 2026)

- Wrote the project proposal and PRD for **Niche Sports Programming and Network (NSPN)**.
- Chose three niche sports: **Pickleball, World Chase Tag and Power Slap**.
- Planned three pages: **Home**, **Game Day** and **About**.
- Stretch goals (live data, a database, a club/event map) were set aside as future work.

## Stage 2 — First build (October 14, 2026)

**What we started with**
- `index.html` (Home), `about.html`, `styles.css`, `app.js`, `gameday.php`.
- Placeholder SVG images and placeholder news links.

**What we added**
- `gameday.php`: PHP arrays, `foreach` loops, `echo`, `if/else` and a validated sport filter. Shows six sample fixtures and six sample player win/loss records.
- `about.html`: project introduction, beginner guides, short histories and official resources for each sport.
- `PROJECT_README.txt`: setup steps, change summary and data/source notes.

## Stage 3 — Fixes and first GitHub upload (October 19, 2026)

**What we changed / fixed**
- Home linked to `gameday.html`, which did not exist. It now links to `gameday.php`.
- Navigation now matches on all pages (`aria-label` and `aria-current`).
- Replaced placeholder news links with **six real, verified articles** (two per sport).
- Image alt text now describes what each image shows instead of "Placeholder photo."
- About page footer now matches Home and Game Day.

**What we improved**
- A `<noscript>` message explains the empty news list when JavaScript is off.
- A note says the news articles are hand-picked and do not update automatically.
- Styles for the Game Day filter form, error notice and tables, plus visible keyboard focus outlines.
- Wide tables scroll inside their section on phones.

**GitHub**
- Created the `Niche-Avengers/niche-sports` repository and pushed the first version.
- Added `README.md` with clone and run instructions.

## Stage 4 — Logo update (November 4, 2026)

**What we added**
- The neon worm logo (`images/nspn-worm-logo.png`) in every page header.
- The full NSPN worm crest on the Home page hero.

PHP and JavaScript behavior did not change.

## Stage 5 — Theme and photo update (November 9, 2026)

**What we changed**
- New color theme taken from the logo: black, neon green, bag green, worm cream and pickleball yellow.
- Home hero now shows `images/nspn-worms-collide.png`.
- The three sport SVG illustrations were recolored to match.

**What we added**
- Real sport photos on the Home cards and the About page (owners credited; the Tag photo is by danidevaux.com).
- Review package: `START_HERE.md`, `CODE_WALKTHROUGH.md`, `REVIEW_CHECKLIST.md`, `PRESENTATION_NOTES.md`, the Word speaker notes and a VS Code task that starts the PHP server.

## Stage 6 — Synced to GitHub (November 16, 2026)

- Committed and pushed all work from Stages 4 and 5 so the repository is up to date for the whole group.
- Added this progress log.

## Stage 7 — Accessibility options (November 16, 2026)

**What we added**
- A yellow **Accessibility** button in the header of every page.
- An accessibility pop-up (a `<dialog>` box) that asks first-time visitors whether they want accessibility mode on. It has two options:
  - **Colorblind mode**: swaps neon green and yellow for sky blue and orange, which most colorblind visitors can tell apart, and underlines links.
  - **Larger text**: makes all text on the site 25% bigger.
- Choices are saved in the browser (`localStorage`), so they stay on across Home, Game Day and About.

**What we changed**
- `gameday.php` now loads `app.js`, so the pop-up works on Game Day too.
- A first version used two large buttons in the header. We replaced them with the pop-up because it looked cleaner and was easier to notice.

**Beyond class material** (explained in code comments): `<dialog>`, `localStorage`, `classList.toggle()` and `try/catch`.

## Stage 8 — Testing evidence (November 16, 2026)

**What we added**
- `TESTING.md`: 17 tests with input, expected result, observed result and a screenshot for each.
- `screenshots/`: 17 screenshots covering pages, the news filter, the Game Day form, invalid input, JavaScript turned off, accessibility, keyboard use and phone-width layouts.

**Results**
- All 17 tests passed, with no JavaScript errors in the console.
- Found two small fixes for later: the Accessibility button wraps below the title on desktop, and the footer still says October 2026.

---

## Next steps (planned)

Status key: ⬜ not started · 🟨 in progress · ✅ done

### Accessibility
- ✅ Accessibility controls in the header on every page
- ✅ Colorblind mode (high-contrast, colorblind-safe palette)
- ✅ Larger text mode
- ✅ Remember the visitor's choice in the browser (`localStorage`)

### Privacy
- ⬜ Privacy policy page: no tracking cookies, no analytics, no stored personal data

### Security
- ⬜ Security page showing each protection with its code, test input, and expected vs. observed result
- ⬜ Document the existing protections: allowlist input validation and output escaping (`htmlspecialchars`) in `gameday.php`
- ⬜ One improvement: security headers (Content-Security-Policy, X-Frame-Options, nosniff, Referrer-Policy)
- ⬜ Contact/feedback form with server-side validation, CSRF token and honeypot
- ⬜ Optional: SQL injection demonstration (vulnerable vs. fixed version, run locally only), with the stages documented

### Testing and documentation
- ✅ Testing screenshots for each feature (`TESTING.md`, `screenshots/`)
- ⬜ Update `README.md` with the new features, contributions and source credits
- ⬜ Fix: Accessibility button wraps on desktop; footer date; Game Day port 8001 vs 8000 in `app.js`
- ⬜ Make `Group2_NSPN_Final.zip` and test it from a new folder
