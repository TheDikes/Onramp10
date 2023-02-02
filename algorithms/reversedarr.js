// Convert number to reversed array of digits. GIven a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example
// 348597--> [7, 9, 5, 8, 4, 3]

function reversedDigits(num){
    let str = num.toString();
    let reverseArr = [...str].reverse();
    return reverseArr.map((item) => {
        return Number(item);
    });
}