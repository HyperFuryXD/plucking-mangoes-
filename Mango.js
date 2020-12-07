class Mango{
    constructor(x,y,radius){
        var options ={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("Images/mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}