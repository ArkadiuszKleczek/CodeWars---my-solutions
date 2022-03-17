/*
*   6 kyu - Valid Braces
*   https://www.codewars.com/kata/5277c8a221e209d3f6000b56
* */


function validBraces(braces){
    while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
        braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
    }
    return braces.length === 0 ? true: false;
}