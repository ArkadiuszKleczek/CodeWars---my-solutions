/*
*   6 kyu Bit Counting
*   https://www.codewars.com/kata/526571aae218b8ee490006f4
* */

const countBits = n => {
    let counter = 0;
    while(n > 0){
        if(n % 2 === 1) {
            counter++;
        }
        n = Math.floor(n / 2);
    }
    return counter;
};