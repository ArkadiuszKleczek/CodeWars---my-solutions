/*
*   7 kyu - Square Every Digit
*   https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
* */

function squareDigits(num){
    let numToArray = (num + '').split('');
    let sqrtArray = numToArray.map(val => {return val * val});
    console.log(sqrtArray);
    return (sqrtArray.join('') * 1 );
}