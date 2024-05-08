// Function to plot an array
function plotArray(array) {
    // Check if the HTML element with the id 'myDiv' exists
    const div = document.getElementById('myDiv');
    if (!div) {
      console.error("HTML element with id 'myDiv' does not exist.");
      return;
    }
  
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
  
    Plotly.newPlot(div, [trace], layout);
}
