function powNumber(x: number, y:number): void{

    let power: number = 1;
    if(y > 0){
        for(let i: number = 1; i <= y; i++){
            power *= x;
        }
    }else{
        for(let i: number = 1; i <= (y*-1); i++){
            power *= x;
        }
        power = 1/power;
    }
    
    console.log(power.toFixed(5));
}

//calling function
powNumber(2.00000, -4);