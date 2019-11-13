// Exercise 1
// ======================================================================================================================================================
// What will be the result of each of the following 'return' statements?

function ex1p1() {
    return
        2 * 3;
} // undefined

function ex1p2() {
    return 2
        * 3;
} // 6

function ex1p3() {
    return 2 * 3
        ;
} // 6

console.log(ex1p1());
console.log(ex1p2());
console.log(ex1p3());
// ======================================================================================================================================================


// Exercise 2
// ======================================================================================================================================================
// Is it better to use '==' or '===' in the following example?

function ex2p1() {
    return "2.0" / 2 * "2.0" == 2 / 2 * 2;
} // Doesn't matter considering this is a lexical comparison (comparison of direct equality). Right and left conditions are of data type: number.

console.log(ex2p1());
// ======================================================================================================================================================


// Exercise 3
// ======================================================================================================================================================
/* Write a function named canVote() that takes 'age' as a parameter and returns a string, as shown in the following example calls to the function:
 * console.log(canVote(12)); -> no, can't vote
 * console.log(canVote("12")); -> no, can't vote
 * console.log(canVote(17)); -> no, can't vote
 * console.log(canVote('@18')); -> no, can't vote
 * console.log(canVote(18)); -> yay, start voting
 * console.log(canVote(28)); -> please vote
 */

function canVote(age) {
    const MINAGE = 18;
    switch (true) {
        case age == MINAGE: return 'yay, start voting';
        case age > MINAGE: return 'please vote';
        default: return 'no cant vote';
    }
}

console.log(canVote(12));
console.log(canVote("12"));
console.log(canVote(17));
console.log(canVote('@18'));
console.log(canVote(18));
console.log(canVote(28));
// ======================================================================================================================================================


// Exercise 4
// ======================================================================================================================================================
// What is the output of the following code?

var isPrime = function(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return n > 1;
}

var sumOfPrimes = function(n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) sum += i;
    }
    return sum;
} // 2 -> Fix by placing let infront of i declarations to get 17.
console.log(sumOfPrimes(10));
// ======================================================================================================================================================


// Exercise 5
// ======================================================================================================================================================
// The code in this exercise is intended to determine if a given number is a perfect number.
var isPerfect = function(number) {
    var sumOfFactors = 0;
    for (let index = 1; index <= number; index++) {
        if (number % index == 0) sumOfFactors += index;
    }
    return sumOfFactors == number * 2;
};

for (let i = 1; i <= 10; i++) {
    console.log(`is ${i} perfect?: ${isPerfect(i)}`);
}