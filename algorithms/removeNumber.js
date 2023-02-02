// Given a string, remove all numbers from the string and return the removed numbers

function removeNumbers(str){
    let newStr = str.split('').map((item) => item.replace(/[0-9]/g, '')).join('');
    return newStr;
}

///or

function removeNumbers(str) {
    let removedNumbers = [];
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            newStr += str[i];
        } else {
            removedNumbers.push(parseInt(str[i]));
        }
    }
    return { removedNumbers, newStr };
}