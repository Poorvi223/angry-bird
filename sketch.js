function setup() {
  createCanvas(800,400);
  fixedR = createSprite(400, 200, 50, 50);
  movingR = createSprite(100,50,20,30);
}

function draw() {
  background(255,255,255);  

  movingR.y = mouseY;
  movingR.x = mouseX;

  if(fixedR.x-movingR.x<fixedR.width/2+movingR.width/2
    && movingR.x-fixedR.x<fixedR.width/2+movingR.width/2
    && fixedR.y-movingR.y<fixedR.height/2+movingR.height/2
    && movingR.y-fixedR.y<fixedR.height/2+movingR.height/2){
   fixedR.shapeColor = "pink";
   movingR.shapeColor = "pink"
  }
  else{
    fixedR.shapeColor = "lightblue";
    movingR.shapeColor = "lightblue" 
  }

  drawSprites();
}