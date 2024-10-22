var playerChoice, computerChoice, myResult;

function rockClickedHandler() {
  playerChoice = 'rock';
  displayResult();
}

function paperClickedHandler() {
  playerChoice = 'paper';  
  displayResult();  
}

function scissorsClickedHandler() {
  playerChoice = 'scissors'; 
  displayResult();  
}

function displayResult() {
  player_choice.textContent = "Player Choice: " + playerChoice;

  var randNum = Math.floor(Math.random() * 4);

  if (randNum == 1) {
    computerChoice = 'rock';
  } else if (randNum == 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }

  computer_choice.textContent = "Computer Choice: " + computerChoice;

  if (playerChoice == computerChoice) {
    myResult = 'Tie!';
  } else if (playerChoice == 'rock' && computerChoice == 'paper') {
    myResult = 'Computer Wins!';
  } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
    myResult = 'Player Wins!';
  } else if (playerChoice == 'paper' && computerChoice == 'rock') {
    myResult = 'Player Wins!';
  } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
    myResult = 'Computer Wins!';
  } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
    myResult = 'Computer Wins!';
  } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
    myResult = 'Player Wins!';
  } 

  result.textContent = "Result: " + myResult;
}
  
rock.onclick = rockClickedHandler;
paper.onclick = paperClickedHandler;
scissors.onclick = scissorsClickedHandler;