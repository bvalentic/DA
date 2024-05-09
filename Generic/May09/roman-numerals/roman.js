function romanToInt(roman) {
    let result = 0;

    // Object to map Roman numerals to their integer values
    const romanValues = {
        M: 1000, D: 500, C: 100,
        L: 50, X: 10, V: 5, I: 1
    };

    // Iterate through the Roman numeral string in reverse
    for (let i = roman.length - 1; i >= 0; i--) {
        const current = roman[i];
        const currentValue = romanValues[current];

        // If the next character is larger than the current character,
        // it means the current character is subtracted, so we add
        // its negative value to the result
        if (i > 0 && romanValues[roman[i - 1]] > currentValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }

    return result;
}

const romanNumeral = "MCMXCIV";
const integerValue = romanToInt(romanNumeral);
console.log(integerValue); // Output: 1994
