<?php

include "bdd.php";
include "UserSession.class.php";

$userSession = new UserSession();
$id = $userSession->getUserId();

$req = $bdd->prepare("
    SELECT
    *
    FROM
    recipe
    INNER JOIN
    favorite ON favorite.idRecipe = recipe.idRecipe
    WHERE
    favorite.idUser =:id
");
$req->execute(["id"=>$id]);
$favorite=$req->fetchAll();

echo json_encode($favorite);