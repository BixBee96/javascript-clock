const bodyWindow = document.querySelector("body");
const containerWindow = document.querySelector(".container");
const watchTimeWindow = document.querySelector(".watch-time");
const watchDateWindow = document.querySelector(".watch-date");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const month = document.querySelector(".month");
const date = document.querySelector(".date");
const day = document.querySelector(".day");

// Declaring variables for date and time

const time = setInterval(timeFunction, 1000);

function timeFunction() {
  let dailyHour = new Date();
  hour.innerText = dailyHour.getHours();
  colorTime();
  let dailyMinute = new Date();
  minute.innerText = dailyHour.getMinutes();

  let dailySecond = new Date();
  second.innerText = dailyHour.getSeconds();

  let dailyDate = new Date();
  date.innerText = dailyHour.getDate();

  let dailyMonth = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  month.innerText = monthNames[dailyMonth.getMonth()];

  let dailyDay = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day.innerText = weekDays[dailyDay.getDay()];
}
function colorTime(dailyHour) {
  if (dailyHour == 5) {
    bodyWindow.style.backgroundColor = `#fed8b1`;
    containerWindow.style.backgroundColor = `#fed8b1`;
  } else if ((dailyHour = 7)) {
    bodyWindow.style.backgroundColor = `#add8e6`;
    containerWindow.style.backgroundColor = `#add8e6`;
  } else if (dailyHour == 11) {
    bodyWindow.style.backgroundColor = `#87ceeb`;
    containerWindow.style.backgroundColor = `#87ceeb`;
  } else if (dailyHour == 16) {
    bodyWindow.style.backgroundColor = `#ffae42`;
    containerWindow.style.backgroundColor = `#ffae42`;
  } else if (dailyHour == 20) {
    bodyWindow.style.backgroundColor = `#d3d3d3`;
    containerWindow.style.backgroundColor = `#d3d3d3`;
  } else {
    bodyWindow.style.backgroundColor = `#808080`;
    containerWindow.style.backgroundColor = `#808080`;
  }
}
