
DROP TABLE characters;
DROP TABLE lightsabers;

CREATE TABLE characters(
    id SERIAL,
    name VARCHAR(255),
    darkside BOOLEAN,
    age INT
);


CREATE TABLE lightsabers(
    id SERIAL,
    colour VARCHAR(255),
    hilt_metal  VARCHAR(255)
);




INSERT INTO characters (name,darkside,age) VALUES ('Obi-Wan Kenobi',false,27);
INSERT INTO characters (name,darkside,age) VALUES ('Anakin Skywalker',false,19);
INSERT INTO characters (name,darkside,age) VALUES ('Darth Maul',true,32);
INSERT INTO characters (name,darkside) VALUES ('Yoda',false);
INSERT INTO characters (name,darkside,age) VALUES ('Luke Skywalker',true,21);


INSERT INTO lightsabers (colour,hilt_metal) VALUES ('green','palladium');
INSERT INTO lightsabers (colour,hilt_metal) VALUES ('red','gold');



SELECT * FROM characters;

SELECT name FROM characters;

SELECT * FROM characters WHERE darkside=false;

SELECT COUNT(*) FROM characters;


UPDATE characters SET darkside = true;

UPDATE characters SET darkside = false WHERE name = 'Anakin Skywalker';

UPDATE characters SET(name,darkside) = ('Darth Vader', true) WHERE name = 'Anakin Skywalker';

UPDATE characters SET age = 65 WHERE name = 'Obi-Wan Kenobi';

DELETE FROM characters WHERE name = 'Darth Maul';

INSERT into characters (name,darkside,age) VALUES ('Stormtrooper',true,25);
INSERT into characters (name,darkside,age) VALUES ('Stormtrooper',true,25);
INSERT into characters (name,darkside,age) VALUES ('Stormtrooper',true,25);
INSERT into characters (name,darkside,age) VALUES ('Stormtrooper',true,25);
INSERT into characters (name,darkside,age) VALUES ('Stormtrooper',true,25);
INSERT into characters (name,darkside,age) VALUES ('Stormtrooper',true,25);


UPDATE characters SET age = 29 WHERE id = 9;


SELECT * FROM characters;
SELECT * FROM lightsabers;



