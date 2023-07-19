DROP DATABASE IF EXISTS `TestTechnique`;
CREATE DATABASE `TestTechnique`;
USE `TestTechnique`;

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
VALUES ("Emily", "emily.wilson@example.com", "Women", '0543210987', "https://avatars.dicebear.com/api/micah/DavidWilson.svg", false, "Lawyer"),
("John", "john.doe@example.com", "Men", '0512345678', "https://avatars.dicebear.com/api/micah/JohnDoe.svg", false, "Engineer"),
("Sarah", "sarah.smith@example.com", "Women", '0587654321', "https://avatars.dicebear.com/api/micah/SarahSmith.svg", false, "Doctor"),
("Michael", "michael.brown@example.com", "Men", '0523456789', "https://avatars.dicebear.com/api/micah/MichaelBrown.svg", false, "Teacher"),
("Emma", "emma.jones@example.com", "Women", '0567891234', "https://avatars.dicebear.com/api/micah/EmmaJones.svg", false, "Artist"),
("Daniel", "daniel.taylor@example.com", "Men", '0578945612', "https://avatars.dicebear.com/api/micah/DanielTaylor.svg", false, "Developer"),
("Olivia", "olivia.jackson@example.com", "Women", '0509876543', "https://avatars.dicebear.com/api/micah/OliviaJackson.svg", false, "Writer"),
("William", "william.wilson@example.com", "Men", '0532167098', "https://avatars.dicebear.com/api/micah/WilliamWilson.svg", false, "Accountant"),
("Sophia", "sophia.thomas@example.com", "Women", '0598712345', "https://avatars.dicebear.com/api/micah/SophiaThomas.svg", false, "Entrepreneur"),
("James", "james.davis@example.com", "Men", '0512345678', "https://avatars.dicebear.com/api/micah/JamesDavis.svg", false, "Consultant"),
("Ava", "ava.anderson@example.com", "Women", '0567891234', "https://avatars.dicebear.com/api/micah/AvaAnderson.svg", false, "Architect"),
("Benjamin", "benjamin.wilson@example.com", "Men", '0543210987', "https://avatars.dicebear.com/api/micah/BenjaminWilson.svg", false, "Manager"),
("Mia", "mia.white@example.com", "Women", '0523456789', "https://avatars.dicebear.com/api/micah/MiaWhite.svg", false, "Nurse"),
("Ethan", "ethan.harris@example.com", "Men", '0587654321', "https://avatars.dicebear.com/api/micah/EthanHarris.svg", false, "Lawyer"),
("Charlotte", "charlotte.martin@example.com", "Women", '0532167098', "https://avatars.dicebear.com/api/micah/CharlotteMartin.svg", false, "Engineer"),
("Alexander", "alexander.anderson@example.com", "Men", '0578945612', "https://avatars.dicebear.com/api/micah/AlexanderAnderson.svg", false, "Doctor"),
("Amelia", "amelia.clark@example.com", "Women", '0512345678', "https://avatars.dicebear.com/api/micah/AmeliaClark.svg", false, "Teacher"),
("Henry", "henry.brown@example.com", "Men", '0509876543', "https://avatars.dicebear.com/api/micah/HenryBrown.svg", false, "Artist"),
("Harper", "harper.taylor@example.com", "Women", '0543210987', "https://avatars.dicebear.com/api/micah/HarperTaylor.svg", false, "Developer"),
("Liam", "liam.johnson@example.com", "Men", '0567891234', "https://avatars.dicebear.com/api/micah/LiamJohnson.svg", false, "Writer"),
("Sassy", "sassy@example.com", "Women", '0465432107', "https://avatars.dicebear.com/api/micah/Sassy.svg", false, "Architect"),
("Alice", "alice.smith@example.com", "Women", '0987654321', "https://avatars.dicebear.com/api/micah/AliceSmith.svg", false, "Doctor"),
("Sophie", "sophie.johnson@example.com", "Women", '0765432109', "https://avatars.dicebear.com/api/micah/MichaelJohnson.svg", false, "Teacher"),
("David", "david.brown@example.com", "Men", '0654321098', "https://avatars.dicebear.com/api/micah/EmilyBrown.svg", false, "Accountant");