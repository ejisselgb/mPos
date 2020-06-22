<?php
    include '../config/config.php';

    $opts = array('http' =>
        array(
            'method'  => 'DELETE',
            'header'  => 'Content-Type: application/json'
        )   
    );

    $context  = stream_context_create($opts);
    $result = file_get_contents($URL_SERVICE."delete/".$_POST["id"], false, $context);
    print_r($result);
?>