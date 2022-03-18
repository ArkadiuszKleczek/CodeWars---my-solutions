/*
*   6 kyu - Equal Sides Of An Array
*   https://www.codewars.com/kata/5679aa472b8f57fb8c000047/solutions/javascript
* */

const findEvenIndex = arr => {
    if (arr.length === 0) {
        return -1
    }
    let leftSideSum = 0;
    let rightSideSum = 0;
    let result;

    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            leftSideSum = i;
            rightSideSum = arr.slice(1).reduce((a, b) => a + b, 0);
            if (leftSideSum === rightSideSum) {
                return result = i;
            }
        } else {
            leftSideSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
            rightSideSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);
            if (leftSideSum == rightSideSum) {
                return result = i;
            }
        }
    }
    return result !== undefined ? result : -1;
}