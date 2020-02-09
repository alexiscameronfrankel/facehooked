
class Obstacle {
    constructor(govX, govY, height, width, sx, sy, sWidth, sHeight) {
      this.sx = sx;
      this.sy = sy;
      this.sWidth = sWidth;
      this.sHeight = sHeight;
      this.gov = new Image();
      this.gov.src = "/images/governmentfine.png"
      this.points = new Image();
      // this.points.src = "/images/governmentfine.png"
      this.height = height; //height of the image
      this.width = width; //width of the image
      this.x=govX;
      this.y=govY;
      this.identifier = "obstacle";
    }

    fall(){// animate will animate zuckerberg with you...when true frame 1...when false 
      // make open equal true on first declare
      this.y += 3; }
    


      drawObs(){
        this.fall();
        ctx.drawImage(this.gov,this.sx,this.sy,this.sWidth, this.sHeight, this.x,this.y, this.width,this.height)
      }
// //just added the action()
//      action(){
//       this.mouthClose = move,
//       this.points = points,
//       this.die = die, 
//       this.collide = collide } 
//      }
    
      
}