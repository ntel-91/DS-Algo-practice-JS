class Queue {
    constructor() {
        this.data = []
    }

    // add to queue
    enqueue = (element) => {
        this.data.push(element)
    }

    // remove from queue
    dequeue = () => {
        if (!this.isEmpty()) {
            return this.data.shift()
        } else { return "queue is empty!" } 
        
    } 

    // check if queue is empty
    isEmpty = () => {
        return this.data.length === 0 ? true : false
    }

}

module.exports = Queue




