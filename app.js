// =========================================================
// app.js: the "Latest news" filter on the Home page
// Uses only Module 6 and Module 7 (Day 1) JavaScript
// =========================================================

// Module 6: a message in the Console proves the file loaded
console.log("app.js loaded");

// ---------- The data (Module 7: an array of objects) ----------
// Each headline is one object with three properties.
// NOTE: These are manually maintained and NOT updated automatically.
// For presentation: explain that this is static demonstration data.
const headlines = [
  { sport: "pickleball", title: "Championship Sunday Standout Stats from the Veolia Chicago Cup", url: "https://www.ppatour.com/veolia-chicago-cup-storylines" },
  { sport: "pickleball", title: "Veolia Chicago Cup | Carvana PPA Tour", url: "https://ppatour.com/tournament/2026/veolia-chicago-cup" },
  { sport: "tag", title: "WCT8 Season Is Here", url: "https://www.worldchasetag.com/news/wct8-season-is-here" },
  { sport: "tag", title: "WCT8 National Championship Cup", url: "https://www.worldchasetag.com/wct8-national-championships---team-registration" },
  { sport: "power-slap", title: "Power Slap 24: Muniz vs Hintz Official Results", url: "https://powerslap.com/news/power-slap-24-muniz-vs-hintz-official-results" },
  { sport: "power-slap", title: "Power Slap 24 Full Fight Card", url: "https://powerslap.com/news/power-slap-24-full-fight-card-coin-toss-winners" }
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

    item.append(link);
    newsList.append(item);
  }

  // Module 7: template literal builds the message text
  newsCount.textContent = `Showing ${matches.length} headlines`;
}

// ---------- Run showNews whenever the dropdown changes (Module 6: events) ----------
// Pass the function name (showNews), not showNews(), so it runs on each change.
sportChoice.addEventListener("change", showNews);

// Fill the list once when the page first loads
showNews();
