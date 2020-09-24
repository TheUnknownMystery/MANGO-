
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var tree_1,ground_1,stone_1,boy_1,boy_img;
function preload()
{
  boy_img=loadImage("plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);

   
	engine = Engine.create();

	world = engine.world;

    tree_1   = new tree(500,300,300,300);
	 
	ground_1   = new ground(400,596,800,20);

	stone_1    = new stoneObj(297,460,60,60);

    boy_1    = createSprite(300,450,100,200)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  drawSprites();

  tree_1.display  () ;

  ground_1.display() ;

  stone_1.display() ;

  boy_1.display();
 
}



