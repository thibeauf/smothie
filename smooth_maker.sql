-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mar 18 Décembre 2018 à 09:54
-- Version du serveur :  5.7.24-0ubuntu0.16.04.1
-- Version de PHP :  7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `smooth_maker`
--

-- --------------------------------------------------------

--
-- Structure de la table `favorite`
--

CREATE TABLE `favorite` (
  `id` int(5) NOT NULL,
  `idUser` int(5) NOT NULL,
  `idRecipe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `productCode` varchar(15) NOT NULL,
  `productName` varchar(70) NOT NULL,
  `productDescription` varchar(200) NOT NULL,
  `origin` varchar(50) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `recipe`
--

CREATE TABLE `recipe` (
  `idRecipe` int(11) NOT NULL,
  `recipeName` varchar(100) NOT NULL,
  `recipeSummary` varchar(100) NOT NULL,
  `recipeDescription` varchar(500) NOT NULL,
  `time` varchar(50) NOT NULL,
  `difficulty` varchar(50) NOT NULL,
  `photo` varchar(50) NOT NULL,
  `Season` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `recipe`
--

INSERT INTO `recipe` (`idRecipe`, `recipeName`, `recipeSummary`, `recipeDescription`, `time`, `difficulty`, `photo`, `Season`) VALUES
(1, 'Honey smoothie', 'Smoothie Banane & miel', '1 banane bien mûre\r\n\r\n1 cuillère à café de miel\r\n\r\n25 cl de lait (demi-écrémé)\r\n\r\n1/2 citron pressé', '5 minutes', 'Très facile', 'images/smoothie1.jpg', 'Hiver'),
(2, 'Lorem Ipsum', 'Smoothie lait de coco', '1 l de jus d\'ananas\r\n\r\n40 cl de lait de coco\r\n\r\n2 bananes bien mûres (mais pas noires quand-même!)', '10 minutes', 'Très facile', 'images/smoothie2.jpg', 'Ete'),
(3, 'Légumes d\'été', 'Smoothie de légumes glacés', '2 tomates coeur de boeuf préalablement pelées\r\n\r\n2 carottes\r\n\r\n1 branche de céleri\r\n\r\nCitron jaune\r\n\r\nCitron vert\r\n\r\nSel de céleri (selon le goût)\r\n\r\n1 cuillère à café de sauce worcestershire\r\n\r\n10 glaçons', '10 minutes', 'Très facile', 'images/smoothie3.jpg', 'Hiver'),
(4, 'Casanova', 'Cocktail de fruits au citron vert', '10 cl de lait de coco\r\n\r\n20 cl de jus de fruit multivitaminé\r\n\r\n1 cuillère à café de jus de citron vert\r\n\r\nGlaçons\r\n\r\n1 rondelle de citron vert (pour la déco)', '5 minutes', 'Très facile', 'images/smoothie4.jpg', 'Ete'),
(5, 'Bonne mine', 'Smoothie au lait de coco et poudre de baobab', '200 g de fraises + 2 bananes + 2 pommes + des fruits secs - amandes /noisettes + des lamelles de gingembre mariné* + des raisins secs + 2 càs de Baies de Goji\r\n4 feuilles de menthe fraîche\r\n1 càs de  poudre de Baobab bio Baomix\r\npour le sucre j\'ai rajouté du sirop de gingembre bio\r\n20 cl de lait de coco bio', '3 minutes', 'Très facile', 'images/smoothie5.jpg', 'Hiver'),
(7, 'Ananas Mangue', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus egestas mi, non commodo', '', '', '', '', 'Ete'),
(8, 'Ananas Mangue Pomme', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus egestas mi, non commodo', '', '', '', '', 'Hiver'),
(9, 'Bowl Fraises Banane', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus egestas mi, non commodo', '', '', '', '', 'Hiver'),
(10, 'Banane Miel', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus egestas mi, non commodo', '', '', '', '', 'Ete');

-- --------------------------------------------------------

--
-- Structure de la table `recipe_details`
--

CREATE TABLE `recipe_details` (
  `id` int(5) NOT NULL,
  `idRecipe` int(11) NOT NULL,
  `productCode` varchar(15) NOT NULL,
  `quantity` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(5) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `zip` varchar(5) NOT NULL,
  `city` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(70) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `date_inscription` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `lastname`, `firstname`, `address`, `zip`, `city`, `email`, `password`, `photo`, `date_inscription`) VALUES
(1, 'Maran', 'Tro', '26 rue Emile Decorps', '69000', 'Villeurbanne', 'trotro@poney.com', 'cheval23', '', '2018-12-17 00:00:00');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idUser` (`idUser`),
  ADD UNIQUE KEY `idRecipe` (`idRecipe`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productCode`);

--
-- Index pour la table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`idRecipe`);

--
-- Index pour la table `recipe_details`
--
ALTER TABLE `recipe_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `productCode` (`productCode`),
  ADD UNIQUE KEY `idRecipe` (`idRecipe`),
  ADD KEY `productCode_2` (`productCode`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `favorite`
--
ALTER TABLE `favorite`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `idRecipe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `FK_user` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`idRecipe`) REFERENCES `recipe` (`idRecipe`);

--
-- Contraintes pour la table `recipe_details`
--
ALTER TABLE `recipe_details`
  ADD CONSTRAINT `FK_product` FOREIGN KEY (`productCode`) REFERENCES `product` (`productCode`),
  ADD CONSTRAINT `recipe_details_ibfk_1` FOREIGN KEY (`idRecipe`) REFERENCES `recipe` (`idRecipe`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
