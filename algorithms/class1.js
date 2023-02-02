// Given a string or array, return the string in reverse
// last number in a string = str.length - 1

let str = "abcde";
function reverseString (str) {
    let result = '';
    for(let i = str.length -1 ; i >= 0; i--){
       result += str[i]       
    }
    return result;
}
reverseString('ball');

// // OR
// str.split('') or (...str) to convert a str to an array, and you make use of join{''} to add up a string that has been converted to an array back to a string

function reverseStringTwo(str){
    return str.split('').reverse().join('');
};


//2. Given a sentence, return the character that occurred the highest number of times
function highestCharacter(string) {
    const store = {};
    for (let char of string){
        // declaring key to convert and trim the statement to lowercase and without spacing
        let key = char.toLowerCase().trim();
        // if the key is an empty string ("") continue
        if (key === "") continue;
        // using if/else to show the iterable for the character with highest count
        if(store[key]){
            store[key]++;
        }else{
            store[key] = 1;
        }
    }

    // to see the highest occurrence amongst all the objects
    const values = Object.values(store);
    const highestValue = Math.max(...values);
    const keys = Object.keys(store);

    for (let key of keys){
        if (store[key] === highestValue){
            return key;
        }
    }
}

highestCharacter("I want to eat");

// OR
function highestCharacter(string) {
    // Create an object to store the count of each character
    let store = {};
    // Iterate through each character in the sentence
    for (let char of string) {
        // declaring key to convert and trim the statement to lowercase and without spacing
        let key = char.toLowerCase().trim();
        // if the key is an empty string ("") continue
        if (key === "") continue;
        // If the character is already in the object, increment its count by 1
        if (key in store) {
        store[key]++;
        }
        // If the character is not in the object, add it with a count of 1
        else {
        store[key] = 1;
        }
    }
    
    // Find the character with the highest count
    let highestCount = Object.keys(store).reduce((a, b) => store[a] > store[b] ? a : b);
    return highestCount;
}
highestCharacter("I want to eat");


