/*
*   6 kyu Roman Numerals Decoder
*   https://www.codewars.com/kata/51b6249c4612257ac0000005
* */

const solution = roman => {
    const romanValues = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    let result = 0;
    const romanSigns = roman.split('');
    for (let i = 0; i < roman.length; i++){
        if(romanValues[romanSigns[i]] < romanValues[romanSigns[i+1]]){
            result += romanValues[romanSigns[i+1]] - romanValues[romanSigns[i]];
            i++;
        } else {
            result += romanValues[romanSigns[i]];
        }
    }
    return result;
}