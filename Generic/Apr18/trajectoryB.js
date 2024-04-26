function calculateTrajectory(initialVelocity, angle, initialHeight) {
    const g = 9.81; // m/s^2
    const theta = angle * Math.PI / 180; // convert angle to radians

    const v0x = initialVelocity * Math.cos(theta);
    const v0y = initialVelocity * Math.sin(theta);

    const t = (v0y + Math.sqrt(v0y**2 + 2*g*initialHeight)) / g;

    const x = v0x * t;
    const y = initialHeight + v0y * t - 0.5 * g * t**2;

    return {x, y};
}

// Example usage:
const result = calculateTrajectory(10, 45, 0);
console.log(`The object will land at (${result.x}, ${result.y})`);
