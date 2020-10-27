
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin,dustbinimage,dustbin1,dustbin2,dustbin3;
var backgroundImg;
function preload()
{
	backgroundImg = loadImage("summer-city-park-background-vector-21066601.jpg");
	dustbinimage = loadImage("dustbingreen.png");	
}

function setup() {
	var canvas = createCanvas(800, 700);
	
	dustbin = createSprite(650,520,100,200);
	dustbin.scale=0.8;
	dustbin.addImage(dustbinimage);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,100);
	dustbin1 = new Dustbin(555,515,10,250);
    dustbin2 = new Dustbin(650,630,200,20);
	dustbin3 = new Dustbin(745,515,10,250);
	ground = new Ground(400,650,800,20);

	Engine.run(engine);
  
}


function draw() {
  background(backgroundImg);
  Engine.update(engine);
  rectMode(CENTER);
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();

 if(keyDown(UP_ARROW)){
	keypressed();
  }
}

function keypressed(){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-50});
}

