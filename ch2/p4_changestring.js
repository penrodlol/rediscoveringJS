/**
 * greet is unchanged as objects of 'string' are immuntable.
 * JS will ignore at runtime; however, providing a linter will catch it.
 */
// ======================================================================================================================================================
const greet = 'dude';
console.log(greet);

greet[0] = 'r';
console.log(greet);
// ======================================================================================================================================================