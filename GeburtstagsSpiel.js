function code () {
    let translatedWord = ""
    let word = "baum"
    let letters = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z"];
    for (let j = 0; j < 26; j++) {
        letters[j] = 3 * (j + 1)
    }
    for (let k = 0; k < word.length; k++) {
        let char = word[k].toLowerCase();
        translatedWord += letters[char];
        return translatedWord
    }

}

console.log(code())

// Funktion, die das Wort nach dem Alphabet übersetzt
function translateWord(word) {
    let translatedWord = '';

    for (let i = 0; i < word.length; i++) {
        let char = word[i].toLowerCase(); // Kleinbuchstaben verwenden
        let charCode = char.charCodeAt(0); // ASCII-Code des Buchstabens holen

        // Überprüfen, ob der Buchstabe im Bereich a-z ist
        if (charCode >= 97 && charCode <= 122) {
            let letterNumber = charCode - 96; // ASCII-Code für 'a' ist 97, also -96 für a=1
            translatedWord += letterNumber + ' ';
        } else {
            translatedWord += '? '; // Für unbekannte Zeichen
        }
    }

    return translatedWord.trim(); // Entfernt das letzte Leerzeichen
}

// Das Wort "baum" übersetzen
let word = "reischen heiß ich nicht";
let result = translateWord(word);
console.log(result);
