function generate2DArray(n, m) {
    let arr = new Array(n);
    for(let i = 0; i < n; i++) {
        arr[i] = new Array(m);
    }
    return arr;
}

let myArray = generate2DArray(3, 4);
console.log(myArray);
