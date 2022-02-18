/*
*   6 kyu - Sum of Digits / Digital Root
*   https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
* */

function digital_root(n) {
    let nToArrayOfNumbers = (n + '').split('').map(Number);
    let reducedNumber = nToArrayOfNumbers.reduce((sum, n) => sum += n);
    console.log(reducedNumber);

    while (reducedNumber > 9) {
        let reducedNumberToArray = (reducedNumber + '').split('').map(Number);
        reducedNumber = reducedNumberToArray.reduce((sum, n) => sum += n);

    }
    return reducedNumber;
}