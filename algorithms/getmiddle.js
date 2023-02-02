// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// getMiddle("test") should return "es"

// getMiddle("testing") should return "t"

// getMiddle("middle") should return "dd"

// getMiddle("A") should return "A"

function getMiddle(str){
    let mid = Math.floor(str.length/2);

    if(str.length % 2 === 0){
        // return the previous value of the mid and the value of the mid
        return str[mid -1] + str[mid];
    }else{
        // return the mid of the string if the str length is odd
        return str[mid];
    }

}