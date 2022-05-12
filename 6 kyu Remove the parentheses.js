/*
*   6 kyu Remove the parentheses
*   https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8
* */

const removeParentheses = s => {
  const arr = s.split('');
  let deep = 0;
  const result =  arr.reduce((res, item) => {
    if (item === '(') deep++;
    if (!deep) {
      return res += item;
    }
    if (item === ')') deep--;
    return res;
  }, '');
  return result;
}
