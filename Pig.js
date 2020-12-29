class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255;
  }

  display(){
if(this.body.speed>3)
{
//pig should vanish.
World.remove(world,this.body);
push();
tint(255,this.visibility);
this.visibility=this.visibility-5;
console.log(this.visibility);
image(this.image,this.body.position.x,this.body.position.y,50,50);
pop();
}else
{
super.display();
}


  }
};