
class Class1{

    empId: number = 119;
    empName: string = "Naresh Mulukutla";
}

class Class2 extends Class1{

    empSalary: number = 32000;
}

let emp = new Class2();

console.log(emp.empSalary);
console.log(emp.empName);
console.log(emp.empId);