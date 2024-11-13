const text = "i love you";
const newtext = text.split(" "); //trennt Sätze, ("")=Buchstaben, ("i")=außer i, (" ", 2)= ersten zwei Wörter
console.log(newtext);

const fruits = ["banana", "apple", "strawberry"];
let newfruit = fruits.join(" and "); //aus Array wird String
console.log(newfruit);

//window.innerheight oder innerwidth im Browser um Flächen abzufragen

//alternative zu funktion
const ameise = function () { //anonyme Fkt
    return 1 + 3
};
console.log(ameise());

tiger = () => {
    return 1 + 2
};
console.log(tiger());

//theorie: maus = (a) => {return a+1} geht auch
// maus = a => {return a+1} (weil ein Parmeter)  geht auch
// maus = a => a + 5 (bei einer Zeile)

//Funktion aufrufen
sayHello = () => {
    return 1 + 7
};
console.log(sayHello);

a = sayHello;
console.log(a);

//asynchrones JS
let Zahl = 5;
setTimeout(() => {
    console.log(Zahl)
}, 5000); //wird erst in 5sek ausgegeben
console.log("baum"); //durch timeout zuerst

/*
const fs = require("fs");
synchron, blocking code
const content = fs.readFileSync("daten.txt", {encoding: "utf-8"});
console.log(content);
asynchron, non-blocking code = arbeitet parallel und schneller
fs, readFile("daten.txt", {encoding: "utf-8"}, (err, data) => {
    console.log(data)
});*/

//Bsp.
const data2 = {
    students: ["Max", "Moritz"],
    numberOfStudents: 2
};

if (data2.numberOfStudents <= 2) {
    data2.students.push("Erika");
    data2.numberOfStudents++;
}

//Countdown 2 optionen
/*console.log("3...");
setTimeout(()=>console.log("2..."), 1000);
setTimeout(()=>console.log("1..."), 2000);
setTimeout(()=>console.log("Start"), 3000);*/

console.log("3...");
setTimeout(() => {
    console.log("2...");
    setTimeout(() => {
        console.log("1...");
        setTimeout(()=> {
            console.log("Start")
        },1000)
    },1000)
},1000);

//daten und son scheiß
/*const fs = require("fs"); //zeigt dir alle Datein des aktuellen Ordners
fs.readdir(__dirname, (err, files) => {
    console.log(files)
});*/

/*fs.readFile("daten.txt", (err, data) => {
    console.log(data);
});*/ //funktioniert halt nicht ):

//weiter gehts

//const https = require("https");
//const http = require("http");
//const url = "https://api.spacexdata.com/v4/launches/latest";

/*http.get(url, res => { //url könnte auch direkt eingetragen werden
   let data = "";
    res.on("data", chunk => {
        console.log("chunk", chunk);
        data += chunk
    });
    console.log(res.statusCode)
});*/

/*res.on("end",() => {
    const dataAsObj = JSON.parse(data);
console.log(dataAsObj["name"])
});*/

//weiter