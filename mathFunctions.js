function findMean(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / arr.length;
}

function findMedian(arr){
    arr.sort((a, b) => a - b);
        const middleIndex = Math.floor(numArr.length / 2);
        if (arr.length % 2 === 0) {
            return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
        } 
        return arr[middleIndex];
}

function findMode(arr){
    counts = {};
    maxValue = 0;
    arr.forEach(function(e) {
        if(counts[e] === undefined) {
        counts[e] = 0
    }
        counts[e] += 1
    })
    
    const values = Object.values(counts);
    values.map((el) => {
        const valueFromObject = el;
        maxValue = Math.max(maxValue, valueFromObject);
    })
    return getKeyByValue(counts, maxValue);
}

function getKeyByValue(obj, value) {
    return Object.entries(obj).reduce((acc, [key, val]) => {
        if (val === value) {
            acc.push(key);
        }
        return acc;
    }, []);
}

module.exports = { findMean, findMedian, findMode };