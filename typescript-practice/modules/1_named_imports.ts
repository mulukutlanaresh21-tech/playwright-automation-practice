import {PI, add, subtract, multiply } from "./1_named_exports.ts";
import type { User } from "./1_named_exports.ts"; // to import object interfaces

console.log("Value of PI: ", PI);
console.log("Addition of 5 and 3: ", add(5,3));
console.log("Subtraction of 5 and 3: ", subtract(5,3));
console.log("Multiplication of 10 and 4: ", multiply(10,4));

const user: User = { name: "Naresh", age: 25 };

console.log(user);

