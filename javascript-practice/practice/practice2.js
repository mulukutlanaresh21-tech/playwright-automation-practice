var a = [10, 11, 12, 13, 14];

function print(b, ...a) {
  console.log(a);
}

print(8, 9, 10, 11, 12); //[ 9, 10, 11, 12 ]

/*
First argument → goes to b
Remaining arguments → collected in a (rest parameter)
Global a is ignored inside the function
*/

var a = [10, 11, 12, 13, 14];

function print(b) {
  console.log(a);
}

print(8, 9, 10, 11, 12); //[10, 11, 12, 13, 14]

/*
b = 8
Extra arguments (9, 10, 11, 12) are ignored (since not used)
Inside the function, a is not defined locally, so it refers to the global a
*/

//---------------------------------------------------------------------------------------------------------
