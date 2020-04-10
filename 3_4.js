// implement a MyQueue class which implements a queue using two stacks

// queue first in first out

class MyQueue {

    constructor(q1, q2){
        this.container = [q1, q2].flat()
        this.queueOneEnd = q1.length - 1;
    }

    // add()
    add1(value){
        this.container.unshift(value)
        this.queueOneEnd += 1;
    }

    add2(value) {
        this.container.splice(this.queueOneEnd + 1, 0, value)
    }
    
    // remove()
    remove1() {
        return this.container.splice(this.queueOneEnd, 1)
    }

    remove2() {
        return this.container.pop()
    }
    
    // peek()
    peek1() {
        return this.container[this.queueOneEnd]
    }

    peek2() {
        return this.container[this.container.length - 1]
    }

    // isEmpty()

}

let x = ['1a', '1b', '1c']
let y = ['2a', '2b', '2c']
let q = new MyQueue(x, y)

console.log(q.add2('2d'))
console.log(q.container)