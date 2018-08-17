interface node {
    key: number,
    left: node  | null,
    right: node | null
}

class BinarySearch{
    constructor(){
        this.root = null;
    }

    Node(key: number): node{
        return {key: key, left: null, right: null}
    }

    root: node | null

    insert(key: number): void{
        let newNode = this.Node(key);

        if(this.root === null){
            this.root = newNode;
        }else if(key !== this.root.key){
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root: node, newNode: node): void{
        if(newNode.key < root.key){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode);
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode);
            }
        }
    }

}