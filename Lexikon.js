//Lexikon

//skills
//String.toLowerCase = ändert in Kleinbuchstaben, String.toUpperCase = ändert in Großbuchstaben


//generell
const flowers = ["one", "otherOne"];
console.log(typeof flowers);

const name = "Tom";
console.log("Hallo " + name + " !");
console.log(`Hallo ${name} !`);

//x += y === x = x + y
const howto = {
    a: 3 ** 2, //potenz
    b: 50 % 4,
    c: Math.sqrt(9), //wurzel
};
console.log(howto);

console.log(Math.round(5.5)); //runde
console.log(Math.floor(5.5)); //aufrunde
console.log(Math.ceil(5.5)); //abrunden
console.log(Math.max(1, 2, 3));
console.log(Math.min(1, 2, 3));

function Papagei(name) {
    return "my name is " + name;
}

console.log(Papagei("claus"));

let stg = "123";
console.log(parseInt(stg, 10)); //strict - parse.float für Kommazahlen(dann ohne radix)

const words = {
    word1: "Hallo\nWelt", //\n = Absatz, funktioniert außerhalb des Objects
    word2: "Welt".repeat(2),
    word3: "Welt".slice(1, 2), //sollte eigentlich el rauskommen
    word4: "Welt".substr(1, 2)
};
console.log(words);

//if and else and else if

function ifAndElse() {
    let people = 4;
    let calculateForMe = people * 4;
    if (people === 3) {
        calculateForMe = people * 4 - 1
    } else if (people === 2) {
        calculateForMe = people * 4 - 2
    } //else is possible but not important, cause the normal case is else
    return calculateForMe
}

console.log("ifandelse", ifAndElse());

/*function caseandswitch() {
    let name1 = "anna";
    const howmuch = 4;
    let calculatenow = 0;
    switch (name1) {
        case "anna":
            calculatenow = howmuch;
            break;
        case "paul":
            calculatenow = howmuch * 2;
            break;
        default:
            calculatenow = howmuch - 1
    }
    return calculatenow
}

console.log("caseandswitch", caseandswitch); *///funktioniert nicht

//Schleifen


//objects
//schleife mit let i of object
const light = {
    blue: 1, //blue befehl nennt sich schlüssel
    yellow: 2,
    green: 3
};

light.red = 4; //hinzufügen //stattlight.red auch light["red"] möglich dann wird klammer zuerst ausgewertet bsp ["re" + "d"] möglich
light.blue = 5; //ändern
delete light.yellow; //löschen
console.log(light);

if (light.green) {
    //benötigt true
}

if ("green" in light) {
    //prüft auf Vorhanden sein (egal ob true/false
}

for (const key in light) {
    //console.log(key); gibt nur links
    const value = light[key];
    console.log(value) //gibt rechts und links
}

/*object.keys(light); //oder values key in Object
object.entries(light);
    for (const entry of object.entries(light)) {
        console.log(entry [0] + " " + entry [1])
}*/

const sowas = {
    first: {firstname: "Max", secondname: "Moritz", age: 20},
    second: {firstname: "Anna", secondname: "Mial"}
};

//const firstname = sowas.firstname;
const {firstname, secondname} = sowas;
function sowie ({
    firstname, secondname, age = 25 //wenn age nicht gegeben = 25
          }) {
    //empty
}

//const empty = {};

//Arrays

const numbers = [1, 2, 4, 8];
numbers[4] = 20; //hinzufügen an bestimmte Stelle
numbers.push(16); //hinzufügen an das Ende
//<editor-fold desc="Description">
numbers.splice(1, 1); //entfernen ab Stelle, wie viele
//</editor-fold>
numbers.splice(1, 0, 24); //hinzufügen ab stelle, nichts löschen, was
numbers.pop(); //löschen der letzen Stelle
const number = numbers.shift(); //löschen der ersten Stelle
numbers.unshift(12); //hinzufügen an den Anfang
//schleife mit let i in array

console.log(numbers);
console.log(numbers[3]); //auswählen eines property (startet mit 0,1,2,3)
console.log(numbers.length); //anzahl property
console.log(numbers instanceof Array); //weil bei typeof Arrays als Objects raus kommen
console.log(numbers.indexOf(4)); //ist prperty enthalten? ergebnis ist stelle, -1 heißt nicht enthalten
console.log("lalalalalla",typeof (numbers)); //eig array aber sagt object

