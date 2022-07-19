/*
*   7 kyu Growth of a Population
*   https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
* */

const nbYear = (p0, percent, aug, p) => {
  console.log(p0, percent, aug, p)
  let population = p0;
  let time = 0;
    while (population < p) {
      population += Math.floor(population * (percent / 100)) + aug;
      time++;
    }
  return time;
}
