AFRAME.registerComponent("game-play", {
  schema: {
    elementId: {
      type: "string",
      default: "ring1",
    },
  },
  startTimer: function (duration, timerEl) {
    var mins, secs;
    setInterval(() => {
      if (duration >= 0) {
        mins = parseInt(duration / 60);
        secs = parseInt(duration % 60);
        if (mins < 10) {
          mins = "0" + mins;
        }
        if (secs < 10) {
          secs = "0" + secs;
        }
        timerEl.setAttribute("text", {
          value: mins + ":" + secs,
        });
        duration -= 1;
      } else {
        this.gameOver();
      }
    }, 1000);
  },

  init: function () {
    var duration = 300;
    var timerEl = document.querySelector("#timer");
    this.startTimer(duration, timerEl);
  },

  isCollided: function (elementId) {
    elementId = "#" + elementId;
    const element = document.querySelector(elementId);

    element.addEventListener("collide", (e) => {
      if (elementId.includes("#ring")) {
        element.setAttribute("visible",false)
        this.updateScore()
        this.updateTargets()
      } else if (elementId.includes("#bird")) {
        this.gameOver()
      }
    });
  },
  updateTargets: function () {
    var element = document.querySelector("#targets");
    var count = element.getAttribute("text").value;
    var currentTargets = parseInt(count);
    currentTargets -= 1;
    element.setAttribute("text", {
      value: currentTargets,
    });
  },
  updateScore: function () {
    var element = document.querySelector("#score");
    var count = element.getAttribute("text").value;
    var currentScore = parseInt(count);
    currentScore += 50;
    element.setAttribute("text", {
      value: currentScore,
    });
  },
  gameOver: function () {
    var planeEl = document.querySelector("#plane")
    var element = document.querySelector("#game_over_text")
    element.setAttribute("visible",true)
    planeEl.setAttribute("dynamic-body",{
        mass:1
    }
        
    )
  },
  update: function () {
    this.isCollided(this.data.elementId);
  },
});
