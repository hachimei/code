const Graph = require('./graph/Graph.js')

function printNode(value){
    console.log('Visited vertex:' + value)
}

let graph = new Graph()
let myVertices = 'ABCDEFGHI'.split('')
myVertices.map(val => graph.addVertex(val))
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

// console.log(graph.toString());
graph.bfs(myVertices[0], printNode)