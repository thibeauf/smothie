<?php

include "bdd.php";

	$emailInscription = $_POST["email"];
    $mdpInscription = $_POST["mdp"];
    $address = $_POST["address"];
    $zip = $_POST["zip"];
    $city = $_POST["city"];
    $lastName = $_POST["lastName"];
    $firstName = $_POST["firstName"];

    $reponse=false;

if(!empty($_POST)){  
    $req = $bdd->prepare("
        INSERT INTO
            user 
            (email, 
            password, 
            address, 
            zip, 
            city, 
            lastname, 
            firstname)
        VALUES (?,?,?,?,?,?,?)
    ");
    $user = $req->execute([$emailInscription, $mdpInscription, $address, $zip, $city, $lastName, $firstName]);
    var_dump($user);
    if($user == true){
        $reponse = true;
    }
    var_dump($reponse);
    echo json_encode(['reponse' => $reponse]);
}