const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const date = document.querySelector('.date');
const day= document.querySelector('.day');

// Declaring variables for date and time

let time = setInterval(timeFunction,1000);

function timeFunction() {   
    let dailyHour = new Date();
    hour.innerText = dailyHour.getHours();
    
    let dailyMinute = new Date();
    minute.innerText = dailyHour.getMinutes();

    let dailySecond = new Date();
    second.innerText = dailyHour.getSeconds();
    
    let dailyDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    date.innerText = monthNames[dailyDate.getDate()-1]
    
    let dailyDay = new Date();
    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    day.innerText = weekDays[dailyDay.getDay()];
    console.log(`${dailyHour} ${dailyMinute}${dailySecond}${dailyDate}${dailyDay}`);
};