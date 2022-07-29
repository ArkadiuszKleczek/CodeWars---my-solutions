/*
*   7 kyu Printer Errors
*   https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
* */

const printerError = s => {
    console.log(s);
    const sArr = s.split('');
    let counter = 0;
    for(let i = 0; i < sArr.length; i++) {
        if (sArr[i].charCodeAt() > 109 || sArr[i].charCodeAt() < 97) counter++
    }
    console.log(counter);
    return counter + '/' + sArr.length;
}