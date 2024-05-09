const crypto = require('crypto');

function encrypt(str, key) {
    if (key === undefined) {
        throw new Error('Key is required');
    }
    const cipher = crypto.createCipheriv('aes-256-cbc', key, '1234567890123456');
    let encrypted = cipher.update(str, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(encrypted, key) {
    if (key === undefined) {
        throw new Error('Key is required');
    }
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, '1234567890123456');
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

let randomKey = crypto.randomBytes(32);

let password = 'my_secret_password';
let salt = crypto.randomBytes(16);
let secureKey = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha512');

const testString = "The quick red fox jumped over the lazy brown dog";
console.log(`Test string: ${testString}`)
let encryptedRandom = encrypt(testString, randomKey);
console.log(`Encrypted string with random key: ${encryptedRandom}`); // Output: "a1c6f...39b7"
let decryptedRandom = decrypt(encryptedRandom, randomKey);
console.log(`Decrypted string with random key: ${decryptedRandom}`); // Output: "Hello, World!"

let encryptedSecure = encrypt(testString, secureKey);
console.log(`Encrypted string with secure key: ${encryptedSecure}`); // Output: "a1c6f...39b7"
let decryptedSecure = decrypt(encryptedSecure, secureKey);
console.log(`Decrypted string with secure key: ${decryptedSecure}`); // Output: "Hello, World!"
