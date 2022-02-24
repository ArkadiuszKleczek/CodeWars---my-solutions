/*
*   6 kyu - Persistent Bugger.
*   https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
* */

const persistence = num => {
    if (num < 10) { return 0 };
    let amountOfMultiply = 0;
    let numToString = num.toString();

    while (numToString.length > 1) {
        amountOfMultiply++;
        numToString = numToString.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    console.log(typeof numToString);
    return amountOfMultiply;
}