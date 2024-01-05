import Globals from "./globals.js";
import BinaryTree from "./tree.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d')

//canvas settings
canvas.width = 1000;
canvas.height = 800;
var numberOfUniqueNumbers = 25;
let nodeProperties = {
  radius : canvas.width / (numberOfUniqueNumbers * 2.5),
  startAngel : 0,
  endAngel : Math.PI * 2,
  padding : canvas.width / (numberOfUniqueNumbers ),
  lineWidth :canvas.width / (numberOfUniqueNumbers * 10),
  fontSize : canvas.width / (numberOfUniqueNumbers * 2.5)
}
console.log(nodeProperties.padding)

//instances
const globals = new Globals();
const bTree = new BinaryTree();


// ->  setting background and canvas-bg colors
document.getElementById("body").style.backgroundColor = globals.colors.bodyBg;
canvas.style.backgroundColor = globals.colors.canvasBg;

document.getElementById('startButton').addEventListener('click', startGame);


let lastTimeStamp = 0;
let refreshRate = 1; // ms

function generateUniqueNumbers(count) {
  if (count <= 0) {
    return "Count should be a positive integer.";
  }

  var uniqueNumbers = [];
  while (uniqueNumbers.length < count) {
    var randomNumber = Math.floor(Math.random() * 100) + 1; 
    if (uniqueNumbers.indexOf(randomNumber) === -1) {
      uniqueNumbers.push(randomNumber);
    }
  }

  return uniqueNumbers;
}

var result = generateUniqueNumbers(numberOfUniqueNumbers);
let a = 0;
function gameLoop(timeStamp){
    // node.draw(ctx);

    if(!bTree.isEmpty()){
      bTree.drawTree();
    }
    if(timeStamp - lastTimeStamp >= refreshRate){
        if(a<result.length){
          bTree.addNode(result[a])
          a++;
        }
        lastTimeStamp = timeStamp;
    }
    window.requestAnimationFrame(gameLoop)
}

// console.log(result)  
// result.forEach(element => {
//     bTree.addNode(element)
// });
function startGame() {
    const inputNumber = prompt("Lütfen bir sayı girin (sadece sayılar):");

    // Girilen değerin bir sayı olup olmadığını kontrol et
    if (!isNaN(inputNumber)) {
      // Girilen değeri bir sayıya çevir
      const parsedNumber = parseInt(inputNumber, 10);

      // Başka bir fonksiyonu çağır
      handleInput(parsedNumber);

      // Oyunu başlat
    } else {
      alert("Geçerli bir sayı girmediniz!");
    }
}

function handleInput(parsedNumber){
  bTree.search(bTree.root,parsedNumber)
}

export{
  canvas,
  ctx,
  nodeProperties
}

gameLoop(0);