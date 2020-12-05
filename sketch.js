
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground , dbn,paperobject;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

    dbn = new dustbin (1200,650)

	ground= new rect1(width/2,670,width,20)
	Engine.run(engine);

	paperObject=new paper(200,450,40);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  
 paperObject.display();
  
  dbn .display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
  }
}

