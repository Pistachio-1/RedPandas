DROP DATABASE IF EXISTS worldcup_db;
CREATE DATABASE worldcup_db;
USE worldcup_db;

CREATE TABLE users
(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    user_password VARCHAR(20) NOT NULL
);

CREATE TABLE rooms
(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	room_name VARCHAR(30) NOT NULL
);

CREATE TABLE room_participants
(
    room_name INT(12) NOT NULL,
    user_name VARCHAR(30) NOT NULL
);

CREATE TABLE bracket
(
    user_name VARCHAR(30) NOT NULL,
    group_A VARCHAR(30) NOT NULL,
    group_B VARCHAR(30) NOT NULL,
    group_C VARCHAR(30) NOT NULL,
    group_D VARCHAR(30) NOT NULL,
    group_E VARCHAR(30) NOT NULL,
    group_F VARCHAR(30) NOT NULL,
    group_G VARCHAR(30) NOT NULL,
    group_H VARCHAR(30) NOT NULL,
    quarter_A VARCHAR(30) NOT NULL,
    quarter_B VARCHAR(30) NOT NULL,
    quarter_C VARCHAR(30) NOT NULL,
    quarter_D VARCHAR(30) NOT NULL,
    semi_A VARCHAR(30) NOT NULL,
    semi_B VARCHAR(30) NOT NULL,
    final VARCHAR(30) NOT NULL
)