const canvas = document.getElementById("flappyBird");
const ctx = canvas.getContext("2d");

var bg = new Image();
var fg = new Image();
var bird = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bg.src = "https://github.com/sanketana/JavaScript-Classwork-Notebook/raw/main/images-flappy/bg.png";
fg.src = "https://github.com/sanketana/JavaScript-Classwork-Notebook/raw/main/images-flappy/fg.png";
bird.src = "https://github.com/sanketana/JavaScript-Classwork-Notebook/raw/main/images-flappy/bird.png";
pipeNorth.src = "https://github.com/sanketana/JavaScript-Classwork-Notebook/raw/main/images-flappy/pipeNorth.png";
pipeSouth.src = "https://github.com/sanketana/JavaScript-Classwork-Notebook/raw/main/images-flappy/pipeSouth.png";

// Physics variables
var bX = 10;
var bY = 150;
var gravity = 1.5;
var pipeNorthX = canvas.width;
var pipeNorthY = 0;
var gap = 85;
var pipeSouthX = canvas.width;
var pipeSouthY = pipeNorth.height + gap;

// Jump
function moveUp() {
  bY = bY - 20;
  fly.play();
}

// Event handler
document.addEventListener("keydown", moveUp);

// update function, the function that does all calculations
function update(){
  // Gravity simulation
  bY = bY + gravity;

    // North Pipe motion
  pipeNorthX = pipeNorthX - 2;
  // South Pipe motion by piggybacking North pipe
  pipeSouthX = pipeNorthX;
  pipeSouthY = pipeNorth.height + gap;

  // Jump pipes to right after they touch left edge
  if (pipeNorthX + pipeNorth.width == 0) {
    pipeNorthX = canvas.width;
  }
}

// render function, the function that does all the drawing
function render(){
  ctx.drawImage(bg, 0, 0);
// Render pipes

ctx.drawImage(pipeNorth, pipeNorthX, pipeNorthY);
ctx.drawImage(pipeSouth, pipeSouthX, pipeSouthY);
// Render ground
ctx.drawImage(fg, 0, canvas.height - fg.height);
// Render bird
ctx.drawImage(bird, bX, bY);

}


// Main Game function
function game() {
  update();
  render();
}

// number of frames per second
const fps = 50;

// call the game function 50 times every 1 sec
setInterval(game, 1000/fps);