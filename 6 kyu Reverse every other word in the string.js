/*
*   6 kyu Reverse every other word in the string
*   https://www.codewars.com/kata/58d76854024c72c3e20000de
* */

function reverse(str){
    const strArr = str.split(' ');
    const result = [];
    for (let i = 0; i < strArr.length; i++){
        if (i % 2 !== 0) {
            result.push(strArr[i].split('').reverse().join(''))
        } else {
            result.push(strArr[i])
        }
    }
    return result.join(' ').trim()
}