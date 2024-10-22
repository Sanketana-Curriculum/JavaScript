var word = 'IMPOSSIBLE';

var correct = 0;
var wrong = 0;

function checkAnswer() {

  var matched = false;
  // Loop over all 10 character
  for(let i=1; i <= word.length; i++) {
    //console.log(i);

    var myId = 'letter' + i;
    var mySpan = document.getElementById(myId);
    // Compare the letter in textbox with letter at position i
    if (word.charAt(i-1) == myInput.value) {
      mySpan.textContent = word.charAt(i-1);
      correct ++;
      matched = true;
    } 
  }

  if(!matched) {
    wrong ++;
  }

  // Change costume based on number of wrong attempts
  var costume = 'images-hangman/costume' + eval(2 + wrong) + '.svg';
  myImage.src = costume;
}

myButton.onclick = checkAnswer;