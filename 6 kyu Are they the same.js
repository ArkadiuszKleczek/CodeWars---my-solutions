/*
*   6 kyu Are they the same
*   https://www.codewars.com/kata/550498447451fbbd7600041c
* */

const comp = (array1, array2) => {
    if ( array1 === null || array2 === null) {
        return false;
    }
    const array1Sorted = array1.sort((a, b) => a - b);
    const array2Sorted = array2.sort((a, b) => a - b);
    console.log(array1Sorted, array2Sorted);
    return array1Sorted.every((ele, idx) => ele * ele === array2[idx]);
}