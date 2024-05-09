function caesarCipher(str, shift) {
    if (shift === undefined) {
        shift = 1;
    }
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 32 && charCode <= 126) {
            charCode = ((charCode - 32 + shift) % (126 - 32 + 1)) + 32;
        }
        result += String.fromCharCode(charCode);
    }
    return result;
}

let encrypted = caesarCipher('Hello, World!', 3); // "Khoor, Zruog!"
let decrypted = caesarCipher(encrypted, -3); // "Hello, World!"
console.log(encrypted);
console.log(decrypted);
