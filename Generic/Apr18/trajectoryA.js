
function calculateTrajectory(initialVelocity, angle, initialHeight) {
    const gravity = 9.81; // m/s^2
    const radianAngle = (angle * Math.PI) / 180; // Convert angle to radians

    const timeOfFlight = (2 * initialVelocity * Math.sin(radianAngle)) / gravity;
    const maximumHeight = initialHeight + (Math.pow(initialVelocity * Math.sin(radianAngle), 2)) / (2 * gravity);
    const range = (Math.pow(initialVelocity, 2) * Math.sin(2 * radianAngle)) / gravity;

    return {
        timeOfFlight,
        maximumHeight,
        range
    };
}

// Example usage:
const initialConditions = calculateTrajectory(20, 45, 0);
console.log(`Time of flight: ${initialConditions.timeOfFlight} seconds`);
console.log(`Maximum height: ${initialConditions.maximumHeight} meters`);
console.log(`Range: ${initialConditions.range} meters`);
