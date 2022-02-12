/*
*   6 kyu - Replace With Alphabet Position
*   https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
* */

function alphabetPosition(text) {
    let textToArray = text.replace(/[^a-zA-Z]/gi,'').toUpperCase().split(''); //Eliminate anything thats not a letter
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let pointsHolder = [];          //empty array for score
    for (let i = 0; i < textToArray.length; i++){
        for  (let j = 0; j < alphabet.length; j++) {
            if (textToArray[i] == alphabet[j] ) {     //We check the index of given string letter in alphabet
                pointsHolder.push(j+1)                  //give it a score based on place in alphabet(+1 for 0 as 1st index)
            }
        }
    }
    return pointsHolder.join(' ');      //return scored array as a string with spaces
}