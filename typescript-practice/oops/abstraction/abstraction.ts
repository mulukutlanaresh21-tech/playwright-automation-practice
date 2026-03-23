//Abstraction = “Abstraction is the process of hiding implementation details and exposing only essential functionality. 
// In TypeScript, it is achieved using abstract classes and interfaces.”

//JavaScript/Typescript does NOT have direct abstraction like Java, but we achieve it using:
// Functions
// Classes
// Closures
/*
🔥 Key Concepts
✅ 1. Abstract Class Can have:
implemented methods ✔
abstract methods ✔
✅ 2. Abstract Method
No body
Must be implemented in concrete class
✅ 3. Concrete Class
Must implement all abstract methods
✅ 4. Abstract Child Class
Can skip implementation
Pass responsibility to next level
*/

abstract class CommonMethods {

    launchApp(): void{
        console.log("launch the Browser");
        console.log("Enter the URL");
        console.log("Perform the Login Operation");
    }

    // logoutApp(){
    //     console.log("Click on Profile Icon");
    //     console.log("Click on Logout Button");
    //     console.log("Perform the LogOut Operation");
    // }

    abstract logoutApp(): void;
}

class Test extends CommonMethods{ 
    //Non-abstract class 'Test' does not implement inherited abstract member logoutApp from class 'CommonMethods'

    logoutApp(): void {
        console.log("Click on Profile Icon");
        console.log("Click on Logout Button");
        console.log("Perform the LogOut Operation");
    }

    testCase(){
        this.launchApp();
        this.logoutApp();
    }

}

 abstract class Test1 extends CommonMethods{ 
    

    testCase(){
        this.launchApp();
        this.logoutApp();
    }

}
    
