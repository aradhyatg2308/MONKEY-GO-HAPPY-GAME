
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score =0
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  

 monkey=createSprite(120,540,20,10)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
   ground=createSprite(300,570,600,10)
    obstacleGroup = createGroup();
  foodGroup = createGroup();
}
 

function draw() {

  background("lightblue")
    
createBanana();
  text("SURVIVAL:"+score,250,50)
  
      if(keyDown("space")&& monkey.y >= 150) {
        monkey.velocityY = -12;
      }

  monkey.velocityY =  monkey.velocityY+0.8
         monkey.collide(ground)
  
  
  createObstacle();
  drawSprites();             

}
function createBanana(){
  if(frameCount %140==0){
  var rn=Math.round(random(0,600))
bana = createSprite(rn,330,10,10)
  bana.addImage( bananaImage)
  bana.scale=0.1
  bana.velocityX=-3
  foodGroup.add(bana)
     bana.lifetime=300
}
}

function createObstacle()
{
  if(frameCount %130==0){
    var rand=Math.round(random(0,600))
 obstacle= createSprite(rand,550,20,20) 
  obstacle.addImage(obstacleImage)
  obstacle.velocityX=-3
 obstacle.scale=0.1
  obstacleGroup.add(obstacle)
    obstacle.lifetime=-200
}
}

