const gameCanvas = document.querySelector(".canvas");
const undo = document.querySelector(".undo");
const restart = document.querySelector(".restart");
const table = document.querySelector(".table");

gameCanvas.style.height = "750px";
gameCanvas.style.width = "750px";

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
}