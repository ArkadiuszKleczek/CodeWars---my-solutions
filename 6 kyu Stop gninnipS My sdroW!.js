/*
*   6 kyu - Stop gninnipS My sdroW!
*   https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
* */

const spinWords = string => {

    const stringToArray = string.split(' ');
    console.log(stringToArray);
    const returnedArray = stringToArray.map(ele =>{
        if (ele.length > 4) {
            return ele.split('').reverse().join('');
        }
        else {return ele};
    })
    console.log(returnedArray);
    return returnedArray.join(' ');
}