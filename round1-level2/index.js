export function maxZeroSequence(array) {
    let arrayFound = [];
    let arrayCopy = [...array];
    while (true) {
        if (arrayCopy.length <= 0) break
        let arrayVal = processCurrentArray(arrayCopy)
        if (typeof arrayVal == "object") arrayFound.push(arrayVal);
        arrayCopy.shift();
    }
    return arrayFound.sort((a,b)=>b.length-a.length)[0]
}

function processCurrentArray(arrayCopy) {
    let copy = [...arrayCopy];
    while (copy.length > 0) {
        let sum = copy.reduce((previousValue, nextValue) => previousValue + nextValue);
        if (sum === 0) {
            return copy
        }
        copy.pop();
    }
}

