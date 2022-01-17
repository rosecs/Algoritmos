//Orden de las posiciones de los competidores
alert("Bienvenidos a la carrera Generation!");

let carreritas = ["Lucía", "Roberto", "María", "Jesús", "Andrea", "José"];

//La clasificación actual
carreritas.forEach((element, index, array) => {
    console.log(element, index);
});

alert("El orden de las posiciones de los participantes es: " + carreritas);
//andrea cambia a lugar 2
delete carreritas[4];
carreritas.splice(1,0,"Andrea");
/// jose es eliminado
carreritas.pop();
//agregar tres nuevos jugadores entre lucia y riberto: cristobal, fernanda y armando
carreritas.splice(3,0,"Cristobal", "Fernanda", "Armando");
//federico se coloca primero
carreritas.unshift("Federico");
//imprime clasificacion
carreritas.forEach((element, index, array) => {
    console.log(element, index);
});
alert("El orden final es: " + carreritas);