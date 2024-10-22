var numSquares = 6;
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll(".square");
var rgbCode = document.getElementById("rgbCode");
var pickedColor = pickColor()

function randomColor(){
  //pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256)
  //pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256)
  //pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256)

  return "rgb(" + r +", " + g + ", " + b +")";
}

function generateRandomColors(num){
  //make and array
  var arr = []
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
    //get random color and push into array
  }
  //return that array
  return arr;
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

rgbCode.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
  //add initial color to square
  square[i].style.background = colors[i];
  
  //add event listeners to numSquares
  square[i].addEventListener("click", function() {
    //detect color of clicked square
    var clickedColor = this.style.background;
    //compare the clickedColor and pickedColor
    if(clickedColor == pickedColor) {
      result.textContent = "Good Job!";
      resultEmoji.textContent = "🎉🥳🎊";
      confetti();
    } else {
      result.textContent = "Try Again!";
      resultEmoji.textContent = "🥱👎";
      //Check more details here: https://www.kirilv.com/canvas-confetti/
    }
  })
}
