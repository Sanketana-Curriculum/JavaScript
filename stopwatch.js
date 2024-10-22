var ten, sec, dTen, myInterval;

ten = 0;

function tick() {
  ten ++;
  sec = Math.round(ten / 100);
  dTen = Math.round(ten % 100);
  myTime.textContent = sec + ":" + dTen ;
}

function startFunction() {
  console.log('inside start');
   myInterval = setInterval(tick, 10);  
}

function stopFunction() {
  console.log('inside start');  
  clearInterval(myInterval);
}

function resetFunction() {
  ten = 0;
  sec = 0;
  dTen = 0;
  myTime.textContent = "00:00";
}

start.onclick = startFunction;
stop1.onclick = stopFunction;
reset.onclick = resetFunction;
