<?php

    class UserSession {

        public function __construct(){
            if (session_status() == PHP_SESSION_NONE) {
                session_start(); //démarrer les services de session
            }
        }

        public function create($userId, $firstName, $lastName, $email){
            $_SESSION["user"] = [
                "id"    => $userId,
                'firstName' => $firstName,
                'lastName'  => $lastName,
                'email'     => $email
            ];
        
        }

        public function isAuthenticated(){
            if(array_key_exists("user", $_SESSION)){
                if(empty($_SESSION["user"]) == false) {
                    return true;
                }
            }
            return false;
        }

        public function getFullName() {
            return $_SESSION["user"]["firstName"]." ".$_SESSION["user"]["lastName"];
        }

        public function getUserId(){
            return $_SESSION['user']['id'];
        }
        

        public function destroy() {
            $_SESSION["user"] = [];
            session_destroy();
        }

        
    }   


?>