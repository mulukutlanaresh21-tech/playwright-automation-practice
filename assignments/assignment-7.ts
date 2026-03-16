// Assignment: Write a program to perform the following tasks:

let sentense: string = "Java programming is fun and challenging";

// 1. Count the total number of words in the sentence.
let words: string [] = sentense.split(" ");
console.log(`1. Total number of words in the sentence is: ${words.length}`);

// 2. Print the sentence words in reverse order.
var reverseSentence: string [] = [];
for(let i:number = words.length-1; i>=0; i--){
    reverseSentence.push(words[i]);
}

console.log(`2. The sentense words in reverse order: ${reverseSentence.join(" ")}`);

// 3. Convert the first character of each word to uppercase and print original sentence
let upperCase: string[]= [];
for(let i: number = 0; i < words.length; i++){
    let word: string = words[i];
    let capitalizedWord = word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase();
    upperCase.push(capitalizedWord);
}


console.log(`3. The first char of each word to uppercase: ${upperCase.join(" ")}`);

