/*
*   7 kyu- Highest and Lowest
*   https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
* */

function highAndLow(numbers){
    let joinedArray = numbers.split(' ').sort((a, b) =>  a - b);
    console.log(joinedArray);
    return `${joinedArray[joinedArray.length-1]} ${joinedArray[0]}`;
};