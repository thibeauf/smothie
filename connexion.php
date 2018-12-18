

<?php

    include "bdd.php";

    var_dump($_POST);

	$email = $_POST["email"];
    $mdp = $_POST["mdp"];
    
    
    if(array_key_exists('email', $_POST) && array_key_exists('mdp', $_POST)){
        $req = $bdd->prepare("SELECT * FROM user WHERE email = ? AND password = ?");
        $req->execute([$email, $mdp]);
        $user = $req->fetch();
    
        $result = false;

        if($user['email'] == $email && $user['password'] == $mdp){
            $result = true;
      
         }
         else{
             $result = false;
    }
    echo json_encode(["result" => $result]);
}    
?>
