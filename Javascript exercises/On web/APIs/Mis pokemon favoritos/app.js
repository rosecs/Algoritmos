
fetch('https://pokeapi.co/api/v2/pokemon/1/')
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('pokemon1')
  element.innerHTML = `<img src='${pokemon.sprites.front_default}'>`;
  console.log(pokemon)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/8/')
.then(response => response.json())
.then(pokemon2 => {
  let element2 = document.getElementById('pokemon2')
  element2.innerHTML = `<img src='${pokemon2.sprites.front_default}'>`;
  console.log(pokemon2)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/12/')
.then(response => response.json())
.then(pokemon3 => {
  let element2 = document.getElementById('pokemon3')
  element3.innerHTML = `<img src='${pokemon3.sprites.front_default}'>`;
  console.log(pokemon3)
})
.catch(err=>console.log(err))