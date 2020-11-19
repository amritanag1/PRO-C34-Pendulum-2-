
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight/1.5);

	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	}

	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

    bob1 = new Bob(200,200,40,40);
	bob2 = new Bob(260,200,40,40);
	bob3 = new Bob(320,200,40,40);
	bob4 = new Bob(380,200,40,40);
	bob5 = new Bob(440,200,40,40);

	//rope1 = new Rope(bob1.body,0);

	rope1 = new Rope(bob1.body,{x:200, y:200});
	rope2 = new Rope(bob2.body,{x:260, y:200});
	rope3 = new Rope(bob3.body,{x:320, y:200});
	rope4 = new Rope(bob4.body,{x:380, y:200});
	rope5 = new Rope(bob5.body,{x:440, y:200});
	
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("black");
  Engine.update(engine);

    
  fill(165,75,255);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
    
  //drawSprites();
 
}

function mouseDragged(){
 Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY});
}
	

