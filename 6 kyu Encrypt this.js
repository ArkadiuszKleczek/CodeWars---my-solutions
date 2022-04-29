/*
*   6 kyu Encrypt this
*   https://www.codewars.com/kata/5848565e273af816fb000449
* */

const encryptThis = text => {
    const textArr = text.split(' ').map(ele => ele.split(''));
    textArr.map(ele => {
        ele[0] = ele[0].charCodeAt();
        if (ele.length > 2) {
            let second = ele[1];
            let last = ele[ele.length-1];
            ele[1] = last;
            ele[ele.length-1] = second;
        }
    });
    return textArr.map(ele => ele.join('')).join(' ');
}
