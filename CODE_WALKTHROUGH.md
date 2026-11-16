# Code walkthrough

## index html and shared structure
Open index.html. The head links styles.css and loads app.js with defer, so the script runs after HTML parsing. The body contains header, nav, main and footer elements. The current link uses aria-current. The Home dropdown has id sport-choice; news-list and news-count are the elements JavaScript updates. Header and footer markup is repeated across pages rather than loaded through PHP includes.

## styles css and layout
Open styles.css. The .page class limits content width and centers it. .content-row uses display: flex, flex-wrap: wrap and gap. Each .sport card can grow or shrink from a 16rem basis. Images use max-width: 100%. On Game Day, .table-wrap uses overflow-x: auto so wide tables can scroll. Focus-visible rules make keyboard focus easier to see. These are layout techniques, not proof of a completed accessibility audit.

## app js and the Home filter
The headlines array contains six objects with sport, title and url properties. querySelector finds the three Home elements. getMatches returns all headlines or uses filter to match the chosen sport. showNews clears old children, creates an li and a link for each result, and updates the count. A change listener calls showNews, and an initial call fills the page. The element guard avoids errors if the required elements are absent.

## gameday php and input validation
The file begins by setting the HTML content type. The e function uses htmlspecialchars before values are printed into HTML. The raw sport comes from $_GET, with all as the default. is_string rejects array-shaped input; trim removes surrounding spaces. Strict in_array checks the allowed values. Invalid input produces a message and falls back to All sports.

## gameday php and table generation
The sportLabels array supplies names for the dropdown and tables. matchTemplates stores six fixtures with day offsets, and a foreach loop builds matches from them, working out each date and status from the current day. players stores six records. foreach loops visit each record, while if conditions include all records or only the selected sport. echo writes values into the returned HTML. Completed entries show their result; an entry dated today shows In progress; other entries show Not played. Player wins and losses are separate values, not automatically calculated from fixtures.

## about html and images
About contains static project text, guides, histories and resource links. The images directory contains nspn-worm-logo.png for the shared headers and nspn-worms-collide.png for the Home hero. Their proportions are preserved with height: auto. The sport cards on Home use the photos pickleball.jpg, tag.jpg and power-slap.jpg, and About uses pickleball-2.jpg, tag-2.jpg and power-slap-2.jpg; the original SVG artwork remains in the folder.

## Two different request flows
Home: browser loads HTML and JavaScript, then dropdown changes update the existing page locally. Game Day: browser submits a GET request such as gameday.php?sport=tag, PHP generates matching HTML on the server, and the browser loads that response. The browser does not execute the PHP source.
