/*
*   6 kyu Playing with passphrases
*   https://www.codewars.com/kata/559536379512a64472000053
* */

const playPass = (s, n) => {
    const sArr = s.toLowerCase().split('').map(ele => ele.charCodeAt());
    const intoASCII = [];
    for (let i = 0; i < sArr.length; i++){
        if (sArr[i] >= 48 && sArr[i] <= 57) {
            intoASCII.push(57 - sArr[i] + 48)
        }
        else if (sArr[i] >= 97){
            intoASCII.push((sArr[i] + n) > 122 ? sArr[i] + n - 26 : sArr[i] + n)
        }
        else {
            intoASCII.push(sArr[i])
        }
    }
    const fromASCII = intoASCII.map(ele => String.fromCharCode(ele));
    const result = fromASCII.map((ele, idx) => idx % 2 === 0 ? ele.toUpperCase() : ele);
    return result.reverse().join('');
}


