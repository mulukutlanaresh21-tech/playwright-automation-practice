// string: string is nothing but collection of characters

//Example of string declaration
let firstName: string = "Naresh";
let lastName: string = 'Mulukutla';
let fullName: string = `${firstName} ${lastName}`; //using template literals

console.log(fullName);


// ********************************  String Methods *************************************

//1. storing string in a variable
console.log("1. storing string in a variable");
let originalString: string = " Username : Naresh | Password : naresh123 ";
console.log("storing original string: " + originalString);

//2. Calaculate the total number of characters available in the string ==> string.lenght
console.log("2. Calaculate the total number of characters available in the string");
let stringLength = originalString.length;
console.log("Total characters in string are: "+stringLength);

//3. Get the specific character from the string at a specific index ==> string.charAt(index)
console.log("3. Get the specific character from the string at a specific index");
let charAtIndex5 = originalString.charAt(5);
console.log("Character available index 5 is: " + charAtIndex5);

//reverse string
let reverseString: string = "";

for(let i:number = stringLength-1; i >= 0; i--){
    reverseString = reverseString + originalString.charAt(i);
}
console.log("reversed string: "+reverseString);

//4. Remove unwanted spaces from the string (begining and ending of the string only) ==> string.trim
console.log("4. Remove unwanted spaces from the string");
let trimmedString: string = originalString.trim();
console.log("Trimmed string is: "+ trimmedString);

//5. Removing all the spaces from the string ==> string.replace(/\s/g, '')
console.log("5. Removing all the spaces from the string");
let stringWithoutSpace: string = originalString.replace(/ /g, '');
console.log("string without spaces is: "+ stringWithoutSpace);

//6. Removing all the numbers from the string ==> string.replace(/[exp]/g, '')
console.log("6. Removing all the nmbers from the string");
let stringWithoutNumbers: string = originalString.replace(/[0-9]/g, '');
console.log("string without numbers is: "+ stringWithoutNumbers);

//7. Removing all the alphabets from the string ==> string.replace(/[exp]/g, '')
console.log("7. Removing all the alphabets from the string");
let stringWithoutAlphabets: string = originalString.replace(/[a-zA-Z]/g, '');
console.log("string without alphabets is: "+ stringWithoutAlphabets);

//8. Removing all the special characters from the string ==> string.replace(/[exp]/g, '')
console.log("8. Removing all the special characters from the string");
let stringWithoutSpecialChar: string = originalString.replace(/[^0-9a-zA-Z]/g, ''); // ^ - hat is acting as not here 
console.log("string without special characters is: "+ stringWithoutSpecialChar);

//9. Convert the string into uppercase ==> string.toUpperCase
console.log("9. Convert the string into uppercase");
let upperCaseString: string = originalString.toUpperCase();
console.log("UpperCase string is: "+ upperCaseString);

//10. Convert the string into lowercases ==> string.toLowerCase
console.log("9. Convert the string into uppercase");
let lowerCaseString: string = originalString.toLowerCase();
console.log("Lowercase string is: "+ lowerCaseString);

//11. Extract specific part of a string using starting and ending index ==> string.subString(startIndex, endIndex)
console.log("11. Extract specific part of a string using starting and ending index");
let userName: string = originalString.substring(12,18);
let password: string = originalString.substring(32);
console.log("Extracted Username is: " + userName);
console.log("Extracted Password is: " + password);

//12. Extract specific part of a string from dynamic text using split method ==> string.split(refrense char)
console.log("12. Extract specific part of a string from dynamic text using split method");
let parts: string[] = originalString.split(" ");
console.log("Extracted Dynamic Username is: '"+parts[3]+"'");
console.log("Extracted Dynamic Password is: '"+parts[7]+"'");

//13. Compare two different strings
// == (loose equality) ==> compares the values of the strings and returns true if they are equal, otherwise false
// === (strict equality) ==> compares both the values and the type of the strings and returns true if they are equal, otherwise false
// includes() method is used to check if a string contains a specific substring. It returns true if substring is found, otherwise false
// startsWith() method is used to check if a string starts with a specific substring. It returns true if string is starts with substring, otherwise false
// endsWith() method is used to check if a string ends with a specific substring. It returns true if string is ends with substring, otherwise false

console.log("13. Compare two different strings");
let string1: string = "100";
let number1: number = 100;
//console.log(string1 == number1) // output: true (loose equality)
//console.log(string1 === number1) // output: false (strict equality)

let string2: string = "Hello World";
console.log("Includes: "+ string2.includes("ello")); //true
console.log("Starts with: "+ string2.startsWith("Hello")); //true
console.log("Ends with: "+ string2.endsWith("World")); //true
console.log("Ends with: "+ string2.endsWith("world")); //false

//14. Data type conversion: Converting a string into a number and vice versa
console.log("14. Data type conversion: Converting a string into a number and vice versa");

//Convert other data type into string
console.log("Convert other data type into string");
let stdCode: number = 254;
let ph: number = 952698623;
let StdCode: string = String(stdCode);
console.log(StdCode + ph); //when ever we are concat any thing with string it will act as string

//Convert string into other data type
console.log("Convert string into other data type");
let balance: string = "Account balance is 9,999.99 rupees";
balance = balance.replace(/[^0-9.]/g, ''); // Removes non-numeric characters except decimal point
let balanceAmount = parseFloat(balance); // parseFloat(), parseInt(), parseBool() are used to convert string to number or boolean respectively.
console.log(balanceAmount >= 10000);

//15. To check index of a specific substring ==> string.indexOf(substring)
console.log("15. To check index of a specific substring");
let sentense: string = "Naresh is a good boy";
console.log(sentense.indexOf("is")); //returns first index of substring
console.log(sentense.indexOf("good")); //returns first index of substring
console.log(sentense.indexOf("bad")); // returns -1 if invalid substring

//16. Extract a portion of a string and return it as a new string without modifying the original string ==> string.slice(startIdx, endIdx)
console.log("16. Extract a portion of a string and return it as a new string without modifying the original string")

// Extract first part of string
let text: string = "PlaywrightAutomation";
let result1 = text.slice(0, 10);
console.log(result1);

// Extract last part of string
let word: string = "AutomationTesting";
let result2 = word.slice(10, 17);
console.log(result2);

//If you provide only the start index, it extracts until the end of the string.
let language: string = "TypeScript";
console.log(language.slice(4)); //output: Script (it will cut upto given index)

//Negative numbers start counting from the end of the string.

let tool: string = "Playwright";
console.log(tool.slice(-5)); //output: right

//Extract First Character Uppercase

let name: string = "naresh";

let result = name.slice(0,1).toUpperCase() + name.slice(1);

console.log(result);

//17. Join two String ==> string.concat()
console.log("17. Join two String");

let first: string = "API";
let second: string = "Automation";

console.log(first.concat(" ", second));
console.log(first.concat(", ", second));
console.log(first.concat(" - ", second));


//18. reverse string with string methods
console.log("18. reverse string with string methods");
let str: string = "TypeScript";
let reversed = str.split("").reverse().join("");
console.log("Reversed string using string methods: '"+reversed+"'"); //output: tpircSepyT




