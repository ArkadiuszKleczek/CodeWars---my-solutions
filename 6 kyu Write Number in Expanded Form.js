/*
*   6 kyu Write Number in Expanded Form
*   https://www.codewars.com/kata/5842df8ccbd22792a4000245
* */

const expandedForm = num => {
    const numArr = num.toString().split('');
    const result = (numArr[numArr.length-1] == '0') ? [] : [numArr[numArr.length-1]];
    let multi = '0';
    for(let i = numArr.length-2; i > -1; i--){
        if(numArr[i] !== '0'){result.unshift(numArr[i] + multi)}
        multi += '0';
    }
    return result.join(' + ');
}