const romanValues = Object.freeze({
    M: 1000, D: 500, C: 100,
    L: 50, X: 10, V: 5, I: 1
});

function romanToInt(roman) {
    if (typeof roman !== 'string') {
        throw new Error('Input must be a string');
    }

    return [...roman].reduce((result, current, index, array) => {
        const currentValue = romanValues[current];
        const nextValue = index > 0 ? romanValues[array[index - 1]] : 0;

        return result + (currentValue < nextValue ? -currentValue : currentValue);
    }, 0);
}

function intToRoman(num) {
    if (typeof num !== 'number' || num < 1 || num > 3999) {
        throw new Error('Input must be an integer between 1 and 3999');
    }

    const mapping = [
        { value: 1000, roman: 'M' },
        { value: 900, roman: 'CM' },
        { value: 500, roman: 'D' },
        { value: 400, roman: 'CD' },
        { value: 100, roman: 'C' },
        { value: 90, roman: 'XC' },
        { value: 50, roman: 'L' },
        { value: 40, roman: 'XL' },
        { value: 10, roman: 'X' },
        { value: 9, roman: 'IX' },
        { value: 5, roman: 'V' },
        { value: 4, roman: 'IV' },
        { value: 1, roman: 'I' }
    ];

    let result = '';
    for (const { value, roman } of mapping) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result;
}

const romanNumeral = "MCMXCIV";
const integerValue = romanToInt(romanNumeral);
console.log(integerValue); // Output: 1994

const integer = 1994;
const romanNumeralValue = intToRoman(integer);
console.log(romanNumeralValue); // Output: MCMXCIV
