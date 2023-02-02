function isPalindrome(str){
    let reverseArr = str.split("").reverse();
    let strReverse = reverseArr.join("");

    if (str === strReverse){
        return true;
    }else{
        return false;
    }
}

// Complete the solution so that it reverses the string passes into it.
function reverse(str){
    return str.split("").reverse(),join("");
}
