function isPrimeNumber(num: number):void{
    let count: number = 0;

    for(let i:number=1; i<=num; i++){
        if(num % i === 0){
            count++;
        }
    }

    if(count > 2){
        console.log(false);
        console.log(`${num} has more than two divisors, so ${num} is Not a Prime Number`);
    }else if(count === 2){
        console.log(true);
        console.log(`${num} has two divisors: 1 and ${num}, making it a Prime Number`);
    } else{
        console.log(false);
        console.log(`${num} has only one divisor (1 itself), which is not sufficient for it to be considered as Prime`);
    }
}

isPrimeNumber(25);