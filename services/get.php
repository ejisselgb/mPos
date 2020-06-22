<?php

    include '../config/config.php';

    $data = file_get_contents($URL_SERVICE."employees");
    print_r($data);

?>