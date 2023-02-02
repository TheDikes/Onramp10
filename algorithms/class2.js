// 3. Given a string, check if its a palindrome. If it is return true else return false
function isPalindrome(string){
    let arr = string.split('');
    let reverseArr = arr.reverse();
    let stringReverse = reverseArr.join('');
    
    if(string === stringReverse){
        return true;
    }else {
        return false;
    }
}

isPalindrome('madam');

// 4. Given a value N, calculate the Factorial of N E.g 4 factorial = 4 * 3 * 2 * 1
function factorial(n) {
    let result = 1;
    for (let i=n; i >= 1; i--){
        result *= i;
    }
    return result;
}

factorial(n);

// 5. Hackerrank - CamekCase question
// There is a sequence of words in CamelCase as a string of letters, s, having the following properties:

// It is a concatenation of one or more words consisting of English letters.
// All letters in the first word are lowercase.
// For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
// Given , determine the number of words in .

// Example
// s = oneTwoThree
// There are  words in the string: 'one', 'Two', 'Three'.

// Function Description

// Complete the camelcase function in the editor below.

// camelcase has the following parameter(s):

// string s: the string to analyze
// Returns

// int: the number of words in 
// Input Format

// A single line containing string .

// Constraints
// 1<= length of s <= 10**5
// Sample Input
// saveChangesInTheEditor
// Sample Output

// 5
// Explanation

// String  contains five words:

// save
// Changes
// In
// The
// Editor
function camelCase(s){
    let result = 1;
    for (let char of s){
        if(char.toLowerCase !== char){
            result++;
        }
    }
    return result;
}

function camelCase(s);

// 6. 


