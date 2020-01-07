/**
 * Changing price isn't a problem as it was declared using let and therefore is mutable.
 * However, tax cannot be re-assigned as it's delcared as const and therefore is immutable.
 * JS will throw a Runtime error!
 */
// ======================================================================================================================================================
let price = 120.25;
const tax = 0.825;

price = 110.12;
tax = 1.25;
// ======================================================================================================================================================