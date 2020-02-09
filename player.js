//classes use methods 

class Zuckerberg {
    constructor(zuckX, zuckY, height, width, sx, sy, sWidth, sHeight) {
      this.sx = sx;
      this.sy = sy;
      this.sWidth = sWidth;
      this.sHeight = sHeight;
      this.zuckie = new Image();
      this.zuckie.src = "/images/zuckerergsprite.png"
      this.height = height; 
      this.width = width;
      this.x=zuckX;
      this.y=zuckY;// u put in the animate function so it loops through it 
      this.i = 0;
    }
      
      
    update(){// animate will animate zuckerberg with you...when true frame 1...when false 
      // make open equal true on first declare
      this.i++;// i gets incremented every time we draw 

      // every 15 frames we go into this condition
      if(this.i === 15) {
          // we check if we have second part of the image drawn and we switch to first part
          if(this.sx===170){
              this.sx = 0;  
          } else { // vice versa
              this.sx = 170;
          }
          //once we switch the image we reset the counter
          this.i = 0;
      }
    }
//array1.forEach(element => console.log(element));



detectCollision(){
  itemsArray.forEach(item => {
        if(this.x > item.x && this.x < item.x+item.width && this.y > item.y && this.y < item.y+item.height){
          this.respondCollision(item);
        }
      }) 
  
    }

respondCollision(item){



      if(item.identifier === "obstacle" ){
        console.log('lost game')
        window.cancelAnimationFrame(frameId)

      } else if (item.identifier === "data"){
        let score = 0;
        score += score;
        console.log(score);
      }
    
     }




      draw(){
        this.update()
        ctx.drawImage(this.zuckie,this.sx,this.sy,this.sWidth, this.sHeight, 
            this.x,this.y, this.width,this.height)
      }
// //just added the action()
//      action(){
//       this.mouthClose = move,
//       this.points = points,
//       this.die = die, 
//       this.collide = collide } 
//      }
    
      
}