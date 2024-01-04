
import { ctx, canvas,nodePadding } from './app.js'
export default class Node {
    constructor(data) {

        this.position = { x: 250, y: 50 }

        this.data = data;
        this.left = null;
        this.right = null;
        this.radius = 10;
        this.startAngel = 0;
        this.endAngel = Math.PI * 2;
    }

    show() {
        ctx.beginPath();
        ctx.arc(
            this.position.x,
            this.position.y,
            this.radius,
            this.startAngel,
            this.endAngel
        )
        ctx.fillStyle = 'orange';
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'black';
        ctx.font = 'bold 10px serif';
        ctx.fillText(
            this.data,
            this.position.x,
            this.position.y
        )
        ctx.closePath();

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
    }
}


Node.prototype.addNode = function (val) {
    var newNode = new Node(val)

    if (newNode.data < this.data) {
        if (this.left == null) {
            this.left = newNode
            this.left.position.x = this.position.x - nodePadding 
            this.left.position.y = this.position.y + nodePadding

        } else {
            this.left.addNode(val)
        }
    }
    else if (newNode.data >= this.data) {
        if (this.right == null) {
            this.right = newNode
            this.right.position.x = this.position.x + nodePadding
            this.right.position.y = this.position.y + nodePadding


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
    if(this.level == 1){
        console.log(this);
        
        if(side == 1){
            this.position.x = (canvas.width / 2) - 150
        }
        else if(side == 2){
            this.position.x = (canvas.width / 2) + 150
        }
    }
}