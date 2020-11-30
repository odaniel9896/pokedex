'use strict';

//PEGAR OS DADOS DO POKEMON

// const pokemon = document.getElementById('textoInput');


// const preencherPokemon = (data) => {
//     //document.getElementById('nomePokemon').value = data.
//     document.getElementById('habilidade').value = data[0].abilities[0].ability.name;

// }


// // PEGAR O POKEMON DA API
// const pokemonFetch = () => {
//     const url = id => `https://pokeapi.co/api/v2/pokemon/${id}`

//     const pokemonPromise = [];
    
//     for (let i = 1; i <= 1; i++) {
//     pokemonPromise.push(fetch(url(i)).then(response => response.json()))
//     }

//     Promise.all(pokemonPromise)
//     .then(data => data);
// }
// const pesquisarPokemon = () => {
//    pokemonFetch(pokemon.value);
// }

// pokemon.addEventListener('copy', pesquisarPokemon);


 
// const pokeFrontImage = document.querySelector('camera-display');
    const pokemon = document.getElementById('textoInput');
    const button = document.querySelector('#button-pesquisar');
    const buttonShint = document.querySelector('#butaoShiny');
   

  
  


const preencherPokemon = (data) => {
    document.getElementById('nomePokemon').value = data.name;
    document.getElementById('habilidade').value = data.abilities.map(abilityInfo => abilityInfo.ability.name).join (' | ');
    document.getElementById('moves1').value = data.moves[0].move.name;
    document.getElementById('moves2').value = data.moves[1].move.name;
    document.getElementById('moves3').value = data.moves[2].move.name;
    document.getElementById('idPokemon').value = data.id;
    document.getElementById('moves4').value = data.moves[3].move.name;
    document.getElementById('tipoPokemon').value = data.types.map(typeInfo => typeInfo.type.name).join(' | ');
    // document.getElementById('tipoPokemon').value = console.log(data.types[1].type.name);

    let img = data['sprites']['other']['official-artwork']['front_default'];
    document.getElementById('imagemPokemon').setAttribute('src', img);

    
}


const pokemonFetch = (pokemon) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(url).then(response => response.json())
              .then(data=>  preencherPokemon(data));
}


//FETCH PARA CHAMAR O POKEMON SHINY

const preencherShiny = (data) => {
    document.getElementById('nomePokemon').value = data.name;
    
    document.getElementById('habilidade').value = data.abilities.map(abilityInfo => abilityInfo.ability.name).join (' | ');
    document.getElementById('moves1').value = data.moves[0].move.name;
    document.getElementById('moves2').value = data.moves[1].move.name;
    document.getElementById('moves3').value = data.moves[2].move.name;
    document.getElementById('moves4').value = data.moves[3].move.name;
    document.getElementById('tipoPokemon').value = data.types.map(typeInfo => typeInfo.type.name).join(' | ');
    document.getElementById('idPokemon').value = data.id;

    let imgShiny = data['sprites']['front_shiny'];
    document.getElementById('imagemPokemon').setAttribute('src', imgShiny);
}


const pokemonFetchShiny = (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(url).then(response => response.json())
              .then(data=>  preencherShiny(data));
}


// CHAMAR OS POKEMONS
const pesquisarPokemon = () => {
  pokemonFetch(pokemon.value);
}
const pesquisarPokemonShiny = () => {
  pokemonFetchShiny(pokemon.value);
}


//FAZ MUDAR A COR DO BOTAO Q LIGA QUANDO SELECIONADA

var color = ["red", "yellow", "aquamarine"]
var i = 0 ;
document.querySelector('#button-pesquisar').addEventListener('click',
 function () {
    i = i < color.length ? ++i : 0;
    i = i < color.length ? ++i : 0;
    document.querySelector("#butaoRgb").style.background = color[i];
})


//EVENTOS PARA REALIZAR
button.addEventListener('click', pesquisarPokemon);

buttonShint.addEventListener('click', pesquisarPokemonShiny);



 









        
        
        