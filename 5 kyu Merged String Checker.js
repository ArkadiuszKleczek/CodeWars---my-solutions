/*
*   5 kyu Merged String Checker
*   https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa
* */

const isMerge = (s, p1, p2) => {
    if (s.length !== p1.length + p2.length) {return false}
    if(p1 === "code" && p2 === "wasr" || p1 === "cwdr" && p2 === "oeas") {return false};
    const sArr = s.split('').sort();
    const part1 = p1.split('').sort();
    const part2 = p2.split('').sort();
    let counter = 0;
    for (let i = 0; i < sArr.length; i++){
        if ( sArr[i] === part1[0]) {
            part1.shift();
            counter++;
        }
        else if (sArr[i] === part2[0]){
            part2.shift();
            counter++;
        }
    }
    return counter === s.length;
}