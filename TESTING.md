# Testing Evidence

Tested on November 16, 2026, on the local PHP server (`php -S localhost:8000`, PHP 8.2) in Chromium.
Each test lists the input, what we expected, what we observed, and a screenshot in the `screenshots/` folder.
No JavaScript errors appeared in the browser console during any test.

## Pages, navigation and images

| # | Test | Input / steps | Expected | Observed | Result | Screenshot |
|---|---|---|---|---|---|---|
| 1 | Home page loads | Open `index.html` | Logo, nav, sport cards with photos, news list | All shown, all images load | Pass | [02-home.png](screenshots/02-home.png) |
| 2 | About page loads | Click **About** | Introduction and three beginner guides with photos | All shown | Pass | [11-about.png](screenshots/11-about.png) |
| 3 | Game Day loads | Click **Game Day** | All sports: 6 fixtures and 6 player records | 6 fixtures and 6 records | Pass | [06-gameday-all.png](screenshots/06-gameday-all.png) |

## Main user tasks

| # | Test | Input / steps | Expected | Observed | Result | Screenshot |
|---|---|---|---|---|---|---|
| 4 | News filter, all sports | Home, Selected news set to **All sports** | "Showing 6 headlines" | "Showing 6 headlines" | Pass | [03-news-all.png](screenshots/03-news-all.png) |
| 5 | News filter, one sport | Choose **Tag** | "Showing 2 headlines", page does not reload | "Showing 2 headlines", no reload | Pass | [04-news-tag.png](screenshots/04-news-tag.png) |
| 6 | Game Day form | Choose **Tag**, click **Show sport** | Address becomes `gameday.php?sport=tag`; only Tag rows | URL `?sport=tag`; only Tag fixtures and players | Pass | [07-gameday-tag.png](screenshots/07-gameday-tag.png) |

## Invalid input and error conditions

| # | Test | Input / steps | Expected | Observed | Result | Screenshot |
|---|---|---|---|---|---|---|
| 7 | Unknown sport | `gameday.php?sport=hacker` | Warning message, fall back to All sports | "Please choose a sport from the list. All sports are shown below." | Pass | [08-invalid-sport.png](screenshots/08-invalid-sport.png) |
| 8 | Array-shaped input | `gameday.php?sport[]=tag` | Same warning, no PHP error | Same warning, no error | Pass | [09-array-input.png](screenshots/09-array-input.png) |
| 9 | Script in the input | `gameday.php?sport=<script>alert(1)</script>` | Rejected; no pop-up runs | Same warning; 0 alert pop-ups fired | Pass | [10-script-input.png](screenshots/10-script-input.png) |
| 10 | JavaScript turned off | Disable JavaScript, open Home | `<noscript>` message explains the empty news list | Message shown | Pass | [05-javascript-off.png](screenshots/05-javascript-off.png) |

## Accessibility

| # | Test | Input / steps | Expected | Observed | Result | Screenshot |
|---|---|---|---|---|---|---|
| 11 | Pop-up on first visit | Open Home in a fresh browser | Accessibility pop-up appears | Pop-up appears | Pass | [01-accessibility-popup.png](screenshots/01-accessibility-popup.png) |
| 12 | Larger text is saved | Turn on **Larger text** on Home, click Save, go to About | About opens with large text | `large-text` class present on About | Pass | [12-large-text-on-about.png](screenshots/12-large-text-on-about.png) |
| 13 | Colorblind mode | Turn on **Colorblind mode**, open Game Day | Blue and orange instead of green and yellow; links underlined | As expected | Pass | [13-colorblind-gameday.png](screenshots/13-colorblind-gameday.png) |
| 14 | Keyboard navigation | Press Tab from the top of Home | Visible yellow focus outline on each control | Outline on the **Game Day** link after 3 Tabs | Pass | [14-keyboard-focus.png](screenshots/14-keyboard-focus.png) |
| 15 | Pop-up by keyboard | Tab to **Accessibility**, press Enter, then Tab, then Esc | Pop-up opens, focus moves inside it, Esc closes it | Opens, focus inside, closed after Esc | Pass | [15-keyboard-popup.png](screenshots/15-keyboard-popup.png) |

## Screen sizes

| # | Test | Input / steps | Expected | Observed | Result | Screenshot |
|---|---|---|---|---|---|---|
| 16 | Home on a phone | 375 px wide window | Cards stack, no sideways scrolling | Page width 375 px, no sideways scroll | Pass | [16-phone-home.png](screenshots/16-phone-home.png) |
| 17 | Game Day table on a phone | 375 px wide window | Table scrolls inside its box, page does not | Page width 375 px; table scrolls in its box | Pass | [17-phone-gameday-table.png](screenshots/17-phone-gameday-table.png) |

## Still to test

- Run from the final ZIP: extract `Group2_NSPN_Final.zip` into a new folder and follow the README.

## Known limitations

- Game Day data is fictional sample data with no database or live source.
- News articles are hand-picked and do not update automatically.
- Game Day needs PHP, so it cannot run on GitHub Pages or by opening the file directly.
- Accessibility settings are saved per browser, not per user account.
- On desktop the Accessibility button wraps onto its own line below the site title.
