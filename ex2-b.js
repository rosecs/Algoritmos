/**
 * Exercise #2-b
 * Create a function that takes in one number
 * and checks if it is divisible by 4 or divisible by 9. 
 * Print out to the console true if a number
 * if divisible by 4 or 9, and false if a
 * number is not divisible by either number.
 */
let userNum = prompt('Escribe un numero: ')
function divisibleNumbers(num) {
  if (num % 4 == 0 || num % 9 == 0) {
    console.log(true);
    console.log('it is divisible by 4 or divisible by 9');
  }else {
    console.log(false);
  }
}

console.log(divisibleNumbers(userNum));
