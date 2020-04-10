// Remove Dups

/*
Write code to remove duplicates from an unsorted linked list.
How would you solve this problem if a temporary buffer is not allowed?
*/

let removeDups = (n) => {
    let node = n
    let prevNode = null
    let obj = {}
    
    while (node !== null) {
        if (obj[node.value]) {
            prevNode.next = node.next
        } else {
            obj[node.value] = true
            prevNode = node
        }
        node = node.next
    }
    return n
}

let removeDups2 = (n) => {
    let node = n

    while (node !== null) {
        let cur = node
        while (cur.next !== null) {
            if (cur.next.value === node.value) {
                cur.next = cur.next.next
            } else {
                cur = cur.next
            }
        }
        node = node.next
    }
    return n
}
////////////////////////////////////////////
// Test cases

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

let test = removeDups2(a)
console.log(toAry(test))