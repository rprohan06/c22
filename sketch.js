const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myworld,myengine;
var ground,ball

function setup() {
  createCanvas(400,400);

  myengine=Engine.create();
  myworld=myengine.world;
  
var options={
  isStatic: true
}

ground=Bodies.rectangle(200,380,400,20,options);
World.add(myworld,ground);

 console.log(ground.position.x);
 var boptions={
   restitution:2
 }
 ball=Bodies.circle(100,200,10,boptions)
 World.add(myworld,ball)
}

function draw() {
  background(180,180,180); 
  Engine.update(myengine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10,10)
}