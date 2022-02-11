/*
*   7 kyu
Get the Middle Character
*   https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
*
* */

function getMiddle(s) {
    let sArray = s.split('');  //s to array
    let length = sArray.length/2; //middle of array
    let spliceStart = 0;
    let spliceEnd = 1;
    if (sArray.length % 2 !== 0) {   //is middle of array an odd number?
        spliceStart = Math.floor(length); //yes so round it down and splice only 1
    } else  {
        spliceStart = length-1; //no, so we move it to 1st of 2 even pair
        spliceEnd++;            //will splice 2 middle numbers
    };
    return splicedArray = (sArray.splice(spliceStart, spliceEnd)).join(''); //splice and make it string
}

