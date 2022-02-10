/*
*       https://www.codewars.com/kata/form-the-minimum/train/javascript
*       7 kyu - Form The Minimum
*
*       Task:
*       Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
*       Notes:
*       Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
*       Input >> Output Examples
*       minValue ({1, 3, 1})  ==> return (13)
*
*
* */



const minValue = (values) => {
    let sortedArray = values.sort();
    let risingArray = [];

    for(let i=0; i<sortedArray.length; i++) {
        if(risingArray.indexOf(sortedArray[i]) === -1) {
            risingArray.push(sortedArray[i]);
        }
    }
    let minimumNumber = Number(risingArray.join(""));
    return minimumNumber;
}
