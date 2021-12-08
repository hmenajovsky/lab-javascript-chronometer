
const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');
let intervalId = null;

function printTime() {
  IntervalId = setInterval(() => {    
  printMinutes();
  printSeconds();
  }, 1000);
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() { 
  let li = document.createElement("li");
  splitsElement.appendChild(li); 
  li.textContent = chronometer.split();
}

function clearSplits() { 
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.textContent = "STOP";
  btnRightElement.classList.add('split');
  btnRightElement.classList.remove('reset');
  btnRightElement.textContent = "SPLIT";  
}

function setSplitBtn() {
 printSplit();
}

function setStartBtn() {
 btnLeftElement.classList.remove('stop');
 btnLeftElement.classList.add('start');
 btnLeftElement.textContent = "START";
 btnRightElement.classList.remove('split'); 
 btnRightElement.classList.add('reset');
 btnRightElement.textContent = "RESET"; 
}

function setResetBtn() {  
  clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('stop')) {
    setStartBtn();
    chronometer.stop();
  } else if (btnLeftElement.classList.contains('start')) {
    setStopBtn();  
    chronometer.start();    
    printTime();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('stop')) {
    setSplitBtn();
  } else if (btnLeftElement.classList.contains('start')) {
    setResetBtn();  
    chronometer.reset();   
    }
});

