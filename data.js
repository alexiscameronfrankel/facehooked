
class Data {
    constructor(govX, govY, height, width, sx, sy, sWidth, sHeight, identifier) {
      this.sx = sx;
      this.sy = sy;
      this.sWidth = sWidth;
      this.sHeight = sHeight;
      this.gov = new Image();
      this.gov.src = "/images/booty.png"
      this.points = new Image();
      // this.points.src = "/images/governmentfine.png"
      this.height = height; //height of the image
      this.width = width; //width of the image
      this.x=govX;
      this.y=govY;
      this.identifier = identifier;
    }

   
    badOrGood(){
      if(this.isGood){
        console.log('whaddup')
      } else {
        console.log('gianini is a bad boy')
      }
    }

    provideImage(){
      if(this.isGood){
        console.log('/images/zuckerergsprite.png')
      } else {
        console.log('/images/governmentfine.png')
      }
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