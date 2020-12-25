
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var circle1,circle2,circle3,circle4,rect1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
	circle1 = new objects(360, 200, 30)
	circle2 = new objects(300, 200, 30);
	circle3 = new objects(240, 200, 30);
  circle4 = new objects(180, 200, 30);
  circle5 = new objects(420, 200, 30);

  rect1 = new thread(300, 50, 500, 50);
  rect2 = new thread(240, 50, 50, 20);
  rect3 = new thread(180, 50, 50, 20);
  rect4 = new thread(420, 50, 50, 20);
  rect5 = new thread(360, 50, 50, 20);

  thread0 = new constraints(rect1.body,circle2.body,20,0);
  thread1 = new constraints(rect5.body,circle1.body,20,0);
  thread2 = new constraints(rect2.body,circle3.body,20,0);
  thread3 = new constraints(rect3.body,circle4.body,20,0);
  thread4 = new constraints(rect4.body,circle5.body,20,0);
  
  //Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();
  thread0.display();
  thread1.display();
  thread2.display();
  thread3.display();
  thread4.display();
  if(keyDown("up")){
  Matter.Body.applyForce(circle4.body,circle4.body.position,{x:-100,y:-100})
  }
  
  drawSprites();
 
}



