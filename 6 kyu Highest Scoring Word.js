/*
*   6 kyu - Highest Scoring Word
*   https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
* */

const high = x => {
    const wordsArr = x.split(' ');
    let topValue = 0;     // For sum of ASCII decimal value
    let topValueWord =''; // Will hold the word with the biggest value ^

    for (let i = wordsArr.length - 1; i >= 0; i--){ // We need to start from the back so "last" word will be first
        let word = wordsArr[i];
        let wordCounter = 0;            //will hold current sum of value
        word.split('').map(letter => {
            wordCounter += letter.charCodeAt(0) - 96; //since a=97 in ASCII we wanna start from 1
        });
        if (wordCounter >= topValue) {
            topValue = wordCounter;
            topValueWord = word;
        }
    }
    console.log(topValueWord);
    console.log(topValue);
    return topValueWord;
}