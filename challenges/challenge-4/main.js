function decode(message) {
    const regex = /\(([^()]+)\)/g
    const replacer = (_,inside) => [...inside].reverse().join("")
    let inputString = message.replace(regex,replacer)
    inputString = inputString.replace(regex,replacer)
    return inputString
}