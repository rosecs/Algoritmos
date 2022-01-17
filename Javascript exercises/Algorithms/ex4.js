/*
* Exercise #4
* Create a function that takes in 2 inputs (using prompt)
* and goes through the 5 arithmetic operators (+, -, /, *,
* %). The expected output on the console is:
* The sum is x -> x is the calculated sum
* The subtraction is y -> y is the calculated difference
* The multiplication is z -> z is the calculated multiplication
* The division is w -> w is the calculated division
* The remainder is q -> q is the calculated remainder
*/

function mathematicOperations() {
    num1 = parseInt(prompt("Ingrese el primer número: "));
    num2 = parseInt(prompt("Ingrese el segundo número: "));
    
    console.log("La suma es: " + (num1+num2));
    console.log("La resta es: " + (num1-num2));
    console.log("La multiplicación es: " + (num1num2));
    console.log("La división es: " + (num1/num2));
    console.log("El residuo es: " + (num1%num2));
}

mathematicOperations();