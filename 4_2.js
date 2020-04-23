/*

*/

// I: array
// O: binary search tree
// C:
// E:

class Node {
    constructor(value){
        this.value = value
        this.left = null,
        this.right = null
    }
}

const minTree = (array) => {
    const middleIndex = Math.floor(array.length/2)
    let tree = new Node(array[middleIndex])

    if (middleIndex > 1) {
        let quarterIndex = Math.floor(middleIndex/2)
        let threeQuarterIndex = middleIndex + quarterIndex + 1
        
        tree.left = new Node(array[quarterIndex])
        tree.right = new Node(array[threeQuarterIndex])

        minTree(array.slice(0, middleIndex))
        minTree(array.slice(-middleIndex))

        // let leftArray = array.slice(0, middleIndex)
        // let leftArrayMiddleIndex = Math.floor(middleIndex/2)
        // tree.left = leftArray[leftArrayMiddleIndex]
        
        // let rightArray = array.slice(-middleIndex)
        // let rightArrayMiddleIndex = Math.floor(middleIndex/2)
        // tree.right = rightArray[rightArrayMiddleIndex]
    
    }

    return tree
    

}


////////////////////////////////
////////////////////////////////

const sortedArray = [1,2,3,4,5,6,7]

console.log(minTree(sortedArray))