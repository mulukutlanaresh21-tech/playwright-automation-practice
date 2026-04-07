console.log(0.1 + 0.2 === 0.3); //false
console.log(0.1 + 0.2 == 0.3); //false
/*
Why is this false?

Because of floating-point precision in JavaScript.
1. Numbers are stored using IEEE 754 double precision
2. Some decimal values (like 0.1, 0.2) cannot be represented exactly in binary

So internally:
0.1 + 0.2 = 0.30000000000000004

That’s why:
0.30000000000000004 === 0.3 // false
*/

//if want to make it true
console.log((0.1 + 0.2).toFixed(1) === 0.3); //true

//------------------------------------------------------------------------------------------------------------------
console.log("convert object to string");
let obj = {
  a: 1,
  b: 1,
};

const str = JSON.stringify(obj);
console.log(str);

//Reverse (string → object)
let backToObj = JSON.parse(str);
console.log(backToObj);

//--------------------------------------------------------------------------------------------------------------------

console.log("shallow copy");
/*
Shallow Copy (JavaScript) means: You copy the object, but nested objects are still shared (same reference).
*/
const obj1 = {
  a: 1,
  b: { c: 2 },
};

const obj2 = { ...obj1 }; // shallow copy

obj2.b.c = 100;

console.log(obj1.b.c); // 100 ❗ (changed in original too)

console.log("Deep copy");
/*
A deep copy means: You create a completely independent copy of an object, including all nested objects.
*/

const obj3 = {
  a: 1,
  b: { c: 2 },
};

const obj4 = JSON.parse(JSON.stringify(obj3)); // deep copy

obj4.b.c = 100;

console.log(obj3.b.c); // 2 ✅ (original NOT affected)
console.log(obj4.b.c); // 100

//-----------------------------------------------------------------------------------------------------------------

console.log("reduce() ==> method");

/*
reduce() method in JavaScript:
    reduce() is used to convert an array into a single value (number, string, object, etc.).
    It “reduces” the array step-by-step into one result.
*/

//syntax
/*
array.reduce((accumulator, currentValue) => {
  // logic
}, initialValue);

accumulator (acc) → stores result
currentValue (curr) → current element
initialValue → starting value
*/

const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

const mul = nums.reduce((acc, curr) => acc * curr, 1);
console.log(mul); // 24

//Count occurrences (very important 🔥)
const fruits = ["apple", "banana", "apple", "orange", "banana"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);
// { apple: 2, banana: 2, orange: 1 }

//Flatten array
const arr = [[1, 2], [3, 4], [5]];
const flat = arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // [1,2,3,4,5]

//------------------------------------------------------------------------------------------------------------------

console.log("map() ==> method");

/*
map() method in JavaScript:
    map() is used to transform each element of an array and return a new array.
    It does not modify the original array.

syntax:
    array.map((currentValue, index, array) => {
    return newValue;
    });


*/

const num = [1, 2, 3, 4];
const doubled = num.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8]

//Convert to uppercase
const mynames = ["naresh", "john", "alice"];
const upper = mynames.map((name) => name.toUpperCase());
console.log(upper); // ["NARESH", "JOHN", "ALICE"]

//Extract values from objects
const users = [
  { name: "Naresh", age: 25 },
  { name: "John", age: 30 },
];
const names = users.map((user) => user.name);
const ages = users.map((user) => user.age);
console.log(names); // ["Naresh", "John"]
console.log(ages); //[ 25, 30 ]

//--------------------------------------------------------------------------------------------------------------------

console.log("filter() ==> method");

/*
filter() method in JavaScript
    filter() is used to select elements from an array based on a condition.
    It returns a new array with only the elements that pass the condition.

syntax:
    array.filter((currentValue, index, array) => {
        return condition; // true or false
    });
*/

const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter((n) => n % 2 === 0);
const odd = numbers.filter((n) => n % 2 !== 0);
console.log(even); // [2, 4]
console.log(odd); // [ 1, 3, 5 ]

//Filter strings
const words = ["apple", "banana", "kiwi", "grape"];
const longWords = words.filter((w) => w.length > 5);
console.log(longWords); // ["banana"]

//Filter objects (very important 🔥)
const user = [
  { name: "Naresh", age: 25 },
  { name: "John", age: 30 },
  { name: "Alice", age: 20 },
];

const adults = user.filter((user) => user.age >= 25);
console.log(adults);
