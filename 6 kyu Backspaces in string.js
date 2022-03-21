/*
*   6 kyu Backspaces in string
*   https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript
* */

function cleanString(s) {
    const resultArr = [];
    const strArr = s.split('');

    for(let i = 0; i < strArr.length; i++){
        if (strArr[i] !=='#') {
            resultArr.push(strArr[i])
        }
        else {
            resultArr.pop()
        }
    }
    console.log(resultArr);
    return resultArr.join('');
}