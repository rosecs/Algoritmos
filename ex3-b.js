/**
 * Exercise 3-b:
 * We want to compare two strings and check if
 * they are the same - case insensitive.
 * Return a boolean - true if the two strings are
 * the same, and false if they are not 
 */
var str1 = prompt("Introduce una palabra: ").toLowerCase();
console.log( str1);
var str2 = prompt("Introduce otra palabra: ").toLowerCase();
console.log(str2);

function checkTwoStringsSame(str1, str2) {
  if( str1==str2){
    alert(str1 == str2);
  } else {
    console.log('False');
  }

}

// Example test, should return true
checkTwoStringsSame(str1, str2);