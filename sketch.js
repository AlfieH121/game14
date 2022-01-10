var floor
var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var flooroptions={

isStatic:true

}
floor=Bodies.rectangle(200,370,400,20,flooroptions);
World.add(world,floor);
var balloptions={

restitution:1.3

}
ball=Bodies.circle(200,1,30,balloptions)
World.add(world,ball);
}

function draw() 
{
  background(51);
 Engine.update(engine);
 rectMode(CENTER)
 rect(floor.position.x,floor.position.y,400,20);
 ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,30,30);
 
 
}

