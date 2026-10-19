<?php
// Run this page through a PHP server, as in the class examples.
header('Content-Type: text/html; charset=UTF-8');

// Escape text before displaying it in HTML.
function e($text) {
    return htmlspecialchars($text, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$sportLabels = [
    'all' => 'All sports',
    'pickleball' => 'Pickleball',
    'tag' => 'Tag',
    'power-slap' => 'Power Slap'
];

// GET lets visitors filter the page without saving a submission.
$rawSport = $_GET['sport'] ?? 'all';
$selectedSport = is_string($rawSport) ? trim($rawSport) : '';
$allowedSports = ['all', 'pickleball', 'tag', 'power-slap'];
$error = '';
if (!in_array($selectedSport, $allowedSports, true)) {
    $error = 'Please choose a sport from the list. All sports are shown below.';
    $selectedSport = 'all';
}

// Every name and fixture below is fictional demonstration data.
// The dates are generated relative to the current day so the schedule updates automatically over time.
$today = new DateTimeImmutable('today');
$matchTemplates = [
    ['sport' => 'pickleball', 'players' => 'Morgan Vale vs. Casey Reed', 'result' => 'Morgan Vale won, 11–7, 11–9', 'offset' => -4],
    ['sport' => 'pickleball', 'players' => 'Morgan Vale vs. Casey Reed (rematch)', 'result' => '', 'offset' => 3],
    ['sport' => 'tag', 'players' => 'Sky Rowan vs. Drew Finch', 'result' => 'Sky Rowan won the sample chase series', 'offset' => -2],
    ['sport' => 'tag', 'players' => 'Sky Rowan vs. Drew Finch (rematch)', 'result' => '', 'offset' => 5],
    ['sport' => 'power-slap', 'players' => 'Alex Ember vs. Sam Brook', 'result' => 'Alex Ember won by decision', 'offset' => -1],
    ['sport' => 'power-slap', 'players' => 'Alex Ember vs. Sam Brook (rematch)', 'result' => '', 'offset' => 4]
];

$matches = [];
foreach ($matchTemplates as $template) {
    $matchDate = $today->modify('+' . $template['offset'] . ' days');
    $status = 'Upcoming';
    $result = '';

    if ($template['offset'] < 0) {
        $status = 'Completed';
        $result = $template['result'];
    } elseif ($template['offset'] == 0) {
        $status = 'Today';
    }

    $matches[] = [
        'sport' => $template['sport'],
        'date' => $matchDate->format('F j, Y'),
        'dateValue' => $matchDate->format('Y-m-d'),
        'players' => $template['players'],
        'status' => $status,
        'result' => $result
    ];
}

// Records count only the completed sample fixtures above, not upcoming matches.
$players = [
    ['sport' => 'pickleball', 'name' => 'Morgan Vale', 'wins' => 1, 'losses' => 0],
    ['sport' => 'pickleball', 'name' => 'Casey Reed', 'wins' => 0, 'losses' => 1],
    ['sport' => 'tag', 'name' => 'Sky Rowan', 'wins' => 1, 'losses' => 0],
    ['sport' => 'tag', 'name' => 'Drew Finch', 'wins' => 0, 'losses' => 1],
    ['sport' => 'power-slap', 'name' => 'Alex Ember', 'wins' => 1, 'losses' => 0],
    ['sport' => 'power-slap', 'name' => 'Sam Brook', 'wins' => 0, 'losses' => 1]
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Game Day | Niche Sports Programming and Network</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <div class="page header-row">
      <img src="logos/logo.svg" alt="Niche Sports Programming and Network logo" class="logo">
      <h1>Niche Sports Programming and Network</h1>
    </div>
  </header>

  <nav aria-label="Main navigation">
    <div class="page">
      <a href="index.html">Home</a>
      <a href="gameday.php" id="current-page" aria-current="page">Game Day</a>
      <a href="about.html">About</a>
    </div>
  </nav>

  <main class="page">
    <section class="welcome">
      <h2>Game Day</h2>
      <p>Explore a sample schedule, results and player win/loss records for our three sports.</p>
      <p class="notice"><strong>Sample data:</strong> All displayed fixtures, dates, athlete names,
        results and records are fictional demonstration data. These are not real schedules or live statistics.</p>
    </section>

    <section class="news">
      <h2>Choose a sport</h2>
      <form action="gameday.php" method="get" class="filter-form">
        <label for="sport-filter">Show matches and records for:</label>
        <select id="sport-filter" name="sport">
          <?php foreach ($sportLabels as $value => $label): ?>
            <option value="<?php echo e($value); ?>"<?php if ($selectedSport === $value) { echo ' selected'; } ?>><?php echo e($label); ?></option>
          <?php endforeach; ?>
        </select>
        <button type="submit">Show sport</button>
      </form>
      <?php if ($error !== ''): ?>
        <p class="notice" role="alert"><?php echo e($error); ?></p>
      <?php endif; ?>
      <p>Showing: <strong><?php echo e($sportLabels[$selectedSport]); ?></strong>.</p>
    </section>

    <section class="news">
      <h2>Schedule and results</h2>
      <div class="table-wrap" role="region" aria-label="Sample schedule and results" tabindex="0">
        <table class="data-table">
          <caption>Sample fixtures — <?php echo e($sportLabels[$selectedSport]); ?></caption>
          <thead>
            <tr>
              <th scope="col">Sport</th>
              <th scope="col">Date</th>
              <th scope="col">Athletes</th>
              <th scope="col">Status</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            <?php foreach ($matches as $match): ?>
              <?php if ($selectedSport === 'all' || $selectedSport === $match['sport']): ?>
                <tr>
                  <td><?php echo e($sportLabels[$match['sport']]); ?></td>
                  <td><time datetime="<?php echo e($match['dateValue']); ?>"><?php echo e($match['date']); ?></time></td>
                  <th scope="row"><?php echo e($match['players']); ?></th>
                  <td><?php echo e($match['status']); ?></td>
                  <td>
                    <?php
                    if ($match['status'] === 'Completed') {
                        echo e($match['result']);
                    } elseif ($match['status'] === 'Today') {
                        echo 'In progress';
                    } else {
                        echo 'Not played';
                    }
                    ?>
                  </td>
                </tr>
              <?php endif; ?>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    </section>

    <section class="news">
      <h2>Player records</h2>
      <p>These win/loss records include only completed sample fixtures from the table above.</p>
      <div class="table-wrap" role="region" aria-label="Sample player records" tabindex="0">
        <table class="data-table">
          <caption>Sample player records — <?php echo e($sportLabels[$selectedSport]); ?></caption>
          <thead>
            <tr>
              <th scope="col">Sport</th>
              <th scope="col">Athlete</th>
              <th scope="col">Wins</th>
              <th scope="col">Losses</th>
            </tr>
          </thead>
          <tbody>
            <?php foreach ($players as $player): ?>
              <?php if ($selectedSport === 'all' || $selectedSport === $player['sport']): ?>
                <tr>
                  <td><?php echo e($sportLabels[$player['sport']]); ?></td>
                  <th scope="row"><?php echo e($player['name']); ?></th>
                  <td><?php echo e($player['wins']); ?></td>
                  <td><?php echo e($player['losses']); ?></td>
                </tr>
              <?php endif; ?>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    </section>
  </main>

  <footer>
    <div class="page">
      <p>Group 2: Efrain Suarez, Sebastian Martinez Cruz, Alexander Garcia Salazar, Patrick Rodriguez</p>
      <p>IST 4310 Web Technologies &middot; Last updated: October 2026</p>
    </div>
  </footer>
</body>
</html>
