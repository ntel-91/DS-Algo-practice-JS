/*
Stack Min: How would you design a stack which, in adition to push and pop, has a
function min which returns the minimum element? Push, pop and min should all operate in O(1) time.

I: stack
O: returns minimum value
C:
E: 

*/

class Stack {

    constructor(){
        this.data = [],
        this.minValue = []
    }

    push = (value) => {
        if (this.minValue.length !== 0) {
            value <= this.minValue[0] ? this.minValue.unshift(value) : null
        } else {
            this.minValue.unshift(value)
        }

        this.data.push(value)
    }

    pop = () => {
        if (this.minValue.length === 0 ) {
            throw 'stack is empty'
        }

        // value removing less than top 
        if (this.data[this.data.length - 1] === this.minValue[0]) {
            this.minValue.shift()
        }

        this.data.pop()
    }



    min = () => {
        if (this.minValue.length === 0 ) {
            throw 'stack is empty'
        }
        return this.minValue[0]
    }



}

let s = new Stack();
s.push(4);
s.push(2);
s.push(3);
s.push(1);
s.push(3);
s.push(2);


console.log("Current stack ", s.data)
console.log("min value should be 1", s.min())

s.pop()
s.pop()
s.pop()
console.log("min value should be 2", s.min())

s.pop()
s.pop()
console.log("min value should be 4", s.min())

console.log("Should be empty ", s.pop())

