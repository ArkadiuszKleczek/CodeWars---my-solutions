/*
*   6 kyu Give me a Diamond
*   https://www.codewars.com/kata/5503013e34137eeeaa001648
* */

const diamond = n => {
    if(n % 2 ===0 || n < 0) {return null}
    let result = '';
    let space = ' ';
    let star = '*';
    let enter = '\n';
    let upperSide = '';
    let lowerSide = '';
    for (let i = 1; i < n; i += 2) {
        let counter = (n-i)/2;
        upperSide = upperSide + space.repeat(counter) + star.repeat(i) + enter;
        lowerSide = lowerSide + enter + star.repeat(i) + space.repeat(counter);
    }
    result = upperSide + star.repeat(n) + enter + lowerSide;
    console.log(result);
    return result.split('').reverse().join('');
}