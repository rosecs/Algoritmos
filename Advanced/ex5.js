/*Exercise #5
Write a function that:

Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array . The output should be [2, 4, 8, 10]*/

let arr = [1, 2, 4, 5];

function doubleArr (arr){
    let doubles = arr.map(function(x) {
    return x*2;
    });
    return doubles;
}
console.log(doubleArr(arr));