const letters = ["Baum", "Apfel", "Ente"];
letters.sort(); //sortiert alphabetisch, mit reverse rückgängig, mit Funktion sortierung festlegen
console.log(letters);

//Schleifen
for (let i = 0; i < numbers.length; i++) {
    console.log("Vers1", numbers[i]);
}

for (const number of numbers) {
    console.log("Vers2", number);
}

numbers.forEach((number) => {
    console.log("Vers3", number);
});

//const pecks = [1,2,3];
//function multiplearray (peck) {
//    for (let i = 0; i < pecks.length; i++){
//        multi = peck * 2
//    }
//    return multi
//}
//console.log("array", multiplearray(pecks));

//// includes - Überprüft ob ein übergebener Wert existiert im Array!!!!WICHTIG FÜR IFs
//concact - Fügt zwei Arrays zusammen
// slice - Erstellt eine Kopie (Optional: Von Start bis End Index)
// reverse - Dreht den Inhalt um
// sort - Sortiert das Array anhand einer übergebenen Sortierfunktion
// join - Gibt einen String zurück mit allen Array Elementen (Optional: Seperator - Default alle strings mit , getrennt)
// find - Gibt das erste Element zurück das die Callback Funktion erfüllt

const roles = ["create", "read", "update", "delete"];
const mappedRoles = roles.map((role) => role.toUpperCase());
console.log(mappedRoles); //änderung zurück geben

const cars = ["Mercedes", "Audi", "BMW", "Volkswagen", "Porsche"];
const vwGroup = cars.filter(
    (car) => car === "Volkswagen" || car === "Audi" || car === "Porsche"
);
console.log(vwGroup); //für alle die true sind

const numbersxx = [1, 2, "3", 4, "5"];
const onlyNumbers = numbersxx.every((value) => typeof value === "number");
console.log(onlyNumbers); //für alle ture

const auto = ["Mercedes", "Audi", "BMW", "Volkswagen", "Porsche"];
const hasAudi = auto.some((car) => car === "Audi");
console.log(hasAudi); //für mind. eins true

//Array im Array

const irgendwas = [
    wert1 = "Maus",
    wert2 = "Tante",
    [wert3 = 4,
        wert4 = 1]
];
console.log("hier", irgendwas[2][0]); //ausgeben stelle 2, dann wieder stelle 0

//string in Array umwandeln (und anders herum)
const shopping = ("Shoes, TShirt, Dog");
console.log(shopping.split(", "));
const shoppingliste = ["shoes", "tshirt", "dog"];
console.log(shoppingliste.join(", "));

//Spread Operator kombiniert Dinge

const parts = ["liebe", "dich"];
const message = ["ich", ...parts, "sehr"];
console.log(message);

const object1 = {
    name: "anna",
    age: 4,
    sex: "femal",
};
const object2 = {
    name: "anna",
    high: 1.40,
    lovefood: "banana"
};

const mergedobj = {...object1, ...object2};
console.log(mergedobj);

//Schleifen

for (let i = 0; i <= 5; i++) { //i = beliebig, statt i++ i = i + 1 oder alles möglich (fkt)
    console.log("so muss das sein");
}

let i = 0;
while (i <= 5) {
    console.log("oder so");
    i++;
}

const phone = { //warum /loopt objecte
    manufacturer: "Apple",
    model: "iPhone",
    storage: 128,
    isReleased: false,
};

for (const key in phone) {
    console.log(key); // manufacturer, model, storage, isReleased
}

const array = [1, 2, 3, 4, 5]; //loopt array

for (const number of array) { //for const i in numbers{c.l[(i) c.l(numbers[i]} gleiches nur mit position
    console.log(number); // 1, 2, 3, 4, 5
}

for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        continue //überspringen
    }
    if (i === 5) {
        break //abbrechen
    }
    console.log(i);
}

//JSON

const data = [
    {"firstname": "sarah", "age": 23, "there": true}, //arrays, objects, strings, numbers, booleans werden unterstützt
    {"firstname": "luk", "age": 22, "there": false}
];
//für JSON müssen Schlüssel als String definiert werden

const dataAsJson = JSON.stringify(data);
console.log(dataAsJson); //videos weiter

//weiter