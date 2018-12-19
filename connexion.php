<?php
include "bdd.php";

$email=$_POST["email"];
$mdp=$_POST["mdp"];

if(array_key_exists('email', $_POST) && array_key_exists('mdp', $_POST)){

    $req = $bdd->prepare("
        SELECT * 
        FROM user
        WHERE email=:email 
        AND password=:password
    ");
    $req->execute(["email"=>$email,"password"=>$mdp]);
    $user=$req->fetch();

    if($user['email'] == $email && $user['password'] == $mdp){
        $result=true;
        // $_SESSION['user'] =
        // [
        //     'UserId'    => $user['id'],
        //     'FirstName' => $user['firstName'],
        //     'LastName'  => $user['lastName'],
        //     'Email'     => $user['email']
        // ];

        session_start();
    }
    else{
        $result = false;
    }
}
echo json_encode(["result" => $result]);