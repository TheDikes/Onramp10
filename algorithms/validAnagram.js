// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema formed from iceman.
// Example, 
// validAnagram('', '') --> true 
// validAnagram('aaz', 'zza') --> false 
// validAnagram('anagram', 'nagaram') --> true 
// validAnagram('rat', 'car') --> false 
// validAnagram('awesome', 'awesom') --> false 
// validAnagram('qwerty', 'qeywrt') --> true 
// validAnagram('texttwitsttime', 'timetwisttext') --> true 

// STEPS:
// 1. Check the length of the 2 strings and if the are not equal return false
// 2. create an obj
// 3. loop through the first string and increment the values storing in the object 
// 4. loop through the second string and decrement the values stored in the object, then return true if all is decremented to 0
// 5. if the letter is not found in the previous str, return false

function validAnagram(str1, str2){
    let obj = {};
    if(str1.length !== str2.length){
        return false;
    }

    for (i=0; i<str1.length; i++){
        let char = str1[i];
        // if the char is already found in the object increment it by 1
        if(obj[char]){
            obj[char] += 1
        }else{
            // if it not found in the object assign a value of 1 to it 
            obj[char] = 1
        }
    }

    // looping through the str2
    for(let i=0; i<str2.length; i++){
        let char = str2[i];
        // if i cant find the char or the letter is zero and its not found in the obj, it shows its not an anagram
        if(!obj[char]){
            return false
        }else{
            // if the char can be found in the object then reduce it by 1
            obj[char] --
        }
    }
    return true;
}

// OR

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    return str1 === str2;
}


