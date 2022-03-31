/*
*   7 kyu Find the divisors!
*   https://www.codewars.com/kata/544aed4c4a30184e960010f4
* */

const divisors = integer => {
    let resultArr = [];
    for(let i = 2; i < integer; i++){
        if(integer % i == 0) {
            resultArr.push(i)
        }
    }
    console.log(resultArr);
    return resultArr.length === 0 ? `${integer} is prime` : resultArr;
};