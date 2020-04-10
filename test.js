var Queue = require('./utils/Queue.js')

let q1 = new Queue()

q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
console.log(q1.data)
console.log(q1.isEmpty())
q1.dequeue()

console.log(q1.data)


