NOTES - Niche Sports Programming and Network

This document explains how the website is structured so you can present it confidently during your demo.

## ORGANIZATION

The website is organized into three main sections (pages) that share common code:

1. **Home Page (index.html)** - The starting point with navigation, sport photos, and news filtering
2. **About Page (about.html)** - Project introduction, beginner guides, and history for each sport
3. **Game Day Page (gameday.php)** - PHP page showing sample fixtures, player records, and sport filtering

All pages share the same header, footer, logo, and stylesheet.

## CODE SECTIONS

### 1. HTML STRUCTURE (index.html, about.html, gameday.php)

These files follow a consistent structure:

- `<!DOCTYPE html>` - Standard HTML5 declaration
- `<html lang="en">` - Document root with language attribute
- `<head>` - Contains meta tags, title, and links to stylesheet and JavaScript
- `<body>` - Contains the visible content structured with semantic HTML tags:
  - `<header>` - Site header with logo and title
  - `<nav>` - Navigation menu with links to all three pages
  - `<main>` - Main content area with three sections:
    - Welcome section (Home page)
    - Sport cards section (Home page)
    - News section (Home page)
  - `<footer>` - Page footer with group credits and last updated date

All pages follow the same HTML structure pattern, making it easy to maintain and understand.

### 2. CSS STYLES (styles.css)

The stylesheet organizes CSS into logical sections:

1. **Global page styles** - Body, .page container, and header styles
2. **Navigation** - Nav styling with hover effects and current page highlighting
3. **Headings** - Consistent heading styles for h2 elements
4. **Images** - Flexible image sizing with max-width: 100%
5. **Sport cards** - Flexbox layout with sport-specific accent colors
6. **Latest news section** - News container with filter form and dynamic content area
7. **Table wrappers** - Styling for the Game Day schedule and player records tables
8. **Focus outline** - Keyboard accessibility feature

The CSS uses semantic class names and follows the same structure as the HTML, making it easy to understand how elements are styled.

### 3. JAVASCRIPT (app.js)

The JavaScript file handles the dynamic news filtering on the Home page:

1. **Data structure** - An array of headline objects, each with sport, title, and URL properties
2. **Filter function** - getMatches() filters headlines by sport choice
3. **Display function** - showNews() updates the news list and count when the dropdown changes
4. **Event listener** - sportChoice.addEventListener('change', showNews) triggers updates

The code uses modern JavaScript features like template literals, arrow functions, and querySelector to keep it clean and readable.

### 4. PHP (gameday.php)

This file contains the server-side logic for Game Day:

1. **PHP setup** - Uses header() for content type and htmlspecialchars() for safe output
2. **Data arrays** - $sportLabels defines filter options, $matchTemplates contains sample fixtures, $players contains player records
3. **Filter logic** - GET parameter 'sport' or 'sport[]' is validated and used to filter matches
4. **Output structure** - HTML with a notice section, Game Day section with filter form, schedule table, and player records table

The PHP page uses the same CSS classes as the HTML pages, so the styling is consistent across all pages.

### 5. File Organization

The project structure is clean and logical:

- **images/** - NSPN logos, sport photos and the original SVG artwork
- **logos/** - Logo files (logo.svg and PNG versions)
- **PROJECT_README.txt** - Setup instructions and change summary
- **NOTES.md** - Detailed explanation of changes and considerations

The README.txt file explains how to run the site, and the NOTES.md file explains the changes made during development.

### 7. STATIC NATURE

The website is intentionally static:
- News headlines are hardcoded in app.js and don't update automatically
- Sample fixtures and player records are stored in PHP arrays; fixture dates and statuses are generated relative to the current day
- No backend database or API integration
- All data is manually maintained for demonstration purposes

This approach keeps the project simple, reliable, and focused on teaching core web development concepts without adding unnecessary complexity.

## PRESENTATION TIPS

- **Show the navigation** - Point out how Home, Game Day, and About are linked and how they share the same header/footer
- **Demonstrate the filter** - Show how selecting different sports updates the news list on the Home page
- **Explain the PHP** - Show how gameday.php processes the filter and displays different content based on the selected sport
- **Highlight the CSS** - Point out how the same styles are used across all pages for consistency
- **Mention the static nature** - Emphasize that the news and data are manually maintained for demonstration purposes, as stated in the README
- **Show the PHP** - Demonstrate that PHP is used only where needed (Game Day) and HTML/JS handle the rest

This structure lets you explain each part of the website clearly and shows how the different technologies (HTML, CSS, JavaScript, PHP) work together in a cohesive way.