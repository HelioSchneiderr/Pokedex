const fetchPokemon = () =>{
    const url = `https://pokeapi.co/api/v2/pokemon/3`;
    
    fetch(url)
    .then(resposta = resposta.json())
    .then(pokemon => {
        console.log(pokemon);
    });
}

fetchPokemon();