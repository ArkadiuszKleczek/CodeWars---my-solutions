/*
*   5 kyu - Extract the domain name from a URL
*   https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
* */

const domainName = url =>{
    let removeHttp = url.replace("http://", '').replace("https://", '').replace("www", '');
    let getDomainName = removeHttp.split('.');
    console.log(getDomainName);
    return getDomainName[0] ===''? getDomainName[1] : getDomainName[0];
}