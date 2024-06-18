const startBtn = document.querySelector(".start");
const speedBtn = document.querySelector(".speed");
const stopBtn = document.querySelector(".stop");
const midPart = document.querySelector(".back");
const msgDisplay = document.querySelector(".msg");
const warnDisplay = document.querySelector(".warn");
const speedMsg = document.querySelector(".speedmsg");
var toggle = 0;

var count = 0;
speedBtn.onclick = () => {
  count++;
};

startBtn.addEventListener("click", () => {
  function sound1() {
    var audio1 = new Audio("assets/sound1.wav");
    audio1.loop = true;
    audio1.play();
  }
  sound1();
  midPart.style.animation = "size 6s infinite ease-in-out";
  startBtn.style.display = "none";
  msgDisplay.style.display = "none";
  toggle = 1;
});

speedBtn.addEventListener("click", () => {
  function sound2() {
    var audio1 = new Audio("assets/sound2.wav");
    audio1.loop = true;
    audio1.play();
  }
  sound2();
  if (toggle == 1) {
    if (count == 1) {
      midPart.style.animation = "size 3s infinite ease-in-out";
    }
    if (count == 2) {
      midPart.style.animation = "size 2s infinite ease-in-out";
    }
    if (count == 3) {
      midPart.style.animation = "size 1s infinite ease-in-out";
    }
    if (count == 4) {
      midPart.style.animation = "size 0.5s infinite ease-in-out";
    }
    if (count == 5) {
      midPart.style.animation = "size 0.2s infinite ease-in-out";
    }
    if (count == 6) {
      midPart.style.animation = "size 0.1s infinite ease-in-out";
    }
    if (count >= 7) {
      speedMsg.innerHTML =
        "Abe Randi Saale Gand hai ki gufa! Ruk ja madharchod kitan maraega!";
    }
  } else {
    msgDisplay.style.display = "inherit";
  }
  warnDisplay.style.display = "none";
});

stopBtn.addEventListener("click", () => {
  if (toggle == 1) {
    warnDisplay.style.display = "inherit";
  } else {
    msgDisplay.style.display = "inherit";
  }
});
