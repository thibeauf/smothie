<?php

include "bdd.php";
include "crypt.php";





$emailInscription = $_POST["email"];
$mdpInsciption = $_POST["mdp"];
$address = $_POST["address"];
$zip = $_POST["zip"];
$city = $_POST["city"];
$lastName = $_POST["lastName"];
$firstName = $_POST["firstName"];

if(!empty($_POST)){
    $req = $bdd->prepare("INSERT INTO user 
    (email, password, address, zip, city, lastname, firstname)
    VALUES (?,?,?,?,?,?,?)");

    $hashPassword = hashPassword($mdpInsciption);

    $user = $req->execute([$emailInscription, $hashPassword, $address, $zip, $city, $lastName, $firstName]);

    if($user == true){
        $reponse = true;
    }
    echo json_encode(['reponse' => $reponse]);
}

function verifyPassword($mdpInsciption, $hashedPassword) {
    return crypt($mdpInsciption, $hashedPassword) == $hashedPassword;

}

?>

