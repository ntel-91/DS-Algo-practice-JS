/* Delete Middle Node:
Implement an algorithm to delete a node in the middle (i.e., any node 
but the first and last node, not necessasrily the exact middle) of a 
singly listed list, given only access to that node.
*/

// I: node to delete
// O: no return value
// C: cannot be first or last node
// E: 


const deleteMiddle = (node) => {
    if (node !== null && node.next !== null) {
        node.value = node.next.value
        node.next = node.next.next
    }
}


class LinkedList  {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}


let toAry = (node) => {
    let ary = [node.value]
    let nextNode = node.next

    while (nextNode) {
        ary.push(nextNode.value)
        nextNode = nextNode.next
    }
    return ary
}

let a = new LinkedList('1')
let b = new LinkedList('2')
let c = new LinkedList('3')
let d = new LinkedList('4')
let e = new LinkedList('5')
let f = new LinkedList('6')
let g = new LinkedList('7')

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(toAry(a))
deleteMiddle(c)
console.log(toAry(a))