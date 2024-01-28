// Pokemon Search with API

fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(response => response.json()).then(data => console.log(data.name)).catch(error => console.error(error));

function getPokemon() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            const pokemonImg = document.getElementById('pokemonImage');
            pokemonImg.src = data.sprites.front_default;
            pokemonImg.alt = pokemonName;
            pokemonImg.style.visibility = 'visible'; // Make the image visible
        })
        .catch(error => alert(`There is no pokemon named "${pokemonName}" please enter a real pokemon name :)`));
}