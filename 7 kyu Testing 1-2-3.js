/*
*   7 kyu - Testing 1-2-3
*   https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
* */

const number = array =>{
    return array.map((element, index) => (index+1) + ': ' + element);
}