/*
*   6 kyu - Detect Pangram
*   https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
* */

function isPangram(string){
    let givenSentence = string.toUpperCase().split(' ').join('').split(''); //String to array with no spaces
    const arraySentence = givenSentence.filter(function(element) {   //array with no dots
        return element !== ".";
    });
    let uniqArraySentence = [...new Set(arraySentence)]; //array with unique letters
    console.log(uniqArraySentence);
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let counter = 0;
    for (let i=0; i<uniqArraySentence.length; i++){
        for (let j=0; j<alphabet.length; j++) {
            if (uniqArraySentence[i] === alphabet[j]) {
                counter++                                   //counter goes up anytime we have a match
            }

        }
    }
    console.log(counter);
    console.log(alphabet.length);
    return counter === alphabet.length ? true : false; //check if unique amount of matches = length of alphabet
}