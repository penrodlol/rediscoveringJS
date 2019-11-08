/**
 * Adding line break without semicolon.
 * The token second is not expected after first, even though a line break separates the two.
 * JS quietly inserts a ';' before the second.
 * This results in first taking on a value of undefined and second turning into a global variable.
 */
// ======================================================================================================================================================
const unexpected = function() {
    let first // AIS inserts a ';' here.
    second = 1;

    console.log(first);
    console.log(second);
}

unexpected();
console.log(second);
// ======================================================================================================================================================



/**
 * break, continue, return, throw, yield
 * If these canidate tokens are followed by a line break and no semicolon, then JS automatically inserts one.
 * Second Return
 * - No semicolon, line break -> automatic insertion of ';' after return.
 * First Return
 * - No line break after return.
 * - Operators are legal tokens after line breaks.
 *  - JS will not automatically insert a ';' after return line.
 *  - If 2 instead of +2, JS notices this as an invalid token and inserts a ';' after return line. Thus, returning 6 instead of 8.
 */
// ======================================================================================================================================================
const compute = function(number) {
    if (number > 5) {
        return number
            + 2;
    }

    if (number > 2) {
        return
            number * 2;
    }
};

console.log(compute(6));
console.log(compute(3));
// ======================================================================================================================================================
