class Maths{
    // add(a: number, b: number):number{
    //     return a + b;
    // }

    // add(a: string, b: string):string{
    //     return a + b;
    // }  

    //Alternate solution to achieve method overloading(polymophism in Typscript)
    add(a: any, b: any):any{
        return a + b;
    }
    
}

//Run-Time Polymophism
class Parent{
    add(a: number, b: number): number{
        return a + b;
    }
}

class Child extends Parent{
    add(a: number, b: number): number{
        return a + b + 10;
    }
}

let obj = new Child();
let result = obj.add(20, 30);
console.log(result);
