/* Return Kth to Last:
Implement an algorithm to find the kth to last element of a singly liked list.

I: linked list & kth element
O: return value of kth to last
C: 
E: kth element exists; 
*/

const kthToLast = (head, k) => {
    // find number of elements in linked list
    let p1 = head
    let p2 = head

    for (let i = 0; i < k; i++) {
        p1 = p1.next
    }

    while (p1 !== null) {
        p1 = p1.next
        p2 = p2.next
    }
    return p2
}

///////////////////////////

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
let d = new LinkedList('3')
let e = new LinkedList('5')
let f = new LinkedList('6')
let g = new LinkedList('7')

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;


console.log(kthToLast(a, 2))