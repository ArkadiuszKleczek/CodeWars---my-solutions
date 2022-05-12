/*
*   6 kyu Remove the parentheses
*   https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8
* */

function removeParentheses(s){
    let r = 0
    let x = ''
    for (let c of s) {
        if (c=='(') r++
        if (r==0) x+=c
        if (c==')') r--
    }
    return x
}