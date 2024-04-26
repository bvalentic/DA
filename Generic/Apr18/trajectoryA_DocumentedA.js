/**
 * Calculate the ballistic trajectory of an object given its initial conditions.
 *
 * @param {number} initialVelocity - The initial velocity of the object in meters per second (m/s).
 * @param {number} angle - The angle of projection in degrees.
 * @param {number} initialHeight - The initial height of the object in meters (m).
 *
 * @returns {{timeOfFlight: number, maximumHeight: number, range: number}} An object containing the time of flight, maximum height reached, and range of the projectile.
 */
function calculateTrajectory(initialVelocity, angle, initialHeight) {
    // Convert angle from degrees to radians for use in trigonometric functions
    const radianAngle = (angle * Math.PI) / 180;

    // Calculate the time of flight using the equation: t = (2 * v0 * sin(θ)) / g
    // where t is the time of flight, v0 is the initial velocity, θ is the angle of projection, and g is the gravitational acceleration (9.81 m/s^2)
    const timeOfFlight = (2 * initialVelocity * Math.sin(radianAngle)) / 9.81;

    // Calculate the maximum height using the equation: h = h0 + (v0^2 * sin^2(θ)) / (2 * g)
    // where h is the maximum height, h0 is the initial height, v0 is the initial velocity, θ is the angle of projection, and g is the gravitational acceleration (9.81 m/s^2)
    const maximumHeight = initialHeight + (Math.pow(initialVelocity * Math.sin(radianAngle), 2)) / (2 * 9.81);

    // Calculate the range using the equation: R = (v0^2 * sin(2θ)) / g
    // where R is the range, v0 is the initial velocity, θ is the angle of projection, and g is the gravitational acceleration (9.81 m/s^2)
    const range = (Math.pow(initialVelocity, 2) * Math.sin(2 * radianAngle)) / 9.81;

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
