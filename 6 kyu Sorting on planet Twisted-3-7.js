/*
*   6 kyu Sorting on planet Twisted-3-7
*   https://www.codewars.com/kata/58068479c27998b11900056e/train/javascript
* */

const convert = numArr => numArr.toString().replace(
    /3/g, 't').replace(/7/g, 's').replace(
    /[t]/g, 7).replace(/[s]/g, 3);
const sortTwisted37 = array => array.slice().sort((a, b)=> convert(a) - convert(b));