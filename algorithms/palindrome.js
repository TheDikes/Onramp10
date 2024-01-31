function isPalindrome(str) {
    str = str.replace(/\s/g, ''); // or use str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); to remove space/non-alphanumeric 

    let reverseArr = str.split('').reverse().join('');

    return str.toLowerCase() === reverseArr.toLowerCase()
}


console.log(isPalindrome("Never Odd or Even")) // Should be True
console.log(isPalindrome("abc")) // Should be False
console.log(isPalindrome("kayak")) // Should be True
console.log(isPalindrome("madam"))

// the overall time complexity of the palindrome function is O(n), where n is the length of the input string.