// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str){
    let newArr = [];

    for (let i=0; i<str.length; i++){
        let capital = str[i].toUpperCase();
        let repeated = str[i].repeat(i).toLowerCase();
        let newStr = capital + repeated;
        newArr.push(newStr);
    }
    return newArr.join("-");
}

// OR (in class solution)

/*function accum(str){
    let res = [];
    for(let i=0; i<str.length; i++){
        res.push(str[i].toUpperCase());
        res.push(str[i].repeat(i));
        res.push("-")
    }
    const joinedStr = res.join("");
    return joinedString.subString(0, joinedString.length -1);
}
*/

console.log(accum("RqaEzty"))