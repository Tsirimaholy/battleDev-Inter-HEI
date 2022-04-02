function swapCase(char) {
    char = char.split(" ")
    char.forEach((val) => swapWordCase(val))
    return char.join(" ")
}

function swapWordCase(words) {
    return (words.split("")).map(
        e => (/[A-Z]/.test(e)) ? e.toLowerCase() : e.toUpperCase()
    ).join("")
}