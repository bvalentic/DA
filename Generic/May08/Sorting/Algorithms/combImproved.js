function combSort(arr) {
    let len = arr.length;
    let gap = len;
    let shrink = 1.247330950103979;

    while (gap > 1) {
        gap = Math.floor(gap / shrink);

        for (let i = 0; i + gap < len; i++) {
            if (arr[i] > arr[i + gap]) {
                // XOR swap trick
                arr[i] ^= arr[i + gap];
                arr[i + gap] ^= arr[i];
                arr[i] ^= arr[i + gap];
            }
        }
    }
    return arr;
}
