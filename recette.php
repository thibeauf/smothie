<?php
include "bdd.php";

//$id = $_GET['idRecette'];
$id=1;

$req=$bdd->prepare("
    SELECT
        *
    FROM
        recipe
    WHERE 
        idRecipe=:idRecette
");
$req->execute(["idRecette"=>$id]);
$recette=$req->fetch();

?>

<h2>Recette<?= $recette["recipeName"]; ?></h2>
    <!-- <h3><?= $recette["sous-titre"]; ?></h3> -->
        <article>
            <p><?= $recette["recipeSummary"]; ?></p>
            <p><?= $recette["recipeDescription"]; ?></p>
        </article>
        <aside>
            <?= $recette["time"];
                $recette["difficulty"];
                //$recette["ingredients"]; 
            ?>
        </aside>