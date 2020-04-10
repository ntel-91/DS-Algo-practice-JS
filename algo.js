countLetters = (string) => {
    let newString = string.split(' ').join('')
    const obj = {}
    newString.split('').forEach(letter => {
        if (obj[letter]) {
            obj[letter] += 1
        } else {
            obj[letter] = 1
        }
    })
    return obj

}

console.log(countLetters('hello world'))