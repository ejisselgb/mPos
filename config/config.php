<?php

require('../vendor/autoload.php');

$dotenv = Dotenv\Dotenv::createImmutable('../');
$dotenv->load();

$URL_SERVICE = $_ENV['URL_SERVICE'];

?>