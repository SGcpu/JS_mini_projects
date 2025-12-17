
const result = document.querySelector('.result');

const msPerDay = 1000 * 60 * 60 * 24;
const msPerHour = 1000 * 60 * 60;
const msPerMinute = 1000 * 60;
const msPerSecond = 1000;

setInterval(()=>{
    
const currentTime = Date.now();

const OlympicTime = new Date(2028, 6, 14).getTime(); 

let timer = OlympicTime - currentTime;
const day = Math.floor(timer / msPerDay);
timer %= msPerDay;

const hour = Math.floor(timer / msPerHour);
timer %= msPerHour;

const minute = Math.floor(timer / msPerMinute);
timer %= msPerMinute;

const second = Math.floor(timer / msPerSecond);


result.textContent = `${day} Days, ${hour} Hours, ${minute} Minutes, ${second} Seconds`;

}, 1000)