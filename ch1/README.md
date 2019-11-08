# Chapter 1

JavaScript Gotchas

## Sections

```
- Be Careful Where You Break Lines
- Use === Instead of ==
- Declare Before User
- Stay One Step Ahead
- Wrapping Up
```

## Be Careful Where You Break Lines

```
Semicolons
- Not entirely optional.
- In some places they're required, others are only a stylistic purpose. However, if you don't place a semicolon where one is required, then JS won't complain.
- Automatic Semicolon Insertion (ASI) Rules
    - As tokens are parsed from left to right, if an unexpected token is encountered and a line break separates it from the previous token, than a ';' is auto-
      matically inserted before the encountered token.
    - If a candidate token is
        - break
        - continue
        - return
        - throw
        - yield
     and a line break appears between the candidate token and the next token. The JS automatically inserts a ';' after the canidate token.
- Placing a ';' after the end of a code branch (ex. {};), is not convention.
- Missing ';' can be caught using any Lint tool for JS.
```

## Use === Instead of ==

```
==
- Type-coercion non-strict equality operator.
    - Coercion is the support to convert the type of one value into another type.
        - Implicit convertion
- Doesn't honor the transitive property of equality.
    - If we have two things that are equal to each other and the second thing is equal to the third thing, then the first thing is also equal to the third thing.
    - Ex. a == b, b == c, a == c
- Preforms type-coercion if the comparing data type aren't the same.
- If the objects or values being compared are both of type
    - string
    - number
    - boolean
  then a direct equality check if performed.
- Lexical Comparison
    - '1' == '1.0' -> false
    - Type-coercion isn't performed due to equal data types.
- Comparing variable to null or undefined
    - == is useful in this scenario.
    - if (variable == null) {}
        - Checks if variable is null or undefined.
    - if (variable === null || variable === undefined)
        - Required for ===, not good.

===
- Used for strict comparisons.
```

## Declare Before Use

```
Undeclared Variables
- Without explicitly declaring a variable with a leading
    - var
    - let
    - const
  it becomes a global variable.
```

## Stay One Step Ahead

```
Apply the 'use strict' Directive
- Placing 'use scrict' at the beginning of a JS source file or within a function turn on the strict mode for execution.
- Doesn't tollerate undeclared variables.
- Situation of only placing 'use strict' within function.
    - When gradually refactoring legacy code.
- 'use strict' was designed to look like a string so the newer JS engines can recognize it, whereas the older engines ignore it.
- Watches out for changes to read-only properties, deletion of properties, and the use of some keywords that're reserved for the future.
- The utilization of modules automatically run JS source files in strict mode.

Lint the Code
- Tools
    - JSLint
    - JSHint
    - ESLint
- Can be installed via npm.
- ESLint supports ES6, recommended.
- Better solution than 'use strict' as it identifies issues before runtime.
- Init ESLint locally
    - eslint --init