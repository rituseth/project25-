class dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
     
     

      this.body1 = Bodies.rectangle(x,y,width,height,options);
      this.width =width;
      this.height = height;
      World.add(world,this.body1);
     
      this.body2 = Bodies.rectangle(x,y,width,height,options);
      this.width =width;
      this.height = height;
      World.add(world,this.body2);

      
      this.body3 = Bodies.rectangle(x,y,width,height,options);
      this.width =width;
      this.height = height;
      this.image=loadImage("dustbingreen.png");
      World.add(world,this.body3);
  
    }
    display(){
      var pos =this.body3.position
       
     
      imageMode(CENTER)
      image(this.image,pos.x, pos.y , 150,100);
     
    }
  }