<?php 

// includo db.php
include_once __DIR__ . '/data/db.php';

// trasformo in file json
header('Content-Type: application/json');

echo json_encode($database);

?>