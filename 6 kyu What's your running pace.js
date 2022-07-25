/*
*   6 kyu What's your running pace?
*   https://www.codewars.com/kata/578b8c0e84ac69a4d20004c8/train/javascript
* */

const runningPace = (distance, time) => {
    let timeArray = time.split(':');
    console.log(timeArray);
    let minutes = timeArray[0] * 60;
    let seconds = Number(timeArray[1]);
    let totalTime = minutes + seconds;
    let pace = totalTime / distance;
    let resultMin= String(Math.floor(pace / 60));
    let resultSec = String(Math.floor(pace % 60));
    console.log(resultMin, resultSec)
    if (resultSec < 10) {
        resultSec = '0' + resultSec;
    }
    return resultMin + ':' + resultSec;
}