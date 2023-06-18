var PLAY = 1;
var END = 0;
var gameState = PLAY;
var player1Img, player1;
var player1Img, player2; 
var backgroundImg, background; 
var obstaclesGroup, obstacle1,obstacle1Img, obstacle2,obstacle2Img, obstacle3, obstacle3Img, obstacle4, obstacle4Img, obstacle5,obstacle5Img, obstacle6,obstacle6Img;
var score;
var distance=0;
var ob1,ob2,ob3







function preload(){
  backgroundImg = loadImage("background.jpeg");
  player1Img = loadImage("cavemann.png")
  obstacle1Img = loadImage("rock.png");
  obstacle2Img = loadImage("rock.png");
  obstacle3Img = loadImage("rock.png");
  obstacle4Img = loadImage("rock.png");
  obstacle5Img = loadImage("rock.png");
  obstacle6Img = loadImage("rock.png");
}

function setup() {
  createCanvas(800,400);
  
 
    
  player1 = createSprite(100, 400, 20, 20);
  player1.addImage("player1", player1Img);
  player1.scale = 0.85
  ground = createSprite(400,400,800,10)
  
 
  ob1 = new Group();
  ob2 = new Group();
  ob3 = new Group();

  score = 0
}


function draw() {
  background(backgroundImg);  
  //player1.velocityX = 4;
 
  ground.velocityX = -4;
  score = score + Math.round(getFrameRate()/60);

 
  if(keyDown("space")&& player1.y >= 320) {
    player1.velocityY = -7;
    
}
    player1.velocityY = player1.velocityY + 0.3;
    createEdgeSprites();
    player1.collide(ground);
    text("Score: " + score, 50,50,100,100);
 
    var select_oppPlayer = Math.round(random(1,3));

    if (World.frameCount % 70 == 0) {
      if (select_oppPlayer == 1) {
        obstacles1();
    } else if (select_oppPlayer == 2) {
        obstacles2();
      } else {
        obstacles3();
      }
    }
    if(ground.x < 0 ){
      ground.x = width/2;
    }
    player1.setCollider("rectangle",0,0,player1.width,player1.height);
    if(score >= 150){
      obstacle1.velocityX = -12;
      obstacle2.velocityX = -12;
      obstacle3.velocityX = -12;
      
    }
    if(score >= 300){
      obstacle1.velocityX = -14;
      obstacle2.velocityX = -14;
      obstacle3.velocityX = -14;
      
    }
    if(score >= 450){
      obstacle1.velocityX = -16;
      obstacle2.velocityX = -16;
      obstacle3.velocityX = -16;
      
    }
    if(ob2.isTouching(player1)){
      ob1.setLifetimeEach(-1);
      ob1.setVelocityXEach(0);
      ob3.setLifetimeEach(-1);
      ob3.setVelocityXEach(0);
      ob2.setLifetimeEach(-1);
      ob2.setVelocityXEach(0);
     
    }
    if(ob2.isTouching(player1)){
      ob2.setLifetimeEach(-1);
      ob2.setVelocityXEach(0);
      ob1.setLifetimeEach(-1);
      ob1.setVelocityXEach(0);
      ob3.setLifetimeEach(-1);
      ob3.setVelocityXEach(0);
    }
    if(ob3.isTouching(player1)){
      ob3.setLifetimeEach(-1);
      ob3.setVelocityXEach(0);
      ob1.setLifetimeEach(-1);
      ob1.setVelocityXEach(0);
      ob2.setLifetimeEach(-1);
      ob2.setVelocityXEach(0);
    }
   
  
  

  drawSprites();
}
function obstacles1(){
  obstacle1 = createSprite(800,375);
  
  obstacle1.velocityX = -10;
  obstacle1.addImage("rock1",obstacle1Img);
  obstacle1.setLifetime=170;
  ob1.add(obstacle1);
  
 
}

function obstacles2(){
  obstacle2 =createSprite(800,375);

  obstacle2.velocityX = -10;
  obstacle2.addImage("rock2",obstacle2Img);
  obstacle2.setLifetime=170;
  ob2.add(obstacle2);
}

function obstacles3(){
  obstacle3 =createSprite(800,375);
  
  obstacle3.velocityX = -10;
  obstacle3.addImage("rock3",obstacle3Img);
  obstacle3.setLifetime=170;
  ob3.add(obstacle3);
}
