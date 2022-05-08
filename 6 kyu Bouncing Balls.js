/*
*   6 kyu Bouncing Balls
*   https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript
* */

const bouncingBall = (h,  bounce,  window) => {
    let result = -1;
    if ( h > window && bounce < 1 && bounce >= 0) {
        result = 1;
        while (h * bounce > window ) {
            h = h * bounce
            result += 2
        }
    }
    return result;
}
