/*
*   6 kyu Odd-heavy Array
*   https://www.codewars.com/kata/59c7e477dcc40500f50005c7
* */

const isOddHeavy = n => {
    const odd = [];
    const even = [];
    n.map(ele => ele % 2 === 0 ? even.push(ele) : odd.push(ele));
    let oddMin = Math.min(...odd);
    let evenMax = Math.max(...even);
    let oddArr  = odd.reduce((a, b) => a + b, 0);
    let evenArr = even.reduce((a, b) => a + b, 0);
    console.log(n + '||', oddArr, evenArr+ '||', oddMin, evenMax);
    return oddMin > evenMax && oddArr > evenArr;
}