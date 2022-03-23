/*
*   6 kyu Simple Fun #79: Delete a Digit
*   https://www.codewars.com/kata/5894318275f2c75695000146/train/javascript
* */

const deleteDigit = n => {
    let topValue = 0;
    const nArray = n.toString().split('');
    for (let i = 0; i < nArray.length; i++){
        let currentValue = (nArray.slice(0 ,i)+nArray.slice(i + 1)).split(',').join('') * 1;
        if (currentValue > topValue){
            topValue = currentValue;
        }
    }
    return topValue;
}