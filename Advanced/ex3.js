//Exercise #3
//Write a program that takes in two lists and returns the greatest number out of the two lists. Hint: call the function from Class Exercise #1 (Exercise #1 should return a single number - the greatest number in the list).


const arr1 = [3, 5, 7, 1, 6];
const arr2 = [23, -8, 10, 58, 8];

function sortValues(values){
//descendente
    let value = values.sort(function(x,y){
    return y-x});
    console.log(value[0]);
}
sortValues(arr1.concat(arr2));
