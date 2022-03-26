/*
*   6 kyu How many pages in a book?
*   https://www.codewars.com/kata/622de76d28bf330057cd6af8
* */

const amountOfPages = summary => {
    let pagesStr = '';
    const pagesArr = []
    for (let i = 1; pagesStr.length < summary; i++){
        pagesStr += i;
        pagesArr.push(i)
    }
    return pagesArr[pagesArr.length - 1]
}