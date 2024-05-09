function eulerMethod(dydx, y0, h, n) {
    let y = y0;
    for (let i = 0; i < n; i++) {
        let x = i * h;
        console.log(`y(${x}) = ${y}`);
        y += h * dydx(x, y);
    }
    return y;
}

// Example usage:
// Let's solve the differential equation dy/dx = x + y with y(0) = 1
function dydx(x, y) {
    return x + y;
}

let y0 = 1;
let h = 0.1;
let n = 10;

eulerMethod(dydx, y0, h, n);
