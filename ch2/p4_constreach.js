/**
 * JS primitive type 'object' and its properties aren't protected by const.
 */
// ======================================================================================================================================================
const max = 200;
const ok = true;
const nothing = undefined;
const nope = null;
const sam = { first: 'Sam', age: 2 };

// max = 300; // NOT ALLOWED
// ok = false; // NOT ALLOWED
// nothing = undefined; // NOT ALLOWED
// nope = null; // NOT ALLOWED
// sam = { first: 'Sam', age: 3 } // NOT ALLOWED

sam.age = 3;
console.log(sam);
// ======================================================================================================================================================




/**
 * The result outputs 10 as const variable declaration prevents mutability from JS type number.
 */
// ======================================================================================================================================================
let a = 10;
const b = a;
a = 20;

console.log(b); // 10
// ======================================================================================================================================================