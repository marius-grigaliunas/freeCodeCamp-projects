const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonID = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const typesContainer = document.getElementById("types");
const hpStat = document.getElementById("hp");
const attackStat = document.getElementById("attack");
const defenseStat = document.getElementById("defense");
const specialAttackStat = document.getElementById("special-attack");
const specialDefenseStat = document.getElementById("special-defense");
const speedStat = document.getElementById("speed");
const imageContainer = document.getElementById("picture-container");

const fetchPokemon = async () => {
    try {
        const pokeNameOrId = searchInput.value.toLowerCase().
            replace(/[&\/\\#,+()$~%.'"!\[\]:;@^_=\-*?<>{}]/g, "").
            replace(/\s/g, "-");
        const response = await fetch(
            `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokeNameOrId}`
        );
        const data = await response.json();
        buildOutput(data);
    } catch (err) {
        alert("Pokémon not found");
        reset();
    }
};

const buildOutput = data => {
    pokemonName.innerHTML = data.name.toUpperCase();
    pokemonID.innerHTML = `#${data.id}`;
    weight.innerHTML = data.weight;
    height.innerHTML = data.height;

    imageContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}"></img>`;

    typesContainer.innerHTML = "";
    data.types.forEach(item => {
        typesContainer.innerHTML += 
        `<div class="type ${item.type.name}">${item.type.name.toUpperCase()}</div>`;
    });

    hpStat.innerHTML = data.stats[0].base_stat;
    attackStat.innerHTML = data.stats[1].base_stat;
    defenseStat.innerHTML = data.stats[2].base_stat;
    specialAttackStat.innerHTML = data.stats[3].base_stat;
    specialDefenseStat.innerHTML = data.stats[4].base_stat;
    speedStat.innerHTML = data.stats[5].base_stat;
    console.log(data);
};

const reset = () => {
    searchInput.value = "";
    pokemonName.innerHTML = "";
    pokemonID.innerHTML = "";
    weight.innerHTML = "";
    height.innerHTML = "";
    typesContainer.innerHTML = "";
    hpStat.innerHTML = "";
    attackStat.innerHTML = "";
    defenseStat.innerHTML = "";
    specialAttackStat.innerHTML = "";
    specialDefenseStat.innerHTML = "";
    speedStat.innerHTML = "";
    imageContainer.innerHTML = "";
};

searchButton.addEventListener("click", fetchPokemon);