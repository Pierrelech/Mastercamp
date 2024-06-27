
  /**
 * Calculates the factorial of a given non-negative integer.
 * @param {number} n - The non-negative integer to calculate the factorial of.
 * @returns {number} - The factorial of the given number.
 */
  export function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
      return 1;
    } 
    // Base case: factorial of 1 is 1
    else if (n === 1) {
      return 1;
    } 
    // Recursive case: n! = n * (n-1)!
    else {
      return n * factorial(n - 1);
    }
  }
  
  // Example usage:
  console.log(factorial(5)); // Output: 120
  