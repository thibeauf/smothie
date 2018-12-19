<?php
include "bdd.php";

$id = 1;

    $lastname=$_POST["lastname"];
    $firstname=$_POST["firstname"];
    $address=$_POST["address"];
    $zip=$_POST["zip"];
    $city=$_POST["city"];

    $req=$bdd->prepare("
        UPDATE
            user
        SET
            lastname= :lastname,
            firstname= :firstname,
            address= :address,
            zip= :zip,
            city= :city
        WHERE
            id= :id    
    ");
    $req->execute(["lastname"=>$lastname,"firstname"=>$firstname,"address"=>$address,"zip"=>$zip,"city"=>$city,"id"=>$id]);

    header("location:index.html");
    exit();