/*
*   5 kyu The Hashtag Generator
*   https://www.codewars.com/kata/52449b062fb80683ec000024
* */

function generateHashtag (str) {
    const strArr =  str.split(' ');
    const camelCaseArr = strArr.map(ele => ele.charAt(0).toUpperCase() + ele.slice(1)).join('');
    console.log(camelCaseArr.length)
    if (camelCaseArr === '' || camelCaseArr.length > 139) {return false};
    let result = '#' + camelCaseArr;
    console.log(str);
    console.log(result);
    return result;
}