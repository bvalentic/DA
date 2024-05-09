function eulerMethod(f, y0, t) {
    let n = t.length;
    let h = t[1] - t[0];
    let y = [y0];

    for (let i = 0; i < n - 1; i++) {
        y.push(y[i] + h * f(t[i], y[i]));
    }

    return y;
}

function f(t, y) {
    return -y;
}

let y0 = 1;
let t = Array.from({ length: 100 }, (_, i) => i * 0.1);

let y = eulerMethod(f, y0, t);
console.log(y);
