class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    addNode(newNode){
        newNode.data < this.data ? this.left = newNode : this.right = newNode
    }
}


class BinaryTree{
    constructor(){
        this.root;
        this.level;
    }

    insertNode(){
        
    }

    printTree(){
        
    }
}   