var bg,b1,rand1,GameState = "END",b,bImg,mo,score,s1,s2,GP = 0
function preload(){
  bg = loadImage("background.png");
  bImg = loadImage("button.png");
  s1 = loadSound("s1.mp3")
  s2 = loadSound("s2.mp3")
}
function setup() {
  createCanvas(400,500)
   
 b1 = createSprite(350,-90,95,150)
 b1.shapeColor = "black" 
 
  b = createSprite(200,250)
  b.addImage(bImg)
  b.scale = 0.5
  
 rand1 = Math.round(random(1,4))

  mo = createSprite(10,10,15,15)
  mo.shapeColor = "white"
  mo.visible = false
  
  score = 0;
  
}

function draw() {
  background(bg);
  textSize(45)
  fill("orange")
  text(score,190,50)
  textSize(45)
  fill("red")
  text(score,188,51)
  mo.x = mouseX
  mo.y = mouseY
  if(mo.isTouching(b)){
  GameState = "PLAY"
  b.visible = false  
  }
  
  if(GameState === "PLAY"){
     b1.velocityY = 15;
  if(rand1 === 1){
    b1.x = 350
    
  }
  if(rand1 === 2){
    b1.x = 250
  
  }
  if(rand1 === 3){
    b1.x = 150

  }
  if(rand1 === 4){
    b1.x = 50

  }
 if(mo.isTouching(b1)){
    rand1 = Math.round(random(1,4))
    b1.y = -90
   score = score+1
   GP = GP+1
    }
  }
  if(b1.y>500){
    GameState = "END";
    fill("white");
    textSize(25)
    text("YOU LOST",150,250)
    s1.stop();
    s2.stop();
  }
  if(GP === 1){
    s1.play();
    }
  if(GP ===30){
    s2.play();
    }
 
  drawSprites();
}
