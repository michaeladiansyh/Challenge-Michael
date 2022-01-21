console.log(document.querySelector("#title-games").textContent);

const rock_player = document.getElementById("rock-player");
const paper_player = document.getElementById("kertas-player");
const scissors_player = document.getElementById("scissors-player");
const refresh = document.getElementById("refresh");
const modal = document.querySelector(".modal");
const result = document.getElementById("result");

//Getting randomNumber for assign to choice com
function getComChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.trunc(Math.random() * 3);
  return choices[randomNumber];
}

//result function Adding element to Modal and display on console log the choices
function win(playerHand, comHand) {
  result.innerHTML = `<h1 class="text-win">You win!</h1> <p>Computer choose <strong>${comHand}</strong></p>`;
  modal.style.display = "block";
  console.log(`Player : ${playerHand} VS Computer : ${comHand}`);
}

function lose(playerHand, comHand) {
  result.innerHTML = `<h1 class="text-win">You lose!</h1> <p>Computer choose <strong>${comHand}</strong></p>`;
  modal.style.display = "block";
  console.log(`Player : ${playerHand} VS Computer : ${comHand}`);
}

function draw(playerHand, comHand) {
  result.innerHTML = `<h1 class="text-win">It's a Draw!</h1> <p>Computer choose <strong>${comHand}</strong></p>`;
  modal.style.display = "block";
  console.log(`Player : ${playerHand} VS Computer : ${comHand}`);
}

//Play function for the games condition
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

//main function so when player click on elemen that already define will trigger play function
function main() {
  rock_player.addEventListener("click", function () {
    play("rock");
  });
  paper_player.addEventListener("click", function () {
    play("paper");
  });
  scissors_player.addEventListener("click", function () {
    play("scissors");
  });
}

//function for clearing modal, made the display become none or become hidden again
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

function refreshGame() {}

window.addEventListener("click", clearModal);

main();
