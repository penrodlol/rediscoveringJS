/**
 * var allows redefining of the same variable name within scope.
 * This can lead not only to errors, but confusion as the same variable name
 * is redefined to another value.
 * JS doesn't complain if you do this.
 */
// ======================================================================================================================================================
var max = 100;
console.log(max);

var max = 200;
console.log(max);
// ======================================================================================================================================================