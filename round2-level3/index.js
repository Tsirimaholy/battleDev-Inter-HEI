export const missingCards = (cardList) => {
    const possibleValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'V', 'D', 'R', 'A']
    const possibility = {
        "C": [...possibleValue]
        , "P": [...possibleValue]
        , "Q": [...possibleValue]
        , "T": [...possibleValue]
    };
    // generate a regex to match cardList
    cardList = cardList.replaceAll(" ", "|");
    const regEx = new RegExp(cardList);
    let result = ""

    for (const posskey in possibility) {
        // generate all 52 card list except for those in the cardList
        possibility[posskey].forEach(e => {
            let toPush = posskey + e;
            // skip card that was found in the cardList
            if (!regEx.test(toPush)) result += toPush + " ";
        })
    }

    return result.trimEnd();
}