import { isDictionaryWord } from './isDictionaryWord.js';
import { randomString } from './randomString.js';
import { scrabbleScore } from './scrabbleScore.js';

// Generate an array of random strings
const numStrings = 10;
const stringLength = 5;
const randomStrings = [];
for (let i = 0; i < numStrings; i++) {
    randomStrings.push(randomString(stringLength));
}

// Calculate Scrabble scores and check if they are valid words
const results = randomStrings.map((str) => {
    return {
        string: str,
        score: scrabbleScore(str),
        isDictionary: isDictionaryWord(str)
    };
});

// Print the results
console.log(results);
