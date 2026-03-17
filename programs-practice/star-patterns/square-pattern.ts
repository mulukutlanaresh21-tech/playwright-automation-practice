function squarePattern(num: number): void{
    for(let i: number= 1; i<=num; i++){
        let pattern: string = "";

        for(let j: number = 1; j <= num; j++){
            pattern += "* ";
        }

        console.log(pattern);
    }
}

//calling square pattern
console.log("Square Pattern:");
squarePattern(5);
console.log("\n");

function rectanglePattern(row: number, col: number): void{
    for(let i: number= 1; i<=row; i++){
        let pattern: string = "";

        for(let j: number = 1; j <= col; j++){
            pattern += "* ";
        }

        console.log(pattern);
    }
}

//calling rectangle pattern
console.log("Rectangle Pattern:");
rectanglePattern(5, 8);