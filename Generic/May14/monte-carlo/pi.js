function estimatePi(numPoints) {
    let pointsInsideCircle = 0;
  
    for (let i = 0; i < numPoints; i++) {
        const x = Math.random();
        const y = Math.random();
        const distance = x * x + y * y;
    
        if (distance <= 1) {
            pointsInsideCircle++;
        }
    }
  
    return 4 * pointsInsideCircle / numPoints;
}
  
const numPoints = 1000000;
const estimatedPi = estimatePi(numPoints);

console.log(`Estimated Pi: ${estimatedPi}`);
