//map
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [];
for (const n of numbers) {
    numbers2.push(n * 2)
}

const numbers3 = numbers.map((value) => value * 2);

console.log(numbers2);
console.log(numbers3);

const students = [{firstname: "Max", lastname: "Mustermann"}, {firstname: "Erika", lastname: "Mustermann"},];
const names = students.map((value) => {
    return `${value.firstname} ${value.lastname}`;
});
console.log(names);

//filtern
const kanu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const kanu2 = kanu.filter((value) => {
    return (value % 2) === 0 //{} kann man weglassen wegen alles in eine Zeile
    // if (value %2 === 0)return true; //%2 = durch zwei teilbar
    //else return false
});
console.log(kanu2);

//for each
let baum = [1, 2, 3, 4, 5]; //wirft alles einzelln aus
baum.forEach((n) => {
    console.log(n * 2)
});
console.log("hallo", baum);

function saft(n) {
    console.log(4 * n)
}

baum.forEach(saft);

const lollis = [{firstname: "Max"}, {firstname: "Erika"},];

/*let exists = false;
for (const lolli of lollis) {
    if (lolli.firstname === "Max") {
        exists = true;
        break
    }
}
console.log(exists);*/

const s = lollis.find((lolli) => {
    if (lolli.firstname === "Max") return true; else return false
});
console.log(s);

const m = lollis.some((value) => {
    if (value.firstname === "Max") return true; else return false
});
console.log(m);

const apfel = [100, 5, 6, 3, 2, 77];

const dd = apfel.reduce((prev, cur) => {
    if (prev < cur) return prev; //mit funktion wert suchen
    else return cur //cur = aktuell prev= number.max oder nächste zahl
}, Number.MAX_SAFE_INTEGER);

console.log(dd);

const ee = apfel.reduce((prev, cur) => {
    return prev + cur; //summe
}, 0);

console.log("dam", ee);

Math.round(2.3); // 2
Math.floor(2.5); // 3
Math.ceil(2.5); // 2

console.log(true ? 1 : 2); //left
console.log(false ? 1 : 2); //right

const values = [1, 2, 3, 6];
console.log(Math.max(...values));

function max(values) { //schwierigere alternative für max
    let start = Number.MIN_SAFE_INTEGER;
    for (const value of values) {
        if (value > start) {
            start = value
        }
    }
    return start
}

console.log("max", max (values));

const y = [1, 2, 3];
const ya = [-1, ...y, 5];
console.log(ya);

//type script, java, python, express, vue.js


//weiter