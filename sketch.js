var PLAY=1;
var END=0;
var gameState=PLAY;

var sword, swordImage

var fruitGroup;
var fruit1, fruit1image;
var fruit2, fruit2image;
var fruit3, fruit3image;
var fruit4, fruit4image;

var enemyGroup;
var enemy1, enemy1image;
var enemy2, enemy2image;

var score;

var gameOver, gameOverimage;

var knifeSwooshSound, gameOverSound;


function preload(){ 
 
  swordImage=loadImage("sword.png");
  
  fruit1image=loadImage("fruit1.png");
  fruit2image=loadImage("fruit2.png");
  fruit3image=loadImage("fruit3.png");
  fruit4image=loadImage("fruit4.png");
  
  enemy1image=loadImage("alien1.png");
  enemy2image=loadImage("alien2.png");
  
  gameOverimage=loadImage("gameover.png");
  
  knifeSwooshSound=loadSound("knifeSwooshSound.mp3");
  gameOverSound=loadSound("gameover.mp3");
  }

function setup() {
  createCanvas(400, 400);
  
  sword=createSprite(200,350,45,57);
  sword.addImage(swordImage);
  sword.scale=0.5

  
  fruitGroup=createGroup(); 
  enemyGroup=createGroup();
  
  score=0;
  
  gameOver=createSprite(200,200,20,20);
  gameOver.addImage(gameOverimage);
  
}

function draw() {
  background(202,153,255);
  text("Score: "+ score, 340,30);
  
  fruits();
  alien();
  
    
  
  if(gameState === PLAY){

    sword.y=World.mouseY;
    sword.x=World.mouseX;
    
    gameOver.visible=false;
    
    if (fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score=score+1;
      knifeSwooshSound.play();
    }
    
    if (sword.isTouching(enemyGroup)){
      gameState=END;
       gameOverSound.play();
      
      
    }
    
  }
  
  if(gameState === END){ 
    gameOver.visible=true;
   
   
        fruitGroup.destroyEach();
        enemyGroup.destroyEach();
    
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
    
    
  }
  
  drawSprites();
    
}


function fruits(){
  
  if(World.frameCount%80===0){
    fruit=createSprite(200,200,20,20);
    fruit.scale=0.2
    
    r=Math.round(random(1,4));
    if (r==1){ 
        fruit.addImage(fruit1image);
      }else if (r==2){
        fruit.addImage(fruit2image);
      }else if (r==3){
        fruit.addImage(fruit3image);
      }else{
        fruit.addImage(fruit4image); } 
    
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX=-7;
    
    fruitGroup.add(fruit);
     
  } } 


function alien(){
  
  if(World.frameCount %80===0){
    enemy=createSprite(400,200,20,20);
    enemy.scale=1.0
    
    r=Math.round(random(1,4));
    if (r==1){ 
        enemy.addImage(enemy1image);
      }else 
        enemy.addImage(enemy2image);
    
    enemy.y=Math.round(random(50,340));
    
    enemy.velocityX=-7;
    
    enemyGroup.add(enemy);
     
  }
  
 } 

