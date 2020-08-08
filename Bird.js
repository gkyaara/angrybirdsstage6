class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.path=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>10){
     this.path.push([this.body.position.x,this.body.position.y]);
    }

    for(var i =0; i<this.path.length; i=i+1){
    image(this.smoke,this.path[i][0],this.path[i][1]);
    }
  }

}

/*
path[] = [[200, 300], [250, 350], [300, 400]];
path[0][0], path[0][1]
path[1][0], path[1][1]
path[2][0], path[2][1]

  path[i][0], path[i][1]

i=0
i<path.length
i=i+1


*/
