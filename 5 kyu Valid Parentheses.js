/*
*   5 kyu - Valid Parentheses
*   https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
* */

const validParentheses = parenthesis => {
    let clearedParenthesis = parenthesis;
    while (clearedParenthesis.includes('()') !== false) {
        clearedParenthesis = clearedParenthesis.replace('()' , '');
    }

    return clearedParenthesis.length === 0 ? true: false;
}