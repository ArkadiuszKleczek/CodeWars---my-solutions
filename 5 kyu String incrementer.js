/*
*   5 kyu String incrementer
*   https://www.codewars.com/kata/54a91a4883a7de5d7800009c
* */

const incrementString = str => {
    let numbers = str.replace(/[a-zA-Z]+/g, '');
    const letters = str.replace(/[^a-zA-Z]+/g, '');
    let numbersIncremented = (numbers * 1 + 1).toString();
    console.log(numbers, letters, typeof numbersIncremented);
    while (numbersIncremented.length < numbers.length){
        numbersIncremented = '0' + numbersIncremented;
    }
    return [...letters, ...numbersIncremented.split()].join('')
}