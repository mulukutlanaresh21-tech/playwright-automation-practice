class Employee{

    //decalre variable to store common parameters
    empId: number;

    constructor(id: number){
        this.empId = id;
    }


    //method - 1
    printEmpDetails(empName: string){
        console.log("Employee Id: " + this.empId);
        console.log("Employee Name: " + empName);
    }

    //method - 2
    printEmpProjectDetails(empProject: string){
        console.log("Employee Id: " + this.empId);
        console.log("Employee Project: " + empProject);
    }

    //method - 3
    printEmpRole(empRole: string){
        console.log("Employee Id: " + this.empId);
        console.log("Employee Role: " + empRole);
    }

}

let emp = new Employee(119);

//calling method - 1
emp.printEmpDetails("Naresh Mulukutla");

//calling method - 1
emp.printEmpProjectDetails("Fynd");

//calling method - 1
emp.printEmpRole("QA Engineer");