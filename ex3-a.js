/**
 * Exercise 3-a:
 * We want to check if a string is empty.
 * If a string is not empty, we want to print
 * out the first character of that string.
 * If a string is empty, print out a text saying
 * "This string is empty" 
 */
var cadena = prompt("Introduce una palabra");

function checkEmptyString(str) {
  if(str === "") {
    console.log("La cadena esta vacia");
  } else {
    console.log(str.charAt(0));
  }

}

// Example test, should return a
checkEmptyString(cadena);

