// Advanced arrays: use .pop, .push, shift, .unshift
/*
var cars1 = ["Saab", "Volvo", "BMW"];

var cars2 =  [
    "Saab",
    "Volvo",
    "BMW"
];

var cars3 = new Array("Saab", "Volvo", "BMW");

console.log(cars1);
console.log(cars2);
console.log(cars3);

*/

/*
let myTeam = ["Regina", "Rosa", "Sofía", "Jorge","Lilia", "Carolina","Daniel", "Johnatan"];
console.log(myTeam);

function quitMember(index, numberOfMembers){
    myTeam.splice(index,numberOfMembers);
}
quitMember(1,2);

copy = myTeam.slice();
console.log(copy);
*/

let arreglo = [];

console.log(arreglo);

arreglo.push("Elemento1","Elemento2","Elemento3","Elemento4","Elemento5");

console.log(arreglo);

console.log(arreglo.length);

console.log(Object.keys(arreglo));

arreglo[7]="Elemento8"

console.log(Object.keys(arreglo));

console.log(arreglo);




/*
function quitLastMember(){
    myTeam.pop();
    console.log(myTeam);
}

function addMemberatEnd(){
    myTeam.push("Jess");
    console.log(myTeam);
}

function addMemberatTop(){
    myTeam.unshift("Mauricio");
    console.log(myTeam);
}

function quitMemberatTop(){
    myTeam.shift();
    console.log(myTeam);
}

quitLastMember();
addMemberatEnd();
addMemberatTop();
quitMemberatTop();
*/
/*
let frutas = ["Manzana", "Banana", "Uvas", "Naranja"]

frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})

// ["Manzana", "Banana", "Fresa"]
let elementoEliminado = frutas.splice(2, 1);
// ["Manzana", "Fresa"]

console.log(elementoEliminado);
*/



