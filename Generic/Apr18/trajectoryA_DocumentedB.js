/**
 * Calculates the ballistic trajectory of an object given its initial conditions.
 *
 * @param {number} initialVelocity - The initial velocity of the object in m/s.
 * @param {number} angle - The angle of projection in degrees.
 * @param {number} initialHeight - The initial height of the object in meters.
 *
 * @returns {object} An object containing the time of flight, maximum height reached, and range of the projectile.
 */
function calculateTrajectory(initialVelocity, angle, initialHeight) {
    // Define the gravitational acceleration constant in m/s^2.
    const gravity = 9.81;

    // Convert the angle from degrees to radians for use in trigonometric functions.
    const radianAngle = (angle * Math.PI) / 180;

    // Calculate the time of flight using the equation: t = 2 * v0 * sin(θ) / g.
    const timeOfFlight = (2 * initialVelocity * Math.sin(radianAngle)) / gravity;

    // Calculate the maximum height reached using the equation: h = y0 + (v0 * sin(θ))^2 / (2 * g).
    const maximumHeight = initialHeight + (Math.pow(initialVelocity * Math.sin(radianAngle), 2)) / (2 * gravity);

    // Calculate the range of the projectile using the equation: R = (v0^2 * sin(2θ)) / g.
    const range = (Math.pow(initialVelocity, 2) * Math.sin(2 * radianAngle)) / gravity;

    // Return an object containing the calculated values.
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
