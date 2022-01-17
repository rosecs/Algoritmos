/**
 * Exercise #5
 * Write a program where a user enters the number of tasks they have completed. 
 * The program returns one of the following labels to the console:
        **Failed**
        **Insufficient**
        **Good**
        **Excellent**
        **Error**
    based on the conditions:
        Failed if they scored 6 or less
        Insufficient if they scored > 6 but less than 9 (9 included)
        Good if they scored > 9 but less than 14 (14 included)
        Excellent if they scored 15
        Error if participants enter a negative number or a number 
        outside the range supported (outside 0 - 15)
 */

//The user gives the info
let tareas=parseInt(prompt("¿Cuantas tareas entregaste?"));

function homeworksDone() {
    if (tareas>=0&&tareas<=6){
    alert("Failed");
    }
    else if (tareas>=7&&tareas<9) {
    alert("Insufficient");
    } 
    else if (tareas>=9&&tareas<=14) {
    alert("Good");
    } 
    else if (tareas==15) {
    alert("Excellent");
    } 
    else {
    alert("Error, dato no valido"); 
    }
};

alert(homeworksDone());
