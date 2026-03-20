function daimondPatternNumbers(num: number): void{

    // Top part
    for(let i: number = 1; i<=num; i++){
        let pattern: string = "";

        //for left spaces
        for(let j: number = 1; j <= num -i; j++){
            pattern += " ";
        }

        //for numbers
        for(let k: number = 1; k<=i; k++){
            pattern += k +" ";
        }

        console.log(pattern);
    }

    //bottom part
    for(let i: number = 1; i<=num; i++){
        let pattern: string = "";

        //for left spaces
        for(let j:number = 1 ; j <= i; j++){
            pattern += " ";
        }

        //for Numbers
        for(let k: number = 1; k<= num -i; k++){
            pattern += k+ " ";
        }

        console.log(pattern);
    }
}

//calling Diamond shaped numbers function
daimondPatternNumbers(8);