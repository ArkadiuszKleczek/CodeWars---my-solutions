/*
*   6 kyu - Find the odd int
*   https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
* */

const findOdd = givenArray => {
    let oddCounter = 0;
    for (let i = 0; i < givenArray.length; i++){
        for (let j = 0; j < givenArray.length; j++){
            if (givenArray[i]===givenArray[j]) {
                oddCounter++
            }
        }
        if (oddCounter % 2 !== 0) {
            return givenArray[i];
        }
    }
}
