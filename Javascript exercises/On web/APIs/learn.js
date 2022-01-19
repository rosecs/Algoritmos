fetch('https://pokeapi.co/api/v2/pokemon/19/')
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('pokemon1')
  element.innerHTML = `<p> Nombre: ${pokemon.name}<p>
  <img src='${pokemon.sprites.front_default}'><p>${pokemon.height}<p><p>${pokemon.weight}<p>`;
  console.log(pokemon)
})
.catch(err=>console.log(err))