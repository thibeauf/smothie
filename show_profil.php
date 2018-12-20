<?php
include "bdd.php";
include "UserSession.class.php";

$userSession = new UserSession();
$id = $userSession->getUserId();
$infoUser = $bdd->prepare("
    SELECT 
        *
    FROM 
        user
    WHERE 
        id=:id
");

$infoUser->execute(["id"=>$id]);
$info = $infoUser->fetch();

echo json_encode($info);