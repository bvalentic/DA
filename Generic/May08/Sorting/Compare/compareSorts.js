function generateRandomArray(length, max = 100) {
    return Array(length).fill().map(() => Math.floor(Math.random() * (max + 1)));
}

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

function timeArray(arrayList, func, name) {
    let times = [];

    arrayList.forEach(array => {
        let start = performance.now();
        func(array);
        let end = performance.now();

        let time = (end - start).toFixed(4);
        times.push({
            length: array.length,
            sortTime: time
        });
    })

    console.log(`${name} sort times:`);
    console.log(`Array Length\tSort Time (ms)`);
    times.forEach(entry => {
        console.log(`${entry.length}\t\t${entry.sortTime}`);
    });
    return times;
}

function compareTimes(times1, times2) {
    let wins1 = 0;
    let wins2 = 0;

    for (let i = 0; i < times1.length; i++) {
        if (parseFloat(times1[i].sortTime) < parseFloat(times2[i].sortTime)) {
            wins1++;
        } else if (parseFloat(times1[i].sortTime) > parseFloat(times2[i].sortTime)) {
            wins2++;
        }
    }
    
    if (wins1 > wins2) {
        return "Array 1 has lower sort times in " + wins1 + " out of " + times1.length + " cases.";
    } else if (wins1 < wins2) {
        return "Array 2 has lower sort times in " + wins2 + " out of " + times1.length + " cases.";
    } else {
        return "Both arrays have the same number of lower sort times.";
    }
}

const tinyArray1 = generateRandomArray(8, 10);         // 8 random ints between 0 and 10
const tinyArray2 = generateRandomArray(8);             // 8 random ints between 0 and 100
const smallArray1 = generateRandomArray(64);           // 64 random ints between 0 and 100
const smallArray2 = generateRandomArray(64, 1000);     // 64 random ints between 0 and 1,000
const medArray1 = generateRandomArray(512, 1000);      // 512 random ints between 0 and 1,000
const medArray2 = generateRandomArray(512, 10000);     // 512 random ints between 0 and 10,000
const largeArray1 = generateRandomArray(4096, 10000);  // 4096 random ints between 0 and 10,000
const largeArray2 = generateRandomArray(4096, 100000); // 4096 random ints between 0 and 100,000

const arrayList = [
    tinyArray1, 
    tinyArray2, 
    smallArray1, 
    smallArray2, 
    medArray1, 
    medArray2, 
    largeArray1, 
    largeArray2
];

const bubbleTimes = timeArray(arrayList, bubbleSort, "Bubble");
const combTimes = timeArray(arrayList, combSort, "Comb");

const results = compareTimes(bubbleTimes, combTimes);
console.log(results);
