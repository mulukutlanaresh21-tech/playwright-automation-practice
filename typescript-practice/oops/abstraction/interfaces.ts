//Interface: 

interface Application1{
    
    loginToApplication(): void;
    
    logoutFromApplication(): void;

}

interface Application2{
    
    verifyHomePage(): void;
    
    verifyDashBoard(): void;
    
}

class Test implements Application1, Application2{

    loginToApplication(): void{
        throw new Error("Method is not implemented");
    }

    logoutFromApplication(): void{
        throw new Error("Method is not implemented");
    }

    verifyHomePage(): void{
        throw new Error("Method is not implemented");
    }

    verifyDashBoard(): void{
        throw new Error("Method is not implemented");
    }
}

//Interfaces – Key Points

//1. Defines Structure (Contract): Interface describes the shape of an object
interface Person {
  name: string;
  age: number;
}

//2. Used for Type Safety
const p: Person = { name: "Naresh", age: 25 }; // ✅

//3. Supports Optional Properties
interface User {
  name: string;
  age?: number;
}

//4. Readonly Properties
interface Emp {
  readonly id: number;
}

//5. Supports Functions
interface Add {
  (a: number, b: number): number;
}

//6. Supports Inheritance
interface A { a: number }
interface B extends A { b: number }

//7. Multiple Inheritance
interface C extends A, B {}

//8. Used with Classes (implements)
interface Vehicle {
  start(): void;
}

class Car implements Vehicle {
  start() {
    console.log("Car started");
  }
}

//9. Cannot Have Implementation: Only method signatures (no logic)
interface Test {
  run(): void; // no body
}

//10. Can Be Reopened (Unique Feature): Both merge automatically
interface User { name: string }
interface User { agee: number }