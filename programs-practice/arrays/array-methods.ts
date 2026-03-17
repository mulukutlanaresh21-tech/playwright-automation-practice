// double the values of given array
console.log("map function");
const nums: number[] = [1, 2, 3];
const doubled: number[] = nums.map<number>(n => n * 2);
console.log(doubled); // [2, 4, 6]

// Extract even numbers using filter
console.log("filter method");
const num: number[] = [1, 2, 3, 4];
const even: number[] = num.filter(n => n % 2 === 0);
const odd: number[] = num.filter(n => n % 2 === 1);
console.log("Even numbers: "+even.join(" ")); // 2 4
console.log("Odd numbers: "+odd); // 1, 3
console.log(even);// [2, 4]

// Reduce array to one ==> reduce((previousVal, currentVal) => previousVal * currentVal, initialVal)
console.log("reduce method");
const sum: number = num.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

const mul: number = num.reduce((acc, curr) => acc * curr, 1);
console.log(mul); // 24

//foreach loop to iterate all the elements in array
console.log("foreach loop");
num.forEach(n => console.log(n));

// Extract the first match of given condition
console.log("find method");
const mark: number[] = [75, 90, 65, 74, 76, 60];
const result: number | undefined = mark.find(n => n > 75);
console.log(result); // 90

//Extract the first matched index of given condition
console.log("findIndex method");
const index: number = mark.findIndex(n => n > 75);
console.log(index); // 1

// if any one of the element satisefy the condintion returns true, otherwise false
console.log("some method");
var numbers: number[] = [1, 3, 5];
console.log(numbers.some(n => n % 2 === 0)); // false

var numbers: number[] = [1, 3, 5, 6];
console.log(numbers.some(n => n % 2 === 0)); // true

// if all the element satisefy the condintion returns true, otherwise false
console.log("every method");
var numbers: number[] = [1, 3, 5];
console.log(numbers.every(n => n % 2 === 1)); // true

var numbers: number[] = [1, 3, 5, 6];
console.log(numbers.every(n => n % 2 === 0)); // false

//if element present in array returns true, otherwise false
console.log("includes method");
var fruites: string[] = ["apple", "banana"];

console.log(fruites.includes("apple")); // true
console.log(fruites.includes("mango")); // false

// Add and remove elements in Array at the end
console.log("push & pop methods");
let arr5:number[] = [1, 2];

arr5.push(3); // add element at the end
console.log(arr5); // [1,2,3]
arr5.pop();   // remove element of end
console.log(arr5);// [1,2]

// Add and remove elements in Array at the start
console.log("shift & unshift methods");
let arr1:number[] = [2, 3];

arr1.unshift(1) // add element at the start
console.log(arr1); // [1,2,3]
arr1.shift();   // remove element of start
console.log(arr1);// [2,3]

//Copy part of array using ==> slice(startIndex, endIndex+1)
console.log("slice method");
var arr2: number[] = [1, 2, 3, 4, 5, 6];

console.log(arr2.slice(2, 4)); // [3,4]
console.log(arr2.slice(1, 4)); // [2,3,4]
console.log(arr2.slice(4)); // [5,6]
console.log(arr2.slice(-2)); // [5,6] if we give negative it will copy last elements
console.log(arr2.slice(-4)); // [3,4,5,6] if we give negative it will copy last elements

// Modify orgiginal array using ==> splice(index, noOfElementsToRemove) 
console.log("splice method");
var arr2: number[] = [1, 2, 3, 4, 5, 6];

arr2.splice(1, 1); // remove 2
console.log(arr2); // [1,3,4,5,6]

var arr2 = [1, 2, 3, 4, 5, 6];
arr2.splice(1, 2); // remove 2 & 3
console.log(arr2); // [1,4,5,6]

var arr2 = [1, 2, 3, 4, 5, 6];
arr2.splice(2, 3); // remove 3, 4, 5
console.log(arr2); // [1,2,6]

//sort array in Ascending / Descending order
console.log("sort array in Ascending / Descending order");
const val: number[] = [3, 1, 2, 5, 8, 10];

//ascending order
val.sort((a, b) => a - b);
console.log(val); // [1,2,3,5,8,10]

//descending order
val.sort((a, b) => b - a);
console.log(val); // [10,8,5,3,2,1]

// Reverse Array
console.log("Reverse Array");
const val1:number[] = [3, 1, 2, 5, 8, 10];
console.log(val1.reverse()); // [10,8,5,2,1,3]

// differnce between map and filter
console.log("Example for map & filter");
const users = [
  { name: "Kumar", age: 20 },
  { name: "Naresh", age: 30 }
];

// get all names
const names = users.map(u => u.name);

// filter age > 25
const filtered = users.filter(u => u.age > 25);

console.log(names);
console.log(filtered);

// filter numbers greater than 5
console.log("interview question:")
const number: number[] = [8, 0, 1, 9, 2, 4, 7];

// with map
const response: boolean[] = number.map<boolean>((curr) => curr > 5);
console.log(response); // [T,F,F,T,F,F,T]

// with filter
const resFilter: number[] = number.filter((curr) => curr > 5);
console.log(resFilter); // [8,9,7]