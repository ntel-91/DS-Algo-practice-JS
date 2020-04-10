let LinkedList = function(value) {
    this.value = value
    this.next = null
}


function partition(head, partitionNum) {

    let left;
    let right;
    let currLeft;
    let currRight;

    let currentNode = head

    while (currentNode.next) {
        if (currentNode.value < partitionNum) {
            if (!left) {
                left = currentNode
                currLeft = left
            } else {
                currLeft.next = currentNode
                currLeft = currLeft.next
            }
        }
        if (currentNode.value >= partitionNum) {
            if (!right) {
                right = currRight
                currRight = right
            } else {
                currRight.next = currentNode
                currRight = currRight.next
            }
        }
        currentNode = currentNode.next
    }
    
    currRight.next = null

    currLeft.next = right
    
    return left
}



let printList = function(a) {
    while (a !== null) {
      console.log(a.value);
      a = a.next;
    }
};
  
let a = new LinkedList(3);
let b = new LinkedList(5);
let c = new LinkedList(8);
let d = new LinkedList(5);
let e = new LinkedList(10);
let f = new LinkedList(2);
let g = new LinkedList(1);
  
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

let newa = partition(a, 5);

printList(newa);