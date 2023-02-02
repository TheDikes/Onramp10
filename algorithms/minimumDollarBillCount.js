// DESCRIPTION:
// Find the minimum dollar bill's count to represent some value based on the availables bills.

// You will receive the value and an array as input (the array contains the available bills).

// For instance:

// minimumBillCount(100, [10, 50, 20]) should return 2; (2x$50)

// minimumBillCount(500, [100, 50, 20]) should return 5; (5x$100)

// minimumBillCount(40, [1, 10, 20]) should return 2; (2x$20)

// minimumBillCount(5, [1, 10, 20]) should return 5; (5x$1)

// It is guaranteed that the value can always be divided into given bills, and there are no "tricky" edge cases.

function minimumBill(value, numArr){
    let bill = 0;
    numArr.sort((a,b) => b-a).forEach((bill) => {
        bill += parseInt(value / bill);
        value %= bill;
    })
    return bill;
}

// OR 

function minimumBillCount(value, bills) {
    // sort bills in descending order
    bills.sort((a, b) => b - a); 
    // initializing the billCOunt to 0
    let billCount = 0;
    // iterating through the bills array to find the new billCount
    for (let i = 0; i < bills.length; i++) {
        // while the value given is >= bills[i]
        while (value >= bills[i]) {
            value -= bills[i];
            billCount++;
        }
    }
    return billCount;
}

// OR

function minimumBillCount(value, availables){
    let bills = 0
    availables.sort((a,b) => b-a).forEach(bill => {
      bills += Math.floor(value / bill)
      value %= bill
    })
    return bills
  }

//   OR
function minimumBillCount(value, numArr){
    let bills = 0;
    let newBalance = value;
    let sortedArr = numArr.sort((a,b) => b-a );

    for (let bill of sortedArr){
        const remainder = newBalance % bill;
        bills += (newBalance - remainder) / bill;

        if(remainder === 0) break;
        if(remainder > 0){
            newBalance = remainder
        }
    }
    return bills;
}

