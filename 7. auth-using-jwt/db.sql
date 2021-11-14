mysql -u root -p

CREATE USER mytestuser IDENTIFIED WITH mysql_native_password BY 'mypassword';
GRANT ALL PRIVILEGES on mytestdb.* to mytestuser;
flush PRIVILEGES;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `isAdmin` tinyint NOT NULL DEFAULT '0',
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
);

