function reverseStringWithMethods(str: string): void{
    let reverse: string = str.split("").reverse().join("");
    console.log(reverse);
}


let str: string = "Naresh Mulukutla";

// calling function -1
reverseStringWithMethods(str);

function reverseString(str: string): string{
    let reverse: string = "";

    for(let i: number = str.length; i>=0; i--){
        reverse = reverse + str.charAt(i);
    }

    return reverse;
}

// Calling function - 2
console.log(reverseString(str));