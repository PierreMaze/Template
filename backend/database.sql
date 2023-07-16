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
VALUES ("Sassy", "Sassy@exemple.com", "Women", '0465432107', "https://avatars.dicebear.com/api/micah/Sassy.svg", false, "Architect");
-- ("John Doe", "john.doe@example.com", "Men", '0123456789', "https://avatars.dicebear.com/api/micah/JohnDoe.svg", false, "Engineer"), ("Alice Smith", "alice.smith@example.com", "Women", '0987654321', "https://avatars.dicebear.com/api/micah/AliceSmith.svg", false, "Doctor"), ("Michael Johnson", "michael.johnson@example.com", "Men", '0765432109', "https://avatars.dicebear.com/api/micah/MichaelJohnson.svg", false, "Teacher"), ("Emily Brown", "emily.brown@example.com", "Women", '0654321098', "https://avatars.dicebear.com/api/micah/EmilyBrown.svg", false, "Accountant"), (fullname, email, gender, phone, picture_profile, is_admin, employment), ("David Wilson", "david.wilson@example.com", "Men", '0543210987', "https://avatars.dicebear.com/api/micah/DavidWilson.svg", false, "Lawyer");
