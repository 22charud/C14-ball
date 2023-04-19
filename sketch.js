var ball = {
  "colour": "red",
  "speed": 1 ,
  "radius" : 100,
  "positionx" : 200,
  "positiony":100

}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.positionx,ball.positiony,ball.radius) 
  fill ( ball.colour) 
  ball.positionx+=ball.speed
}