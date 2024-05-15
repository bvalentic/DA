function estimateE(numTrials) {
    let sum = 0;
    for (let i = 0; i < numTrials; i++) {
        const n = Math.floor(Math.random() * 10000) + 1; // Randomly select n between 1 and 10000
        sum += Math.pow(1 + 1/n, n);
    }
    return sum / numTrials;
}
  
const numTrials = 1000000;
const estimatedE = estimateE(numTrials);

console.log(`Estimated e: ${estimatedE}`);
