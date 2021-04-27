const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,g2;

function setup() {
    createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600, 600, 1200, 20);
    g2=new Ground(200,200,50,50);
}

function draw() {
    background(180);
    Engine.update(engine);
    ground.display();
    g2.display();
}