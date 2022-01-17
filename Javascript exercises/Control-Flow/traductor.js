//Tu programa debe leer una variable llamada "dayNumber" e imprimir (con console.log) el día correspondiente de la semana, donde 0 es domingo y 6 es sábado.
//Para cualesquiera otros valores, tu programa debe imprimir "Número de día inválido".

/*let dayNumber = {
    Domingo: 0,
    Lunes: 1,
    Martes: 2,
    Miercoles:3,
    Jueves:4,
    Viernes:5,
    Sábado:6
}
*/
var dayNumber = parseInt(prompt("Ingresa un número: "));

switch(dayNumber) {
  case 0:
    console.log("Sunday");
    alert("Sunday");
    break;
  case 1:
    console.log("Monday");
    alert("Monday");
    break;
    case 2:
    console.log("Tuesday");
    alert("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    alert("Wednesday");
    break;
    case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Número de día invalido");
}
console.log(dayNumber);
alert("The day of the week is: " + dayNumber);