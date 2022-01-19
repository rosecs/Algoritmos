// Exercise 1 
/*Part 1. There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. 
Create an array that has these three names in order.
*/
var names = ["Sofia", "David", "Juan"];

/*Part 2. Two more people get added to the back of the line
 - Sara and Augustin. The first person in line is called to 
 the teller. What does the queue look like?
*/
names.push("Sara", "Augustin");
names.shift();
console.log(names);

/*Part 3
It turns out David was saving a spot for his friend Renata.
She shows up and goes behind him in the line. One more person
(Elena) shows up and goes to the end of the line. What does 
the queue look like?
*/
names.splice(1,1,"Renata");
names.push("Elena");
console.log(names);

//Exercise 2
/* Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *

*/

for (let i = 4; i < 5 ; i++) {
    y = "*"
    console.log(y);
    for (let j = 1; j < 5; j++) {
        y += "*"
        console.log(y);
    } 
}

// Exercise 3
/* Write while loops to do the following:

– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive.
*/
let x  = prompt("Enter a number: ") ;
while ( x > 0) {
    x -= 0.5;
    console.log(x);   
}

/* - Print all the odd numbers between 1 - 100.*/
let odd = 1 ;

while ( odd < 101 ) {
    if (odd % 2 !== 0) {
        console.log(odd);  
    } 
    odd += 1 ;  
}

/* - Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6]*/
   
let userNumber  = alert(parseInt(prompt("Please, enter a number: ")));

function intoSquareBraquets(userNumber) {
    let k = 1;
    while (k <= userNumber){
        console.log([k]);
        k++ ;
    }
}

alert(intoSquareBraquets(userNumber));

/*
- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n

Examples:
n = 5 sum = 15
n = 19 sum = 190

*/

function sumNumbers(number) {
    let i = 1 ;
    let sum = 0 ;
    
    while(i <= number){
        sum = sum + i ;
        i++ ;
    }

    alert("The sum of all the numbers is " + sum);
}

let userNumber2  = alert(parseInt(prompt("Please, enter a number: ")));
sumNumbers(userNumber2);