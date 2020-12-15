
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,survivalTime;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage =loadImage("obstacle.png");
 
}
                
function setup() {
monkey = createSprite(80,305,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(400,340,900,10);
ground.velocityX = -4;

console.log(ground);
score=0;
survivalTime = 0;
  

  
obstacleGroup = createGroup();
FoodGroup = createGroup();
                   
}


function draw() {
background(255);
 
  if(ground.x<0){
    ground.x = ground.width/2;
  }



//add gravity
monkey.velocityY = monkey.velocityY + 0.8;

//scoring
  stroke("white");
  textSize(20);
  fill("white");
  text("score:  "+score,500,50);
 
  stroke("black");
  textSize(20);
  fill("black");
survivalTime = Math.ceil(frameCount/frameRate());
text("survivalTime:  "+survivalTime,100,50);
  

//generate obstacles
spawnObstacles();
  
//generate bananas
spawnBananas();
 
//jump when the space key is pressed

  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
monkey.collide(ground);
drawSprites();
}

function spawnObstacles(){
 
if (frameCount % 300 === 0){
  obstacle = createSprite(550,315,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -4;
  obstacle.scale = 0.1;
  obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}

function spawnBananas(){
  if (frameCount % 80 === 0){
  
  banana = createSprite(550,Math.round(random(120,200)),20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -2;
  banana.lifetime = 200;
  
  //add each obstacle to the group
    FoodGroup.add(banana);
  }
  
}





