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
let harleyRadius
*/
jumpPressed = false;
jumpInProgress = false;
falling = false;
JUMP_SPEED = 0.6;
GRAVITY = 0.4;

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

    /*
setInterval(function(){
    let harleyTop =
    parseInt(window.getComputedStyle("harley").getPropertyValue("top"));
    if(jumping==0){
    harley.style.top = (harleyTop+3)+"px";
    }
    },10);

    function jump() {
        jumping = 1;
        let jumpCount = 0;
        let jumpInterval = setInterval(function(){
       let harleyTop =
    parseInt(window.getComputedStyle(harley).getPropertyValue("top"));
    if((harley>6)&&(counter<15)){
    harley.style.top = (harleyTop-5)+"px";
    if(jumpCount>20) {
        clearInterval(jumpInterval);
        jumping=0;
        jumpCount=0;
    }
   }
        jumpCount++;
    },10);
}
window.addEventListener("click", jump());
*/
window.removeEventListener('keydown', this.keydown)
window.removeEventListener('keyup', this.keyup)
window.addEventListener('keydown', this.keydown)
window.addEventListener('keyup', this.keyup)

});

keydown = (event)=>{
if(event.code === "Space") {
    this.jumpPressed = true;
  }
};
keyup = (event)=>{
    if(event.code === "Space") {
        this.jumpPressed = false;
    }
};
update(gameSpeed, frameTimeDelta) {
    this.run(gameSpeed, frameTimeDelta);
    this.run(frameTimeDelta);
}

jump(frameTimeDelta) {
    if (this.jumpPressed) {
        this.jumpInProgress = true;
    }

if(this.jumpInProgress && !this.falling){
    if(this.y > this.myCanvas.height - this.minJumpHeight ||
        (this.y > this.myCanvas.height - this.maxJumpHeight && this.jumpPressed)){
            this.y -= this.JUMP_SPEED * frameTimeDelta * this.scaleRatio;
        }else{
            this.falling = true;
        }
    }else{
        if(this,y < this.yStandingPosition){
            this.y += this.GRAVITY * frameTimeDelta * this.scaleRatio;
            if(this.y + this.height > this.myCanvas.height){
                this.y = this.yStandingPosition;
            }else{
                this.falling = false;
                this.jumpInProgress = false;
            }
        }
    }
}

    /*document.addEventListener('keydown', event => {
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
        
          if (isMovingUp && harleyY > 0) {
            harleyY -= harleySpeed
          }
          if (isMovingDown && harleyY < myCanvas.height - harleyHeight) {
            harleyY += harleySpeed
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

