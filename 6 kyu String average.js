/*
*   6 kyu String average
*   https://www.codewars.com/kata/5966847f4025872c7d00015b
* */

const numbers = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine'];
const averageString = str => {
    const numArr = str.split(' ').map(ele => numbers.indexOf(ele))
    if (numArr.includes(-1)){
        return "n/a"
    }
    const score = numArr.reduce((acc, item) =>  acc +=item, 0);
    const result =  Math.floor(score / numArr.length);
    return numbers[result];
}