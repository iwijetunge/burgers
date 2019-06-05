CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers ( 
id INT NOT NULL auto_increment, 
burger_name VARCHAR(255) NOT NULL,
devoured boolean default false,
primary key (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Bacon Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Turkey Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Veggie Burger", false);