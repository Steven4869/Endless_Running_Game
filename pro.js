const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const rect = {
  x: 250,
  y: 280,
  width: 80,
  height: 80,
  dy: 3,
};

var x = 750;
var z = 1250;
var score = 0;
var myscore = document.getElementById("myscore");

window.requestAnimationFrame(function loop() {
  x -= 3;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 360, 750, 90);
  ctx.fillStyle = "orange";
  ctx.fillRect(x, 360, 100, 90);

  if (x <= -90) {
    x = 850;
    score++;
   myscore.innerHTML = score;
  }

  if (x <= 327 && x >= 155 &&  rect.y === 280) {
    console.log(lose)
  }

  if (score % 4 === 0 && score != 0) {
    console.log("SIMILAR");
    x = 950;
  }
  z -= 3;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 750, 120);
  ctx.fillStyle = "orange";
  ctx.fillRect(z, 0, 120, 120);
  if (z <= -90) {
    z = 1550;
    score++;
   myscore.innerHTML = score;
  }
  if (z <= 327 && z >= 155 && rect.y === 120) {
    if (r == true) {
      window.location.reload();
    }
  }
  var high = document.getElementById("highs");
  var highscore = 0;

  var highscore = localStorage.getItem("highscore");
  high.innerHTML = highscore;
  if (highscore !== null) {
    if (score > highscore) {
      localStorage.setItem("highscore", score);
      high.innerHTML = highscore;
    }
  } else {
    localStorage.setItem("highscore", score);
    high.innerHTML = highscore;
  }

  window.requestAnimationFrame(loop);

  ctx.fillStyle = "blue";
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

  window.addEventListener("click", play);
  function play() {
    if (rect.y === 120) {
      rect.y = 280;
    } else rect.y = 120;
  }

  document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
      if (rect.y === 120) {
        rect.y = 280;
      } else rect.y = 120;
      console.log("Space pressed");
    }
  };
});