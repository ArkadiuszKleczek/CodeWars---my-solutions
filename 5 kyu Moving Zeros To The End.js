/*
*   5 kyu - Moving Zeros To The End
*   https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
* */

const moveZeros = arr => {
    let NoZerosArr = arr.filter(x => x !== 0 );
    let WithZerosArr = arr.filter(x => x === 0);
    console.log(NoZerosArr, WithZerosArr);
    return [...NoZerosArr, ...WithZerosArr];
}

