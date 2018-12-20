<?php

include "bdd.php";

$req = $bdd->prepare("
        SELECT * FROM recipe
        WHERE idRecipe = :idRecette
    ");

$req->execute();
$favorite=$req->fetch();

var_dump($favorite);