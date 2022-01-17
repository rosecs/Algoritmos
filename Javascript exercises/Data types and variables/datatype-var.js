//Intro
/*
alert("I'm aliveeee!");

console.log( "I'm " + myName);

var myName = "Rosa Laura";
var lastName = "Carrillo";
var age = 27;

console.log( myName, lastName, age);

alert("I'm " + myName);
console.log("My last name is: " + lastName);

alert("It's me " + myName + " " + lastName + " , 27 it's my age.");
*/

//Functions
/*
function Accion (Tipo){
    var elem = document.getElementById ("DivBotones");
    if (Tipo == "Ocultar")
    elem.style.display = 'none';
    else
    elem.style.display = '';
}
<p id="DivBotones">Seccion Ocultar/Mostrar</p>
    <button onclick="Accion('Ocultar');">Ocultar</button>
    <button onclick="Accion('Mostrar');">Mostrar</button>
*/

//DATA TYPES AND variables
var length = 16;

var lastName = "Johnson";

var computadora = {marca:"asus", procesador:"i9", memoria:"16 Gb", grafica:"GTX2060", nucleos:8};

console.log("El tipo de dato de 16 es: "+typeof(length));

console.log("El tipo de dato de Johnson es: "+typeof(lastName));

console.log("El tipo de dato de computadora es: "+typeof(computadora));

console.log("La marca de la computadora es:"+computadora.grafica);

console.log("El número de núcleos de la computadora es de tipo:"+typeof(computadora.nucleos));

// advanced functions
function multi(a,b){
  resultado=a*b;
  console.log(resultado);
}
multi(2,3);

var x = function(x,y){
  return x*y;
}
console.log(x(2,3));

var y = (x,y) => x*y;
console.log(y(2,3));
