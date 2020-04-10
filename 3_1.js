/* Three in One:
Descibe how you could use a single array to implement three stacks.
*/

let stackArray = [ 1, 1, 1, 2, 2, 2, 2, 3, 3]
let midStart = 3
let midEnd = 6

let beginAdd = (ary, elem) => {
    midStart += 1
    midEnd += 1
    ary.unshift(elem)
    return ary
}

let beginRemove = (ary) => {
    midStart -= 1
    midEnd -= 1
    ary.shift()
    return ary
}

// add/ remove element to middle stack

let midAdd = (ary, elem) => {
    ary.splice(midStart, 0, elem)
    midEnd += 1
    return ary
}

let midRemove = (ary) => {
    ary.splice(midStart, 1)
    midEnd -= 1
    return ary
}

// add/ remove to end of array

let endAdd = (ary, elem) => {
    ary.splice(midEnd + 1, 0, elem)
    return ary
}

let endRemove = (ary) => {
    ary.splice(midEnd + 1, 1)
    return ary
}

console.log("START: ", stackArray)
console.log("add to beginning: ", beginAdd(stackArray, 6))
console.log("add to middle: ", midAdd(stackArray, 7))
console.log("add to end: ", endAdd(stackArray, 8))
console.log("remove from end: ", endRemove(stackArray))
console.log("remove from middle: ", midRemove(stackArray))
console.log("remove from beginning: ", beginRemove(stackArray))
