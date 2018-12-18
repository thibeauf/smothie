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

$(document).ready(function(){
    if(window.location.href.indexOf("recette.html")){
        showRecipe();
    }
});