// Exercise 1

var pago = Number(prompt("introduce el numero de pagos realizados este mes: "));
var gasto = Number(prompt("ingresa el total de tus gastos en dolares: "));
function payments( pago, gasto ){
    var resPago = ((pago*3)+ gasto)*1.01;
    alert("el total a pagar es: " + resPago);
}
payments(pago, gasto);

// Exercise 2 
// Part 1
var fulano1 = prompt("ingresa el nombre de tu amigo 1: ");
var fulano2 = prompt("ingresa el nombre de tu amigo 2: ");
var fulano3 = prompt("ingresa el nombre de tu amigo 3: ");
function saludar(fulano1, fulano2, fulano3) {
    console.log(
        "Hola mis queridos amigos " + fulano1 + ", " + fulano2 + ", " + fulano3
    );
}
saludar(fulano1, fulano2, fulano3);

// Part 2
var edad1;
var edad2;
var edad3;
var año1 = Number(prompt("cual es tu año de nacimiento " + fulano1 + " ?"));
var año2 = Number(prompt("cual es tu año de nacimiento " + fulano2 + " ?"));
var año3 = Number(prompt("cual es tu año de nacimiento " + fulano3 + " ?"));
const actual = 2022;
function calcularEdad(año1, año2, año3) {
    edad1 = actual - año1;
    edad2 = actual - año2;
    edad3 = actual - año3;
    console.log("las edades son: " + edad1 + ", " + edad2 + ", " + edad3);
}
calcularEdad(año1, año2, año3);

// Part 3
function SaludoCompleto() {
    console.log(
        "Bienvenido " +
        fulano1 +
        " tu edad es: " +
        edad1 +
        ", " +
        "Bienvenido " +
        fulano2 +
        " tu edad es:" +
        edad2 +
        ", " +
        "Bienvenido " +
        fulano3 +
        " tu edad es: " +
        edad3
    );
}
SaludoCompleto();



// Exercise 3 

var calificacion = Number(prompt("Introduce la calificación: "));

var x = function(calificacion){
    if (calificacion>=5){
        aprobar = true;
    }
    else {
        aprobar = false;
    }
    return aprobar;
}

console.log("Aprobó: " + x(calificacion));

var y = function(calificacion){
    if (calificacion>=8 && calificacion<11){
        comentario = "Excelente";
    }
    if (calificacion==11){
        comentario = "Perfecto";
    }
    if (calificacion<=4){
        comentario = "Deshonrada tu, deshonrada tu vaca";
    }
    return comentario;
}

console.log("Comentario: " + y(calificacion));