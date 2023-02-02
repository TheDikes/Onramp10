// Given a value N, calculate the Factorial of N E.g 4 factorial = 4 * 3 * 2 * 1
function factorial(n) {
   let result = 1;
   for (i = n; i > 0; i--){
    result *= i;
   }
   return result;
}

factorial(n);