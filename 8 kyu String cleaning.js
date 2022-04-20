/*
*   8 kyu String cleaning
*   https://www.codewars.com/kata/57e1e61ba396b3727c000251
* */

const stringClean = s => s.split('').filter(ele => !ele.match(/[0-9]+/g)).join('');