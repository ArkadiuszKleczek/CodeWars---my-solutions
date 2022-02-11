/*
*   7 kyu
Get the Middle Character
*   https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
*
* */


function getMiddle(s) {
    let x = s.split('');  //s to array
    console.log(x);
    let length = x.length;
    console.log(length);
    let spliceStart = 0;
    let spliceEnd = 1;
    if (length % 2 !== 0) {
        spliceStart = Math.floor(length/2);

    } else  {
        spliceStart = (length/2)-1;
        spliceEnd++;
    }

    console.log(spliceStart, spliceEnd);
    let splicedArray = x.splice(spliceStart, spliceEnd);
    console.log(splicedArray);
    return splicedArray.join('')
}

