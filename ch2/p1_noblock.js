/**
 * The var 'message' is defined within the loop and what happens within a loop should stay within a loop.
 * However, when using a var, it has poor encapsulation and can be acessed outside the loop.
 * var hoists the variables 'i' and 'message' to the top of a function and as a result become visible outside loop.
 * NO MATTER WHERE THE var IS DEFINED, It always get placed at the top of a function; thus, can be accessed anywhere within it.
 */
// ======================================================================================================================================================
console.log(message);

console.log('Entering loop');
for (var i = 0; i < 3; i++) {
    console.log(message); // visible here but undefined
    var message = 'spill ' + i;
}
console.log('Exiting loop');

console.log(message);
console.log(i);
// ======================================================================================================================================================
