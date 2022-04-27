/*
*   6 kyu Row of the odd triangle
*   https://www.codewars.com/kata/5d5a7525207a674b71aa25b5
* */

const oddRow = n => {
    const oddRowArr = [];
    let counter = 1;
    for (let i = 0; i < n; i++){
        counter += i * 2;
    }
    for (let i = 0; i < n; i++){
        oddRowArr.push(counter);
        counter += 2;
    }
    return oddRowArr;
}