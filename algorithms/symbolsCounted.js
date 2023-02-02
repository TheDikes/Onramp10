// In this kata you will have to transform each string so that it contains count for every symbol it contains, starting from 2. The order of symbols should be preserved.

// Example: abbreviation => a2b2revi2ton


function symbol(str){
    let charCount = {};
    let result = "";

    for (let i=0; i<str.length;i++){
        charCount[str[i]] = ++charCount[str[i]] || 1;
    }
    
    for (let key in charCount){
        if (charCount[key] === 1){
            charCount[key] = "";
        }
        result += key + charCount[key];
    }

    return result;
}

