/*
*   8 kyu Check same case
*   https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
* */

const sameCase = (a, b) => {
    if (a.match(/[a-z]+/g) && b.match(/[a-z]+/g)){return 1}
    else if (a.match(/[A-Z]+/g) && b.match(/[A-Z]+/g)){return 1}
    else if (a.match(/[A-Z]+/g) && b.match(/[a-z]+/g)){return 0}
    else if (a.match(/[a-z]+/g) && b.match(/[A-Z]+/g)){return 0}
    else {return -1}
}