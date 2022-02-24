/*
*   6 kyu - Counting Duplicates
*   https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
* */

const duplicateCount = text => {
    const textToArray = text.toLowerCase().split('');
    const toFindDuplicates = arr => arr.filter((item, index) => textToArray.indexOf(item) !== index);
    const allDuplicatedElements = toFindDuplicates(textToArray);
    console.log(allDuplicatedElements);
    const uniqueDuplicateElements =[...new Set(allDuplicatedElements)];
    return uniqueDuplicateElements.length;
}