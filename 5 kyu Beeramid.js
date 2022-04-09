/*
*   5 kyu Beeramid
*   https://www.codewars.com/kata/51e04f6b544cf3f6550000c1
* */

const beeramid = (bonus, price) => {
    let counter = 0;
    let levels = 0;
    let i = 1;
    if (bonus < 1){return levels = 0}
    while (bonus > counter){
        counter += (i**2) * price;
        levels++;
        i++;
    }
    return bonus >= counter ? levels : levels - 1;
}