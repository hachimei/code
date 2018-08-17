class Graph {
    constructor(){
        this.vertices = []
        this.adjList = new Map()
    }

    addVertex(v){
        this.vertices.push(v)
        this.adjList.set(v,[])
    }

    addEdge(v, w){
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }

    toString(){
        let s = ''
        this.vertices.map((val, index) => {
            s += val + '->'
            let neighbors = this.adjList.get(val)
            neighbors.map(val => {
                s += val + ' '
            })
            s += '\n'
        })

        return s
    }

    initializeColor(){
        this.color = []
        this.vertices.map(val => this.color[val] = 'white')
        return this.color
    }

    bfs(v, callback){
        let color = this.initializeColor(),
        queue = []
        queue.push(v)

        while(queue.length > 0){
            let u = queue.shift(),
                neighbors = this.adjList.get(u)
            color[u] = 'grey'
            neighbors.map((w, index) => {
                if(color[w] === 'white'){
                    color[w] = 'grey'
                    queue.shift(w)
                }
            })
            color[u] = 'black'
            if(callback)
                callback(u)
        }
    }
}

module.exports = Graph