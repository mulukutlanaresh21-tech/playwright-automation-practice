let names: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: any[] = [75, 80, 82];
let updatedmarks: any[] = [];
let total: number = 0;

for (let i: number = 0; i < marks.length; i++) {
    updatedmarks.push(marks[i] + 10);
}

console.log("Updated Marks:");

for (let i: number = 0; i < marks.length; i++) {
    console.log(names[i]+": "+updatedmarks[i]);
}

for (let i: number = 0; i < marks.length; i++) {
    total = total + updatedmarks[i];
}

console.log("Average Marks: "+(total/updatedmarks.length).toFixed(1));
