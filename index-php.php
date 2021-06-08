<!-- includo il file db.php -->
<?php
// includo db.php
include __DIR__ . '/data/db.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- style.css -->
  <link rel="stylesheet" href="assets/style/style.css">
  <!-- google fonts -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet">
  <title>Document</title>
</head>

<body>
  <header>
    <div id="h-wrapper">
      <div class="logo">
        <img src="assets/img/logo.png" alt="logo spotify">
      </div>
    </div>
  </header>
  <main>
    <div id="database">
      <?php
      // con ciclo foreach su $database leggo le informazioni di tutti gli array $disco
      foreach ($database as $disco): ?>
        <div class="disco">
          <!-- stampo tutte le informazioni che mi servono -->
          <img src="<?php echo $disco['poster'] ?>" alt="<?php echo $disco['title'] ?>">
          <h2>
            <?php echo $disco['title'] ?>
          </h2>
          <h3>
            <?php echo $disco['author'] ?>
          </h3>
          <h4>
          <?php echo $disco['year'] ?>
          </h4>
        </div>
      <?php endforeach; ?>
    </div>
  </main>
</body>
</html>