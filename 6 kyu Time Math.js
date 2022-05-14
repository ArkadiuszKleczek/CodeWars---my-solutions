/*
*   6 kyu Time Math
*   https://www.codewars.com/kata/5aceae374d9fd1266f0000f0
* */

const timeMath = (time1, op, time2) => {
    console.log(time1, op, time2)
    const time1Arr = time1.split(":");
    let time1Sec = parseInt(time1Arr[0]) * 3600 + parseInt(time1Arr[1]) * 60 + parseInt(time1Arr[2]);
    const time2Arr = time2.split(":");
    let time2Sec = parseInt(time2Arr[0]) * 3600 + parseInt(time2Arr[1]) * 60 + parseInt(time2Arr[2]);
    let result;
    if (op === '+') {
        result = time1Sec + time2Sec;
    } else {
        result = time1Sec - time2Sec;
    }

    let hours = Math.floor(result / 3600);
    hours = hours < 0  ? 24 + hours  : hours;
    if (hours > 24) {hours = hours - 24}
    if (hours === 24) {hours = '0' }
    hours = hours < 10 ? '0' + hours  : hours;
    let minutes = Math.floor(result % 3600 / 60);
    minutes = minutes < 0 ? 60 + minutes : minutes;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = Math.floor(result % 3600 % 60);
    seconds = seconds < 0 ? 60 + seconds : seconds;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    console.log(result, hours, minutes, seconds);
    let x = `${hours}:${minutes}:${seconds}`;
    return x === '24:00:00' ? '00:00:00' : x;
}