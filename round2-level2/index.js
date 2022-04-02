const dirReduc = (arrayDirection) => {
    const dirNum = {'NORD': 1, 'SUD': -1, 'EST': 2, 'OUEST': -2}
    const numDir = {"1": 'NORD', "-1": "SUD", "2": "EST", "-2": "OUEST"}
    arrayDirection = arrayDirection.map(dir => dirNum[dir])

    arrayDirection = mapDirNum(arrayDirection);
    arrayDirection = mapDirNum(arrayDirection);

    return arrayDirection.map(e => numDir[e]);
}

function mapDirNum(arrayNum) {
    for (let i = 0; i < arrayNum.length; i++) {
        let prevDir = arrayNum[i];
        let nextDir = arrayNum[i + 1];
        let sum = prevDir + nextDir;
        if (sum === 0)
            arrayNum.splice(i, 2);
    }
    return arrayNum;
}

