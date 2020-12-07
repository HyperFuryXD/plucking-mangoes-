class Boy{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.boy = Constraint.create(options);
        World.add(world, this.boy);
        this.image = loadImage("Images/boy.png");
    }

    fly(){
        this.boy.bodyA = null;
    }

    attach(body){
        this.boy.bodyA= body;
    }

    display(){
      image(this.image,100,600,100,100);
     
        if(this.boy.bodyA){
            var pointA = this.boy.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    
}