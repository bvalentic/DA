// Import the necessary packages
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const fs = require('fs');

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

// New functionality: plotting the results using chartjs-node-canvas
const width = 800;
const height = 600;
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

(async () => {
    const configuration = {
        type: 'line',
        data: {
            labels: t,
            datasets: [{
                label: 'y(t)',
                data: y,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const image = await chartJSNodeCanvas.renderToBuffer(configuration);
    fs.writeFileSync('./plot.png', image);
    console.log('The plot has been saved to plot.png')
})();
