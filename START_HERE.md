# Open and run NSPN

## Purpose
Use this guide to review the Group 2 website in VS Code and present how the current implementation works. The site has Home, Game Day and About pages for Pickleball, World Chase Tag and Power Slap. Game Day is a demonstration using fictional data; it is not a live sports service.

## Open the project
Extract NSPN_VSCode_Review.zip first. In VS Code, choose File > Open Folder and select niche-sports, the folder containing index.html and gameday.php. Open Terminal > New Terminal. Run php -v to confirm PHP is available, then run php -S localhost:8000. Keep that terminal running and open http://localhost:8000/ in a browser. Press Ctrl+C to stop the server.

## Optional VS Code task
Use Terminal > Run Task > Start NSPN PHP server. This task runs the same command; it does not install PHP. If port 8000 is busy, run php -S localhost:8001 and use port 8001 in the browser.

## If PHP is not recognized
PHP must be installed and available on PATH, or invoked using its full executable path. Restart the VS Code terminal after changing PATH. Follow the PHP installation instructions linked in PROJECT_README.txt. Live Server and opening a file directly do not execute PHP. You can review the source while setup is being completed.

## What this review package contains
The October 14 website now includes the existing neon worm logos. Added materials are this Word guide, START_HERE.md, CODE_WALKTHROUGH.md, REVIEW_CHECKLIST.md and a VS Code server task. The original PROJECT_README.txt remains available.

## Current presentation boundaries
The build uses a black and neon green theme taken from the logo, with the compact neon worm logo in every page header and the full NSPN worm logo on Home. The coded sports remain Pickleball, Tag and Power Slap. The older PRD predates the PHP and JavaScript update. RUNIT appears in the artwork only; it has not been added as a content section. Older proposal stretch goals remain future work.
