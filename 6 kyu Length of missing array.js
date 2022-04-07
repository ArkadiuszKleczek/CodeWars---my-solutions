/*
*   6 kyu Length of missing array
*   https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611
* */

const getLengthOfMissingArray = arrayOfArrays => {
    if (arrayOfArrays == null || arrayOfArrays.includes(null)
        || !arrayOfArrays.length || !arrayOfArrays.every((el) => el.length)){
        return 0
    }
    let result;
    const sorted = arrayOfArrays.map(ele => ele.length).sort((a, b) => a - b);
    console.log(sorted)
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] + 1 !== sorted[i+1]){
            return result = sorted[i] + 1
        }
    }
    return result;
}
