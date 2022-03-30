/*
*   7 kyu - Exes and Ohs
*   https://www.codewars.com/kata/55908aad6620c066bc00002a
* */

const XO = str => {
    let counterX = 0;
    let counterO = 0;
    const strArr = str.toUpperCase().split('');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === 'X') {counterX++}
        if (strArr[i] === 'O') {counterO++}
    }
    return counterX === counterO;
}