let userName = prompt("Ingresa tu nombre, por favor");
console.log(userName);
let age = prompt("Ingresa tu edad: ");
console.log(age);

alert("Bienvenido a Generation!. A continuación te pedimos que ingreses tu nombre y edad para saber si es eres candidato a este programa.");

function userInfo(userName, age){
    if (age > 18  && age < 29 ) {
        alert("Felicidades, cumples con los requisitos para ser aceptado e el Bootcamp Java Full Stack de Generation!");
    } else {
        alert("Lo sentimos " + userName + ". No cumples con los requisitos del programa");
    }
} 

userInfo(userName, age);

