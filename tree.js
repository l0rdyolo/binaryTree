
import Node from "./node.js"
import {canvas} from "./app.js"

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
        this.root.level = 0;
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

BinaryTree.prototype.inorderTreeWalk = function(node, level , side){
    if(node != null){
        node.level = level
        this.inorderTreeWalk(node.left,level+1,1)
        node.rescale(side)
        this.inorderTreeWalk(node.right,level+1,2)
    }
}