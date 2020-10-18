var bob1 , bob2 , bob3 , bob4 , bob5;
var roof , small;
var rope1 , rope2 , rope3 , rope4 , rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,400,30);
	bob1 = new Bob(400,300,20);
	bob2 = new Bob(455,300,20);
	bob3 = new Bob(345,300,20);
	bob4 = new Bob(510,300,20);
	bob5 = new Bob(290,300,20);

	rope1 = new Rope(bob1.body,{x:400,y:100});
	rope2 = new Rope(bob2.body,{x:455,y:100});
	rope3 = new Rope(bob3.body,{x:345,y:100});
	rope4 = new Rope(bob4.body,{x:510,y:100});
	rope5 = new Rope(bob5.body,{x:290,y:100});

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);

  roof.display();

  rope1.display();
  bob1.display();
  rope2.display();
  bob2.display();
  rope3.display();
  bob3.display();
  rope4.display();
  bob4.display();
  rope5.display();
  bob5.display();
}


function keyPressed() {
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-105,y:85});
	}
  }


