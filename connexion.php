<?php
include "bdd.php";

$email=$_POST["email"];
$mdp=$_POST["mdp"];

$result=false;

$req = $bdd->prepare("
    SELECT id 
    FROM user 
    WHERE email=:email 
    AND password=:password
");
$req->execute(["email"=>$email,"password"=>$mdp]);
$verif=$req->fetch();

if(!empty($verif)){
    $result=true;    
}    
echo json_encode(["result" => $result]);