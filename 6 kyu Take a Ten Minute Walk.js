/*
*   6 kyu = Take a Ten Minute Walk
*   https://www.codewars.com/kata/54da539698b8a2ad76000228
* */

const isValidWalk = walk => {
    let horizontalMovenemt = 0;
    let verticalMovenemt = 0;
    let walkTimer = 0;
    walk.forEach(e => {
        switch (e) {
            case e ==='w': {return horizontalMovenemt++, walkTimer++};
            case e ==='e': {return horizontalMovenemt--, walkTimer++};
            case e ==='n': {return verticalMovenemt++, walkTimer++};
            case e ==='s': {return verticalMovenemt--, walkTimer++};
        }

    });
    return horizontalMovenemt === 0 && verticalMovenemt === 0 && walkTimer === 10 ? true : false;
}