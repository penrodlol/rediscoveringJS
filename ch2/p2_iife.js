/**
 * Immediately Invoked Function Expression (Self-Executing Anonymous Function)
 * Used to mock block scoping even though var doesn't support it.
 * When var result is called, it immediately invokes a function and executes it.
 * By doing this, the variable 'sqrt' is hidden from outside visibility.
 */
// ======================================================================================================================================================
var result = (function() {
    var result = 0;

    for (var i = 0; i < 5; i++) {
        var sqrt = Math.sqrt(i);
        result += sqrt;
    }

    return result;
})();

console.log(result);
// console.log(sqrt); // Not visible outide IIFE (SEAF)
// ======================================================================================================================================================