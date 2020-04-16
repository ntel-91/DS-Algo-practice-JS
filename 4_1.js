/* Route Between Nodes
Given a directed graph and two nodes (S and E), design an algorithm to find
out whether there is a route from S to E.
*/

let Graph = require('./utils/Graph');
let Queue = require('./utils/Queue')
// methods: addEdge(node, edge), addNode(value), findEdges(node), 
// hasEdge(node, edge), hasNode(node), removeEdge(node, edge), removeNode(node)

let checkRoute = (value1, value2, graph) => {
    let visited = new Queue
    let explored = {}
    let visiting = null

    visited.enqueue(value1)
    
    while (!visited.isEmpty()) {

        // remove from visited
        visiting = visited.dequeue()

        if (visiting === value2) {
            return true
        }
        // find adjacent edges and add to visited
        let toVisit = graph.findEdges(visiting)
        toVisit.forEach(n => visited.enqueue(n))
        
    }

    return false
}

let graph = new Graph 

graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')
graph.addNode('F')

graph.addNode('G')
graph.addNode('H')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('C', 'F')

graph.addEdge('G', 'H')

console.log(checkRoute('A', 'D', graph), true);
console.log(checkRoute('A', 'G', graph), false);
console.log(checkRoute('A', 'E', graph), true);
console.log(checkRoute('C', 'E', graph), true);
console.log(checkRoute('B', 'F', graph), false);