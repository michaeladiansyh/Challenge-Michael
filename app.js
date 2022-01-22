const rock_player = document.getElementById("rock-player");
const paper_player = document.getElementById("paper-player");
const scissors_player = document.getElementById("scissors-player");

const rock_com = document.getElementById("rock-com");
const paper_com = document.getElementById("paper-com");
const scissors_com = document.getElementById("scissors-com");

const player_win = document.getElementById("player-win");
const draw_text = document.getElementById("draw");
const computer_win = document.getElementById("computer-win");
const vsText = document.getElementById("vs");

const refresh1 = document.getElementById("refresh");
/* 
class Player {
  constructor(batu, kertas, gunting) {
    this.batu = batu;
    this.kertas = kertas;
    this.gunting = gunting;
  }
}

class Computer {
  constructor(batu, kertas, gunting) {
    this.batu = batu;
    this.kertas = kertas;
    this.gunting = gunting;
  }
}

class Result {
  constructor(text, win, lose, draw) {
    this.text = text;
    this.win = win;
    this.lose = lose;
    this.draw = draw;
  }
}

const player1 = new Player(
  document.querySelector("#rock-player"),
  document.querySelector("#paper-player"),
  document.querySelector("#scissors-player")
);

const computer1 = new Computer(
  document.querySelector("#rock-com"),
  document.querySelector("#paper-com"),
  document.querySelector("#scissors-com")
);

const result1 = new Result(
  document.querySelector("#vs"),
  document.querySelector("#rock-com"),
  document.querySelector("#paper-com"),
  document.querySelector("#scissors-com")
); */

function getComChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.trunc(Math.random() * 3);

  if (randomNumber == 0) {
    rock_com.style.border = "3px solid #531345";
    rock_com.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    rock_com.style.borderRadius = "40%";
    paper_com.removeAttribute("style");
    scissors_com.removeAttribute("style");
    /* paper_com.style.backgroundColor = "transparent";
    scissors_com.style.backgroundColor = "transparent";
    paper_com.style.border = "transparent";
    scissors_com.style.border = "transparent"; */
  } else if (randomNumber == 1) {
    paper_com.style.border = "3px solid #531345";
    paper_com.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    paper_com.style.borderRadius = "40%";
    rock_com.removeAttribute("style");
    scissors_com.removeAttribute("style");
    /* rock_com.style.backgroundColor = "transparent";
    scissors_com.style.backgroundColor = "transparent";
    rock_com.style.border = "transparent";
    scissors_com.style.border = "transparent"; */
  } else {
    scissors_com.style.border = "3px solid #531345";
    scissors_com.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    scissors_com.style.borderRadius = "40%";
    paper_com.removeAttribute("style");
    rock_com.removeAttribute("style");
    /* paper_com.style.backgroundColor = "transparent";
    rock_com.style.backgroundColor = "transparent";
    paper_com.style.border = "transparent";
    rock_com.style.border = "transparent"; */
  }
  return choices[randomNumber];
}

function win(playerHand, comHand) {
  player_win.style.display = "block";
  draw_text.style.display = "none";
  computer_win.style.display = "none";
  vsText.style.display = "none";
  console.log(`Player : ${playerHand} VS Computer : ${comHand}`);
}
function draw(playerHand, comHand) {
  player_win.style.display = "none";
  draw_text.style.display = "block";
  computer_win.style.display = "none";
  vsText.style.display = "none";
  console.log(`Player : ${playerHand} VS Computer : ${comHand}`);
}
function lose(playerHand, comHand) {
  player_win.style.display = "none";
  vsText.style.display = "none";
  draw_text.style.display = "none";
  computer_win.style.display = "block";
  console.log(`Player : ${playerHand} VS Computer : ${comHand}`);
}

function play(playerHand) {
  const comHand = getComChoice();
  if (
    (playerHand === "rock" && comHand === "scissors") ||
    (playerHand === "paper" && comHand === "rock") ||
    (playerHand === "scissors" && comHand === "paper")
  ) {
    win(playerHand, comHand);
  } else if (
    (playerHand === "rock" && comHand === "paper") ||
    (playerHand === "paper" && comHand === "scissors") ||
    (playerHand === "scissors" && comHand === "rock")
  ) {
    lose(playerHand, comHand);
  } else {
    draw(playerHand, comHand);
  }
}

function main() {
  rock_player.addEventListener("click", function () {
    play("rock");
    rock_player.style.border = "3px solid #531345";
    rock_player.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    rock_player.style.borderRadius = "40%";
    paper_player.removeAttribute("style");
    scissors_player.removeAttribute("style");
  });
  paper_player.addEventListener("click", function () {
    play("paper");
    paper_player.style.border = "3px solid #531345";
    paper_player.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    paper_player.style.borderRadius = "40%";
    rock_player.removeAttribute("style");
    scissors_player.removeAttribute("style");
  });
  scissors_player.addEventListener("click", function () {
    play("scissors");
    scissors_player.style.border = "3px solid #531345";
    scissors_player.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    scissors_player.style.borderRadius = "40%";
    paper_player.removeAttribute("style");
    rock_player.removeAttribute("style");
  });
}

main();

refresh1.addEventListener("click", () => {
  rock_player.removeAttribute("style");
  rock_com.removeAttribute("style");
  paper_player.removeAttribute("style");
  paper_com.removeAttribute("style");
  scissors_player.removeAttribute("style");
  scissors_com.removeAttribute("style");
  player_win.removeAttribute("style");
  computer_win.removeAttribute("style");
  draw_text.removeAttribute("style");
  vsText.style.display = "block";
});
