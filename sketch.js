var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var score = 0;
var particle;
var round = 0;

var divisionHeight=300;
var score =0;

var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
function draw() {
  background("black");
  textSize(40);
  text("Score : "+score,20,40);
  text("500", 10, height-divisionHeight);
  text("500", 90, height-divisionHeight);
  text("500", 170, height-divisionHeight);
  text("500", 250, height-divisionHeight);
  text("100", 330, height-divisionHeight);
  text("100", 410, height-divisionHeight);
  text("100", 490, height-divisionHeight);
  text("200", 570, height-divisionHeight);
  text("200", 650, height-divisionHeight);
  text("200", 730, height-divisionHeight);
  fill("yellow");
  stroke("yellow");
  line(0, height-divisionHeight-50, width, height-divisionHeight-50);
  
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(mouseX, 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!==null){
     particle.display();

     if(particle.body.position.y>760){
       if(particle.body.position.x<300){
         score = score+500;
         particle=null;
         if(round>=5)
         {gameState="end";
        }
       }
       else if(particle.body.position/x>301&&particle.body.position.x<600)
       {
         score=score+100;
         particle=null;
         if(round>=5){
          gameState="end";
         }
       }
       else if(particle.body.position.x>601&&particle.body.position.x<900){
        score=score+200;
        particle=null;
        if(round>=5){
         gameState="end";
        }
       }
     }
   }
}

function mousePressed(){
   if(gameState!=="end"){
     round++;
     particle=new Particle(mouseX, 10, 10, 10);
   }
}