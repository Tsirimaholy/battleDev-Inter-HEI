const missingCArd = (cardList) => {
    const possibility = {
        "C": [
            '2', '3', '4',
            '5', '6', '7', '8',
            '9', '10', 'V'
        ]
        , "P": [
            '2', '3', '4',
            '5', '6', '7', '8',
            '9', '10', 'V'
        ]
        , "T": [
            '2', '3', '4',
            '5', '6', '7', '8',
            '9', '10', 'V'
        ]
    };
    cardList = cardList.replaceAll(" ", "|");
    const regEx = new RegExp(cardList);
    let result = ""

    for (const posskey in possibility) {
        possibility[posskey].forEach(e => {
            let toPush = posskey + e;
            /* if not in the list of cardList
            * push it add it to the result list
            */
            if (!regEx.test(toPush)) result += toPush;
        })
    }

    return result;
}

console.table(missingCArd("C7 PV Q10"))
