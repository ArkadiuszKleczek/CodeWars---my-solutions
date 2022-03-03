/*
*   6 kyu - Unique In Order
*   https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
* */

const uniqueInOrder = iterable => {
    console.log(iterable);
    let iterableArray = Array.isArray(iterable) ? iterable : iterable.split('');
    return iterableArray.filter((ele, idx) => ele !== iterableArray[idx + 1]);
}