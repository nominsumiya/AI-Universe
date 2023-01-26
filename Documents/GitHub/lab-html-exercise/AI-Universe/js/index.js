const myCanvas = document.querySelector('canvas');
const ctx = myCanvas.getContext('2d');

// First Screen //
let firstScreen = document.querySelector("#firstScreen");
let startButton = document.querySelector(".startButton");
// Second Screen //
let secondScreen = document.querySelector("#secondScreen");
// Third Screen //
let thirdScreen = document.querySelector("#thirdScreen");
// Background Img //
const bgImg = new Image();
bgImg.src = "../images/background.png";
const bgImg2 = new Image();
bgImg2.src = "../images/bgsecondScreen.png";
const bgImg4 = new Image();
bgImg4.src = "../images/bgsecondScreen.png";
// Harley Img //
const harleyImg = new Image();
harleyImg.src = "../images/harley.png";
let harleyX = 80;
let harleyY = 420;
let harleyWidth = 140;
let harleyHeight = 170;

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
obstacle1.src = "../images/harley.png";
let obstacle1X = 600;
let obstacle1Y = 480;
let obstacle1Speed = 5;
// Obstacle 2 //
const obstacle2 = new Image();
obstacle2.src = "../images/harley.png";
let obstacle2X = 1000;
let obstacle2Y = 480;
let obstacle2Speed = 5;
// Obstacle 3 //
const obstacle3 = new Image();
obstacle3.src = "../images/harley.png";
let obstacle3X = 1500;
let obstacle3Y = 480;
let obstacle3Speed = 5;
// Animate //
let bg1Y = 0
let bg2y = -myCanvas.height;
let isgameOver = false;
let animationId = 0;



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
        firstScreen.style.display = "none"

        console.log("startGame")
        animate()
    } 

    document.addEventListener("keydown", (e) => {
      let count = 0;
      isJumping = true;
      if (e.key === " " && isJumping) {
        const intervalId = setInterval(() => {
          count += 1;
  
          harleyY -= 10;
          if (count === 25) {
            clearInterval(intervalId);
            isJumping = !isJumping;
            if (isJumping === false) {
              goDown();
            }
          }
        }, 10);
      }
    });
  
    function goDown() {
      let count = 0;
      const intervalId = setInterval(() => {
        count += 1;
  
        harleyY += 10;
        if (count === 25) {
          clearInterval(intervalId);
        }
      }, 10);
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
        ctx.drawImage(obstacle1, obstacle1X, obstacle1Y, 100, 100)
        ctx.drawImage(obstacle2, obstacle2X, obstacle2Y, 100, 100)
        ctx.drawImage(obstacle3, obstacle3X, obstacle3Y, 100, 100)
        bg1Y += 2;
        bg2y += 2;

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
// Score

          let Score = 0;

          let harleyImg = createGroup();
          let obstacle1 = createGroup();
          let obstacle2 = createGroup();
    harleyImg.setCollider("circle", 0, 0,40);

    let PLAY = 1;
    let END = 0;
    let startButton = PLAY;

    function draw() {
        if (startButton === PLAY) {
            score = Math.round(World.framecount/4);
            if("keydown", (e)) {
                harleyImg.velocityX = -4;
                harleyImg.velocityX = 0;
            }
        if("keydown", (e)) {
            harleyImg.velocityX = 4;
            harleyImg.velocityX = 0;
        }
        
        obstacle1();
        obstacle2();
        drawSprites();

        textSize(15);
        text("Score: "+ score, 14,25);

        if(harleyImg.isTouching(harleyImg) || obstacle1.isTouching(harleyImg) || obstacle2.isTouching(harleyImg)) {
            startButton = END;
        }
    }
}
        
    if (isgameOver) {
    cancelAnimationFrame(animationId)
    }else{
       animationId = requestAnimationFrame(animate)
    }
}
    function gameOver() {
        thirdScreen.style.display = "flex"
        thirdScreen.style.display = "none"
console.log("gameOver");
    }

});