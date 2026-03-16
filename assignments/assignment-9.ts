// Assignment: Write a program to print * in triangle pattern
// 1. If I will pass int rows = 5 then it should print triangle with 5 Rows
//     *
//    **
//   ***
//  ****
// *****

function leftHandedTriangle(num: number):void{
   
    for(let i: number = 1; i<=num; i++){
        let pattern: string = "";

        //To print left stars
        for(let j: number = 1; j<= num -i; j++){
            pattern += " ";
        }

        // to print stars
        for(let k: number = 1; k<= i; k++){
            pattern += "*";
        }

        
        console.log(pattern);
    }
    
}

leftHandedTriangle(5);