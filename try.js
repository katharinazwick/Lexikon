function pointerInJs (){
    const a = 2;
    const b = 4;
    let c;
    c = a * b;
    return c;
}

let d = pointerInJs();

function morePointer (d){
    const e = 2;
    let f;
    f = d * e;
    return f;
}

//const g = 2;
//const h = 3;

//Arrow Functions
const plus = (g, h) => g + h;

const plusAndDif = (g, h, func) => func(g, h*2);

//console.log(plusAndDif(g, h, plus));

//Ziel statt (2+3)*2 => 2+3*2

//CallBack
function plus2(g, h) {
    return g + h;
}

function plusAndDif2(g, h, callback) {
    return callback(g, h * 2);
}

//console.log(plusAndDif2(g, h, plus2));
const term = {
    g: 2,
    h:3,
    j:11,
    k: 17
}
function difficult (g,h,j){
    let i = g + h;
    while (i<j){
        i *= 2;
    }
    return i;
}

function Aufruf (g,h,callback) {
    return callback (g,h*2, term.k);
}

console.log(difficult(term.g,term.h,term.j));
console.log(Aufruf(term.g,term.h, difficult));
