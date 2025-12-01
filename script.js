const gameCanvas = document.querySelector(".canvas");
const undo = document.querySelector(".undo");
const restart = document.querySelector(".restart");
const table = document.querySelector(".table");
let currScore = document.querySelector(".currScore");
let highScore = document.querySelector(".highScore");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

gameCanvas.style.height = "760px";
gameCanvas.style.width = "760px";

const cellColor = {
    2: "#f3e5ff",
    4: "#e1bdff",
    8: "#cc8fff",
    16: "#ba66ff",
    32: "#a333ff",
    64: "#8400f0",
    128: "#6500b8",
    256: "#490085",
    512: "#2d0052",
    1024: "#11001f",
    2048: "#000000",
};
const emptyCell = "#e4e2cd";
const cellSize = "190px";

undo.addEventListener("click", function () {
    none;
});

restart.addEventListener("click", function () {
    currScore.textContent = 0;
});

table.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

document.querySelector(".close-modal").addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});