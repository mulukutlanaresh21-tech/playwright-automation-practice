let age: number = 18;

if(age < 18){
    throw new Error("You are not Eligible to Vote....!")
} else{
    console.log("You are Eligible for Voting....!");
}

console.log("Execution is completed...!");


// throw custom exception

try {
    let result = 10 / 0;
    console.log(result);

    throw new Error("Custom error occurred");
} catch (err) {
     if (err instanceof Error) {
        console.log("Error:", err.message);
    } else {
        console.log("Unknown error");
    }
} finally {
    console.log("Execution completed");
}