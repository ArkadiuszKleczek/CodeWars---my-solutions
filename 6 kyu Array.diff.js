/*
*   6 kyu - Array.diff
*   https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
* */

const arrayDiff = (minuedArray, subtrahendArray) => {    //odjemna i odejmnik
    if (minuedArray.length === 0) {return []};
    if (subtrahendArray.length === 0) {return minuedArray};
    let filteredArray= [];
    minuedArray.forEach(element => {
        if(!subtrahendArray.includes(element)){filteredArray.push(element)}
    })
    return filteredArray;
}
  