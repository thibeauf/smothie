<?php
include "bdd.php";

$req=$bdd->prepare("
    SELECT
        *
    FROM
        recipe
");
$req->execute();
$produits=$req->fetchAll();

echo json_encode($produits);