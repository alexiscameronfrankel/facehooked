//setting up the height and width of the canvas...just setting up the canvas in general//

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight


//code below actually sets the dimmensions to the full height and width of the window
canvas.width = 600
canvas.height = 800
ctx.fillStyle = "#f7f7f7";
ctx.fillRect(0,0,canvas.width,canvas.height)



this 


window.addEventListener("keydown", function(e){
   console.log( e.keyCode)
if(e.keyCode === 39){newZuck.x +=5} else if
(e.keyCode == 37){newZuck.x -=5} 
}
 );



// ctx.fillRect(0, 0, canvas.width, canvas.height);



let zuckX = canvas.width/2-66; //places mark in the middle
let zuckY = canvas.height - 170; //places mark at the bottom of the window 
//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
// let zuckie = new Image();
// zuckie.src = "./images/zuckerergsprite.png"
// ctx.drawImage(this.zuckie,this.sx,this.sy,this.sWidth, this.sHeight, this.x,this.y, this.height,this.cutwidth)
let newZuck = new Zuckerberg(zuckX,zuckY, 170, 80, 0,0,170,133)


window.onload = () => {
newZuck.draw();
// newZuck.sx = 170;
// newZuck.width += 133;
// newZuck.draw();

}

 window.requestAnimationFrame(animate) //draws the first image

function animate() {
ctx.clearRect(0,0, canvas.width,canvas.height);
ctx.fillStyle = "#f7f7f7";
ctx.fillRect(0,0,canvas.width,canvas.height)
newZuck.draw()
// //     // newZuck.action()
window.requestAnimationFrame(animate);
}
