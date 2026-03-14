//1. Storing the data of a person in an object
interface personInfo {
    name: string,
    age?: number,
    empId: number,
    visaSatus: boolean,
    address: {
        city: string,
        state: string,
        country: string
    },
    role?:string // optional key if me mention ?

}

let person: personInfo = {
    name:"Naresh", 
    age:30,
    empId:119,
    visaSatus:true,
    address:{
        city:"Bellampalli",
        state:"Telangana",
        country:"India"
    }
}

//2. Access the data from the object
console.log(person.name);
console.log(person["name"]);

console.log(person.address.country);
console.log(person.address["country"]);

//3. Adding a new property to the object. 
person.role = "Quality Engineer";
console.log(person);

//4. Update the existing property of the object. 
person.role = "Senior Quality Engineer";
console.log(person);

//5. Delete the existing property of the object. 
delete person.age;
console.log(person);

//6. Check whether a particular property is available within the object. 
console.log("empId" in person);
console.log("city" in person.address);

//7. Get all the keys from the object. 
console.log(Object.keys(person.address));

//8. Get all the values from the object
console.log(Object.values(person.address));

//9. Get all the entries from the object both keys and values
console.log(Object.entries(person));

//10. Iterate all the keys from the array. for in loop
for(let key in person){
    console.log(key);
    console.log(person[key as keyof personInfo]);
}

//11. Verify the datatype of a particular property inside the object. 
console.log(typeof person.visaSatus);
console.log(typeof person.empId);

//12. Merge two different objects together. 
interface projectInfo {
    projectName: string,
    projectId:number
}

let project:projectInfo={
    projectName : "Fynd",
    projectId : 303
}

let mergedObject = {...person,...project}; 
console.log(mergedObject);