/*
*   5 kyu ISBN-10 Validation
*   https://www.codewars.com/kata/51fc12de24a9d8cb0e000001
* */

const validISBN10 = isbn => {
    if (isbn.length !== 10) {
        return false
    }
    const isbnArr = isbn.split('').map((ele, idx) => ele*(idx+1));
    if (isbn[9] =='X') {
        isbnArr[9] = 100
    }
    const result = isbnArr.reduce((a, b) => a + b, 0) % 11;
    return result === 0;
}