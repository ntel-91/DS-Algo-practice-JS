/* 
1.2) Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

Input: two strings
Output: boolean
Constraints: 
Edge: repeated characters, empty string
*/

const checkPerm = (str1, str2) => {
    
    let newString = str2

    if (str1.length !== str2.length) {
        return false
    }

    for (let i = 0; i < str1.length; i++) {
        let charToRemove = str1.charAt(i)
        let strLength = newString.length
        
        newString = newString.replace(charToRemove, '')

        if (strLength === newString.length) {
            return false
        }
    }

    return true



}

console.log(checkPerm('', '') === true)
console.log(checkPerm('asdf', 'fdsa') === true)
console.log(checkPerm('awdf', 'fdsa') === false)
console.log(checkPerm('as', 'fdsa') === false)
console.log(checkPerm('asdfa', 'fdsaa') === true)
console.log(checkPerm('asdf', '') === false)



