<?php
include "bdd.php";
include "UserSession.class.php";

$userSession = new UserSession();
$id = $userSession->getUserId();

$idRecette=$_GET["idRecipe"];

$req = $bdd->prepare("
    INSERT INTO
        favorite
        (idUser, 
        idRecipe)
    VALUES (?,?)
");

$user = $req->execute([$id, $idRecette]);

echo json_encode([$reponse]);