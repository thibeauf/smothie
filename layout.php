<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Smooth'Maker</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
    <!-- Librairie jQuery -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <!-- Librairie perso -->
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <header>
        <nav>
            <ul id="nav">
                <li><a href="index.php">Home</a></li>
                <li><a href="produits.php">Produits</a></li>
                <li><a href="recettes.php">Recettes</a></li>
                <li><a href="contact.php">Contact</a></li>
            </ul>
            <ul>
                <li><a href="connexion.php"><i class="far fa-user-circle"></i></a></li>
            </ul>
        </nav>
    </header>
    <main>
        <?php include "$page.php"; ?>
    </main>
    <footer>
        <ul>
            <li><a href="#"><i class="fab fa-twitter-square"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
        </ul>
        <nav>
            <li><a href="index.php">Home</a></li>
            <li><a href="produits.php">Produits</a></li>
            <li><a href="recettes.php">Recettes</a></li>
            <li><a href="contact.php">Contact</a></li>
        </nav>
        <small>
            2019 ©LeMeilleurGroupeDeLaClasse
        </small>
    </footer>


    <script src="main.js"></script>
</body>
</html>