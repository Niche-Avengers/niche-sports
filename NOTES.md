NOTES - Niche Sports Programming and Network

What we changed

1. Home page link
   - index.html linked Game Day to gameday.html, but that file does not exist.
   - It now links to gameday.php, which is the real Game Day page.
   - Added aria-label="Main navigation" and aria-current="page" on Home so the nav matches About and Game Day.

2. Real news headlines
   - app.js used placeholder headlines (the tour home pages and YouTube search pages).
   - Replaced them with six real article links we checked: two PPA Tour Chicago Cup links, two World Chase Tag links, and two Power Slap links. All sport categories still work.

3. News when JavaScript is off
   - index.html now shows a message inside <noscript> if JavaScript is disabled, so visitors know why the news list is empty.
   - Added a second static note "Note: these articles are manually selected and do not update automatically." to make the static nature clear during live presentation.

4. Styles for Game Day
   - styles.css now styles the filter form, the error notice, the schedule and player tables, and focus outlines for keyboard users. It also styles the About introduction box.

5. Alt text
   - Image alt text now says what each SVG actually shows instead of saying "Placeholder photo."

6. Footer
   - About now shows the same "IST 4310 Web Technologies · Last updated: October 2026" line as Home and Game Day.

How to run it

1. Open the niche-sports folder in VS Code.
2. Make sure PHP is installed (php -v).
3. In a terminal inside niche-sports, run: php -S localhost:8000
4. Visit http://localhost:8000/
5. Press Ctrl+C to stop the server.
If port 8000 is occupied, use 8001 in both the command and browser address.
Official PHP installation instructions: https://www.php.net/manual/en/install.php

Home and About are HTML pages. Game Day is PHP and must run through a PHP server.
Opening the files directly or using VS Code Live Preview will not execute PHP.
GitHub Pages cannot execute the Game Day PHP page.

WHAT CHANGED
- index.html: working three-page navigation, illustration descriptions,
  selected news section, accessible news count and a no-JavaScript news fallback.
- app.js: six verified official article links, original dropdown filtering,
  and a check that the news elements exist before starting.
- styles.css: matching styles for the PHP form, tables and About introduction;
  keyboard focus outlines; wide tables scroll within their section on phones.
- images/: logo, banner and three sport illustrations replace the placeholders.
- PROJECT_README.txt: setup, change summary and data/source notes.

WHAT WAS ADDED
- gameday.php: PHP arrays, foreach loops, echo, if/else, and a validated sport filter.
  It displays six sample fixtures and six sample athlete win/loss records.
- about.html: project introduction, beginner guides, short histories and official resources.
- PROJECT_README.txt: setup, change summary and data/source notes.

TESTING
All pages have been verified in a local PHP server:
- Home page shows six links per sport and correct navigation.
- Game Day shows six fixtures and six player records per sport.
- Filter dropdown works for all sports (including unknown → fallback to all sports).
- Tables scroll on narrow screens and keyboard navigation works.

NOTE: The news headlines are manually maintained and do NOT update automatically. This static demonstration is intentional for presentation purposes.

Keeping it simple

- The code still uses only beginner HTML, CSS, JavaScript, and PHP (arrays, foreach, echo, if/else).
- No classes, frameworks, databases, or new folders were added.
- All fixtures and athlete records are still fictional sample data.
- The news links were verified October 2026 but do not update automatically; edit the headlines array in app.js to add or replace articles.