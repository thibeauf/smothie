<?php
include "bdd.php";
include "crypt.php";
include "UserSession.class.php";

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
       $userSession = new UserSession();
       $userSession->create($user['id'],$user['firstname'],$user['lastname'],$user['email']);
    }
    else{
        $result = false;
    }
    echo json_encode(["result" => $result]);
}
