/*
*   5 kyu Ant Bridge
*
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