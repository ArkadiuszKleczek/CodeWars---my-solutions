/*
*   7 kyu - Alternate capitalization
*   https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
* */

function capitalize(s){
    let toArray = s.split('');
    let caseDecider1 = toArray.map((element, index) => index % 2 === 0 ? element.toUpperCase() : element.toLowerCase() );
    let caseDecider2 = toArray.map((element, index) => index % 2 !== 0 ? element.toUpperCase() : element.toLowerCase() );
    let UpperFirst = caseDecider1.join('');
    let LowerFirst = caseDecider2.join('');
    return [UpperFirst, LowerFirst];
};