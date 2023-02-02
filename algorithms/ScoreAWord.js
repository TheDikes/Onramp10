// You are given a word, your task is to score the word. The score of a word, is the sum of the scores of its letters.
// The score of a letter is the position of the letter in the alphabet.
// For example, the score of the word "hello" is 8 + 5 + 12 + !2 + 15 =52;

const letters = "abcdefghijklmnopqrstuvwxyz";

function scoreWord (word){
    let sum = 0;
    for (let i=0; i<word.length;i++){
        let indexPosition = letters.indexOf(word[i]) + 1;
        sum += indexPosition
    }
    return sum;
}

// OR

function scoreWord(word){
    let score = 0;

    for (i=0; i<word.length; i++){
        score += letters.indexOf(word[i] + 1)
    }
    return score;
}