/*
*   5 kyu Human Readable Time
*   https://www.codewars.com/kata/52685f7382004e774f0001f7
* */

const humanReadable = sec => {
    let hours   =  Math.floor(sec / 3600);
    let minutes =  Math.floor(sec % 3600 / 60);
    let seconds =  Math.floor(sec % 3600 % 60);
    let result = `${timeFormat(hours)}:${timeFormat(minutes)}:${timeFormat(seconds)}`
    return result;
}

const timeFormat = s => {
    if (s === 0) {return '00'}
    else if (s < 10)  {return '0' + s}
    else {return s}
}