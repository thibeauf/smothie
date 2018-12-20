<?php

include "bdd.php";
include "crypt.php";

	$emailInscription = $_POST["email"];
    $mdpInscription = $_POST["mdp"];
    $address = $_POST["address"];
    $zip = $_POST["zip"];
    $city = $_POST["city"];
    $lastName = $_POST["lastName"];
    $firstName = $_POST["firstName"];
    $hashPassword = hashPassword($mdpInscription);

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


//     $user = $req->execute([$emailInscription, $hashPassword, $address, $zip, $city, $lastName, $firstName]);

    $user = $req->execute([$emailInscription, $hashPassword, $address, $zip, $city, $lastName, $firstName]);

            $reponse = true;

    echo json_encode(['reponse' => $reponse]);
}