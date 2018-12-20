"use strict"
function showRecipe(idRecette){
    $.ajax({
        url:'recette.php',
        method:'get',
        dataType:'json',
        data: {idRecette : idRecette},
        success: function(data){
            $("#recipeName").append(data.recipeName);
            $("#recipeSummary").append(data.recipeSummary);
            $("#timeRecipe").append(data.time);
            $("#ingredientsRecipe").append(data.recipeDescription);
            $("#difficultyRecipe").append(data.difficulty);
            $("#descriptionRecipe").append(data.preparation);
            $("#imageRecipe").attr("src",data.photo);
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
                var nom="<h3>"+data[i].recipeName+"</h3>";
                var image="<img class='d-block w-100' src='"+data[i].photo+"'>";
                var description="<p>"+data[i].recipeSummary+"</p>";
                $(".carousel-inner").append("<div class='carousel-item'>"+image+"<a href=recette.html?idRecette="+data[i].idRecipe+"><div class='carousel-caption d-none d-md-block' style='background-color: rgba(0, 0, 0, 0.3);'>"+nom+description+"</div></a></div>");
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
                var nom="<figcaption>"+data[i].recipeName+"</figcaption>";
                var image="<img src='"+data[i].photo+"' class='rounded-circle'>";
                $("#allRecipes").append("<li><figure>"+image+nom+"<a href='recette.html?idRecette="+data[i].idRecipe+"'>Celle ci !</a></figure></li>");
            }
        }
    });
}
function connexion(e){
    var email=$('#email').val();
    var mdp=$('#mdp').val();
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    e.preventDefault();
    if(email.trim().length > 0 && regex.test(email) == true){
        $.ajax({
            url: 'connexion.php',
            method: 'post',
            dataType: 'json',
            data: {email: email, mdp: mdp},
            success: function(data){
                if(data.result == true){
                    $(".formulaireDeConnexion").html('<div class="alert alert-success" role="alert"><h2 class="alert-heading">Connexion réussie !</h2><div class="btn-group-toggle" data-toggle="buttons"><a class="btn btn-info" href="index.html">Accueil</a><a class="btn btn-info" href="edit_profil.html">Mon profil</a></div></div>');
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
            var email=data.email;
            var date_inscription=data.date_inscription;
            $("#lastname").val(lastname);
            $("#firstname").val(firstname);
            $("#address").val(address);
            $("#zip").val(zip);
            $("#city").val(city);
            $("#emailPageUser").val(email);
            $("#dateInscription").val(date_inscription);
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
                    $(".formulaireDinscription").html('<div class="alert alert-success" role="alert"><h2 class="alert-heading">Bienvenue à toi !</h2><div class="btn-group-toggle" data-toggle="buttons"><a class="btn btn-info" href="index.html">Accueil</a><a class="btn btn-info" href="user.html">Mon profil</a></div></div>');
            }
        }
    })
}
function showProductsIndex(){
    $.ajax({
        url: 'produitsIndex.php',
        method: 'post',
        dataType: 'json',
        data: {
            },
        success: function(data){
            if (data.reponse == true) {
                    $('#h1Connection').html('<div><div>');
                    $('#h1Inscription').html('<div><div>');
                    $('.formulaireDeConnexion').html('<div><div>');
                    $(".formulaireDinscription").html('<div class="alert alert-success" role="alert"><h2 class="alert-heading">Bienvenue à toi !</h2><div class="btn-group-toggle" data-toggle="buttons"><a class="btn btn-info" href="index.html">Accueil</a><a class="btn btn-info" href="user.html">Mon profil</a></div></div>');
            }
        }
    })
}
$(document).ready(function(){
    if(window.location.href.indexOf("recette.html")){
        var idRecette = location.search.substring(location.search.indexOf("=")+1);
        showRecipe(idRecette);
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
    if(window.location.href.indexOf("user.html")){
        showInfo();
    }
    if(window.location.href.indexOf("user.html")){
        showProductsIndex();
    }
});
