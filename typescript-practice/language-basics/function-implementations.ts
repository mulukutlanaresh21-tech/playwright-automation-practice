//Function Implementations

//1. Function without parameters and without return type. 
//Creating a function, it won't take any input parameters, and it is always going to return void type. 

function greet(): void{
    console.log("Hello buddy!");
}

//calling function
greet();

//2. Function with parameters and without return type. 
//Creating a function, it will take an input parameter, but it is not going to return anything.( Void type)
function greetPerson(name: string): void {
    console.log(`Hello, ${name}!, How are you doing?`);
}

//calling function
greetPerson("Dakshith");

//3. Function with parameters and with return type. 
//Creating a function, it will take an input parameter, and it is going to return a value. 
function add(a: number, b: number): number {
    return a + b;
}

//calling function
console.log(add(10, 20));

//4. Function without parameters and with return type. 
//Creating a function, it won't take any input parameters, but it is going to return a value. 
function getGreeting(): string {
    return "Hello, World!";
}

function getCurrentDate(): Date {
    return new Date();
}

//calling function
console.log(getGreeting());
console.log(getCurrentDate());

//5. Function with optional parameters
//Creating a function that is going to take some input parameters. Out of those, some of them are optional to enter. 
//? mark is used to make the parameter optional.

function greetPersonWithOptional(name: string, age?: number): void {
    if (age) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    } else {
        console.log(`Hello, ${name}!`);
    }
};

//calling function
greetPersonWithOptional("Dakshith");
greetPersonWithOptional("Naresh", 25);

//6. Function with default parameters
//Creating a function that is going to take some input parameter out of those, 
// some of the default parameters are assigned with some default values. .

function personDetails(name: string, visaStatus?: boolean): void{
    console.log(`Employee: ${name}`);
    console.log(`Visa Status: ${visaStatus}`);
}

//calling function
personDetails("Dakshith");
personDetails("Naresh",true);

//7.Function with rest parameters
//Creating a function that can take unlimited input parameters as an array 

function sumOfNumbers(...numbers: number[]): void{
    let sum: number = 0;

    for(let num of numbers){
        sum += num;
    }

    console.log(`Sum of Numbers: ${sum}`);
}

// calling function
console.log("Function with rest parameters - sum of numbers");
sumOfNumbers(1,2,6,8,8);