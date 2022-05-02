/*
*   6 kyu Feynman's square question
*   https://www.codewars.com/kata/551186edce486caa61000f5c/solutions/javascript
* */

const countSquares = n => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i**2;
    }
    return result;
}