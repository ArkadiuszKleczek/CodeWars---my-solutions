/*
*   6 kyu - Convert string to camel case
*   https://www.codewars.com/kata/517abf86da9663f1d2000003
* */

const toCamelCase = str => {
    if (str.length === 0) {return ''}
    let strToArray = [];
    str.includes('_') ? strToArray = str.split('_') : strToArray = str.split('-');
    console.log(strToArray);
    let camelCaseArray = strToArray[0]
    for (let i = 1; i < strToArray.length; i++) {
        let upperCaseWord = strToArray[i].charAt(0).toUpperCase() + strToArray[i].slice(1);
        console.log(upperCaseWord);
        camelCaseArray = [...camelCaseArray, upperCaseWord]
    }
    return camelCaseArray.join("");
}