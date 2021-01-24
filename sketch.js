
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1;
var garden1,gard;
var ground1;
var tree1;
var boy1;
var stone1;
var chain1;
var mango1,mango2,mango3,mango4,mango5;
function preload()
{
garden1=loadImage("sprites/XP.jpg")	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1=new ground(480,530,1000,200)
    tree1= new tree(620,440);
    boy1=new boy(160,470);
    stone1=new stone(100,20,20,20)

mango1 = new mango(600,200,40,40)
mango2 = new mango(550,150,50,50)
mango3 = new mango(700,120,40,50)
mango4 = new mango(750,200,60,60)
mango5 = new mango(500,200,40,30)

    chain1 = new chain(stone1.body , { x:120 , y:330 } );

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(garden1);
  
  drawSprites();
 
ground1.display();
tree1.display();   
boy1.display();
stone1.display();
chain1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
detectollision(stone1,mango1)
detectollision(stone1,mango2)
detectollision(stone1,mango3)
detectollision(stone1,mango4)
detectollision(stone1,mango5)
}

function keyPressed(){
if(keyCode === 32){
  chain1.attach(stone1.body)
}
}

function detectollision(mango,stone1){

mangoBodyPosition=mango.body.position
stone1BodyPosition=stone1.body.position

var distance=dist(stone1BodyPosition.x  , stone1BodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y)
if(distance<=mango.r+stone1.r){

Matter.Body.setStatic(mango.body,false)



}

}


function mouseDragged(){
 Matter.Body.setPosition(stone1.body, {x:mouseX ,y:mouseY })
}


function mouseReleased(){
  chain1.fly();
}