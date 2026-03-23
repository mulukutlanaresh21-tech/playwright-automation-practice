//Asynchronous function with promise that is returning either resolve(fulfil) or reject (unable to fulfil) the promise.

//normal function to generate random number
function normalFunction(): number {
    return Math.random();
}

//async function to generate random number > 0.5 compulsary
function asyncFunctionWithPromise(): Promise<string> {
    return new Promise((resolve, reject) =>{
        const randomNumber = Math.random();
        if(randomNumber > 0.5){
            resolve(`Random Number ${randomNumber} is greater than 0.5`);
        }else{
            reject(`Random Number ${randomNumber} is less than or equal to 0.5`)
        }
    });
}

//Async function with timeout of 10 sec
function asyncFunctionWithPromiseAndTimeout(): Promise<string> {
    return new Promise((resolve, reject) =>{
        const randomNumber = Math.random();

         //wait for 10 sec to resolve the promise
        setTimeout((): void => {
            if(randomNumber > 0.5){
                resolve(`Random Number ${randomNumber} is greater than 0.5`);
            }else{
                reject(`Random Number ${randomNumber} is less than or equal to 0.5`)
            }
        }, 10000)
        
    });
}

//calling normal function
// let value = normalFunction();
// console.log(value);

//Calling async function
// const result = await asyncFunctionWithPromise();
// console.log(result);

//Calling async function with timeout
const resultwithTimeout = await asyncFunctionWithPromiseAndTimeout();
console.log(resultwithTimeout);
