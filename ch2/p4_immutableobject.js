/**
 * freeze() method encapsulates an object and makes it immutable.
 * freeze() only makes top level properties immutable.
 * Since car's object properties aren't top level, they're mutable and can be changed after declaration.
 */
// ======================================================================================================================================================
const sam = Object.freeze({ first: 'Sam', age: 2, car: { brand: 'Subaru', model: 'Wrx' } });

// sam = {} // ERROR, the reference sam is immutable.

sam.age = 3;
sam.car.brand = 'Chevy';
console.log(sam.age); // 2
console.log(sam.car.brand); // Chevy
// ======================================================================================================================================================