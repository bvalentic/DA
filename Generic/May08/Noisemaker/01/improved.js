// Import required libraries
import * as mathjs from 'mathjs';
import * as Plotly from 'plotly.js';

// Function to create an array with average and random noise
function createArrayWithAverage(length, average, noiseStd = null) {
    // If noiseStd is not provided, calculate a default relative to the average
    const std = noiseStd || average * 0.1;

    // Create an array filled with the average values and random noise
    return Array(length).fill().map(() => average + mathjs.random.normal(0, std));
}

// Example usage (calculating the standard deviation)
const data = [10, 12, 9, 11.5]; // Sample data
let resultArray = createArrayWithAverage(data.length, mathjs.mean(data), mathjs.std(data));
console.log(resultArray);

// Function to plot an array
function plotArray(array) {
    // Create a plot
    const trace = {
        x: Array(array.length).fill().map((_, i) => i),
        y: array,
        type: 'scatter'
    };

    const layout = {
        title: 'Array with Average and Noise',
        xaxis: { title: 'Index' },
        yaxis: { title: 'Value' }
    };

    Plotly.newPlot('myDiv', [trace], layout);
}

// Example usage
const myLength = 10;
const myAverage = 10.5;
resultArray = createArrayWithAverage(myLength, myAverage);

plotArray(resultArray);
