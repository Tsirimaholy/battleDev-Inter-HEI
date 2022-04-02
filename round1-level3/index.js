export function subsequence(x, y) {
    x = x.split("").map(e => e + "+\\w*");
    let re = x.join("");
    const regEx = new RegExp(re);
    if (regEx.test(y))
        return "OK"

    while (true) {
        if (x.length === 0)
            return `NOK 0`
        x.pop()
        re = x.join("");
        const regExp = new RegExp(re);
        let result = regExp.test(y)
        if (result)
            return `NOK ${re.replaceAll(/\/|\+\\w\*/g, "").length}`;

    }
}