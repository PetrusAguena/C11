var barco , barcoImg
var oceano , oceanoImg



function preload(){
barcoImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
oceanoImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  

  oceano = createSprite(0,80)
  oceano.addImage(oceanoImg)



  oceano.velocityX = -4;
  oceano.scale = 0.4;

  barco = createSprite(200,250,50,50)
  barco.addAnimation("ship",barcoImg)
  barco.scale = 0.28
  

}

function draw() {
  background("blue");
  
  if (oceano.x < 0){
    oceano.position.x = oceano.width /8;
    
  }


  
  

  drawSprites();

 
}
