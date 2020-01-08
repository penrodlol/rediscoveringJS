# Chapter 2

Variables and Constants

## Sections

```
- Out with var
- In with let
- Perils of Mutability
- const
- Safer code with let and const
- Prefer const over let
- Wrapping Up
```

## Out with var

```
Prior to ES6
- var was required to define local variables.
- Without a var infront of declaration resulted in a global variable.

Poor Functionality of var
- Redefining
    - Doesn't prevent a variable from being redefined in a scope.
    - Poor practice  to redefine a variable in the same scope.
- No Block Scope (Function Scope)
    - Variables defined using var within function have function scope.
        - Places vars at the top of function no matter where their definition occurs.
        - Can be called from anywhere within the function.

Why is var still around?
- Developers who deploy code on different browsers.
```

## In with let

```
No Redefinition
- let doesn't permit a variable in a scope to be redefined.
- JS supporting ES6+ will complain if let is redefined.

let
- Brings in variable declaration semantics into JS.

Scenario
- What if we define a variable using var and then redefine it using var?
    - JS will not permit it!

node and Broswer Limitations
- Enforce the rule of restricting variable redefinition.

Block Scrope
- Variables declared using let have block scope.
    - Their use is limited to the code block enclosed by {}.
- Also, let variables are only available after their declaration, unlike var.
    - They aren't hoisted to the top of function or block in which they're defined.
```

## Perils of Mutability

```
Mutability
- let is mutable and can be re-assigned it value.
- This can cause confusion when referenced inside a function's scope but is declared outside.
- Mutability is common within the imperative programming paradigm; however, is a taboo for the functional programming paradigm.
    - Unfortunately, JS is a multi-paradigm programming language and supports both imperative and functional practices.
```

## const

```
const
- Used to declare immutable variables and follow the functional programming paradigm.

Reach of const
- Only primitive JS values are protected from change such as number or object.
    - The actual object the variable references doesn't receive protection from const.
- Similar to final in Java and readonly in C#.
    - All of which protect primitive data types and variables being references.
        - However, none protect the references variables

Making Objects const
- Immutable Objects
    - Objects of type 'string' are immutable.
        - Altering these objects won't be caught at runtime unless linter is provided.

- freeze()
    - The freeze method encapsulates an object and makes it immutable.
    - It is only a shallow freeze, not a deep freeze.
        - Only makes top-level object properties immutable.
```

## Safer Code with let and const

```
Immediately Invoked Function Expression (IIFE)
- Self-Executing Anonymous Function
- JS design pattern invoked by using var which doesn't use block scope.
- Used to hide variables and functions from outside visibility.
- Lines of code are wrapped inside an anonymous function that's immediately executed.
```

## Prefer const over let

```
Rules to follow when working with variables
- Don't use var.
- Use const wherever possible.
- Use let where mutability is needed.

Benefits to using const over let
- Code is less prone to errors.
- Code is easier to reason about.
- The code prevents accidental or unintentional change to variables.
- The code is safe to use in functional style code with arrow functions.
```