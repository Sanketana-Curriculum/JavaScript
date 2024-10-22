var word = 'IMPOSSIBLE';

var numWrongAttempts = 0;
var numCorrectAttempts = 0;

var startCostume = 2;

// Set all positions to a blank ('_' as underscore)
for(let i=1; i <= word.length; i++) {
  var myId = "letter" + i;
  var mySpan = document.getElementById(myId);
  //document.getElementById(myId).textContent = word.charAt(i-1);
  mySpan.textContent = '_';
}

function checkAnswer() {

  // Iterates through all span and replaces if the entered value matches the value of character at i
  var matched = false; 
  for(let i=1; i <= word.length; i++) {
    var myId = "letter" + i;

    // If you get a match then show the letter
    var mySpan = document.getElementById(myId);
      if (word.charAt(i-1).toUpperCase() == myInput.value.toUpperCase()) {
        mySpan.textContent = word.charAt(i-1).toUpperCase();
        matched = true;
      } 
  }

  // If no match found, then increment the counter by 1
  if (!matched) {
    numWrongAttempts ++;
  }

  // Change the source of the image to appropriate costume
  myImage.src = 'images-hangman/costume' + eval(startCostume + numWrongAttempts) + '.svg';

  // Check win or loose
  if (numWrongAttempts == 6) {
    result.textContent = "You Lose!";
  }
  
  if (numCorrectAttempts == 10) {
    result.textContent = "You Win!";
  }
  
  myInput.value = '';
  myInput.focus();
}

myButton.onclick = checkAnswer;