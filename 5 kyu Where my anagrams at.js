/*
*   5 kyu - Where my anagrams at?
*   https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
* */

function anagrams(word, words) {
    const wordToArraySorted = word.split('').sort().join('');
    console.log(wordToArraySorted);
    const wordsChecker = words.filter(word =>word.split('').sort().join('') === wordToArraySorted);
    console.log(wordsChecker);
    return wordsChecker;
}