export function howManyGifts(n, array) {
    array.sort((a, b) => a - b);
    let sum = 0;
    let counter = 0
    for (let value of array) {
        sum += value;
        if (sum <= n)
            counter += 1;
    }
    return counter
}
