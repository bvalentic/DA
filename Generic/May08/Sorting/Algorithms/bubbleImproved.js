function bubbleSort(arr) {
    let len = arr.length;
    for (let i = len-1; i>=0; i--) {
        let swapped = false;
        for(let j = 1; j<=i; j++) {
            if(arr[j-1]>arr[j]) {
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}
