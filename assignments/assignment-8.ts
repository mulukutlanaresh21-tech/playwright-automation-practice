// Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their indexes.

let sentense: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

// 1. Find total number of occurrences
// 2. Print count and Indexes of the word

let words: string[] = sentense.split(" ");

console.log(words.join(" "));
let count: number = 0;
let indexs: number[] = [];

for(let i: number = 0; i < words.length; i++){
    if(words[i] === "Java"){
        count++;
        indexs.push(i);
    }
}

console.log(`Total number of occurances: ${count}. And at the Indexes of: ${indexs}`);


