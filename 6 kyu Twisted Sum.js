/*
*   6 kyu Twisted Sum
*   https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f
* */

const twistedSum = n => {
    let sum = '';
    for (let i = 1; i <= n; i++){
        sum += i;
    }

    return sum.split('').map(Number).reduce((a, b) => a + b, 0);
}