class BinarySearchTree{
    Node(key) {
        return ({key: key, left: null, right: null})
    }

    constructor() {
        this.root = null
    }

    insert(key) {
        let newNode = this.Node(key)

        if(this.root === null)
            this.root = newNode
        else
            this.insertNode(this.root, newNode)
    }

    insertNode(node, newNode) {
        if(newNode.key < node.key){
            if(node.left === null)
                node.left = newNode
            else
                this.insertNode(node.left, newNode)
        } else{
            if(node.right === null)
                node.right = newNode
            else
                this.insertNode(node.right, newNode)
        }
    }

    printNode(value){
        console.log(value)
    }

    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root, callback)
    }

    inOrderTraverseNode(node, callback){
        if(node !==null){
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    preOrderTraverse(callback){
        this.preOrderTraverseNode(this.root, callback)
    }

    preOrderTraverseNode(node, callback){
        if(node !== null){
            callback(node.key)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
        }
    }

    postOrderTraverse(callback){
        this.postOrderTraverseNode(this.root, callback)
    }

    postOrderTraverseNode(node, callback){
        if(node !== null){
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

    findMinNode(node){
        if(node){
            while(node && node.left !== null){
                node = node.left
            }
            return node
        }
        return null
    }

    minNode(node){
        if(node){
            while(node && node.left !== null){
                node = node.left
            }
            return node.key
        }
        return null
    }

    min(){
        return this.minNode(this.root)
    }

    max(){
        return this.maxNode(this.root)
    }

    maxNode(node){
        if(node){
            while(node && node.right !== null){
                node = node.right
            }
            return node.key
        }
        return null
    }

    search(key){
        return  this.searchNode(this.root, key)
    }

    searchNode(node, key){
        if(node === null){
            return false
        }
        if(key < node.key){
            return this.searchNode(node.left, key)
        }else if(key > node.key){
            return this.searchNode(node.right, key)
        }else
            return true
    }

    remove(key){
        return this.removeNode(this.root, key)
    }

    removeNode(node, key){
        if(node === null)
            return null
        if(key < node.key){
            node.left = this.removeNode(node.left, key)
        }else if(key > node.right){
            node.right = this.removeNode(node.right, key)
        }else{
            if(node.left === null && node.right === null){
                node = null
                return node
            }

            if(node.left === null){
                node = node.right
                return node
            }else if(node.right === null){
                node = node.left
                return node
            }
            
            let aux = this.findMinNode(node.right)
            node.key = aux.key
            node.right = this.removeNode(node.right, aux.key)
            return node
        }
    }

}

let tree = new BinarySearchTree()
let test = [11, 7, 15, 5 ,3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
test.map(value => tree.insert(value))
console.log(tree.root);
// tree.inOrderTraverse(tree.printNode)
// tree.preOrderTraverse(tree.printNode)
// tree.postOrderTraverse(tree.printNode)
console.log(tree.min())
console.log(tree.max())
// console.log(tree.search(1)? 'key 1 found.' : 'key 1 not found');
console.log(tree.search(7)? 'key 7 found.' : 'key 7 not found');
tree.remove(7)
console.log(tree.search(7)? 'key 7 found.' : 'key 7 not found');
