<?php 

// includo db.php
include_once __DIR__ . '/data/db.php';

// inizializzo array $generi dove farò il push dei generi attraverso un foreach (linea 13)
$generi = [];

// FILTRO: se la chiamata di genere è vuota o uguale a 'all' mi restituisce tutto il $database, altrimenti restituisce un array vuoto... (linea 23)
$dischi = empty($_GET['genre']) || $_GET['genre'] === 'all' ? $database : [];


// ciclo $database per ottenere informazioni da ogni $disco
foreach($database as $disco){
  // se l'array $generi non contiene $disco['genre']...
  if(!in_array($disco['genre'], $generi)){
    //... lo pusho dentro l'array $generi
    $generi[] = $disco['genre'];
  }
}


// ...e se l'array $dischi è vuoto
if(count($dischi) === 0){
  // faccio cun ciclo foreach sul $database per estrarre informazioni da ogni $disco
  foreach($database as $disco) {
    // se il genere di $disco è ugale alla chiamata genere in $_GET...
    if($disco['genre'] === $_GET['genre']){
      // ...$dischi diventa uguale $disco
      $dischi[] = $disco;
    }
  }
}

// trasformo in file json
header('Content-Type: application/json');


$response = [
  'dischi' => $dischi,
  'generi' => $generi
];

// stampo $database
// echo json_encode($database);

// stampo $response e non più $database perchè ho inserito $database in $response ($databae = $dischi - vedi linea 10)
echo json_encode($response);

?>