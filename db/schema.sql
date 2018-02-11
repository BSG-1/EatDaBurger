DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

create table burgers (
	id integer(20) NOT NULL AUTO_INCREMENT, 
	burger_name VARCHAR(100), 
	devoured BOOLEAN DEFAULT FALSE,
	PRIMARY KEY (id)
);