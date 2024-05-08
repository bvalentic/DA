function bubbleSort(arr) {
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// test the function
let arr = [5, 2, 4, 7, 1, 3];
console.log("Original array: ", arr);
console.log("Sorted array: ", bubbleSort(arr));
