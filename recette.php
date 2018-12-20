<?php
include "bdd.php";


$id = $_GET['idRecette'];

$req=$bdd->prepare("
    SELECT
        *
    FROM
        recipe
    WHERE 
        idRecipe=:idRecette
");
$req->execute(["idRecette"=>$id]);
$recette=$req->fetch();

echo json_encode($recette);