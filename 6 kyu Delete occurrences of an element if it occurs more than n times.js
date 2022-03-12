/*
*   6 kyu - Delete occurrences of an element if it occurs more than n times
*   https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
* */

const deleteNth = (arr,n) => {
    let counter = 0;
    for (let i = arr.length; i > 0; i--){ //will clear from right side
        for (let j = 0; j < arr.length; j++){
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter > n) {
            arr.splice(i,1); //remove element thats
            i = arr.length; //change lenght of loops
        }
        counter = 0;  //reset counter
    }
    return arr
}