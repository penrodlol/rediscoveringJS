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