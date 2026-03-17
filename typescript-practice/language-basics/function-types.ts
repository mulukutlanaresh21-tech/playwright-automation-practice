// Functions in Typescript ==>Function is all about a block of code or a collection of statements to complete a specific task. 

//There are mainly three different types of functions that will be used in JavaScript and TypeScript. 

//1. Named Function
//2. Anonymous Function
//3. Arrow Function


//1. Named Function 
//Named functions are nothing but the functions that are declared explicitly with some name. 

//Syntax of Named Function
// function functionName(parameters){
//     //function body
// }

function launchBrowserAndLogin(browser: string, url:string): void{
    console.log(`Launch the ${browser} Browser`);
    console.log(`Enter the URL: ${url}`);
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
    console.log("Verify the home page is displayed");
}

launchBrowserAndLogin("Chrome", "https://naresh.com");


//2. Arrow Function /Lambda Function

//Arrow functions are nothing but the function that we are going to write without any name and 
// implementation Will be written by using arrow mark. 

//Syntax of Arrow Function
// let functionName = (parameters) => {
//     //function body
// }

// regular function
function sum(a: number, b: number): number{
    return a+b;
}

//calling regular function
console.log("Regular function - sum: "+sum(10,20))

// Arrow function
let add = (a: number, b: number) => a + b;
let square = (a: number) => a*a;

//calling arrow function
console.log("Arrow function - sum: "+add(10,20));
console.log("Arrow function - square: "+square(5));

//3. Anonymous Function

//Anonymous functions are the functions defined without any name. 
// This anonymous function is regularly used as a parameter of other functions. 

//Syntax of Anonymous Function
// function(function){
//     //function body
// }

//function with paremeter as function

function mainFunction(innerFunction:  (a: number) => number): void{
    console.log("Anonymous function -square: "+innerFunction(6));
}

//calling cunction
mainFunction(function(a: number): number{
    return a*a;
});