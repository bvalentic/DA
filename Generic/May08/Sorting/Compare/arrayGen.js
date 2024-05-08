function generateRandomArray(length, max = 100) {
    return Array(length).fill().map(() => Math.floor(Math.random() * (max + 1)));
}

const arr = generateRandomArray(10); // Generates an array of 10 random integers between 0 and 100
const arr2 = generateRandomArray(20, 50); // Generates an array of 20 random integers between 0 and 50

console.log(arr);
console.log(arr2);
