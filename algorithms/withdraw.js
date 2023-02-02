// An ATM only has 100, 50, 20 Naira bills (NGN) available to be dispensed.
// Given an amount between 40 and 10000 Naira (inclusive) rounded to the nearest 10 and assuming that the ATM wants to use as few bills as possible.

// Implement the function withdraw(amount) that returns the minimal number of 100, 50 and 20 Naira bills the ATM needs to dispense (in that order) in an array.

function withdraw(amount){
    let bills = [0, 0, 0];
    bills[0] = Math.floor(amount / 100);
    amount += bills[0] % 100;
    bills[1] = Math.floor(amount / 50);
    amount += bills[1] % 50;
    bills[2] = Math.floor(amount / 20);
    amount += bills[2] % 20;
    return bills;
}

// OR (class answer)
function withdraw(amount){
    const noOf100s = Math.floor(amount / 100);
    amount -= noOf100s *100;
    const noOf50s = Math.floor(amount / 50);
    amount -= noOf50s *50;
    const noOf20s = Math.floor(amount / 20);
    amount -= noOf20s *20;
    return [noOf100s, noOf50s, noOf20s];
}