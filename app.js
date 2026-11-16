// =========================================================
// app.js: the "Latest news" filter on the Home page
// Uses only Module 6 and Module 7 (Day 1) JavaScript
// =========================================================

// Module 6: a message in the Console proves the file loaded
console.log("app.js loaded");

// ---------- The data (Module 7: an array of objects) ----------
// Each headline is one object with three properties.
// Manually selected official articles. Update these links as new stories appear.
const headlines = [
  { sport: "pickleball", title: "PPA Tour: Championship Sunday stats from the Veolia Chicago Cup", url: "https://www.ppatour.com/championship-sunday-standout-stats-from-the-veolia-chicago-cup/" },
  { sport: "pickleball", title: "PPA Tour: Storylines for the Veolia Chicago Cup", url: "https://www.ppatour.com/veolia-chicago-cup-storylines/" },
  { sport: "tag", title: "World Chase Tag: WCT8 season preview", url: "https://www.worldchasetag.com/news/wct8-season-is-here" },
  { sport: "tag", title: "World Chase Tag: WCT7 World Championship recap", url: "https://www.worldchasetag.com/news/wct7-worlds-recap-morocco-and-france-on-top-of-the-world" },
  { sport: "power-slap", title: "Power Slap 24: Muniz vs. Hintz official results", url: "https://www.powerslap.com/news/power-slap-24-muniz-vs-hintz-official-results/" },
  { sport: "power-slap", title: "Power Slap 25: Louis Robinson and Jujhar Singh matchup announced", url: "https://www.powerslap.com/news/louis-robinson-and-jujhar-singh-set-for-heavyweight-showdown-at-power-slap-25-in-abu-dhabi/" }
];

// ---------- Find the elements (Module 6: querySelector) ----------
// The IDs here must match the IDs in index.html exactly.
const sportChoice = document.querySelector("#sport-choice");
const newsList = document.querySelector("#news-list");
const newsCount = document.querySelector("#news-count");

// ---------- Pick the matching headlines (Module 7: filter) ----------
// Returns every headline if "all" is chosen,
// otherwise only the ones whose sport matches.
function getMatches(choice) {
  if (choice === "all") {
    return headlines;
  }
  return headlines.filter(h => h.sport === choice);
}

// ---------- Show the headlines on the page (Modules 6 and 7) ----------
function showNews() {
  // Read the CURRENT choice inside the function, so it is never stale
  const choice = sportChoice.value;
  const matches = getMatches(choice);

  // Clear the old list first, or old and new headlines pile up
  newsList.replaceChildren();

  // Build one list item with a link for each matching headline
  for (const h of matches) {
    const item = document.createElement("li");
    const link = document.createElement("a");

    link.textContent = h.title;   // plain text, never HTML
    link.href = h.url;            // where the link goes
    link.target = "_blank";       // open outside sites in a new tab
    link.rel = "noopener noreferrer";

    item.append(link);
    newsList.append(item);
  }

  // Module 7: template literal builds the message text
  newsCount.textContent = `Showing ${matches.length} headlines`;
}

// ---------- Run showNews whenever the dropdown changes (Module 6: events) ----------
// Pass the function name (showNews), not showNews(), so it runs on each change.
if (sportChoice && newsList && newsCount) {
  sportChoice.addEventListener("change", showNews);
  // Fill the list once when the page first loads
  showNews();
}

// ---------- Game Day link when a page is opened as a plain file ----------
// Game Day needs PHP, and PHP only runs through the local server.
const gameDayLink = document.querySelector('nav a[href="gameday.php"]');
if (gameDayLink && window.location.protocol === "file:") {
  gameDayLink.href = "http://localhost:8001/gameday.php";
}

// ---------- Accessibility options (every page) ----------
// The Accessibility button opens a pop-up (<dialog>) with two tick boxes.
// Each tick box adds or removes one class on the <html> element,
// and styles.css does the rest (see "Accessibility options" there).
// Choices are saved in localStorage so they stay on every page.
const a11yDialog = document.querySelector("#a11y-dialog");
const a11yOpen = document.querySelector("#a11y-open");
const colorblindBox = document.querySelector("#colorblind-toggle");
const textBox = document.querySelector("#text-toggle");
const a11ySave = document.querySelector("#a11y-save");
const a11ySkip = document.querySelector("#a11y-skip");

// Read or save one setting. If the browser blocks storage,
// the options still work, but only for the current page.
function loadSetting(name) {
  try {
    return localStorage.getItem(name);
  } catch (error) {
    return null;
  }
}

function saveSetting(name, value) {
  try {
    localStorage.setItem(name, value);
  } catch (error) {
    console.log("Settings cannot be saved in this browser.");
  }
}

// Turn the options on or off to match the tick boxes
function applyOptions() {
  document.documentElement.classList.toggle("colorblind", colorblindBox.checked);
  document.documentElement.classList.toggle("large-text", textBox.checked);
}

// Put the tick boxes back to the saved choices
function restoreSaved() {
  colorblindBox.checked = loadSetting("colorblind") === "on";
  textBox.checked = loadSetting("large-text") === "on";
  applyOptions();
}

if (a11yDialog && a11yOpen && colorblindBox && textBox && a11ySave && a11ySkip) {
  // Start with the choices saved from an earlier visit
  restoreSaved();

  // Ticking a box shows the change right away
  colorblindBox.addEventListener("change", applyOptions);
  textBox.addEventListener("change", applyOptions);

  a11yOpen.addEventListener("click", function () {
    a11yDialog.showModal();
  });

  // Save: keep the ticked options
  a11ySave.addEventListener("click", function () {
    saveSetting("colorblind", colorblindBox.checked ? "on" : "off");
    saveSetting("large-text", textBox.checked ? "on" : "off");
    saveSetting("a11y-asked", "yes");
    a11yDialog.close();
  });

  // No thanks: turn everything off
  a11ySkip.addEventListener("click", function () {
    colorblindBox.checked = false;
    textBox.checked = false;
    applyOptions();
    saveSetting("colorblind", "off");
    saveSetting("large-text", "off");
    saveSetting("a11y-asked", "yes");
    a11yDialog.close();
  });

  // Esc key: close without saving, so go back to the saved choices
  a11yDialog.addEventListener("cancel", function () {
    restoreSaved();
    saveSetting("a11y-asked", "yes");
  });

  // First visit: ask the visitor once
  if (loadSetting("a11y-asked") === null) {
    a11yDialog.showModal();
  }
}
