/*
*   6 kyu - Find the unique number
*   https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
* */

const findUniq = givenArray => {
    const sortedArray = givenArray.sort();
    return sortedArray[0] === sortedArray[1] ? sortedArray[sortedArray.length-1] : sortedArray[0];
}