function rightHandedTriangle(num: number): void{

    for(let i: number = 1; i <= num; i++){
        let pattern:string = "";

        for(let j: number = 1; j <= i; j++){
            pattern += "* ";
        }
        console.log(pattern);
    }
}

rightHandedTriangle(5);