<?php
include "bdd.php";

$req=$bdd->prepare("
    SELECT
        *
    FROM
        recipe
    WHERE 
        season='Hiver'
");
$req->execute();
$produits=$req->fetchAll();

echo json_encode($produits);

