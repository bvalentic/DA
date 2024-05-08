function combSort(arr) {
    let len = arr.length;
    let gap = len;
    let shrink = 1.3;

    while (gap > 1) {
        gap = Math.floor(gap / shrink);

        for (let i = 0; i + gap < len; i++) {
            if (arr[i] > arr[i + gap]) {
                let temp = arr[i];
                arr[i] = arr[i + gap];
                arr[i + gap] = temp;
            }
        }
    }
    return arr;
}

// test the function
let arr = [5, 2, 4, 7, 1, 3];
console.log("Original array: ", arr);
console.log("Sorted array: ", combSort(arr));
