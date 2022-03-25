/*
*   6 kyu Consonant value
*   https://www.codewars.com/kata/59c633e7dcc4053512000073
* */

const solve = s => s.replace(/[aeiou]/gi, ' ').split(' ').map(vowelEvaluate).sort((a, b) => b - a)[0];
const vowelCounter = (ele) => ele.charCodeAt() - 96;
const vowelEvaluate = (ele) => ele.split('').map(vowelCounter).reduce((sum, ele) => sum + ele, 0);