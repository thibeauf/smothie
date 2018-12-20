<?php
include "bdd.php";
include "crypt.php";

$email=$_POST["email"];
$mdp=$_POST["mdp"];

if(array_key_exists('email', $_POST) && array_key_exists('mdp', $_POST)){

    $req = $bdd->prepare("
        SELECT * 
        FROM user
        WHERE email=:email        
    ");
    $req->execute(["email"=>$email]);
    $user=$req->fetch();

    if(verifyPassword($mdp, $user['password'])==true){
        $result=true;
    }
    else{
        $result = false;
    }
    echo json_encode(["result" => $result]);
}
