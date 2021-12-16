/*
Exercise #7
We have 3 items and we know the price for each. However, we can only buy the two least expensive items.
Write an algorithm that takes in three user inputs and outputs the two smallest prices to the console.
*/
// Algoritmo que señaña el producto con el precio más bajo
//Se crea una funcion que muestra al usuario los dos productos con el precio más bajo
function lowestPrice(){
    let mayor=0;
    // se declaran variables para los arrays que guardaran los valores de los productos y precios
    let products = [];
    let prices = [];
    //se crea un ciclo for de 3 repeticiones
    for (var i = 0; i<3; i++ ){
        // se declaran variables para la informacion dada por el usuario: productos y precios
        let userList = prompt('Ingresa los productos que deseas comprar: ');
        let addPrice = prompt('Ingresa los precios: ');

        // Se agregan con el metodo push de JS a la variables products y prices
        products.push(userList);
        prices.push(parseInt(addPrice));
    }
    if (prices[0] < prices[1]){
        if (prices[2] < prices[1]){ 
        alert(`Nosotros vamos a compar: ${products[0]} por ${prices[0]} y ${products[2]} por ${prices[2]}`);
        } else {
            alert(`Nosotros vamos a compar: ${products[0]} por ${prices[0]} y ${products[1]} por ${prices[1]}`);
        }
    } else {
        alert('ERROR!');
    }
}
   
alert(lowestPrice());