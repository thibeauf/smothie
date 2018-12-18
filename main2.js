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
                console.log("nom");
                $("#allRecipes").append("<li>"+nom+description+image+"</li>");
            }  
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
<<<<<<< HEAD
    if(window.location.href.indexOf("recettes.html")){
        showAllRecipes();
    }
});
=======
});
>>>>>>> 9e02cffdec88b8fd36cdd5b9e5713a8a295baeef
