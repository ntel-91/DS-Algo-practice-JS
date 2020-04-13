/* Route Between Nodes
Given a directed graph and two nodes (S and E), design an algorithm to find
out whether there is a route from S to E.
*/

var Graph = require('./utils/Graph');
var Queue = require('./utils/Queue')
// methods: addEdge(node, edge), addNode(value), findEdges(node), 
// hasEdge(node, edge), hasNode(node), removeEdge(node, edge), removeNode(node)

let checkRoute = (value1, value2, graph) => {
    let visited = new Queue
    let explored = {}
    let visiting = null

    visited.enqueue(value1)
    // console.log(visited.isEmpty())
    // visited.dequeue()
    // console.log(visited.isEmpty())

    console.log(!visited.isEmpty())
    // visiting = visited.dequeue()
    // console.log(visiting)
    // console.log(!visited.isEmpty())
    
    
    while (!visited.isEmpty()) {
        
        visiting = visited.dequeue
        console.log(visiting)
    }
    



}

var graph = new Graph;
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');

console.log(checkRoute('A', 'D', graph))
// console.log(checkRoute('A', 'C', graph), true);
// console.log(checkRoute('A', 'E', graph), false);
// console.log(checkRoute('B', 'A', graph), true);
// console.log(checkRoute('D', 'E', graph), true);