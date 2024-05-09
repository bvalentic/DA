function generateSalt() {
    let salt = '';
    for (let i = 0; i < 16; i++) {
        salt += Math.floor(Math.random() * 10);
    }
    return salt;
}

function hashPassword(password, salt) {
    let hashedPassword = '';
    for (let i = 0; i < password.length; i++) {
        hashedPassword += String.fromCharCode(password.charCodeAt(i) + salt.charCodeAt(i % salt.length));
    }
    return hashedPassword;
}

function verifyPassword(password, salt, hashedPassword) {
    let newHashedPassword = hashPassword(password, salt);
    return newHashedPassword === hashedPassword;
}

// Example usage:
let password = 'mysecretpassword';
let salt = generateSalt();
let hashedPassword = hashPassword(password, salt);

console.log('Salt:', salt);
console.log('Hashed Password:', hashedPassword);

let isValid = verifyPassword(password, salt, hashedPassword);
console.log('Is Valid:', isValid);
