const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine,world;
//var object;
var ground;

var ball;

function setup() {
  var canvas=createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,380,400,10,ground_options);
  World.add(world,ground);

  var ball_options = {
    restitution:3.0
  }
  ball = Bodies.circle(200,150,30,ball_options);
  World.add(world,ball);

  /*var object_options={
    isStatic:true
  }
  object=Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object);

  console.log(object);*/
  
}

function draw() {
  background(0);  
  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
 
 /* rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);*/
  
}