//classes use methods 

class Zuckerberg {
    constructor() {
      
      this.zuckie = new Image();
      this.zuckie.src = "/images/zuckerergsprite.png"
      this.height = 133; 
      this.width = 172;
      this.x=zuckX
      this.y=zuckY// u put in the animate function so it loops through it 
    }
      
      
      update(){//animate will animate zuckerberg with you...when true frame 1...when false 
        //make open equal true on first declare
        if(open){
          this.cutwidth=this.width
          open=false
          
        }
       if(!open){
         this.cutwidth=this.width*2
         open=true
          
        }
      }
      draw(){
        this.update()
        ctx.drawImage(this.zuckie,this.height,the.cutwidth,this.x,this.y,60,90)
      }
//just added the action()
     action(){
      this.mouthClose = move,
      this.points = points,
      this.die = die, 
      this.collide = collide } 
     }
    
      
    