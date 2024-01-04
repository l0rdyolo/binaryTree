import Globals from "./globals.js";
import BinaryTree from "./tree.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d')

//canvas settings
canvas.width = 1000;
canvas.height = 1000;
let nodePadding = 50;


//instances
const globals = new Globals();
const bTree = new BinaryTree();
// bTree.addNode(5)
// bTree.addNode(3)
// bTree.addNode(4)
// bTree.addNode(2)
// bTree.addNode(1)




console.log(bTree)

// ->  setting background and canvas-bg colors
document.getElementById("body").style.backgroundColor = globals.colors.bodyBg;
canvas.style.backgroundColor = globals.colors.canvasBg;

let lastTimeStamp = 0;
let refreshRate = 2000; // ms
function gameLoop(timeStamp){
    // node.draw(ctx);

    bTree.drawTree();
    if(timeStamp - lastTimeStamp >= refreshRate){

        lastTimeStamp = timeStamp;
    }
    window.requestAnimationFrame(gameLoop)
}

function generateUniqueNumbers(count) {
    if (count <= 0) {
      return "Count should be a positive integer.";
    }
  
    var uniqueNumbers = [];
    while (uniqueNumbers.length < count) {
      var randomNumber = Math.floor(Math.random() * 100) + 1; // Örnek olarak 1 ile 100 arasında unique sayılar
      if (uniqueNumbers.indexOf(randomNumber) === -1) {
        uniqueNumbers.push(randomNumber);
      }
    }
  
    return uniqueNumbers;
  }
  
  // Örnek kullanım:
  var numberOfUniqueNumbers = 10;
  var result = generateUniqueNumbers(numberOfUniqueNumbers);
console.log(result)  
result.forEach(element => {
    bTree.addNode(element)
});


bTree.inorderTreeWalk(bTree.root,0,0)


export{
  canvas,
  ctx,
  nodePadding
}

gameLoop(0);