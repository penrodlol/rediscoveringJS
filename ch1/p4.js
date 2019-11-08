/**
 * Since 'use strict' prevents undeclared variables from becoming global. Runtime error is invoked when calling haha outside the function scope.
 */
// ======================================================================================================================================================
'use strict'

const oops = function() {
    haha = 2;
    console.log(haha);
}

oops();
console.log(haha);
// ======================================================================================================================================================



/**
 * 
 */
// ======================================================================================================================================================
const sample = function(number) {
    factor = 4;
    
    if(number == '2') {
        return
            number * factor;
    }

    return number * 10;
};

console.log(sample(2));
