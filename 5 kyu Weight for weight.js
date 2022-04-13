/*
*   5 kyu Weight for weight
*   https://www.codewars.com/kata/55c6126177c9441a570000cc
* */

const orderWeight = str => str.split(' ').sort((a, b) => sorter(a) - sorter(b) || (a > b ? 1 : -1) ).join(' ');

const sorter = kg => kg.split('').map(Number).reduce((a, b) => a + b);