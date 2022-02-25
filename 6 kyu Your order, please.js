/*
*   6 kyu - Your order, please
*   https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
* */

const order = words => {
    const wordsArray = words.split(' ');
    const sortedWordArray = [];

    wordsArray.forEach(word=>{
        const letterArray = word.split('')
        let numberInWord = letterArray.find(el=>parseInt(el))
        sortedWordArray.push([word,parseInt(numberInWord)])
    });
    console.log(sortedWordArray);
    sortedWordArray.sort((a,b)=>a[1]-b[1]).map(letterArray=> letterArray.splice(1,1));
    return sortedWordArray.join(' ');
}