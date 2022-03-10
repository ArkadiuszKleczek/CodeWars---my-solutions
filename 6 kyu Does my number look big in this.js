/*
*   6 kyu - Does my number look big in this?
*   https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
* */

const narcissistic = value => {
    const valueToArray = value.toString().split('');
    const cubeRootArray = valueToArray.map(ele => ele**valueToArray.length);
    const cubeRootArraySum = cubeRootArray.reduce((ele, idx) => ele + idx);
    return cubeRootArraySum == value ? true : false;
}
