/*
*   6 kyu Corner circle
*   https://www.codewars.com/kata/5898761a9c700939ee000011
* */

const cornerCircle = r => {
    let diag1 = Math.sqrt(2 * r**2);
    let diag2 = diag1 - r;
    let ratio = r / diag2;
    return Number((diag2 / ratio).toFixed(2));
}