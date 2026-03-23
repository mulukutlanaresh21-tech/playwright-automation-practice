//Access Modifiers in TypeScript

//1. public /no keyword ==> We can access from everywhere. 
//2. Protected ==> Can be accessed either within the class or its subclass only 
//3. Private ==> Can be accessed within the class only 

let a: number = 10; //public by default

//Main Class
class Person {
   public name: string = "Naresh";
   private age: number = 32;
   protected city: string = "Bellampally";

    //method to access data with in the class
    printEmpData() {
        console.log("accessing data with in the class");
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
        console.log(a);
    }

}

//Child Class
class Child extends Person {

    //method to access data with in the child class
    printEmpData() {
        console.log("accessing data with in the child class");
        console.log(this.name);
        console.log(this.city);
        console.log(this.age); // we can't access in child class because its private
    }
}

//Ouside Class
class Outside {

    //method to access data outside of the class
    printEmpData() {
        console.log("accessing data with in the ouside class");
        let obj = new Person();
        console.log(obj.name);
        console.log(obj.age); // we can't access outside class because its private
        console.log(obj.city); // we can't access outside class because its protected
    }
}

let obj1 = new Person();
obj1.printEmpData();
let obj2 = new Child();
obj2.printEmpData();
let obj3 = new Outside();
obj3.printEmpData();