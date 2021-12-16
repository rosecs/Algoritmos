/*
Exercise #6
Open a repl.it Javascript page and call it Algorithms Introduction Exercise 2.
Write an algorithm to find the largest among 5 different numbers entered by the user.
Print out the largest number to the console.
*/

function largestNumber(){
    //Se piden los datos
    let num=parseInt(prompt("Ingresa un numero: "));
    let mayor=0;
//se crea un ciclo for de 5 repeticiones
    for (var i = 0; i<5; i++ ){
    //Se piden los datos
        let n1=parseInt(prompt("Ingresa numero"));
    //Se compara si el numero ingresado es mayor
        if(n1>mayor)
        {
         //Si es mayor, se guarda como el numero mayor
            mayor=n1;
        }
    }

    //Mensaje de numero mayor
    alert("el numero mayor es "+ mayor);
}

largestNumber();
