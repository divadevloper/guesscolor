const colorBox = document.querySelector(".color-box");
const colorOptions = document.querySelector(".color-options");
const gameStatus = document.querySelector(".game-status");
const scoreDisplay = document.querySelector(".score");
const newGameBtn = document.querySelector(".new-game-btn");

let colors = [];
let targetColor = "";
let score = 0;

function generateColors() {
  colors = [];
  for (let i = 0; i < 6; i++) {
    const randomColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(
      0,
      255
    )})`;
    colors.push(randomColor);
  }
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  // colorBox.style.backgroundColor = targetColor;
  renderColorOptions();
}

function renderColorOptions() {
  colorOptions.innerHTML = "";
  colors.forEach((color) => {
    const btn = document.createElement("button");
    btn.classList.add("color-btn");
    btn.style.backgroundColor = color;
    btn.setAttribute("data-testid", "colorOption");
    btn.addEventListener("click", () => checkAnswer(color));
    colorOptions.appendChild(btn);
  });
}

function checkAnswer(selectedColor) {
  if (selectedColor === targetColor) {
    gameStatus.textContent = "Correct! 🎉";
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    colorBox.style.backgroundColor = targetColor;
    setTimeout(() => {
      colorBox.style.backgroundColor = "#fff";
      generateColors();
    }, 2000);
  } else {
    gameStatus.textContent = " You guess the Wrong correct color... ❌";
    colorBox.style.backgroundColor = targetColor;

    setTimeout(() => {
      gameStatus.textContent = "Try again!";
      colorBox.style.backgroundColor = "#fff";
      generateColors();
    }, 2000);
  }
}

function newGame() {
  score = 0;
  scoreDisplay.textContent = "Score: 0";
  gameStatus.textContent = "";
  generateColors();
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

newGameBtn.addEventListener("click", newGame);
generateColors();
