export const dirReduc = (arrayDirection) => {
    const dirNum = {'NORD': 1, 'SUD': -1, 'EST': 2, 'OUEST': -2}
    const numDir = {"1": 'NORD', "-1": "SUD", "2": "EST", "-2": "OUEST"}
    arrayDirection = arrayDirection.map(dir => dirNum[dir])

    arrayDirection = mapDirNum(arrayDirection);

    return arrayDirection.map(e => numDir[e]);
}

function mapDirNum(arrayNum) {
    let sum = 1;
    for (let i = 0; i < arrayNum.length; i++) {
        /*
        * reset the index to 0 and then redo all tasks
        * because of the i++ of the for loop
        * even if we reset it before "i++" will "i" increment by one
        * */
        if (sum === 0) i = 0;

        let prevDir = arrayNum[i];
        let nextDir = arrayNum[i + 1];
        sum = prevDir + nextDir;

        if (sum === 0) {
            arrayNum.splice(i, 2);
            /*
            * reset i to zero
            * to prevent loop from breaking in case if (i+1)==(arrayNum.length)
            * */
            i = 0;
        }
    }
    return arrayNum;
}

