/* Route Between Nodes
Given a directed graph and two nodes (S and E), design an algorithm to find
out whether there is a route from S to E.
*/

var Graph = require('./utils/Graph');
// methods: addEdge(node, edge), addNode(value), findEdges(node), 
// hasEdge(node, edge), hasNode(node), removeEdge(node, edge), removeNode(node)

let checkRoute = (value1, value2, graph) => {
    
}




var graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('E', 'F');


// console.log(checkRoute('A', 'C', graph), true);
// console.log(checkRoute('A', 'E', graph), false);
// console.log(checkRoute('B', 'A', graph), true);
// console.log(checkRoute('D', 'E', graph), true);