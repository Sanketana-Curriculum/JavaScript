var score1 = 0;


function eventHandler() {
  score1 += 1;
  var scoreLabel = "Score: " + score1;
  score.textContent = scoreLabel;
}

diamond.onclick = eventHandler;