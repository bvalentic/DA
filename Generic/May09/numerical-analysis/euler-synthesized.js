// Retained from first response: eulerMethod function with logging
// Retained from second response: eulerMethod function with array return,
//                               passing of derivative function, and calculation of n and h
function eulerMethod(f, y0, t) {
    let n = t.length;
    let h = t[1] - t[0];
    let y = [y0];

    for (let i = 0; i < n - 1; i++) {
        console.log(`y(${t[i]}) = ${y[i]}`);
        y.push(y[i] + h * f(t[i], y[i]));
    }
    console.log(`y(${t[n-1]}) = ${y[n-1]}`);
    return y;
}

// Retained from first response: example usage with dydx function
// Retained from second response: passing of derivative function and list of time points
function dydx(x, y) {
    return x + y;
}

let y0 = 1;
let t = Array.from({ length: 100 }, (_, i) => i * 0.1);

let y = eulerMethod(dydx, y0, t);
console.log(y);
