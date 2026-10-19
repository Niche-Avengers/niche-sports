Niche Sports Programming and Network - Group 2
Updated October 2026

RUN THE WEBSITE
1. Extract the complete niche-sports folder and open it in VS Code.
2. PHP must be installed and available in the terminal; VS Code does not install it.
3. Open a terminal inside the niche-sports folder and run: php -v
4. Start the local server: php -S localhost:8000
5. Visit http://localhost:8000/ in your browser.
6. Keep the terminal open. Press Ctrl+C to stop the server.
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

WHAT WAS ADDED
- gameday.php: PHP arrays, foreach loops, echo, if/else, and a validated sport filter.
  It displays six sample fixtures and six sample athlete win/loss records.
- about.html: project introduction, beginner guides, short histories and official resources.
- PROJECT_README.txt: setup, change summary and data/source notes.

GAME DAY DATA
Every fixture, date, athlete name, result and record is fictional sample data.
Records describe only the completed sample fixtures, not real athletes or live statistics.
The GET form filters the view; it does not save submissions.
Edit the $matches and $players arrays in gameday.php to maintain demonstration data.
If results change, update player records too. Status is set manually in the array.

NEWS AND GUIDE SOURCES
News links are manually selected and were checked October 2026.
They do not update automatically. Edit the headlines array in app.js for new articles.
All SVG artwork is original vector illustration; no outside images are required.

Pickleball news:
https://www.ppatour.com/veolia-chicago-cup-storylines
https://ppatour.com/tournament/2026/veolia-chicago-cup
World Chase Tag news:
https://www.worldchasetag.com/news/wct8-season-is-here
https://www.worldchasetag.com/wct8-national-championships---team-registration
Power Slap news:
https://powerslap.com/news/power-slap-24-muniz-vs-hintz-official-results
https://powerslap.com/news/power-slap-24-full-fight-card-coin-toss-winners

Beginner/history sources:
https://www.ppatour.com/about/what-is-pickleball/
https://www.ppatour.com/the-origins-of-pickleball/
https://www.worldchasetag.com/
https://www.powerslap.com/rules/
https://www.ufcespanol.com/news/dana-white-announces-launch-power-slap

TEST ON YOUR PHP-ENABLED COMPUTER
- Open Home, Game Day and About; confirm all images and navigation work.
- Home news: All sports shows six links; each sport shows two.
- Game Day: All sports shows six fixtures and six player records;
  each individual sport shows two fixtures and two player records.
- Visit gameday.php?sport=unknown and gameday.php?sport[]=tag.
  Both should show a helpful message and display all sports.
- Check the pages on a narrow phone-sized window and with keyboard navigation.

CHECKS COMPLETED DURING THIS UPDATE
JavaScript syntax, news-filter logic, HTML links/structure and SVG parsing were checked.
PHP execution and a browser render could not be tested in this editing environment.
Run the checks above before presenting the PHP page in class.

LATER PHASE
Live data, automated collection, a database and the club/event map remain future work.
The supplied class demonstration files and group proposal were not modified.