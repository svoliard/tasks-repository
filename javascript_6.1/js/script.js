function findMin(arrayData) {
    let minValue = Infinity;
    for (item of arrayData) {
        if (item < minValue)
            minValue = item;
    }
    return minValue;
}
/*
function findMax(arrayData) {
    let maxValue = -Infinity;
    for (item of arrayData) {
        if (item > maxValue)
        maxValue = item;
    }
    return maxValue;
}
*/
