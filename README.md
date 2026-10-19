# Niche Sports Programming and Network

A three-page website about Pickleball, World Chase Tag and Power Slap, built for IST 4310 Web Technologies.

## Get the code

Clone the repository:

```
git clone https://github.com/Niche-Avengers/niche-sports.git
```

Then open the `niche-sports` folder in VS Code.

You can also download it as a zip from the Code button on the repository page, then extract it and open the folder in VS Code.

## Run the website

PHP must be installed and available in your terminal. VS Code does not install it. Check with:

```
php -v
```

Start a local server from inside the `niche-sports` folder:

```
php -S localhost:8000
```

Then open http://localhost:8000/ in your browser. Keep the terminal open while you work. Press Ctrl+C to stop the server.

If port 8000 is occupied, use 8001 in both the command and the browser address.

Official PHP installation instructions: https://www.php.net/manual/en/install.php

Home and About are plain HTML pages. Game Day is PHP and has to run through a PHP server. Opening the files directly or using VS Code Live Preview will not execute the PHP page, and GitHub Pages cannot run it either.

## The pages

- `index.html` - Home. Welcome banner, the three sport cards, and a Latest news section with a dropdown that filters the articles by sport.
- `gameday.php` - Game Day. A sample schedule, results and player win/loss records, with a form that filters by sport.
- `about.html` - About. A project introduction plus beginner guides, short histories and official resources for each sport.

## The files

- `styles.css` - One stylesheet for all three pages.
- `app.js` - The news filter on the Home page.
- `images/` - Banner and the three sport illustrations.
- `logos/` - The site logo and mascot artwork.
- `NOTES.md` - What we changed and why, in short form.
- `PROJECT_README.txt` - Setup, change summary and data/source notes.

## About the data

Every fixture, date, athlete name, result and record on the Game Day page is fictional sample data. The records only describe the completed sample fixtures, not real athletes or live statistics. The filter form reads the query string and changes what is displayed; it does not save any submissions.

The news articles in `app.js` are manually selected and were checked in October 2026. They do not update automatically. Edit the `headlines` array to add or replace articles.

The Game Day dates are generated relative to the current day, so the schedule and the Completed / Today / Upcoming statuses move forward on their own. To maintain the demonstration data, edit the `$matchTemplates` and `$players` arrays in `gameday.php`. If a result changes, update the player records to match.

## What the site uses

Plain HTML, CSS, JavaScript and PHP. There are no frameworks, libraries, databases or external services. The code stays within the concepts covered in IST 4310 Modules 4 through 7: CSS selectors and the box model, flexbox layout, tables and labeled forms, images with alt text, arrays and filtering, DOM manipulation and event listeners, plus PHP arrays, foreach loops, echo and if/else.

## Group 2

Efrain Suarez, Sebastian Martinez Cruz, Alexander Garcia Salazar, Patrick Rodriguez

IST 4310 Web Technologies - Last updated: October 2026
