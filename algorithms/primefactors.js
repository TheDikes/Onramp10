function primeFactors(number){
    let factors = [];
    let divider = 2;
    while (number >=2 ){
        if (number % divider === 0){
            factors.push(divider);
            number = number / divider;
        }else{
            divider ++;
        }
    }
    return factors;
}