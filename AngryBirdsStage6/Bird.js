class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage  = loadImage("sprites/smoke.png");
    this.trajectary = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var position = [this.body.position.x,this.body.position.y];
   
    
    if (this.body.velocity.x>10&& this.body.position.x>200) {
      this.trajectary.push(position);
    }
    for (var i = 0; i<this.trajectary.length; i++) {
    image(this.smokeimage,this.trajectary[i][0],this.trajectary[i][1]);
    }
    super.display();
  }
}
