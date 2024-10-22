var myFirstNumber, mySecondNumber, myAnswer, myOperator, timer, score, myInterval;

timer = 10;

function resetQuestion() {
  myFirstNumber = Math.floor(Math.random() * 10);
  mySecondNumber = Math.floor(Math.random() * 10);
  myOperatorId = Math.floor(Math.random() * 4);
  
  
  
  if (myOperatorId == 1) {
    myOperator = '+';
    
  } else if (myOperatorId == 2) {
    myOperator = '-';
    
  } else if (myOperatorId == 3) {
    myOperator = '*';
    
  } else {
    myOperator = '/';
    
  }


  firstNumber.textContent = myFirstNumber;
  secondNumber.textContent = mySecondNumber;
  operation.textContent = myOperator;  
  
}

resetQuestion();

myAnswer = eval(myFirstNumber + myOperator + mySecondNumber)

function eventHandler() {
  if (myAnswer == answer.value) {
   myH1.textContent = "Correct!!";   
  } else {
   myH1.textContent = "Wrong!!";   
  }
}

function refreshTimer() {
  timer --;
  myTimer.textContent = "Timer: " + timer;
  if (timer == 0) {
    clearInterval(myInterval);
    
  }
}

myInterval = setInterval(refreshTimer, 1000);

myCheck.onclick = eventHandler;