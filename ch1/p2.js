/**
 * == doesn't honor the transitive property of equality, due to type coercion.
 * When comparing a to c, a lexical comparison was used.
 */
// ======================================================================================================================================================
const a = '1';
const b = 1;
const c = '1.0';

console.log(a == b);
console.log(b == c);
console.log(a == c);
// ======================================================================================================================================================



/**
 * JS is comparing these variables without performing type-coercion
 */
// ======================================================================================================================================================
const a = '1';
const b = 1;
const c = '1.0';

console.log(a === b);
console.log(b === c);
console.log(a === c);
// ======================================================================================================================================================