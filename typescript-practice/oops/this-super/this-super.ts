class Parent{
    course: string = "Javascript";

    printProject(){
        console.log("DUPR Project");
    }
}

class Child extends Parent{

    course: string = "Typescript";

    printProject(){
        console.log("Fynd Project");
    }

    printCourse(course: string){
        console.log("Course Name is: " + course);
        // console.log("Course Name is: " + new Child().course);
        // console.log("Course Name is: " + new Parent().course);

        console.log("Course Name is: " + this.course);
        //console.log("Course Name is: " + super.course);  ==> methods are allowed but data we can't access with super keyword 
        this.printProject();
        super.printProject();
    }


}

let obj = new Child();
obj.printCourse("Playwright");