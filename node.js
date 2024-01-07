
import { ctx, canvas,nodeProperties ,sumsRightSpace , sumsLeftSpace} from './app.js'


export default class Node {
    constructor(data) {
        this.position = { x: canvas.width/2, y: 100 }
        this.data = data;
        this.left = null;
        this.right = null;

        this.level = 0;

        this.parent = null;
        this.color = "orange"


        this.rightSpace = 0;
        this.leftSpace = 0;

        this.sumsRightSpace = 0;
        this.sumsLeftSpace = 0;

    }

    show() {
        ctx.lineWidth = nodeProperties.lineWidth;
        if (this.left) {
            ctx.moveTo(this.left.position.x, this.left.position.y)
            ctx.lineTo(this.position.x, this.position.y)
            ctx.stroke()
        }
        if (this.right) {
            ctx.moveTo(this.right.position.x, this.right.position.y)
            ctx.lineTo(this.position.x, this.position.y)
            ctx.stroke()
        }
        ctx.beginPath();
        ctx.arc(
            this.position.x,
            this.position.y,
            nodeProperties.radius,
            nodeProperties.startAngel,
            nodeProperties.endAngel
        )
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'black';
        ctx.font = `bold ${nodeProperties.fontSize}px serif`;
        ctx.fillText(
            this.data,
            this.position.x,
            this.position.y
        )
        ctx.closePath();

      
    }
}

Node.prototype.reposition = function(){

}

Node.prototype.addNode = function (val) {
    var newNode = new Node(val)
    


    if (newNode.data < this.data) {
        if (this.left == null) {
            this.left = newNode
            this.left.parent = this;
            this.left.level = this.level + 1;
            // this.left.position.x = this.left.parent.position.x - (1 / Math.pow(2,this.left.level)) * nodeProperties.padding
            this.left.position.x = this.left.parent.position.x - ((1/ Math.pow(1.75,this.left.level)) * nodeProperties.padding)
            

  
            // this.left.position.x = this.left.parent.position.x - nodeProperties.padding 
            this.left.position.y = this.left.parent.position.y + (nodeProperties.yPadding * (this.left.level / 3 ))
        } else {
            this.left.addNode(val)
        }
    }
    else if (newNode.data >= this.data) {
        if (this.right == null) {
            this.right = newNode
            this.right.parent = this;
            this.right.level = this.level + 1;

            // this.right.position.x = this.right.parent.position.x + (1 / Math.pow(2,this.right.level)) * nodeProperties.padding
            this.right.position.x = this.right.parent.position.x + ((1/Math.pow(1.75,this.right.level)) * nodeProperties.padding)

            this.right.position.y = this.right.parent.position.y + (nodeProperties.yPadding * (this.right.level / 3))

            // this.right.position.x = this.right.parent.position.x + nodeProperties.padding
            // this.right.position.y = this.right.parent.position.y + nodeProperties.padding


        } else {
            this.right.addNode(val)
        }
    }
}

Node.prototype.draw = function () {
    this.show()
    if (this.left) {
        this.left.draw()
    }

    if (this.right) this.right.draw()
}

Node.prototype.rescale = function (side) {
    // this.radius *= this.level;
    // if(this.level == 1){
    //     console.log(this);
        
    //     if(side == 1){
    //         this.position.x = (canvas.width / 2) - 150
    //     }
    //     else if(side == 2){
    //         this.position.x = (canvas.width / 2) + 150
    //     }
    // }
}