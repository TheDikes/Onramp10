// Given a value N, calculate the Factorial of N E.g 4 factorial = 4 * 3 * 2 * 1
// function factorial(n) {
//    let result = 1;
//    for (i = n; i > 0; i--){
//     result *= i;              // Using loop
//    }
//    return result;
// }

function factorial(n) {
   if (n == 0) {
      return 1                  // using recursion
   }
   else return n * factorial(n-1)
}

console.log(factorial(5));