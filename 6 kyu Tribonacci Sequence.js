/*
*   6 kyu Tribonacci Sequence
*   https://www.codewars.com/kata/556deca17c58da83c00002db
* */

const tribonacci = (signature,n) => {
    let result = signature;
    if (n == 0){
        return [];
    }
    if (n <= 3) {
        return result.slice(0, n)
    }
    const sum = (a,b) => a + b;

    for (let i = 0; i < n - 3; i++){
        result.push(result.slice(i, i + 3).reduce(sum, 0))
    }
    return result;
}