// Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number characters in the second string. 
// Example, 
// comp("AB", "CD") => true
// comp("ABC", "DE") => false
// comp("hello", "edabit") => false

function comp(str1, str2){
    if(str1.length === str2.length){
        return true;
    }else{
        return false;
    }
}