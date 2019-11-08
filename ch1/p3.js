/**
 * haha becomes a global variable due to not being explicitly declared.
 */
// ======================================================================================================================================================
const oops = function() {
    haha = 2;
    console.log(haha);
};

oops();
console.log(haha); // if let haha = 2, runtime error is thrown saying haha is undefined.
// ======================================================================================================================================================



/**
 * Output is 1,2,3,4,5
 * Outer uses a variable i; however, it's using it before any explicit declaration. Thus, i becomes a global variable.
 * When calling inner, i is incremented 5 times at a global level. Thus, by the time i makes it to the second iteration of outer(),
 *  its already at 5 and the loop terminates.
 */
// ======================================================================================================================================================
const outer = function() {
    for(i = 1; i <= 3; i++) { // Should be for(let i = 1; i <= 3; i++) {}
        inner();
    }
};

const inner = function() {
    for(i = 1; i <= 5; i++) { // Should be for(let i = 1; i <= 5; i++) {}
        console.log(i);
    }
};

outer();
// ======================================================================================================================================================
