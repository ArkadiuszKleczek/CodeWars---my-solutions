/*
*   7 kyu Shortest Word
*   https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
* */

const findShort = s => {
    let splitS = s.split(' ');
    console.table(splitS)
    let shortestLength = splitS.length;
    for(let i = 0; i < splitS.length; i++){
        let currentLength = splitS[i].length;
        console.log(currentLength);
        console.log(shortestLength);
        if (currentLength < shortestLength) {
            shortestLength = currentLength;

        }
    }
    return shortestLength;
};