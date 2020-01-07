/**
 * The variable 'factor' within the inner function is bound directly to the variable 'factor' outside the scope.
 * Thus, it becomes mutable and its last assignment will be present within function scope.
 */
// ======================================================================================================================================================
let factor = 2;

let product = function(number) {
    return number * factor;
};

factor = 0;

console.log(product(4));
// ======================================================================================================================================================