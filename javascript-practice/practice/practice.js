// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => console.log("5"));
// console.log("6");

//1
//6
//5
//2

console.log("Reference copy of objects");
const abc = {
  x: 1,
};

const xyz = abc;
xyz.x = 2;
console.log(abc.x); //output = 2 (Both abc and xyz are pointing to the same object in memory (reference))

console.log("Shallow copy of objects");
const x = {
  a: 3,
};
const y = { ...x };
y.a = 5;

console.log(x.a); //output = 3

const a = { x: 1, y: { z: 2 } };
const b = { ...a };

b.y.z = 100;

console.log(a.y.z); // 100
/*
Why 100?

Spread operator creates a shallow copy
Nested object y is still shared reference
*/

//Arrow functions are hoisted?
//❌ No, arrow functions are NOT hoisted (like normal functions).
//Arrow functions are usually stored in a variable, and variables behave differently during hoisting.

sayHi(); // ❌ Error

const sayHi = () => {
  console.log("Hello");
}; //output: ReferenceError: Cannot access 'sayHi' before initialization

//👉 Why?
// var is hoisted and initialized as undefined
// So you're calling undefined()
sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = () => {};

//normal function can be hoisted
sayHi(); // ✅ Works

function sayHi() {
  console.log("Hello");
}

//Can we use Arrow functions as constructor?
//👉 “Arrow functions cannot be used as constructors because they don’t have
// their own this or prototype, and cannot be invoked with new.”
//If you see new → use function or class, NOT arrow function

/*
Why arrow functions fail?

Arrow functions use lexical this (inherit from outer scope), so:
    1. They can't create a new object instance
    2. They are not designed for object construction
*/
const Person = (name) => {
  this.name = name;
};

const p1 = new Person("Naresh"); // ❌ Error
//output: TypeError: Person is not a constructor

function Person2(name) {
  this.name = name;
}

const p2 = new Person2("Naresh"); // ✅ Works

//Array + Object

const c = [{ x: 1 }, { x: 2 }];
const d = [...c];

d[0].x = 99;
d[1].x = 55;
console.log(c[0].x); // 99 --> inner objects are in shared reference
console.log(c[1].x); // 55

console.log("Deep Copy Example");
const e = { x: 1, y: { z: 2 } };
const f = JSON.parse(JSON.stringify(e));

f.y.z = 200;

console.log(e.y.z); // 2

/*
Why output is 2?
1. JSON.parse(JSON.stringify(e)) creates a new completely independent object
2. No shared references between e and f
*/
