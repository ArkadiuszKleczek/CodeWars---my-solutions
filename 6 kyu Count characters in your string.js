/*
*   6 kyu Count characters in your string
*   https://www.codewars.com/kata/52efefcbcdf57161d4000091
* */

const count = str => {
    const charCount = {}
    const strToArr = str.split('');
    const charCounter = strToArr.map(ele => charCount[ele] = charCount[ele] ? charCount[ele] + 1 : 1);
    console.log(charCount)
    console.log("2: " + charCounter)
    return charCount;
}