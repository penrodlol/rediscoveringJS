// Exercise 1
// ======================================================================================================================================================
// What's the output of this code?

function first() {
    for (i = 0; i < 5; i++) {
        second();
    }
}

function second() {
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}

first(); // Infinite loop as 'i' is a global variable. No var, let, or const.
// ======================================================================================================================================================


// Exercise 2
// ======================================================================================================================================================
// First modify the code in the previous exercise so it gives a runtime error due to the major issue. Then modify the
//  code to produce a reasonably desired result.

// Part 1

function first() {
    'use strict';
    for (i = 0; i < 5; i++) {
        second();
    }
}

function second() {
    'use strict';
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}

first(); // Place 'use strict' at the beginning of function. BETTER PRACTICE TO PLACE AT BEGINNING OF JS FILE!

// Part 2

function first() {
    'use strict';
    for (let i = 0; i < 5; i++) {
        second();
    }
}

function second() {
    'use strict';
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
}

first(); // By defining i in both functions with let, they are mutable and aren't treated as global, rather block scoped.
// ======================================================================================================================================================


// Exercise 3
// ======================================================================================================================================================
// What are the benefits of using 'use scrict'

// 'use strict' is an efficiant way of linting JS errors via runtime.
// By linting (marking syntactically incorrect code), JS error that typically wouldn't be caught and throw are now present.
// JS has the disadvantage of not complaining about much. Without a linter, it's hard to catch all possible mistakes.
// Catches attempts to change read-only properties, deletion of properties, and use of reserved JS keywords.
// Can also catch undeclared variables as demostrated in the example above.
// ======================================================================================================================================================


// Exercise 4
// ======================================================================================================================================================
// Will this code result in an error?

var fourth = '4th';

fourth = fourth;

console.log(fourth); // Yes, the const declaration make the variable immutable.
// ======================================================================================================================================================


// Exercise 5
// ======================================================================================================================================================
// Will this code result in an error?

'use strict'

const person = Object.freeze({name: 'John Doe', address: {street: '101 Main St.', City: 'New York'}});

person.address.street = '102 Main St.';

console.log(person); // No, the freeze() function only makes top-level object properties immutable.
// ======================================================================================================================================================