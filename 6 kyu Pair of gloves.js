/*
*   6 kyu Pair of gloves
*   https://www.codewars.com/kata/58235a167a8cb37e1a0000db
* */

const numberOfPairs = gloves => {
    const sortedGloves = gloves.slice().sort();
    let counter = 0;
    console.log(gloves);
    for (let i = 0; i < sortedGloves.length; i++){
        if (sortedGloves[i] === sortedGloves[i+1]) {
            counter++;
            i++;
        }
    }
    return counter;
}