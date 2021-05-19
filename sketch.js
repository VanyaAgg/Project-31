const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var particles = [];
var divisions = [];
var plinkos = [];
var k, j; 
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
   
  ground = new Ground(220,700,1200,20);  

   
}

function draw() {
  background(255,255,255);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions (k, divisionHeight/2, 10, divisionHeight));
  }

  for( var j = 40 ; j <= width ; j = j + 50){
    plinkos.push (new Plinko (j,75))
  }

  for( var j = 15 ; j <= width - 10 ; j = j + 50){
    plinkos.push (new Plinko (j,175))
  }

  for( var j = 65 ; j <= width - 20 ; j = j + 50){
    plinkos.push (new Plinko (j,275))
  }

  if(frameCount%60 === 0){
    particles.push(new Particle (random(width/2 - 10, width/2 + 10), 10, 10 ));
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for(var k = 0; k < divisions.length; k++ ){
    divisions[k].display();
  }


  

  ground.display();
 
  drawSprites();
}