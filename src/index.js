// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2019-12-25:00:00:00+0900");
  const now = new Date();

  let diff = new Date(xmasDay - now - NINE_HOURS_MILLISECONDS);

  let day = diff.getDate();
  let hour = diff.getHours();
  let minute = diff.getMinutes();
  let second = diff.getSeconds();

  let result = `${day < 10 ? `0${day}` : day}d ${
    hour < 10 ? `0${hour}` : hour
  }h ${minute < 10 ? `0${minute}` : minute}m ${
    second < 10 ? `0${second}` : second
  }s`;

  let jsClock = document.querySelector(".js-clock");

  jsClock.innerText = result;
}

function init() {
  setInterval(getTime, 1000);
}
init();
