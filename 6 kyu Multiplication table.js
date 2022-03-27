/*
*   6 kyu Multiplication table
*   https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
* */

const multiplicationTable = size => {
    const multiTable = [];
    for (let i = 1; i <= size; i++){
        const innerMultiTable = [];
        for (let j = 1; j <= size; j++){
            innerMultiTable.push(i*j);
        }
        multiTable.push(innerMultiTable);
    }
    return multiTable
}