class Employee{

    constructor(){
        // Internallay it will create a constructor if we call any object
    }

    //method - 1
    printEmpDetails(empId: number, empName: string){
        console.log("Employee Id: " + empId);
        console.log("Employee Name: " + empName);
    }

    //method - 2
    printEmpProjectDetails(empId: number, empProject: string){
        console.log("Employee Id: " + empId);
        console.log("Employee Project: " + empProject);
    }

    //method - 3
    printEmpRole(empId: number, empRole: string){
        console.log("Employee Id: " + empId);
        console.log("Employee Role: " + empRole);
    }

}

let emp = new Employee();

//calling method - 1
emp.printEmpDetails(119, "Naresh Mulukutla");

//calling method - 1
emp.printEmpProjectDetails(119, "Fynd");

//calling method - 1
emp.printEmpRole(119, "QA Engineer");