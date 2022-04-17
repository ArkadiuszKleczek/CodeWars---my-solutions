/*
*   5 kyu Ant Bridge
*   https://www.codewars.com/kata/599385ae6ca73b71b8000038
* */

const antBridge = (ants, terrain) => {
    const antsArr = ants.split('');
    console.log(antsArr)
    for (let i = 0; i < terrain.length; i++) {
        if ( terrain[i+1] == '.' || terrain[i] == '.' || terrain[i-1] == '.') {
            let move = antsArr.pop()
            antsArr.unshift(move);
        }
    }
    return antsArr.join('');
}
