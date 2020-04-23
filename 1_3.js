/* 
URLify:
Write a method to replace all spaces in a string with '%20'. You may assume that
the string has sufficient space at the end to hold the additional characters, and that
you are given the "true" length of the string. 
*/


const urlify = (str) => {
    
    let newLength = countSpaces(str) * 2 + str.length - 1
    let characters = str.split('')
    
    for (let i = str.length - 1; i >= 0; i--) {
        
        if (str[i] === " ") {
            characters[newLength] = '0'
            characters[newLength - 1] = '2'
            characters[newLength - 2] = '%'
            newLength = newLength - 3
        } else {
            characters[newLength] = str[i]
            newLength--
        }
    }
    return characters.join('')
}

const countSpaces = (str) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") count++
    }
    return count
}


console.log(urlify('Today is a great day!'))
console.log(urlify('I AM'))
