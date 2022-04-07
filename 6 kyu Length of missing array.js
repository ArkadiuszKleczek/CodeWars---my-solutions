/*
*   6 kyu Length of missing array
*
* */

const getLengthOfMissingArray = arrayOfArrays => {
    if (arrayOfArrays == null || arrayOfArrays.includes(null)
        || !arrayOfArrays.length || !arrayOfArrays.every((el) => el.length)){
        return 0
    }
    let result;
    let sorted2 = arrayOfArrays.sort((a, b) => a.length - b.length);
    const sorted = arrayOfArrays.map(ele => ele.length).sort((a, b) => a - b);
    console.log(sorted)
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] + 1 !== sorted[i+1]){
            return result = sorted[i] + 1
        }
    }
    return result;
}