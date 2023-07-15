DROP DATABASE IF EXISTS `Checkpoint4`;
CREATE DATABASE `Checkpoint4`;
USE `Checkpoint4`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `fullname` varchar(255),
    `email` varchar(255),
    `password` varchar(255),
    `gender` varchar(255) DEFAULT 'Non-Spécifié',
    `phone` varchar(15),
    `picture_profile` varchar(255),
    `is_admin` boolean,
    `employment` varchar(255)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

INSERT INTO `users` (fullname, email, gender, phone, picture_profile, is_admin, employment)
VALUES ("Sassy", "Sassy@exemple.com", "Femme", '0465432107', "https://avatars.dicebear.com/api/micah/Sassy.svg", true, "Bâtiment");

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `name` varchar(255),
    `color` varchar(255),
    `font_color` varchar(255)
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

INSERT INTO `category` (name, color, font_color)
VALUES ("Environnement", "colorParsley", "colorSaharaSand");

DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `title` varchar(255),
    `content` text,
    `utility` varchar(255),
    `context` varchar(255),
    `benefits` varchar(255),
    `risks` varchar(255),
    `created` DATETIME NOT NULL DEFAULT NOW(),
    `is_active` boolean DEFAULT true,
    `id_category` INT NOT NULL,
    `id_auteur` INT NOT NULL,
    CONSTRAINT `fk_category_id` FOREIGN KEY (`id_category`) REFERENCES `category`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`id_auteur`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `posts` (title, content, utility, context, benefits, risks, created, is_active, id_category, id_auteur)
VALUES ("Aide à un déménagement", "Je déménage à Bordeaux et j'aimerais avoir des conseils sur les meilleurs services de déménagement dans la région. Quelles sont les entreprises les plus fiables ?", "les plus à quoi ça peut servir", "Deménagement", "Peu de risque d'accident", "Accident de déménagement quand on est seul", NOW(), true, 1, 1);
