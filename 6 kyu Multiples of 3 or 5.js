/*
*   6 kyu - Multiples of 3 or 5
*   https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
* */

function solution(number){
    let holder =[];
    for (let i = number-1; i > 0; i--){
        if (i % 3 === 0 || i % 5 === 0) {
            holder.push(i);
        }
    }
    return holder.reduce((sum, n) => sum +=n);
}
