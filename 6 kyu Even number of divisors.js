/*
*   6 kyu Odd/Even number of divisors
*   https://www.codewars.com/kata/55830eec3e6b6c44ff000040
* */

function oddity(n) {
    return Math.sqrt(n) % 1 ? 'even' : 'odd';

//Normal aproach
//   const result = [];
//   for (let i = 1; i < n + 1; i++) {
//     if (n % i === 0 ) {
//       result.push(i)
//     }
//   }
//   console.log(result);
//   return result.length % 2 === 0 ? 'even' : 'odd';
}
