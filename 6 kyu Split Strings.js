/*
*   6 kyu - Split Strings
*   https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
* */

const solution = str => {
    if (str === []) {return []}
    str.length % 2 !== 0 ? str += '_' : str;
    const arr = [];
    for (let i = 0; i < str.length; i++){
        if (i % 2 === 0) {
            arr.push(str.slice(i, i+2))
        }
    }
    console.log(arr);
    return arr;
}