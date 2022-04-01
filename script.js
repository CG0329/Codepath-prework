const cluePauseTime = 100;
const nextClueWaitTime = 500;
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var lives;
var clueHoldTime;
var set;
var timeLeft;
var displayTimer;

function startTime() {
  set = setInterval(loseGame, 9000);
 }

function timer() {
  timeLeft = 9;
  displayTimer = setInterval(function(){
    if(timeLeft <= 0){
      clearInterval(displayTimer);
      document.getElementById("countdown").innerHTML = "Times up. You lost!";
    } 
    else {
      document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
    }
    timeLeft -= 1;
  }, 899);
}

function stopTime() {
  clearInterval(set);
  clearInterval(displayTimer);
  timeLeft = 5;
}

function StartGame() {
  lives = 3;
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 300;
  for (let j = 0; j < 9; j++) {
    pattern[j] = Math.floor(Math.random() * (1 - 1 + 6)) + 1;
  }
  document.getElementById("Start").classList.add("hidden");
  document.getElementById("Stop").classList.remove("hidden");
  playClueSequence();
  startTime();
  timer();
}

function EndGame() {
  stopTime();
  gamePlaying = false;
  document.getElementById("Start").classList.remove("hidden");
  document.getElementById("Stop").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("Button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("Button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
    clueHoldTime -= 4;
  }
}
function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;    
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      }
      else {
        stopTime();
        progress++;
        playClueSequence();
        startTime();
        timer();
      }
    }
    else {
      guessCounter++;
    }
  }
  else {
    lives--;
    alert(lives + " lives left.");
      if (lives == 0) {
        loseGame();
    }
  }
}

function loseGame() {
  EndGame();
  alert("Game over, you lose!");
}

function winGame() {
  EndGame();
  alert("Game over, you won!");
}

const freqMap = {
  1: 291.6,
  2: 349.6,
  3: 412,
  4: 466.2,
  5: 522.7,
  6: 595.4,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);