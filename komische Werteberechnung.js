function komischeWerteberechnung() {
    const jahre = 22;
    let tage = 372;
    tage += jahre * 365;
    const personen = [
        [22, 372, 16, 243], //Jahre, Tage, Jahre sehen, Tage sehen //L
        [0, 164, 0, 68], //T
        [19, 100, 18, 100] //M
    ];
    for (let i in personen) {
        personen[i][0] = personen[i][0] * 365 + personen[i][1];
        personen[i].splice(1, 1)
    }
    for (let i in personen) {
        personen[i][1] = personen[i][1] * 365 + personen[i][2];
        personen[i].splice(2, 1)
    }
    let calculate = [
        [],
        [], //i mal arrays?
        []
        //kennen in Prozent vom Leben, sehen von Leben, sehen von kennen
    ];
        for (let i in personen) {
            calculate[i][0] = (100 / tage) * personen[i][0];
            calculate[i][1] = (100 / tage) * personen[i][1];
            calculate[i][2] = (100 / personen[i][0]) * personen[i][1];
    }
    return calculate
}

console.log(komischeWerteberechnung());