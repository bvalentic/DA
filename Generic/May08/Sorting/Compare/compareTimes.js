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
