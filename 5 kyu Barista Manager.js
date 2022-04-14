/*
*   5 kyu Barista Manager
*   https://www.codewars.com/kata/624f3171c0da4c000f4b801d
* */

const barista = (coffees, c) => {
    coffees = coffees.filter(c => c !== 0).sort((a, b) => a - b);
    const result = coffees.slice(0, c);
    for (let i = c; i < coffees.length; i++){
        let time = 2 + result[i-c] + coffees[i];
        result.push(time);
    }
    return result.reduce((a, b) => a + b, 0);
}