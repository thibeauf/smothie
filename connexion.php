<?php
include "bdd.php";
include "crypt.php";



$email=$_POST["email"];
$mdp=$_POST["mdp"];
$hashPassword = hashPassword($mdp);


//if(array_key_exists('email', $_POST) && array_key_exists('mdp', $_POST)){

    $req = $bdd->prepare("
        SELECT * 
        FROM user
        WHERE email=:email 
        AND password=:password
    ");
    $req->execute(["email"=>$email,"password"=>$hashPassword]);
    $user=$req->fetch();

    if($user['email'] == $email && verifyPassword($hashPassword, $user['password'])==true){
        $result=true;
    }
    else{
        $result = false;
    }
//}
echo json_encode(["result" => $result]);