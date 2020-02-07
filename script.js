//setting up the height and width of the canvas...just setting up the canvas in general//

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

//code below actually sets the dimmensions to the full height and width of the window
canvas.width = window.innerWidth
canvas.height = window.innerHeight


//////////////////////////////////////////



ctx.fillRect(60, 80, canvas.width, canvas.height);




