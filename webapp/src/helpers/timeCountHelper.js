export function controlTime() {
  let hours = "00";
  let minuts = "00";
  let seconds = "00";
  let outPutHours = document.getElementById("hours");
  let outPutMinuts = document.getElementById("min");
  let outPutSeconds = document.getElementById("sec");
  let buttonStart = document.getElementById("btn-start");
  let buttonPause = document.getElementById("btn-pause");
  let Interval;

  buttonStart.addEventListener("click", () => {
    hours = "00";
    minuts = "00";
    seconds = "00";
    outPutHours.innerHTML = hours;
    outPutMinuts.innerHTML = minuts;
    outPutSeconds.innerHTML = seconds;
    clearInterval(Interval);
    Interval = setInterval(startTime, 1000);
  });

  buttonPause.addEventListener("click", () => {
    clearInterval(Interval);
  });

  function startTime() {
    seconds++;

    if (seconds <= 9) {
      outPutSeconds.innerHTML = "0" + seconds;
    }
    if (seconds > 9) {
      outPutSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
      minuts++;
      outPutMinuts.innerHTML = "0" + minuts;
      seconds = 0;
      outPutSeconds.innerHTML = "0" + seconds;
    }
    if (minuts > 9 && minuts <= 59) {
      outPutMinuts.innerHTML = minuts;
    }
    if (minuts > 59) {
      hours++;
      outPutHours.innerHTML = "0" + hours;
      minuts = 0;
      outPutMinuts.innerHTML = "0" + minuts;
    }
    if (hours > 9) {
      outPutHours.innerHTML = hours;
    }
  }
}

export function saveTime() {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDay();
  let outPutHours = document.getElementById("hours");
  let outPutMinuts = document.getElementById("min");
  let outPutSeconds = document.getElementById("sec");
  let totalTime =
    outPutHours.innerHTML +
    ":" +
    outPutMinuts.innerHTML +
    ":" +
    outPutSeconds.innerHTML;

  let shift = {
    date: date,
    shiftTime: totalTime,
  };

  console.log(shift);
}
