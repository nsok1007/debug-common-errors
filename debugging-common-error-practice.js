/*
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false
*/

//SOLUTION
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  // Supposed to indicate num is NOT prime
    }
  }
  return true; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false


/* 
1. We are looking to see if a number (variable) is prime

2. We can check if a number is prime using isPrime (a function)

3. We then run the first if statement (num < 2)
      if num < 2 is satisfied (e.g., 1 < 2), it is considered incorrect and no further code is executed (ENDS HERE)
      if num < 2 is not satisfied (e.g., 4), it is correct and the execution continues to the next line (KEEPS GOING)

4. We then run the for loop (let i = 2; i < num; i++) until the value of i equals the num value

    This for loop has three different parts:
        let i = 2 --> i (an indicator) is defined and given the value 2
        i < num --> ACTUAL EXPRESSION TO EVALUATE
        i++ --> indicates incremental steps (i + 1 for each loop executed)

    initial loop: is 2 < 7? YES. Run to evaluate if (num % i === 0) 

5. The loop cycles while condition is true (e.g., if num = 7, there are six cycles --> i = 7 IS NOT LESS THAN num = 7)
    second loop: is 3 < 7? YES. Run to evaluate if (num % i === 0) // asks if remainder (% sign) of i (let i = 2) from dividing the num value
    third loop: is 4 < 7? YES. Run to evaluate if (num % i === 0)
    fourth loop: is 5 < 7? YES. Run to evaluate if (num % i === 0)
    fifth loop: is 6 < 7? YES. Run to evaluate if (num % i === 0)
    sixth loop: is 7 < 7? NO. Skips the if statement and jumps to the line 'returns true'
        
    //return means 'result comes back as' true is boolean value from the function

6. Then we can run the console.log(isPrime(7)) line to verify if the num value is prime.

// console.log(isPrime(7)) --> prints whether the value of the function (isPrime) is true or false 

Value is returned from isPrime and passed to console.log
*/