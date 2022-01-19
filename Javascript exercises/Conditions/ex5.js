// Exercise 1
/* You have a list of names: var names = ["Maria", "Antony", "Joy", "Juan"]*/

var names = ["Maria", "Antony", "Joy", "Juan"]

//Part 1
/* Write a function to insert a name to the end of the list. Add your own name to the end of the list.*/

names.push("Rosa Laura");
console.log(names);

//Part 2
/*Write a function that takes in a name and checks if the list has that name. It should return back a boolean - true/false.*/

function checkName(name) {
    for (let i = 0; i < names.length; i++) {
        if (name === names[i]) {
            return true ;
        } else  {
            return false ;
        }
    }
}

console.log("Karol");
alert(checkName("Rosa Laura"));

//Part 3
/* Write a function that takes in a list of names.
This function should compare the list taken into
the names list you currently have. The function 
should pass back an array with the names that are
in both lists.*/

names2 = ["Iban", "Daniel", "Barry", "Kari", "David", "Rosa Laura"];

function compareListOfNames(names2) {
    let nameList = [];
    for (let i = 0; i < names.length; i++) {
        for (let j = 0; j < names2.length; j++) {
            if (names[i] === names2[j]) {
                nameList.push(names[i]);
            } 
        }   
    }
    return nameList ;  
}
console.log(compareListOfNames());
alert(compareListOfNames());

//Part4
/*Write a function that takes in a list of names
 and returns a list of Integers with the length 
 of the names in the same order as received. 
 Hint use the push function
*/

function namesLength(names2) {
    let lengthNamesList = [];
    for (let i = 0; i < names2.length; i++) {
        lengthNamesList.push(names2[i].length);  
    }
}

console.log(namesLength());
alert(namesLength());

//Exercise 2
/* What do the following expressions evaluate to?*/
console.log(false || (true && false));
console.log(true || (11 + 12));
console.log((31 + 22) || true);
console.log(true && (1 + 7));
console.log(false && (3 + 4));
console.log((1 + 2) && true);
console.log((32 * 4) >= 129);
console.log(false !== !true);
console.log(true === 4);
console.log(false === (847 === '847'));
console.log(false === (887 == '887'));
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);

//Exercise 3
/* Write a function that logs whether a number is between 0
 and 25 (inclusive), between 26 and 100 (inclusive), greater
than 100, or less than 0.*/

function numberRange(number){
    if(number<0){
        console.log(number + " is less than 0");
    }else if (number>=0 && number<=25){
        console.log(number + " is between 0 and 25");
    }else if (number>=26 && number<=100){
        console.log(number + " is between 26 and 100");
    }else if (number>100){
        console.log(number + " is greater than 100");
    }
}

numberRange(25);   // '25 is between 0 and 25'
numberRange(75);   // '75 is between 26 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'

let userNumber  = alert(parseInt(prompt("Please, enter a number: ")));

console.log(numberRange(userNumber));

//Additional Exercises
/*What is shown on the console when f is console.log'd?*/

var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f); // the letter "d" is printed 4 times
