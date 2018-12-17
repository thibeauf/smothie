<?php
include "bdd.php";

$id = $_GET['idRecette'];

$req=$bdd->prepare("
    SELECT
        *
    FROM
        article
    WHERE 
        id=:idRecette
");
$req->execute(["idRecette"=>$id]);
$contenuArticle=$req->fetch();

$page="recette";
include "layout.phtml";
?>