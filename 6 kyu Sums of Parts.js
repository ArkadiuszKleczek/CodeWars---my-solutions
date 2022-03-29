/*
*   6 kyu Sums of Parts
*   https://www.codewars.com/kata/5ce399e0047a45001c853c2b
* */

const partsSums = ls => {
    let lsSumArr = ls.reduce((sum, curr) => sum += curr, 0);
    const lsTotalSumArr = [lsSumArr];
    for (let i = 0; i < ls.length; i++){
        lsSumArr = lsSumArr - ls[i];
        lsTotalSumArr.push(lsSumArr)
    }

    console.log(lsTotalSumArr)
    return lsTotalSumArr;
}