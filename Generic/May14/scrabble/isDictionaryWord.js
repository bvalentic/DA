import wordExists from 'word-exists';
import { randomString } from './randomString.js';

function isDictionaryWord(word) {
    return wordExists(word);
}

export { isDictionaryWord };

const randomStr = randomString(10);
console.log(randomStr);

const isValid = isDictionaryWord(randomStr);
console.log(isValid);
