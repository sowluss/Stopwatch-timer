let ms = 0,
     s = 0,
     m = 0

let timer;

let stopwatchEl = document.getElementById('stopwatch');

function start() {
  // prevents timer firing on on multiple start clicks
  if(!timer) {
    timer = setInterval(run, 10);
  }
}

// Start 
function run() {
  stopwatchEl.textContent = getTimer();
  ms++;
  if (ms == 100) {
    ms = 0;
    s++;
  }
  if (s == 60) {
    s = 0;
    m++;
  }
  if (m == 60) {
    m = 0;
    ms++;
  }
}

// Pause
function pause() {
  stopTimer();
}

// Stop 
function stop() {
  stopTimer();
  ms = 0;
  s = 0;
  m = 0;
  stopwatchEl.textContent = getTimer();
}

function stopTimer() {
  clearInterval(timer);
  timer = false;
}

function getTimer() {
  return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}

function restart() {
  stop();
  start();
}