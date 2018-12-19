<?php
include "bdd.php";

$id = 1;
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