const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var codes = expr.split("");
    var result = "";
    for (var i = 0; i < codes.length; i += 10) {
        if (codes[i] == "*") {
            result += " ";
            continue;
        }
        var value = ""; 
        for (var j = 0; j < 10; j += 2) {
            var signal = codes[i + j] + codes[i + j + 1];
            switch (signal) {
                case "00":
                    break;
                case "10":
                    value += ".";
                    break;
                case "11":
                    value += "-";
                    break;
            }
        }
        result += MORSE_TABLE[value];
    }
    return result;
}

module.exports = {
    decode
}