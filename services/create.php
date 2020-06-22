<?php

    include '../config/config.php';

    $myObj = (object)[];

    $myObj->name = $_POST["name"];
    $myObj->salary = $_POST["salary"];
    $myObj->age = $_POST["age"];
    $myJSON = json_encode($myObj);


    $opts = array('http' =>
        array(
            'method'  => 'POST',
            'header'  => 'Content-Type: application/json',
            'content' => $myJSON
        )
    );

    $context  = stream_context_create($opts);
    $result = file_get_contents($URL_SERVICE."create", false, $context);
    print_r($result);

?>