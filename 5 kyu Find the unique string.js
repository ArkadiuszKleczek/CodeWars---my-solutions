/*
*   5 kyu Find the unique string
*   https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
* */

const findUniq = arr => {
    const sample1 = arrSorter(arr[0]);
    const sample2 = arrSorter(arr[1]);
    console.log(sample1, sample2);
    if (sample1 === sample2) {
        return arr.find(word => arrSorter(word) !== sample1)
    };
    if (sample1 === arrSorter(arr[2])) {
        return arr[1];
    }
    return arr[0];
}
const arrSorter  = x => [...new Set([...x.toLowerCase()].sort())].join('');