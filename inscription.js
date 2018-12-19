$(document).ready(function(){
    $(".formulaireDinscription").on("submit", inscription)
});

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