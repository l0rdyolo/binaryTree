
import Node from "./node.js"
import {canvas, nodeProperties} from "./app.js"

export default class BinaryTree{
    constructor(){
        this.root;
        this.level;
    }
}   

BinaryTree.prototype.addNode = function(value){
    var newNode = new Node(value)
    if(this.root == null ){
        this.root = newNode
        this.root.position.x = canvas.width/2
        this.root.position.y = 100
    } 
    else{
        this.root.addNode(value)
    }
}
BinaryTree.prototype.drawTree = function(){
    this.root.draw()
}

BinaryTree.prototype.isEmpty = function(){
    return this.root == null;
}

BinaryTree.prototype.inorderTreeWalk = function(node, level , side){
    if(node != null){
        this.inorderTreeWalk(node.left,level+1,1)
        node.level = level;
            if(side === 1){

                
                node.position.x = node.parent.position.x - (150 * node.level) 
                node.position.y = node.parent.position.y + (50 * node.level)
            }
            else if(side === 2){
                // node.position.x += 33 * node.level
                // node.position.y += 33 * node.level

            }
        // this.inorderTreeWalk(node.right,level+1,2)
    }
}

BinaryTree.prototype.stopSearchSubTree = function(node){
    if(node!=null){
        node.color = "red"
        this.stopSearchSubTree(node.right)
        this.stopSearchSubTree(node.left)

    }
}

BinaryTree.prototype.search = function(node, searchValue){    
    if(node != null) {
        if(node.data == searchValue){
            console.log(node , "searched node found!")
            node.color = "green"
        }
        else{
            if(searchValue> node.data){
                if(node.left){
                    this.stopSearchSubTree(node.left)
                }
                node.color = "blue"
                this.search(node.right,searchValue)
            }
            else if(searchValue < node .data){
                if(node.right){
                    this.stopSearchSubTree(node.right)
                }
                node.color = "blue"
                this.search(node.left,searchValue) 
            }
        }
    }
}

