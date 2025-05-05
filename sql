SELECT * FROM Tabellenname => lade alles von

INSERT INTO Tabellenname (Spaltenname1, Spaltenname2...) => hinzufügen
VALUES ("Value1", "Value2")

ORDER BY SpaltennameX ASC (optional) => sortiere nach Spaltenname alphabetisch
ASC => aufsteigend DESC => absteigend (bei garnichts automatisch ASC)

SELECT * FROM Tabellenname WHERE SpaltennameX="Value
Bsp. WHERE City = "Berlin" => filtern
WHERE City IN ("Berlin", "Madrid") => alle leute aus Berlin oder Madrid
WHERE Name LIKE "Anna%" => bei Name, so wird auch Anna Lena angezeigt
so geht auch Anfangen => WHERE Name LIKE "A%"
WHERE Postleitzahl LIKE "0%" AND Country "Deutschland"

oder
SELECT * FROM Personen WHERE (Country="USA" AND Postleitzahl="01234") OR (COUNTRY="Mexiko" AND ......)

verbinden

------------------------------------
postgreSQL

CREATE TABLE movie (
title VARCHAR (255) NOT NULL PRIMARY KEY,
stream VARCHAR (20),
ID INT,
release DATE,
);

hinzufügen:

INSERT INTO movie (title)
VALUES ('Harry Potter');