var element = ["Carbono", "Oxigeno", "Hierro"];

var symbol = ["C", "O", "Fe"];

var atomicNumber  = [6,8,26];

var tabla_per = [element,symbol,atomicNumber];  

console.log("The symbol of ",element[2]," is: ",tabla_per[1][2]);  

console.log(tabla_per);
console.log(tabla_per[0][1]);

console.log(`El ${tabla_per[0][0]} tiene como simbolo la letra ${tabla_per[1][0]} y su número atómico es ${tabla_per[2][0]}`);

const armando = [
    [["Manzana", "Piña", "Sandía"],["Jitomate", "Lechuga"],["Gryffindor", "Hufflepuff", "Sliderin","Ravenclaw"],["Lentes"]],
    ["Cubone","Rayquaza","Charizard"],
    [["sonriente"],["feliz"],["triste"],["sonrojado"],["entusiasmado"],["jugueton"]],
    ["Vegetita", "Kokun"]
] ;

console.log(armando);
//El jitomate color charizad se ve sonriente porque vio a vegetita

console.log( `El  ${armando[0][1][0]} color ${armando[1][2]} se ve sonriente porque vio a  ${armando[3][0]}`);
 