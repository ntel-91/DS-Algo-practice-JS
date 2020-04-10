// Is Unique:

// Implement an alogorithnm to determine if a string as all unique characters.
// What if you cannot use additional data structures?


// time complexity: linear - O(n)
// space complexity: linear - O(n) (have to store every character)

function isUnique (string) {
    const strToAry = string.split('')
    let obj = {}

    for (let i = 0; i < strToAry.length; i++) {
        if (obj[strToAry[i]]) {
            return false
        } else {
            obj[strToAry[i]] = true
        }
    }
    return true
}

console.log("FIRST: ", isUnique('afa') === false)
console.log("SECOND: ", isUnique('asf') === true)

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// not using another data structure:

// function isUnique (string) {
//     let newStr = ''

//     for (let i = 0; i < string.length; i++) {
//         if (newStr.includes(string.charAt(i))) {
//             return false
//         } else {
//             newStr += string.charAt(i)
//         }
//     }
//     return true

// }

// console.log(isUnique('aba')) // return false
// console.log(isUnique('abcd')) // true


/* Notes:

- return value from a conditional inside a function exits the function
- ternary evaluates to expression and expressions don't have return statement
- In javascript, all objects are hash tables
- You can use square bracket notation on strings


*/