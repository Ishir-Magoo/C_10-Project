var edges;
var seaImg, ShipImg;
var ship;
var sea;

function preload(){
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImg = loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
   
  //create sea
  sea = createSprite(200,200,400,400)
  sea.addAnimation("sea-img", seaImg);
  sea.scale=0.5;
  
  
  

  //creating ship
  ship = createSprite(150,150,100,100)
  ship.addAnimation("running", shipImg);
  ship.scale=0.2;
 

  

  edges = createEdgeSprites();
}

function draw() {
  background("blue");

 

  


 drawSprites();
}