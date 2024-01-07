
import Node from "./node.js"
import {canvas, nodeProperties} from "./app.js"

export default class BinaryTree{
    constructor(){
        this.root;
        this.level=0;
    }
}   

BinaryTree.prototype.addNode = function(value){
    // nodeAdd value
    // setPosition 
    var newNode = new Node(value)
    if(this.root == null ){
        this.root = newNode
        this.root.level = 0;
        this.root.position.x = canvas.width/2
        this.root.position.y = 100
        this.root.radius = nodeProperties.radius * 2
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

BinaryTree.prototype.visitLeft = function(node){ 
    if(node != null){
        node.position.x = node.parent.position.x - 100 - nodeProperties.padding
        if(node.right){
            node.right.position.x = node.position.x + 50
            if(node.right.left){
                this.visitLeft(node.left.right)        
            }    
        }
        this.visitLeft(node.left)        
    }
}

BinaryTree.prototype.visitRight = function(node){ 
    if(node != null){
        node.position.x = node.parent.position.x + 100 + nodeProperties.padding
        if(node.left){
            node.left.position.x = node.position.x - 20
            if(node.left.right){
                this.visitRight(node.left.right)        
            }    
        }
        this.visitLeft(node.right )        
    }
}

BinaryTree.prototype.reposition = function(node){

}

BinaryTree.prototype.findMaxLevel = function(node, maxLevel){
        if(node != null){
            if(node.level > maxLevel.value){
                maxLevel.value = node.level;
            }
            
            this.findMaxLevel(node.left , maxLevel )
            this.findMaxLevel(node.right ,maxLevel )
        }
}