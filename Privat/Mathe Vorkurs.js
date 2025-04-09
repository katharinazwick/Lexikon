/*function lesson1() {
    let fb = 0;
    let ww = [];
    for (let i = 0; i < 100; i++) {
        fb++;
        for (let j = 0; j < 100; j++) {
            ww[i] = fb
        }
    }
    for (let i = 0; i <= 33; i++) {
        for (let j = 0; j < 100; j++) {
            if (ww[j] === 3 * i) {
                ww[j] = "fizz"
            }
            if (ww[j] === 5 * i) {
                ww[j] = "buzz"
            }
            if (ww[j] === i * 5 * 3) {
            ww[j] = "fizz buzz"
            }
        }
    }
return ww
}

console.log(lesson1())*/

/*function lesson2() {
    let n = 8
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;

    let temp=0
    for (let i = 2; i <n; i++) {
        temp = a+b;
        a=b;
        b = temp;
    }
    return b
}

console.log(lesson2())*/

/*function lesson4() {
    const marks = [1, 2, 3];
    let end = 0;
    for (i in marks) {
        end = marks[i] + end;
    }
    end = end / marks.length
    return end
}

console.log(lesson3());*/

/*function lesson5() {
    const card = {
        food1: 2,
        food2: 3,
        food3: 3.5
    };
    let price = 0;
    const want = {
        food1: 2,
        food2: 1,
    }
    if (want.food1) {
        price = card.food1 * want.food1;
    }
    if (want.food2) {
        price = price + card.food2 * want.food2;
    }
    if (want.food3) {
        price = price + card.food3 * want.food3;
    }
    return price
}

console.log(lesson5())*/

function lesson6() {
    let number = 102;
    let steps = [number];
    while (number >= 10) {
        if (number % 2 === 0) {
            number = number / 2
        } else if (number % 3 === 0) {
            number = number / 3
        } else if (number % 5 === 0) {
            number = number / 5
        } else if (number % 7 === 0) {
            number = number / 7
        }
        else {
            break
        }
        steps.push(number);
    }
    return steps
}

console.log(lesson6());

/*function lesson7() {
    let steps = [];
    let x = 7
    while (x !== 1) {
        steps.push(x)
        if (x % 2 === 0) {
            x = x / 2
        } else {
            x = x * 3 + 1
        }
    }
    steps.push(1);
    return steps
}

console.log(lesson7())*/

/*function lesson8() {
    let number = 1344;
    let number1 = number;
    for (i = 2; i <= 7; i++) {
        while (number1 % i === 0) {
            number1 = number1 - 1
        }
        number2 = number - number1
    }
    return [number1, number2]
}

console.log(lesson8());*/

/*function lesson10() {
    const marks = [1, 2, 3, 2, 4];
    let a = 0;
    let b = 0;
    for (let i = 0; i <= marks.length; i++) {
        if (marks[i] > 0 && marks[i] < 4) {
            a = a + 1;
        }
        durchschnittYes = a / marks.length;
        durchschnittNo = (marks.length - a) / marks.length;

    }
    return [durchschnittYes, durchschnittNo]
}

console.log(lesson10());*/

function lesson11A() {
    const card = {
        food1: 2.45,
        food2: 3.5,
        food3: 3.20
    };
    let price = 0;
    const want = {
        food1: 2,
        food2: 4,
    }
    if (want.food1) {
        price = card.food1 * want.food1;
    }
    if (want.food2) {
        price = price + card.food2 * want.food2;
    }
    if (want.food3) {
        price = price + card.food3 * want.food3;
    }
    let x = {
        zehner: 0,
        fuenfer: 0,
        zweier: 0,
        einer: 0
    };
    let prices = price
    let y = [10, 5, 2, 1];
    for (k = 0; k <= y.length; k++) {
        for (i = 1; i <= prices / y[k]; i++) {
            while (prices >= y[k]) {
                prices = prices - i * y[k]
            }
        }
        if (k === 0) {
            y10 = prices
            x.zehner = (price - prices) / y[k]
        }
        if (k === 1) {
            y5 = prices
            x.fuenfer = (y10 - prices) / y[k]
        }
        if (k === 2) {
            y2 = prices
            x.zweier = (y5 - prices) / y[k]
        }
        if (k === 3) {
            y1 = prices
            x.einer = (y2 - prices) / y[k]
        }
    }
    return [price, prices, x]
}

console.log(lesson11A());

//420 summe von primzahlen
function lesson16()  {//falsch!!!!
    let number = 420;
    let number1 = number;
    for (i = 2; i <= 7; i++) {
        while (number1 % i === 0) {
            number1 = number1 - 1
        }
        number2 = number - number1
        break
    }
    number3 = number1 - 1;
    for (i = 2; i <= 7; i++) {
        while (number3 % i === 0) {
            number3 = number3 - 1
        }
    }
    return [number1, number2, number3]
}

console.log(lesson16());