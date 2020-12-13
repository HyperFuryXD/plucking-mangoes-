
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,ground,stone;
var mango1,mango2,mango3;

function preload()
{
	tree = loadImage("Images/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
	stone = new Stone(110,630,50);
	boy = new Boy(stone.body,{x:110,y:630});
	mango1 = new Mango(675,500,20,20);
	mango2 = new Mango(700,525,20,20);
	mango3 = new Mango(725,475,20,20);
	mango4 = new Mango(750,500,20,20);
	mango5 = new Mango(650,525,20,20);


	
  
}


function draw() {
  
  Engine.update(engine);
  background(0);
  image(tree,605,400,200,300);
  ground.display();
  stone.display();
  boy.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    boy.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.radius+lstone.radius){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:110,y:630})
		boy.attach(stone.body);
	}
}


