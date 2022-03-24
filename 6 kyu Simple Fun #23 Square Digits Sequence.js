/*
*   6 kyu Simple Fun #23: Square Digits Sequence
*   https://www.codewars.com/kata/5886d65e427c27afeb0000c1
* */

const squareDigitsSequence = a0 => {
    const occurredElements = [a0];
    let currentElement = a0.toString().split('').map(
        Number).reduce((prev, curr) => prev + curr**2, 0);

    while (occurredElements.indexOf(currentElement) === -1){
        occurredElements.push(currentElement);
        console.log("Arr: " + occurredElements);
        currentElement = currentElement.toString().split('').map(
            Number).reduce((prev, curr) => prev + curr**2, 0);
        console.log("Push: " + currentElement)
    }
    return occurredElements.length + 1;
}