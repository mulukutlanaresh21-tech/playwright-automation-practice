import {PI, add, subtract, multiply} from "./1_named_exports.ts";
import {PI as pi, add as sum, subtract as sub, multiply as mul} from "./2_export_all.ts"; //we use Alias to import duplicate 

// from 1_named_exports
console.log("1_named_exports");
console.log("Value of PI: ", PI);
console.log("Addition of 8 and 3: ", add(8,3));
console.log("Subtraction of 6 and 2: ", subtract(6,2));
console.log("Multiplication of 5 and 6: ", multiply(5,6));


// from 2_export_all
console.log("2_export_all");
console.log("Value of PI: ", pi);
console.log("Addition of 8 and 3: ", sum(8,3));
console.log("Subtraction of 6 and 2: ", sub(6,2));
console.log("Multiplication of 5 and 6: ", mul(5,6));