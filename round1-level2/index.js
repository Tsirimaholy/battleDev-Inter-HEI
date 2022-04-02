export function maxZeroSequence(array) {
    let arrayFound = [];
    while (true) {
        if (array.length <= 0) return arrayFound
        let arrayVal = processCurrentArray(array)
        if ((typeof arrayVal == "object") && (arrayVal.length > arrayFound.length)) arrayFound = (arrayVal);
        array.shift();
    }
}

/**
 * Check if a sequence of a given array will sum up to zero(0)
 * @param{Array} array
 * @return{Array} The array sequence
 * */
function processCurrentArray(array) {
    let copy = [...array];
    while (copy.length > 0) {
        let sum = copy.reduce((previousValue, nextValue) => previousValue + nextValue);
        if (sum === 0)
            return copy
        copy.pop();
    }
}

