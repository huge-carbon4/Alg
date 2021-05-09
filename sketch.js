var fixed,moving










function setup() {
createCanvas(1200,600);
fixed=createSprite(400, 200, 50, 50);
moving=createSprite(300,200,50,50)
}

function draw() {
background("pink");  

moving.x=mouseX
moving.y=mouseY

if(moving.x -fixed.x < moving.width/2+fixed.width/2 && fixed.x-moving.x < moving.width/2+fixed.width/2
  && moving.y-fixed.y < moving.height/2+fixed.height/2 && fixed.y-moving.y < moving.heigth/2+fixed.height/2){

  moving.shapeColor="red"
fixed.shapeColor="red"
}
else{ moving.shapeColor="yellow"
fixed.shapeColor="yellow"}



drawSprites();
}