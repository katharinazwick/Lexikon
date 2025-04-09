function WieSichDerSommerAnfHlt() {
    const ages = [
        10,
        45
    ];
    let agesMonth = [];
    for (let i in ages) {
        agesMonth[i] = ages[i] * 12;
    }
    const summer = 4;
    let howItFeel = [];
    for (let i in agesMonth) {
        howItFeel[i] = (summer / agesMonth[i]) * 100;
    }
    let different = [];
    for (let i in howItFeel) {
        different = howItFeel[i - 1] / howItFeel[i];
    }
    return [
        ages,
        howItFeel,
        different
    ];
}

console.log(WieSichDerSommerAnfHlt());



