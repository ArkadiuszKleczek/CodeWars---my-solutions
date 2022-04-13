/*
*   7 kyu Barista problem
*   https://www.codewars.com/kata/6167e70fc9bd9b00565ffa4e
* */

const barista = coffees => {
    if(coffees.length === 0) return 0;
    coffees.sort((a, b) => a - b);
    let time = coffees[0];
    const result = [time];
    for (let i = 1; i < coffees.length; i++){
        time += + 2 + coffees[i];
        result.push(time);
    }
    return result.reduce((a, b) => a + b, 0);
}