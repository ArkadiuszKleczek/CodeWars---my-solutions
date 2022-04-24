/*
*   6 kyu N-th Fibonacci
*   https://www.codewars.com/kata/522551eee9abb932420004a0
* */

const nthFibo = n => {
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
        let a = result[i - 1];
        let b = result[i - 2];
        result.push(a + b);
    }
    console.log(result);
    return result[n-1];
}