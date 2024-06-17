const startBtn = document.querySelector(".start");
const speedBtn = document.querySelector(".speed");
const stopBtn = document.querySelector(".stop");
const midPart = document.querySelector(".back");
const msgDisplay = document.querySelector(".msg");
const warnDisplay = document.querySelector(".warn");
var toggle = 0;

startBtn.addEventListener("click", () => {
  midPart.style.animation = "size 6s infinite ease-in-out";
  startBtn.style.display = "none";
  msgDisplay.style.display = "none";
  toggle = 1;
});

speedBtn.addEventListener("click", () => {
  if (toggle == 1) {
    midPart.style.animation = "size 3s infinite ease-in-out";
    setTimeout(() => {
      midPart.style.animation = "size .5s infinite ease-in-out";
    }, 25000);
    setTimeout(() => {
      midPart.style.animation = "size 2s infinite ease-in-out";
    }, 15000);
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
