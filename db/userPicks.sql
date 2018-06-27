DROP DATABASE IF EXISTS userPicks_db;
CREATE DATABASE userPicks_db;
USE userPicks_db;

CREATE TABLE choices (
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