// The first century spans from year 1 up to and including year 100, the second century from year 101 up to and including the year 200, etc.
// Task, 
// Given a year, return the century it is in
// Examples, 
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function getCentury(year){
    if (year % 100 === 0){
        return Math.floor(year / 100);
    }else {
        return Math.floor(year / 100) +1;
    }
}

// OR

function getCentury(year){
    return Math.floor((year - 1) / 100) + 1;
}

// OR
function getCentury(year){
    if (year % 100 === 0){
        return (year / 100);
    }else {
        return Math.floor(year / 100 +1);
    }
}

// OR
function getCentury(year){
    return Math.ceil(year / 100);
}

// OR
function getCentury(year){
    if (year % 100 === 0){
        return parseInt(year / 100);
    }else {
        return parseInt(year / 100) +1;
    }
}