/* Create a script that follows ..
var miAlfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
¿Cuál es la longitud de la matriz?
Escribe una función llamada miAlfabetoLongitud que console.logs la longitud de la matriz.
2.- Declara e inicializa una matriz llamada 'Planetas' con 5 valores de cadena con nombres de planetas.
Console.log cada elemento en la matriz.
También console.log el índice para cada planeta..
3.- Console.log cada elemento en esta matriz:
   var myArr = [ 1, 2, 'Uno', verdadero];
*/
var miAlfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];


function miAlfabetoLongitud(){
    console.log(miAlfabeto.length)
};

miAlfabetoLongitud();

var planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter"];

planetas.forEach((elemento, indice, array) => {
    console.log(elemento, indice, array);
});

var myArr = [ 1, 2, 'Uno', true];

myArr.forEach((element) => {
    console.log(element);
});