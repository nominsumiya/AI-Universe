// Game board
const gameBoard = document.querySelector('#game-board')
// First Screen //
let firstScreen = document.querySelector("#firstScreen");
let startButton = document.querySelector(".startButton");
// Second Screen //
let secondScreen = document.querySelector("#secondScreen");
const myCanvas = document.querySelector('canvas');
const ctx = myCanvas.getContext('2d');
let score = 0;
// Third Screen //
let thirdScreen = document.querySelector("#thirdScreen");
const bgThirdScreen = document.querySelector('.background-img');
let restartGame = document.querySelector(".restartGame");
let characterName = document.querySelector("#characterName");
let textBox = document.querySelector(".textBox");
let gameoverText = document.querySelector(".gameoverText");
// Background Img //
const bgImg = new Image();
bgImg.src = "../images/background.png";
const bgImg2 = new Image();
bgImg2.src = "../images/background3.png";
const bgImg4 = new Image();
bgImg4.src = "../images/bgsecondScreen.png";
// Background Img / Game Over //
const bgImg5 = new Image();
bgImg5.src = "../images/background.png";
// Harley Img //
const harleyImg = new Image();
harleyImg.src = "../images/harley.png";
let harleyX = 50;
let harleyY = 440;
let harleyWidth = 130;
let harleyHeight = 150;
// Score //
let scoreElement = document.querySelector("#scr");
// Sound //
let soundtrack = new Audio("/images/soundtrack.mp3");
soundtrack.volume = 0.2;
let harleyvoice = new Audio("./images/harley.mp3")
soundtrack.volume = 0.2;

/*
let harleyCharacter = document.getElementById("harley");
let jumping = 0;
*/
/*
let harleySpeed = 20;
let isMovingUp = false
let isMovingDown = false
*/

// Obstacle 1 //
const obstacle1 = new Image();
obstacle1.src = "../images/joker.png";
let obstacle1X = 600;
let obstacle1Y = 480;
let obstacle1Speed = 2;
// Obstacle 2 //
const obstacle2 = new Image();
obstacle2.src = "../images/joker.png";
let obstacle2X = 1000;
let obstacle2Y = 5;
let obstacle2Speed = 2;
// Obstacle 3 //
const obstacle3 = new Image();
obstacle3.src = "../images/joker.png";
let obstacle3X = 1400;
let obstacle3Y = 480;
let obstacle3Speed = 2;
// Animate //
let bg1Y = 0
let bg2y = -myCanvas.height;
let isgameOver = false;
let animationId = 0;


// First Screen //
firstScreen.style.display = "flex"
myCanvas.style.display = "none"
secondScreen.style.display = "block"

// Second Screen //
myCanvas.style.border = "2px solid black";
myCanvas.style.display = "flex"
secondScreen.style.display = "none"

window.addEventListener("load", () => {
    myCanvas.style.display = "none"
    startButton.addEventListener("click", () => {
        startGame()
    });

// Start Game    
    function startGame() {
        myCanvas.style.display = "flex"
        gameBoard.style.display = 'block'
        firstScreen.style.display = "none"
        soundtrack.play();

        console.log("startGame")
        animate()
    } 

// Jump
    document.addEventListener("keydown", (e) => {
      let count = 0;
      isJumping = true;
      if (e.key === " " && isJumping) {
        const intervalId = setInterval(() => {
          count += 1;
  
          harleyY -= 15;
          if (count === 25) {
            clearInterval(intervalId);
            isJumping = !isJumping;
            if (isJumping === false) {
              goDown();
            }
          }
        }, 20);
      }
    });
  
    function goDown() {
      let count = 0;
      const intervalId = setInterval(() => {
        count += 1;
  
        harleyY += 15;
        if (count === 25) {
          clearInterval(intervalId);
        }
      }, 20);
    }

    /*
    document.addEventListener('keydown', event => {
        if (event.key === 'ArrowUp') {
          isMovingUp = true
        }
        if (event.key === 'ArrowDown') {
          isMovingDown = true
        } 
        console.log(event)
      })
      document.addEventListener('keyup', () => {
        isMovingUp = false
        isMovingDown = false
    }) */



// Animate
    function animate(){
        ctx.drawImage(bgImg2, bg1Y, 0, myCanvas.width, myCanvas.height)
        ctx.drawImage(bgImg4, bg2y, 0, myCanvas.width, myCanvas.height)
        ctx.drawImage(harleyImg, harleyX, harleyY, harleyWidth, harleyHeight);
        ctx.drawImage(obstacle1, obstacle1X, obstacle1Y, 100, 120);
        ctx.drawImage(obstacle2, obstacle2X, obstacle2Y, 100, 120);
        ctx.drawImage(obstacle3, obstacle3X, obstacle3Y, 100, 120);
        bg1Y += 0.8;
        bg2y += 0.8;

scoreElement.innerText = score

    if(obstacle1X <= harleyX && obstacle1X > harleyX -2) {
        score++
    }
    if(obstacle2X <= harleyX && obstacle2X > harleyX -2) {
        score++
    }
    if(obstacle3X <= harleyX && obstacle3X > harleyX -2) {
        score++
    }


        obstacle1X -= 2
        if(obstacle1X < -200){
            obstacle1X = myCanvas.width + 200;
        }

        obstacle2X -= 2
        if(obstacle2X < -200){
            obstacle2X = myCanvas.width + 200;
        }

        obstacle3X -= 2
        if(obstacle3X < -200){
            obstacle3X = myCanvas.width + 200;
        }

        if(bg1Y > myCanvas.height){
            bg1Y = -myCanvas.height
          }
        
          if(bg2y > myCanvas.height){
            bg2y = -myCanvas.height
          }
       
       
          /*
          if (isMovingUp && harleyY > 0) {
            harleyY -= harleySpeed
          }
          if (isMovingDown && harleyY < myCanvas.height - harleyHeight) {
            harleyY += harleySpeed
          }
          */


// Collision

            if (
                harleyX < obstacle1X + 90 &&
                harleyX + 90 > obstacle1X &&
                harleyY < obstacle1Y + 90 &&
                harleyY + 150 > obstacle1Y
            ) {
                isgameOver = true;
            }
            if (
                harleyX < obstacle2X + 90 &&
                harleyX + 90 > obstacle2X &&
                harleyY < obstacle2Y + 90 &&
                harleyY + 150 > obstacle2Y
            ) {
                isgameOver = true;
            }
            if (
                harleyX < obstacle3X + 90 &&
                harleyX + 90 > obstacle3X &&
                harleyY < obstacle3Y + 90 &&
                harleyY + 150 > obstacle3Y
            ) {
                isgameOver = true;
            }
        
        
        
    if (isgameOver) {
    cancelAnimationFrame(animationId)
    gameOver()
    }else{
       animationId = requestAnimationFrame(animate)
    }
}

    function gameOver() {
        thirdScreen.style.display = "block"
        myCanvas.style.display = "none"
        console.log("gameOver");
        gameoverText.style.display = "block"
        bgThirdScreen.style.display = "block"
        soundtrack.pause();
        harleyvoice.play();
    }

    document.querySelector('.restartGame').addEventListener('click', function(){
        window.location.reload();
        return false;
      });

    function restartGame() {
        location.reload();
        let textBox = document.querySelector(".textBox");
        let characterName = document.querySelector("#charactername");

       characterName.innerHTML = ('.restartGame');
      }
      console.log(restartGame);
    
});