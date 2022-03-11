/*
*   6 kyu - Sort the odd
*   https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
* */

const sortArray = array => {
    const oddFiltered = array.filter((ele) => ele % 2);
    console.log(oddFiltered);
    const oddFilteredSorted = oddFiltered.sort((a,b) => a - b);
    console.log(oddFilteredSorted);
    const result = array.map((ele) => ele % 2 ? oddFilteredSorted.shift() : ele );
    //shift() removes the first element from oddFilteredSorted array and returns
    // that to mapped element that didnt pass %, so the even elements dont change
    console.log("result: " + result);
    return result;
}