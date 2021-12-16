/** Exercise #2-a
 * Create a function that takes in one number and checks if the number is greater than 10. Print out to the console true if it is greater and false otherwise.
 */
let userNum = prompt('Escribe un número: ');

function greaterNumberthanTen(num) {
  if (num > 10) {
    return "the number is greater than 10";
  } else {
    return 'error!';
  }
};

console.log(greaterNumberthanTen(userNum));


