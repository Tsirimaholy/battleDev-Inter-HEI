export function spongeMeme(char) {
    char = char.toLowerCase()
    char = char.split("")
    for (let i = 0; i < char.length; i += 2) {
        let element = char[i];
        char[i] = element.toUpperCase()
    }

    return char.join("")
}