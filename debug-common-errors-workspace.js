/*
Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.
*/

// Programs and Solutions

// Program A
//Original code: console.log("Welcome to the bootcamp
console.log("Welcome to the bootcamp"); // added "); to the end of the existing string

/* What’s Wrong? The value of the console.log() has several syntax errors, a missing 
   closing double quoteation, closing parenthesis, and end ;
*/

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

/* Original Code
let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}
*/

let numbers = [2, 4, 8];
for (let i = 0; i < numbers.length; i++) { //i and ii are just indicators (think undefined x in math; also for loop)
  let doubled = numbers[i] * 2;
  console.log(doubled);
}
/* What’s Wrong? This is a runtime error. Within the variable numbers "eight" is a string, so it is not a number, 
   absolute or not. Therefore the loop function for (let i = 0; i < numbers.length; i++) is undefined. There is
   also a syntax error: the for loop is missing a closing brace.

   To fix this, I would change "eight" to 8, so that numbers = [2,4,8];
    Ran console.log(doubled) and the OUPUT showed
    4
    8
    16
*/


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) { //ME: not using the earlier defined variable numbers = [2, 4, 8]; b/c num is any number so num = i (TBD #)
  if (num < 2) { 
    return false; // 7 isn't smaller than 2 --> returns true and triggers for loop //J: does not execute; not return true
} 
  for (let i = 2; i < num; i++) { 
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false

// What’s Wrong?

