var car, wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  wall = createSprite(1500,200,60,height/2);

  deformation = (0.5*weight*speed*speed)/22500

}

function draw() {
  background("Black"); 

  console.log(deformation);

//  car = createSprite(50,200,50,50);
  wall.shapceColor = (80,80,80);

  if (car.x - wall.x < wall.height/2 + car.height/2
    && wall.x - car.x < wall.height/2 + car.height/2) {
  
      car.velocityX = 0;

      if (deformation < 100) {
        car.shapeColor = "green";
      }
      
      else if (deformation > 100 && deformation < 180) {
        car.shapeColor = ("yellow");
      }

      else {
        car.shapeColor = "Red";
      }

}




  drawSprites();
}