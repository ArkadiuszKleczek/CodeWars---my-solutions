/*
*   6 kyu Find the missing term in an Arithmetic Progression
*   https://www.codewars.com/kata/52de553ebb55d1fca3000371
* */

const findMissing = arr => {
    console.log(arr);
    let diff = arr[0] - arr[1];
    console.log(diff);
    let result;
    for(let i = 1; i < arr.length-1; i++) {
        if(diff != arr[i] - arr[i+1]){
            console.log(diff + arr[i+1], diff, arr[i+1])
            result = diff + arr[i+1]
        }
    }
    return result;
}