let myCanvas = document.querySelector("canvas");
let startButton = document.querySelector("#startButton");
let firstScreen = document.querySelector("#firstScreen");

myCanvas.style.border = "2px solid black";

window.addEventListener("load", () => {
    myCanvas.style.display = "none"
    startButton.addEventListener("click", () => {
        startGame()
    })
    function startGame() {
        myCanvas.style.display = "flex"
        firstScreen.style.display = "none"
console.log("startGame");
    }

})