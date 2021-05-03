"use strict";
/*
document.querySelector(".input").value = 14;
console.log(document.querySelector(".message").textContent);
console.log(document.querySelector(".number").textContent);
document.querySelector(".score").textContent = 13;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input").value);
  //console.log(guess, typeof guess);
  if (!guess) {
    displayMessage("💣 No Number");
  } else if (guess === secretNumber) {
    displayMessage("🎉Correct Guess");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#ECF87F";
    document.querySelector("body").style.color = "#282120";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost The game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start Guessing..");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".input").value = "";
});
