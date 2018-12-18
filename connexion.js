$(document).ready(function(){
    console.log($('#email').val());
    console.log($('#mdp').val());
    $(".formulaireDeConnexion").on("submit", connexion)
});


function connexion(e){
    e.preventDefault();
    $.ajax({
        url: 'connexion.php',
        method: 'post',
        dataType: 'json',
        contentType: false,
        processData: false,
        data: {email: email, mdp: mdp},
        success: function(data){
            if(data.result == true){
                $(".formulaireDeConnexion").html('<div class="alert alert-success" role="alert">Connexion réussie !</div>');
            } else {
                $(".formulaireDeConnexion").html('<div class="alert alert-danger" role="alert">Identifiants incorrects</div>'); 
            }
        }
    })
}

function test(e){
    e.preventDefault();
    alert('test');
}