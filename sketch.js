//string
var string = "This is a string";
console.log(string);

//Number
var num = 100;
console.log(num);

//boolean
var bool =true;
console.log(bool);

//undefined
var object;
console.log(object);

//null (reassigning a variable to null)
object = null;
console.log(object);

//ARRAY
//Similar data types
var arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
console.log(arr1[2]);

//different data types
var arr2 = ["Kyaara", 12, false];
console.log(arr2);
console.log(arr2[0]);

//array containing a list of array
//[1,2]    [2,3]   [3,4]
var arr3 = [[1,2], [2,3], [3,4]];
console.log(arr3);
console.log(arr3[1]);
console.log(arr3[2][0]);

arr3.push("Kyaara");
console.log(arr3);

arr3.pop();
console.log(arr3);


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gamestate = "sling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
   if(gamestate!=="launch"){  //not equal to
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   }
}


function mouseReleased(){
    slingshot.fly();
    gamestate="launch";
}

function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}

/*
DATA TYPES:
1. Number 
2. String
3. Boolean values: trus/false
4. Null: empty/nothing
5. Undefined

DATA STRUCTURES - multiple values at once

ARRAY
- list of different/same data types 
- created inside [..]
- values = elements
- Separated by a comma
*/