//“JavaScript’s == performs type coercion, converting operands to a common type before comparison,
// which leads to many unexpected results.”
// In JavaScript, empty array [] is truthy
// ==  → “adjust & compare”
// === → “compare as it is”

console.log([] === ![]); //false
console.log([] == ![]); //true

/*
[] == ![]
↓
[] == false
↓
"" == 0
↓
0 == 0
↓
true
 */

console.log([] === []); //false
console.log([] == []); //false
const a = [];
const b = a;

console.log(a === b); // true
/*
Left [] → creates a new array object in memory
Right [] → creates another new array object
Both are different references

Even with == (loose equality), arrays are compared by reference, not by value.
*/

//“Both return false because objects are compared by reference,
// and two object literals create different memory references.”

/*
1. Objects are compared by reference, not value
2. Even though both look same: They are two different objects in memory
obj1 → address1
obj2 → address2
3. For objects, both == and === behave the same: They compare references, not content
4. Still compares memory → ❌ different → false
5. Objects:
    Stored in heap memory
    Compared by reference
 */
console.log({} === {}); //false
console.log({} == {}); //false

//Compare values properly: if Convert to string
console.log(JSON.stringify({}) === JSON.stringify({})); // true
console.log(JSON.stringify({}) == JSON.stringify({})); // true

const obj = {};
console.log(obj === obj); // true
console.log(obj == obj); // true

/*
Step 1: - operator forces number conversion

👉 In JavaScript:
    - (minus) works only with numbers
    So it tries to convert "Naresh" → number
Because "Naresh" is not a numeric string
NaN - 100 → NaN
 */

console.log("Naresh" - 100); //NaN
console.log("Naresh" + 100); //Naresh100
console.log("Naresh" * 100); //NaN
console.log("Naresh" / 100); //NaN
console.log("Naresh" % 100); //NaN

/*
type coercion + bitwise operator question.
Step-by-Step Explanation:
    1. ^ is Bitwise XOR: It works only with numbers (integers)
    2. Number("Naresh") → NaN
    3. Bitwise operators convert to 32-bit integers : NaN → 0
    4. XOR operation: 0 ^ 100 = 100 (XOR with 0 returns same number)
 */
console.log("Naresh" ^ 100); //100

/*
"Naresh" → truthy
!"Naresh" → false
false → 0
0 == 0 → true
 */
console.log(!"Naresh" == 0); //true
console.log(!"Naresh" == "0"); //true

/*
false === 0
👉 No type conversion ❌
👉 Different types: boolean vs number ==> returns false
 */
console.log(!"Naresh" === 0); //false
console.log(!"Naresh" === "0"); //false
