//Jumping Statements

//Jumping statements are used to jump the control from one point to another point in the program.
//There are mainly two jumping statements used in loops. 

//1.break ==>break statement will break the entire loop. 

console.log("Break Example");
for(let i:number = 1; i<=10; i++){
    if(i==5){
        break;//break the entire loop
    }
    console.log(i);
}

//2.continue ==> continue statement will skip the current iteration only. 
console.log("Continue Example");
for(let i:number = 1; i<=10; i++){
    if(i==5){
        continue;//skip current iteration and move to next iteration
    }
    console.log(i);
}