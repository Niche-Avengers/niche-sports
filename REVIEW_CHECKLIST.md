# Review checklist

## Checks completed for this package
JavaScript syntax passed. An automated lightweight DOM test verified six news items for All sports and two per sport, list clearing, count messages and the missing-element guard. Local file links and image references exist, image elements have alt text, and all five SVGs parse as XML. These checks do not replace a browser or accessibility test.

## Checks still needed on your computer
PHP is not installed in the review environment, so PHP execution was not tested here. Open all three pages through localhost. Confirm Game Day shows six fixtures and six player rows for All sports, and two of each for each individual sport. Confirm filters and navigation work repeatedly.

## Invalid input rehearsal
Visit http://localhost:8000/gameday.php?sport=unknown and http://localhost:8000/gameday.php?sport[]=tag. Expected behavior from code review: a helpful message and all records. Then return to the normal URL. Confirm there are no PHP warnings or errors.

## Visual and accessibility rehearsal
Check desktop and narrow mobile widths. Verify images load, cards wrap and wide tables scroll. Tab through links, dropdowns and buttons, confirming a visible focus outline. Check text readability and zoom. Confirm the actual presentation browser behaves correctly.

## Content rehearsal
Open the external links before class; this review did not recheck their availability. The code states links were checked October 14, 2026. Keep fictional data identified as sample data. Do not call the news automatic, the schedules live, or the player records calculated.

## Files to edit for the next revision
Edit index.html for Home structure, app.js for news titles and URLs, gameday.php for fixtures and player records, about.html for guides, and styles.css for the shared design. Image filenames and references must agree. A new sport needs updates across the dropdowns, labels, data, cards and guides.

## Project roles
Efrain Suarez leads and organizes the team. Sebastian Martinez Cruz owns design and accessibility. Alexander Garcia Salazar coordinates meetings, notes and timeline. Patrick Rodriguez researches content and statistics. These roles come from the proposal; the suggested speaker assignments can change.

## Review basis
Prepared November 4, 2026 from the inspected Group2_NicheSports_PHP_Update.zip and its PROJECT_README.txt, with team roles from the Group 2 Proposal and a November 4 logo integration update. This review package updates header images, the Home hero and logo sizing; the PHP and JavaScript behavior remains unchanged apart from a November 9 update that generates Game Day dates and statuses relative to the current day. The guide describes the actual implementation rather than the older PRD requirements.
