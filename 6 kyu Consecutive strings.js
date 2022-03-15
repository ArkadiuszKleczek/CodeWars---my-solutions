/*
*   6 kyu - Consecutive strings
*   https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
* */

const longestConsec = (strarr, k) => {
    if (strarr.length == 0 || k > strarr.length || k <= 0)  {return ''};
    //conditions were the catch of this task
    let topConcatenatedLength = 0;
    let longestConcatenatedWord = '';
    for (let i = 0; i < strarr.length; i++){
        let currentConcatenatedLength = 0;
        let currentConcatenatedWord = '';
        currentConcatenatedWord = strarr.slice(i, i+k).join("");
        currentConcatenatedLength = currentConcatenatedWord.length;
        if(topConcatenatedLength < currentConcatenatedLength ) {
            topConcatenatedLength = currentConcatenatedLength;
            longestConcatenatedWord = currentConcatenatedWord ;
        }
    }
    return longestConcatenatedWord;
}