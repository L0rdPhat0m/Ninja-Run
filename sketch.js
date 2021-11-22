var ninja, background_, obstacle;

function preload(){
    ninja_ = loadImage("ninja (1).png")
    obstacle_ = loadImage("obstacle (1).png")
}

function setup() {
    createCanvas(600,400);
    ninja = createSprite(200, 280);
    ninja.addImage(ninja_, "ninja")
    ninja.scale = 0.2
    background_ = createSprite(350, 350, 1200, 100);
    background_.velocityX = 4;
    obstaclesGroup  = new Group();
    
}

function draw() {
    background(0)
    
    if(keyDown("space") && ninja.isTouching(background_)){
        ninja.velocityY = -17;
        
    }
    ninja.velocityY = ninja.velocityY + 0.8
    if(background_.x > 600){
        background_.x = 600
      }
    if(obstaclesGroup.isTouching(ninja) || ninja.y === 400){
        ninja.destory();
    }
    text("Score"+frameCount/1, 300, 100)
    drawSprites();
    createObstacles();
}
function createObstacles(){
    if(frameCount % 160 === 0){
    obstacle = createSprite(-50, 280);
    obstacle.addImage(obstacle_, "obstacle");
    obstacle.scale = 0.2
    obstacle.velocityX = 5
    obstacle.depth=12
    obstaclesGroup.add(obstacle)
    }
    
}
