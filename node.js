
class Node{
    constructor(data){

        this.position = {x : 250, y : 50}

        this.data = data;
        this.left = null;
        this.right = null;

        this.radius = 25;
        this.startAngel = 0;
        this.endAngel = Math.PI * 2;

    }

    draw(ctx){
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
         ctx.font = 'bold 30px serif';
         ctx.fillText(
            this.data,
            this.position.x,
            this.position.y
        )
         ctx.closePath();
    }
}
