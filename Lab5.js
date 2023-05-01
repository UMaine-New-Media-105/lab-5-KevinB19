let speedX;
let x;
let speedY;
let y;
let directionX;
let directionY;

function setup() {
  createCanvas(400, 400);
  speedX = 2;
  directionX = 1;
  x = width / 2;
  speedY = 2;
  directionY = 1;
  y = height / 2;
}

function draw() {
  background(220);

  x += speedX * directionX;
  y += speedY * directionY;
  drawSprite(x, y);

  //condition: speedX > width
  // action: speedX = 0;
  if (x + 25 >= width || x < 25) {
    // check if hits the right edge
    directionX *= -1;
  }
  if (y + 25 >= height || y < 25) {
    // check if hits the right edge
    directionY *= -1;
  }

  //   console.log("The value of directionX is : " + directionX)
  // console.log("The value of x is : " + x)
  console.log("The value of speedX is " + speedX);
  console.log("The value of speedY is " + speedY);
}

function drawSprite(x, y) {
  push();
  translate(x, y);

  fill("red");
  ellipse(0, 0, 50);
  pop();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    speedX -= 1;
    speedY = 0;
  } else if (keyCode == RIGHT_ARROW) {
    speedX += 1;
    speedY = 0;
  } else if (keyCode == UP_ARROW) {
    speedY -= 1;
    speedX = 0;
  } else if (keyCode == DOWN_ARROW) {
    speedY += 1;
    speedX = 0;
  }
}
