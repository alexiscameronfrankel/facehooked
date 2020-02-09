//setting up the height and width of the canvas...just setting up the canvas in general//

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight


//code below actually sets the dimmensions //
canvas.width = 600
canvas.height = 800
ctx.fillStyle = "#f7f7f7";
ctx.fillRect(0,0,canvas.width,canvas.height)



//this is the code that sets up the boundaries of the canvas//


function isOffBoard(){
   if(newZuck.x < 0){ //mark has hit left side
     newZuck.x = 10
   }
   if(newZuck.x > canvas.width - newZuck.width){
     newZuck.x = canvas.width - newZuck.width 
   }
 }
 

//this associates the keys with movement//


window.addEventListener("keydown", function(e){
   console.log( e.keyCode)
if(e.keyCode === 39){newZuck.x +=8} else if
(e.keyCode == 37){newZuck.x -=8} 
}
 );







let zuckX = canvas.width/2-66; //places mark in the middle
let zuckY = canvas.height - 170; //places mark at the bottom of the window 
let govX = canvas.width/2; 
let govY = 0;
let dataX = canvas.width/2; 
let dataY = 0;
//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
// let zuckie = new Image();
// zuckie.src = "./images/zuckerergsprite.png"
// ctx.drawImage(this.zuckie,this.sx,this.sy,this.sWidth, this.sHeight, this.x,this.y, this.width,this.height)
//sx is the starting point on the image for x
let newZuck = new Zuckerberg(zuckX,zuckY, 170, 80, 0,0,170,133)
let newObstacle = new Obstacle(govX,govY, 170, 80, 0,0,170,250)
let newData = new Data(dataX-2,dataY-2, 170, 80, 0,0,170,250)

function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
 }



//here's the code that gets ya multiple government icons and respective status//

let itemsArray = [];



function generateItem() {
   setInterval(function(){
      let num = 20;
      console.log(num);
      if(num % 2 == 0){
         let randomData = new Data(Math.random()*canvas.width,dataY-40, 170, 80, 0,0,170,250) //this creates the new data object...give a random x position and everything else is the same
      itemsArray.push(randomData)
      } else {
         let randomObstacle = new Obstacle(Math.random()*canvas.width,govY, 170, 80, 0,0,170,250)
         itemsArray.push(randomObstacle)
      }
      console.log(itemsArray)
   }, 1000)
    }

    

    //how do you randomly come up with x position




function drawItems(){
   
// itemsArray.forEach(eachItem => console.log( eachItem.identifier));
itemsArray.forEach(eachItem => eachItem.drawObs());
}


window.onload = () => {
newZuck.draw();
itemsArray.push(newObstacle)
itemsArray.push(newData)
generateItem();



// newZuck.sx = 170;
// newZuck.width += 133;
// newZuck.draw();
// newObstacle.drawObs();

}

 window.requestAnimationFrame(animate) //draws the first image


 //below is how everything is animated...draws over and over 

function animate() {
ctx.clearRect(0,0, canvas.width,canvas.height);
ctx.fillStyle = "#f7f7f7";
ctx.fillRect(0,0,canvas.width,canvas.height)
newZuck.draw()
drawItems()
// newZuck.detectCollision()
isOffBoard()





// //     // newZuck.action()
window.requestAnimationFrame(animate);
}
