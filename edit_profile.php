<?php

include "bdd.php";

$id = $_POST['lastname'];
$editUser = $bdd->prepare("
SELECT *
FROM user
WHERE lastname=?
");

$editUser->execute([$id]);
$info = $editUser->fetchAll();

if(!empty($_POST["lastname"]) && !empty($_POST["firstname"])){
    $lastname= $_POST["lastname"];
    $firstname= $_POST["firstname"];
    $address= $_POST['address'];
    $zip= $_POST['zip'];

$requete = $bdd->prepare("
UPDATE user
SET lastname='$lastname', firstname='$firstname'
WHERE lastname = $lastname
");

$requete->execute([$lastname]);
}