/*
*   6 kyu - Find The Parity Outlier
*   https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
* */

const findOutlier = integers => {
    let even = [];
    let odd = [];
    integers.map(element => {
        element % 2 === 0 || element === 0 ?  even.push(element) : odd.push(element)
    });
    return even.length < odd.length ? even[0] : odd[0];
};