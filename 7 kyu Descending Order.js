/*
*   7 kyu - Descending Order
*   https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
* */

function descendingOrder(n){
    const numsArr = Array.from(String(n), Number);
    let sortedArray =  numsArr.sort((a,b) => b-a);
    console.log(sortedArray);
    let arrayToString = sortedArray.join('');
    return arrayToString*1;
}