// OOP
//Create an object
/*let objeto = {
  nombre: "Ulises",
  apellido: {    
    paterno:"Portuguez",    
    materno:"Gordillo" },
  edad: 34,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido.paterno
  }
  
}
document.getElementById("boquita").innerHTML = objeto.nombreCompleto();
*/
// create class

class padre {
  constructor(apellido) {
    this.apellidoPadre = apellido;
  }
}

class hijo extends padre {
  constructor(nombre, apellido) {
    super(apellido);
    this.nombreHijo = nombre;
  }

  registro() {
    return (
      "El nombre del hijo será: " + this.nombreHijo + " " + this.apellidoPadre);
  }
}

let username1 = prompt("¿Cúal es el nombre del hijo?");
let username2 = prompt("¿Cúal es el nombre de otro hijo?");
let userLastName = prompt("¿Cúal es el apellido?");


//let Hijo1 = new hijo("Mario", "Valdes");
//let Hijo2 = new hijo("Fernanda", "Valdes");

let Hijo1 = new hijo(username1, userLastName);
Hijo2 = new hijo(username2, userLastName);

document.getElementById("Id").innerHTML = Hijo1.registro();
document.getElementById("Id2").innerHTML = Hijo2.registro();


