"use strict"
function showRecipe(){
    $.ajax({
        url:'recette.php',
        method:'post',
        dataType:'json',
        contentType: false,
        processData: false,
        success: function(data){
            var nom="<h2>"+data.recipeName+"<h2>";
            var description="<h3>"+data.recipeSummary+"</h3>";
            var image="<img src='"+data.photo+"'>";
            var temps="Temps :"+data.time+".";
            var niveau=data.difficulty;
            var recipeDetails="<p>"+data.recipeDescription+"</p>";
            $("#recette").append(nom+description+image+recipeDetails+temps+niveau);
        }
    });   
}

function showProducts(){
    $.ajax({
        url: 'produits.php',
        method:'post',
        dataType:'json',
        contentType: false,
        processData: false,
        success: function(data){
            for (var i=0; i<data.length; i++){
                var nom="<h3>"+data[i].recipeName+"<h3>";
                var image="<img src='"+data[i].photo+"'>";
                var description="<p>"+data[i].recipeSummary+"</p>";
                $("#products").append("<li>"+nom+description+image+"</li>");
            }  
        }
    });
}
function showAllRecipes(){
    $.ajax({
        url: 'recettes.php',
        method:'post',
        dataType:'json',
        contentType: false,
        processData: false,
        success: function(data){
            for (var i=0; i<data.length; i++){
                var nom="<h3>"+data[i].recipeName+"<h3>";
                var image="<img src='"+data[i].photo+"'>";
                var description="<p>"+data[i].recipeSummary+"</p>";
                $("#allRecipes").append("<li>"+nom+description+image+"</li>");
            }  
        }
    });
}

function connexion(e){
    var email=$('#email').val();
    var mdp=$('#mdp').val();
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    e.preventDefault();
    console.log("ok");  

    if(email.trim().length > 0 && regex.test(email) == true){
        $.ajax({
            url: 'connexion.php',
            method: 'post',
            dataType: 'json',
            data: {email: email, mdp: mdp},
            success: function(data){
                if(data.result == true){            
                    $(".formulaireDeConnexion").html('<div class="alert alert-success" role="alert">Connexion réussie !</div>');
                } else {
                    $(".formulaireDeConnexion").html('<div class="alert alert-danger" role="alert">Identifiants incorrects</div>'); 
                }
            }
        });
    }
    else{
        $(".formulaireDeConnexion").html('<div class="alert alert-danger" role="alert">Format incorrect</div>'); 
    }
}

function logOut(){
    $.ajax({
        url: 'logout.php',
        method: 'post',
        success: function(){
            window.location.href=index.html;
        }
    });
}

function showInfo(){
    $.ajax({
        url: 'show_profil.php',
        method: 'post',
        dataType: 'json',
        success: function(data){
            var lastname=data.lastname;
            var firstname=data.firstname;
            var address=data.address;
            var zip=data.zip;
            var city=data.city;
            $("#lastname").val(lastname);
            $("#firstname").val(firstname);
            $("#address").val(address);
            $("#zip").val(zip);
            $("#city").val(city);
        }
    });
}

function inscription(e){
    e.preventDefault();
    $.ajax({
        url: 'inscription.php',
        method: 'post',
        dataType: 'json',
        data: {
            email: $("#emailInscription").val(),
            mdp: $("#mdpInscription").val(),
            address: $("#address").val(),          
            zip: $("#zip").val(),
            city: $("#city").val(),
            lastName: $("#lastName").val(),
            firstName: $("#firstName").val()
            },
        success: function(data){
            if (data.reponse == true) {
                    $('#h1Connection').html('<div><div>');
                    $('#h1Inscription').html('<div><div>');
                    $('.formulaireDeConnexion').html('<div><div>');
                    $(".formulaireDinscription").html('<div class="alert alert-success" role="alert"><h2 class="alert-heading">Bienvenue à toi !</h2><p>Nous sommes grâçe à toi '+ +' Fruits enregistré ;-)</p><hr><div class="btn-group-toggle" data-toggle="buttons"><a class="btn btn-info" href="index.html">Accueil</a><a class="btn btn-info" href="edite_profile.phtml">Mon profil</a></div></div>');
            }
        }
    })
}

$(document).ready(function(){
    if(window.location.href.indexOf("recette.html")){
        showRecipe();
    }
    if(window.location.href.indexOf("produits.html")){
        showProducts();
    }
    if(window.location.href.indexOf("recettes.html")){
        showAllRecipes();
    }
    $(".formulaireDeConnexion").on("submit", connexion);
    $("#logout").on("click", logOut);
    if(window.location.href.indexOf("edit_profil.html")){
        showInfo();
    }
    $(".formulaireDinscription").on("submit", inscription)
});