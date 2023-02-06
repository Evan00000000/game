var player, playerImg, playerRunningImg, playerRunningleftImg;
var platform, platform1, platform2, platform3, platform4;
var ground, groundImg;
var backgroundImage;
var wall, wall2;





function preload(){
  playerImg = loadImage("./assets/playerstanding.png");
  playerRunningImg = loadImage("./assets/playerrunning.png");
  playerRunningleftImg = loadImage("./assets/playerrunningleft.png");
  enemyImg = loadImage("./assets/enemystanding.png");
  enemyRunningImg = loadImage("./assets/enemyrunning.png");
  enemyRunningLeftImg = loadImage("./assets/enemyrunningleft.png");
  groundImg = loadImage("./assets/ground.png");
  backgroundImage = loadImage("./assets/skybackground.png");
}

function setup() {
  createCanvas(3000,300);

  ground = createSprite(1500,300,3000,20);
  ground.addImage(groundImg);
  ground.scale = 1.8;
  ground.setCollider("rectangle",0,0,3000,40);

  
  player = createSprite(100,246,20,50);
  player.addImage(playerImg);
  player.scale = 0.3;
  player.setCollider("rectangle",0,0,50,100);

  wall = createSprite(2900,1,50,600);
  wall2 = createSprite(10,1,50,600);

  platform = createSprite(500,150,200,20);
  platform.addImage(groundImg);
  platform.scale = 0.2
  platform.setCollider("rectangle",0,0,2880,50);

  player.debug = true;
  platform.debug = true;


}

function draw() {
  background(backgroundImage)

  player.velocityY += 15;

  if(keyDown("space") && player.position.y > 245) {
    player.velocityY = -40;
  }
  
  camera.position.x = player.position.x;
 
  if(camera.position.x < 1500) {
    camera.position.x = 1500;
  }

  if(player.position.x > 2560) {
    camera.position.x = 2560;
  }

  if(ground.x > 0) {
    ground.x = 500;
  }

  if(keyDown("space")) {
    player.velocityY = -40;
    console.log("oiAUSHEXkljhenrlkANHLIWERXMJH")
  }

  

  if(keyDown("d")) {
    player.velocityX = 15;
    player.addImage(playerRunningImg);
  }

  if(keyDown("a")) {
    player.velocityX = -15;
    player.addImage(playerRunningleftImg);
  }

  if(!keyDown("a") && !keyDown("d")) {
    player.velocityX = 0;
    player.addImage(playerImg);
  }


  player.collide(ground);
  player.collide(wall);
  player.collide(wall2);
  player.collide(platform);

  drawSprites();
}