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
});