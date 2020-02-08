//setting up the height and width of the canvas...just setting up the canvas in general//

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

//code below actually sets the dimmensions to the full height and width of the window
canvas.width = window.innerWidth
canvas.height = window.innerHeight


//////////////////////////////////////////
// left = 37
// up = 38
// right = 39
// down = 40

let newZuck = new Zuckerberg()

window.addEventListener("click", function(e){
   console.log( e.keyCode)
if(e.keyCode === 39){newZuck.zuckX == x+5} else if 
(e.keyCode == 37){newZuck.zuckY == x-5} else {
newZuck.zuckX == x && newZuck.zuckY == newZuck.zuckY
}
} );

ctx.fillRect(0, 0, canvas.width, canvas.height);



let zuckX = canvas.width/2; //places mark in the middle
let zuckY = canvas.height; //places mark at the bottom of the window 



window.requestAnimationFrame(animate)

function animate() {
    console.log('yo');
    draw()
    action()
}

animate()