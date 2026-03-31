// find index of elements will return sum of elements = 30

function findIndex(arr){
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 30){
                output.push([i, j]);
        }

        }
    }
    return output;
}

console.log("Indexes: ",findIndex([10, 12, 18, 6, 4]));//[1,2]
console.log("Indexes: ",findIndex([15, 12, 3, 16, 14, 6, 5, 15])); //[3,4] [0,7]


//“JavaScript’s == performs type coercion, converting operands to a common type before comparison,
// which leads to many unexpected results.”
console.log([] === ![]); //false
console.log([] == ![]); //true
