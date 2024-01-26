// Given an array of words, return words whose length is greater than a given length

function wordsLongerThan(words, length) {
    const longWords = [];

    for(let i = 0; i < words.length; i++){
        const word = words[i];

        if(word.length > length){
            longWords.push(word);
        }
    }
    return longWords;            
}


console.log(wordsLongerThan('I will be going to the market next week'))