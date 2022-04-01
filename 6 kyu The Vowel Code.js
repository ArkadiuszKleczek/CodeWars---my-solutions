/*
*   6 kyu The Vowel Code
*   https://www.codewars.com/kata/53697be005f803751e0015aa
* */


function encode(string) {
    const strArr = string.split('');
    let encoded = []
    for (let i = 0; i < strArr.length; i++){
        if (strArr[i] === "a"){encoded.push("1")}
        else if (strArr[i] === "e"){encoded.push("2")}
        else if (strArr[i] === "i"){encoded.push("3")}
        else if (strArr[i] === "o"){encoded.push("4")}
        else if (strArr[i] === "u"){encoded.push("5")}
        else {encoded.push(strArr[i])}
    }
    console.log(encoded.join(""));
    return encoded.join("")
}

function decode(string) {
    const strArr = string.split('');
    let decoded = []
    for (let i = 0; i < strArr.length; i++){
        if (strArr[i] === "1"){decoded.push("a")}
        else if (strArr[i] === "2"){decoded.push("e")}
        else if (strArr[i] === "3"){decoded.push("i")}
        else if (strArr[i] === "4"){decoded.push("o")}
        else if (strArr[i] === "5"){decoded.push("u")}
        else {decoded.push(strArr[i])}
    }
    console.log(decoded.join(""));
    return decoded.join("")
}
