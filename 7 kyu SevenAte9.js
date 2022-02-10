/*
    7 kyu - SevenAte9
    https://www.codewars.com/kata/559f44187fa851efad000087/train/javascript
    Write a function that removes every lone 9 that is inbetween 7s.

*/


const sevenAte9 = str =>{
    let luckySeven = "";
    luckySeven += str[0];
    for (let i = 1; i < str.length-1; i++){  // cant be surrounded at 0
        luckySeven += (str[i] == 9 && str[i-1] == 7 && str[i+1] == 7) ? "" : str[i]; //removing lone 9
    }
    luckySeven += str[str.length-1];
    return luckySeven;
}