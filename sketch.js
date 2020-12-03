const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300

function setup() {
  createCanvas(480,800);

  engine=Engine.create();
  world=engine.world

  ground=new Ground(240,795+240,480,500)
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k,height-divisionHeight/2, 10,divisionHeight))
  }
  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  
}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display()

  for (var q=0;q<divisions.length;q++){
    divisions[q].display()
  }

  for (var w=0;w<plinkos.length;w++){
    plinkos[w].display()
  }

  if(frameCount % 60 === 0){
    particle = new Particle(random(width/2-10,width/2+10),5);
    particles.push(particle);
  }
  //console.log(frameCount)

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
}