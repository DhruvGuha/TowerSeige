const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var hexagon, slingshot;

var gameState = "onSling"
var score = 0;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(725,320,70,70);
    box2 = new Box(875,320,70,70);
    

    box3 = new Box(725,240,70,70);
    box4 = new Box(875,240,70,70);


    box5 = new Box(800,320,70,70);
    box6 = new Box(800,160,70,70);

    box7 = new Box(950,160,70,70);
    box8 = new Box(650,160,70,70);

    box9 = new Box(800,0,70,70)

    hexagon = new Hexagon(200,50);

    //6 = new (230,180,80, PI/2);
    slingshot = new SlingShot(hexagon.body,{x:200, y:50});
}

function draw(){

    background("Black");
        noStroke();
        textSize(35)
        fill("white")
    
    Engine.update(engine);
    //strokeWeight(4);
    box9.display();

    box2.display();
    ground.display();

    box3.display();
    box4.display();

    box5.display();
    box6.display();

    box7.display();
    box8.display();

    box1.display();

    hexagon.display();
    platform.display();
    //6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(hexagon.body);
       Matter.Body.setPosition(hexagon.body, {x: 200 , y: 50});
       hexagon.trajectory = [];
    }
}

