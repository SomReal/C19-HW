var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var end
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,300,20,20)
  ghost.addImage(ghostImg)
  ghost.scale = 0.5
  
  climbergroup = new Group()
  doorgroup = new Group()
  invisblockgroup = new Group()
  
   end = createSprite(0,600,1200,10)
   end.visible = false

}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("up_arrow")){
      ghost.velocityY = -10
    }
    ghost.velocityY = ghost.velocityY + 0.8
  if(keyDown("left_arrow")){
    ghost.x -= 3
  }
  if(keyDown("right_arrow")){
    ghost.x += 3
  }
  
  spawndoors()
    drawSprites()
}
function spawndoors(){
  if(frameCount%240 === 0){
    door = createSprite(200,-50)
    door.velocityY = 1
    climber = createSprite(200,10)
    climber.velocityY = 1
    var invisibleBlock = createSprite(200,50)
    invisibleBlock.width = climber.width
    invisibleBlock.height = 2
    door.x = Math.round(random(120,400))
    climber.x = door.x
    invisibleBlock.x = door.x

    
    door.addImage(doorImg)
    climber.addImage(climberImg)
    invisibleBlock.velocityY = 1
    door.velocityY = 1
    climber.velocityY = 1
    ghost.depth = door.depth
    ghost.depth += 1

    climbergroup.add(climber)
    doorgroup.add(door)
    //
    invisblock.add(invisibleBlock)

    if(ghost.isTouching(end)){
      
    }
    

    
  }
}
