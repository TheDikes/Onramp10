// # Challenge 2

// Implement the function numSwap(number) which takes a number of even length, swaps pairs of its adjacent digits and returns the swapped number.
// ## Examples

// numSwap(1234) to return 2143  
// numSwap(432156) to return 341265


function numSwap(number){
    let numStr = number.toString();
    let swapped = '';

    for(i=1; i<numStr.length; i+=2){
        swapped += `${numStr[i]}${swapped[i-1]}}`;
    }
    return parseInt(swapped);
}

// OR

function numSwap(number){
    let numStr = number.toString();
    let swapped = '';

    for (let i=1; i<numStr.length; i += 2){
        swapped += str[i+1] + str[i];
    }
    return parseInt(swapped);
}

// OR

function numSwap(number){
    // convert the number to string using the .toString() method
    const numStr = number.toString();
    // convert numStr to an array
    const numArr = numStr.split('');
    const chunks = [];
    // split the numbers into pairs of 2
    for (let i=0; i<numArr.length; i+=2){
        // using .slice(a,b) method to return a portion of an array where a (start index) and b (end index)
        const newChunk = numArr.slice(i, i+2);
        // add the newly found newChunk to the chunks array
        chunks.push(newChunk);
    }
    const swappedArr = chunks.map((item) => item.reverse);
    // using the .flat() method to concatenate the chunks array.
    const joinedArray = chunks.flat();
    // converting the array back to a string using the .join() method
    const str = joinedArray.join('');
    // return the str back to a number using the Number() method
    return Number(str);
}