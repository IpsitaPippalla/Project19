var ball,paddle, ballimage, paddleimage;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballimage=loadImage("ball.png");
  
  paddleimage=loadImage("paddle.png");

}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
   ball=createSprite(20,200,20,20);
  ball.addImage("ball", ballimage);
  ball.velocityX=9;
  
  paddle=createSprite(240,200,20,20);
  paddle.addAnimation("paddle", paddleimage);
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
   edges = createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
   
 
  
  

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle);
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
   randomVelocity();
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y=paddle.y-4;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y=paddle.y+4;
  }
 
  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
   
  
  if(ball.isTouching(paddle)){
  ball.bounnceOff(paddle);
    ball.velocityX=rand(1,4);
    ball.velocityY=rand(1,6);
  
   
}
}
