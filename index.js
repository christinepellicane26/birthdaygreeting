//CONSTANTS (you can adjust these to change how your cherry moves)

//how fast you want the framerate to be. 30fps is probably fine
const frameRate = 30;
//change this variable to determine how long you want the cherry to take to get to its new position
const lengthOfTime = 1;
//change this variable to determine how many pixels you want the cherry to move by in each direction (x and y). You can use negative values as well.
const positionMovement = { x: 400, y: 50 };

// 'grab' the cherry with get element by id, store it in a variable (myCherry)
let myCherry = document.getElementById("cherry");

// this basically figures out what relative posiiton the cherry element is at and stores it in the startpositin variable as an object with x coordinates and y coordinates
let startPosition = {
  x: parseInt(getComputedStyle(myCherry).left),
  y: parseInt(getComputedStyle(myCherry).top),
};

let moveCherryButton = document.getElementById("move-cherry-button");
moveCherryButton.addEventListener("click", () => {
  // This is where the animation happens.  the moveCherry function is called on every frame
  let cherryInterval = setInterval(moveCherry, 1000 / frameRate);

  //initialize frame to zero
  let frame = 0;

  //total number of frames
  let totalFrames = frameRate * lengthOfTime;

  function moveCherry() {
    //clear the interval when you get to the final frame
    if (frame == totalFrames) {
      clearInterval(cherryInterval);
    } else {
      //move onto next frame
      frame++;

      // bit of math here. basically move the cherry a certain amount, depending what frame you're on
      myCherry.style.left = `${
        startPosition.x + (frame / totalFrames) * positionMovement.x
      }px`;
      myCherry.style.top = `${
        startPosition.y + (frame / totalFrames) * positionMovement.y
      }px`;
    }
  }
});

// console.clear()
// console.log("%s is %d years old", "John", 56);
// console.log("%s is %d years old", "William", 50);
// console.log("%s is %d years old", "Liam", 9);

// for (i=0; i<5; i++);{
//   debugger
//   console.log(i);
// }

/*<script>
{/* var x = document.getElementById("myDIV");

// Start the animation with JavaScript
function myFunction() {
  x.style.WebkitAnimation = "mymove 4s 2"; // Code for Chrome, Safari and Opera
  x.style.animation = "mymove 4s 2";     // Standard syntax
}

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("webkitAnimationIteration", myRepeatFunction);
x.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
x.addEventListener("animationstart", myStartFunction);
x.addEventListener("animationiteration", myRepeatFunction);
x.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.innerHTML = "animationstart event occured - The animation has started";
  this.style.backgroundColor = "pink";
}

function myRepeatFunction() {
  this.innerHTML = "animationiteration event occured - The animation was played again";
  this.style.backgroundColor = "lightblue";
}

function myEndFunction() {
  this.innerHTML = "animationend event occured - The animation has completed";
  this.style.backgroundColor = "lightgray";
}
</script> */

// </body>
// </html>
