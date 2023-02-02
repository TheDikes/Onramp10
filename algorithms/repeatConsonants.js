// Write a function that repeats every consonant in a string by a given factor

function repeatConsonant(word, multiplier){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    const result = "";

    for (i=0; i<word.length; i++){
        const letter = word[i];

        if(!vowels.includes(letter)){
            result += letter.repeat(multiplier);
        }else{
            result += letter;
        }
    }
    return result;
}