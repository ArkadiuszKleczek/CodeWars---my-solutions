/*
*       7 kyu - Vowel Count
*       https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
*
* */

function getCount(str) {
    let testedArray = str.split('');               //string to array
    const vowelsArray = ['a', 'e', 'i', 'o', 'u']; //we will look for thous vowels
    let vowelsCount = 0;                           //counter
    for (let i=0; i<testedArray.length; i++){

        for (let j=0; j<vowelsArray.length; j++){
            if (vowelsArray[j] == testedArray[i] ) {    //we check for vowels if spoted counter goes up
                vowelsCount++;
            }
        }
    }
    return vowelsCount;
}