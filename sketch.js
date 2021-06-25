const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball1
var ball2


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var ballOptions={
    restitution:1
}
var ball2Option={
    restitution:1.5
}



    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
ball1=Bodies.circle(100,50,30,ballOptions)
World.add(world,ball1)
    console.log(ground);
ball2=Bodies.circle(200,100,40,ball2Option)
World.add(world,ball2)

}

function draw(){
    background("#a8323a");
    fill("green")
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
fill("darkblue")
ellipseMode(RADIUS)
ellipse(ball1.position.x,ball1.position.y,30,30)
fill("lightblue")
ellipseMode(RADIUS)
ellipse(ball2.position.x,ball2.position.y,40,40)


}