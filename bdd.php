<?php
$bdd = new PDO
    (
        'mysql:host=localhost;dbname=smooth_maker;charset=UTF8',
        'root',
        '',
        [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );
?>
