/**
 * The variable defined within the block scope of the loop is not accessible outside of it.
 * This is due to declaring message with let.
 * Even within the block scope of the loop, message isn't visible above it declaration.
 */
// ======================================================================================================================================================
// console.log(message); // ERROR if this line is uncommented.
console.log('Entering loop');
for (let i = 0; i < 3; i++) {
    // console.log(message); // ERROR if this line is uncommented.
    let message = 'spill ' + i;
}
console.log('Exiting loop');
// console.log(message); // ERROR if this line is uncommented.
// ======================================================================================================================================================