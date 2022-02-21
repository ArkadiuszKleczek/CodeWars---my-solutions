/*
*   5 kyu - Simple Pig Latin
*   https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
* */

const pigIt = (str) =>{
    let stringToArray = str.split(' ');


    let lettersChanger = stringToArray.map(ele => {
        const regex = /[a-zA-Z]+/g;                                         //Matches any characters between a-z or A-Z.
        return ele.match(regex) ? ele.substring(1) + ele[0] + 'ay' :ele;    //substring() will get all letters from index 1 to last
        // then i will add Capital letter from index 0 and ad ay
    });
    console.log(lettersChanger);
    return lettersChanger.join(' ')
}