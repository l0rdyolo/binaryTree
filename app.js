const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d')
ctx.imageSmoothingEnabled = true;

//canvas settings
canvas.width = 500;
canvas.height = 500;


//instances
const globals = new Globals();
const bTree = new BinaryTree();
const node = new Node(1);

// ->  setting background and canvas-bg colors
document.getElementById("body").style.backgroundColor = globals.colors.bodyBg;
canvas.style.backgroundColor = globals.colors.canvasBg;

let lastTimeStamp = 0;
let refreshRate = 210; // ms
function gameLoop(timeStamp){
    node.draw(ctx);

    if(timeStamp - lastTimeStamp >= refreshRate){

        lastTimeStamp = timeStamp;
    }
    window.requestAnimationFrame(gameLoop)
}

gameLoop(0);