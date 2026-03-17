function leftHandedTriangle(num: number): void{

    for(let i: number = 1; i<=num; i++){
        let pattern: string = "";

        //for left spaces
        for(let j: number = 1; j <= num -i; j++){
            pattern += " ";
        }

        //for stars
        for(let k: number = 1; k<=i; k++){
            pattern += "*";
        }

        console.log(pattern);
    }
}

// Calling function:
leftHandedTriangle(6);

function triangle(num: number): void{

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
}

// Calling function:
triangle(6);