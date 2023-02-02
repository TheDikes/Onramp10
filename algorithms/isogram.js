// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram.Ignore the letter case.
// Example, 
// "Dermatoglphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// Steps:
// 1. create an object.
// 2. convert all elements to lowercase
// 3. Loop through the converted lowercase
// 4. store them to the object and if there is a repeating letter return false, and if i get to the end of the array it means there is no repeating string, and then return true

function isogram(str){
    let obj = {};
    let lowerCase = str.lowerCase();

    for (let i=0; i<lowerCase.length; i++){
        // declaring the position of the index of the lowerCase to be char
        let char = lowerCase[i];
        // if the current value is already in the object it means a repeating letter, hence return false
        if(obj[char]){
            false
        }else{
            // if the current value is not found in the object assign it a value of 1
            obj[char] = 1
        }
    }
    return true
}
