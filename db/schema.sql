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

CREATE TABLE bracket (
    user_name VARCHAR(30) NOT NULL PRIMARY KEY,
    round16_game_1 VARCHAR(30) NOT NULL,
    round16_game_2 VARCHAR(30) NOT NULL,
    round16_game_3 VARCHAR(30) NOT NULL,
    round16_game_4 VARCHAR(30) NOT NULL,
    round16_game_5 VARCHAR(30) NOT NULL,
    round16_game_6 VARCHAR(30) NOT NULL,
    round16_game_7 VARCHAR(30) NOT NULL,
    round16_game_8 VARCHAR(30) NOT NULL, 
    round8_game_1 VARCHAR(30) NOT NULL,
    round8_game_2 VARCHAR(30) NOT NULL,
    round8_game_3 VARCHAR(30) NOT NULL,
    round8_game_4 VARCHAR(30) NOT NULL,
    round4_game_1 VARCHAR(30) NOT NULL,
    round4_game_2 VARCHAR(30) NOT NULL,
    champion VARCHAR(30) NOT NULL
)