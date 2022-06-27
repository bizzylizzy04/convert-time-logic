//Logic to convert time
const inputMin = 10;
const inputSec = 59;

const convertToSecs = (inputMin, inputSec) => inputMin * 60 + inputSec;

const convertFromSecs = (inputSec) => {
    const sec = inputSec % 60;
    const min = Math.floor(inputSec / 60);
    return [min, sec];
};

const test1 = convertFromSecs(inputMin, inputSec);
console.log('test1: ', test1);
const test2 = convertFromSecs(inputSec);
console.log(`test2: [min:sec] ${test2[0]}:${test2[1]}`);

// countdown
let seconds = 0;
let interval;

function pomodoro(mins) {
    seconds = mins * 60 || 0;
    interval = setInterval(function() {
        seconds--;
        if(!seconds) {
            clearInterval(interval);
        }
    }, 1000)
};
