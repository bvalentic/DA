import seedrandom from 'seedrandom';

// function that takes a string as input and randomly changes each character, returning the transformed string
function transformString(str, seed) {
    if (seed !== undefined) {
        seedrandom(seed);
    }
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        let newCharCode = Math.floor(Math.random() * (126 - 32 + 1)) + 32;
        while (newCharCode === charCode) {
            newCharCode = Math.floor(Math.random() * (126 - 32 + 1)) + 32;
        }
        result += String.fromCharCode(newCharCode);
    }
    return result;
}

const testString = "The quick red fox jumped over the lazy brown dog";
let transformedString = transformString(testString, 12345);

console.log(`Original string: ${testString}`);
console.log(`Transformed string: ${transformedString}`);
