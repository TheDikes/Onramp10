// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// to show vowels exits in the string excluding repetition
function vowelsCount(str){
    const vowels = 'aeiou';
    const checked = [];
    let count = 0;
    for (let char of n){
        if(vowels.includes(char) && !checked.includes(char)){
            checked.push(char);
            count++;
        }
    }
    return count;
}
let str = "I am a boy"
getCount(str)


// OR
// checking the vowel exits in the string repetition included
function vowelsCount(string){
    let vowels = 'aeiou';
    let count = 0;

    for(let char of string){
        if(vowels.includes(char)) count++;
    }
    return count;    
}

vowelsCount(string);


function vowelsCount(str){
    let vowels = 'aeiou';
    let count = 0;

    for(let char of str){
        if(vowels.indexOf(char) != -1){
            return count++
        }
    }
    return count;
}