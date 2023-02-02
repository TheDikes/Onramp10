// Create a function that takes a string as an arguments and converts the first character of each word to uppercase. Return the newly formatted string

function makeTitle(str){
    let splitted = str.split(' ');
    let res = "";
    for(let i=0; i<splitted.length; i++){
        let char = splitted[i];
        let upper, cut, combined;
        upper = char[0].toUpperCase();
        cut = char.slice(1);
        combined = upper + cut;
        res += combined + " ";
    }
    return res.trim();
}

// OR 

function toTitleCase(str) {
    let words = str.split(" ");
    let titleCasedWords = words.map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
    });
    return titleCasedWords.join(" ");
}