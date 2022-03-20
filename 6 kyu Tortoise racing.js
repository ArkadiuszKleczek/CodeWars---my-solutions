/*
*   6 kyu Tortoise racing
*   https://www.codewars.com/kata/55e2adece53b4cdcb900006c
* */

const race = (v1, v2, g) => {
    console.log(v1, v2, g)
    if (v1 > v2 && g > 0) {return null}
    const speedInSeconds = v2/3600 - v1/3600;
    const timeDifference = Math.floor(g / speedInSeconds + 0.001)
    //+ 0.001 to correct for a strange floating-point bias towards 0 when rounding
    const h = Math.floor(timeDifference / 3600);
    const m = Math.floor(timeDifference % 3600 / 60);
    const s = Math.floor(timeDifference % 3600 % 60);
    return [h, m, s]
}