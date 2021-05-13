let timer;
let sec = 0;
let min = 0;
let hour = 0;

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let timerElement = document.querySelector("#timer");
reset.disabled = true;

start.addEventListener("click", () => {
  timer = setInterval(timerHandler, 1000);
  reset.disabled = true;
});

stop.addEventListener("click", () => {
  timer = clearInterval(timer);
  reset.disabled = false;
});

reset.addEventListener("click", () => {
  sec = 0;
  min = 0;
  hour = 0;
  timerElement.innerHTML = hour + "0:0" + min + ":0" + sec;
});

function timerHandler() {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hour++;
  }
  displayTime();
}

function displayTime() {
  let sec_pretty = sec;
  let min_pretty = min;
  let hour_pretty = hour;
  if (sec < 10) sec_pretty = "0" + sec;
  if (min < 10) min_pretty = "0" + min;
  if (hour < 10) hour_pretty = "0" + hour;
  timerElement.innerHTML = hour_pretty + ":" + min_pretty + ":" + sec_pretty;
}
