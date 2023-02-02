// Replace all numbers in an array, X divisble by an integer, Y with a string "isDivisible".
// For Example, 
// replaceDivisible(X,Y)
// replaceDivisible([2,4,3,6,5], 3) => [2,4, 'isDivisible', 'isDivisible', 5]
// replaceDivisible([12,4,4,6,5], 2) => ['isDivisible', 'isDivisible', 3, 'isDivisible', 5]


function replaceDivisible(X, Y){
    let newArr = X.map((item) => {
        if(item % Y === 0){
            return "isDivisible"
        }else{
            return item
        }
    });
    return newArr;
}