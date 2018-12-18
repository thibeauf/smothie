<?php
include "bdd.php";

$req=$bdd->prepare("
    SELECT
        *
    FROM
        recipe
    WHERE 
        recipeDescription is not null
");
$req->execute();
$allRecipes=$req->fetchAll();

echo json_encode($allRecipes);