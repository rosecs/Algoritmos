// Ternary conditional its equivalent an  simple If-else conditional
/*
var ? expr1 expr2
*/

var edad = 17;

edad >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");

var permiso = 'si';

edad >= 18 ? permiso == "si"? console.log("Viva, disfruta de la fiesta!"): console.log("Lástima, suerte para la próxima")  : permiso == "si" ? console.log("Hola McLovin"): console.log("Hoy te vas a dormir calientito");

// another example
var cond1 = 17;
var cond2 = "ale"

console.log(cond1 >= 18 ? cond2=="sofi"? "Si es sofi": "No es sofi" : cond2=="sofi"? "Es su tocaya": "No se quien es");



// use 6 times the ternary conditional for 6 possible answers


let newMovie = alert(prompt("bienvenido a filmdreampoli! ¿Quieres ver la pelicula estreno?"));
var cash  = 'si';
var popcorns ="si";
var soda = "si";
var vip = "si"
var ticket = "si"

newMovie == "si" ? cash == "si" ? popcorns == "si" ? soda == "si" ? ticket =="si"? console.log ("Disfruta tu pelicula! ") : console.log("Regresa otro día")








