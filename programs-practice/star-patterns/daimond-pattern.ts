function daimondPattern(num: number): void{

    // Top part
    for(let i: number = 1; i<=num; i++){
        let pattern: string = "";

        //for left spaces
        for(let j: number = 1; j <= num -i; j++){
            pattern += " ";
        }

        //for stars
        for(let k: number = 1; k<=i; k++){
            pattern += "* ";
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

        //for stars
        for(let k: number = 1; k<= num -i; k++){
            pattern += "* ";
        }

        console.log(pattern);
    }
}

daimondPattern(5);