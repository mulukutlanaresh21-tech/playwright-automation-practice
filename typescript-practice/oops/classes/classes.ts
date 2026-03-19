//create employee class
class EmployeeDetails{
    empId: number =119;
    empName: string = "Naresh Mulukutla";

    empProjectDetails(): void{
        console.log(`Employee Id: ${this.empId} and Employee Name: ${this.empName}`);
        console.log(`Employee is working on Fynd Project`);
    }

}

// Access the data from the class by creating object
let obj = new EmployeeDetails();
console.log(obj);
console.log(obj.empId);
console.log(obj.empName);
obj.empProjectDetails();