import type { Pokemon } from "../models/Pokemon";

export const createHtml = (pokemon: Pokemon) => {
  const pokemonsContainer = document.getElementById("pokemonsContainer");
  if (pokemonsContainer) {
    pokemonsContainer.innerHTML = "";
  }

  const pokeDiv = document.createElement("div");
  const name = document.createElement("h2");
  const height = document.createElement("p");
  const isDefault = document.createElement("p");

  pokeDiv.className = "pokemonContainer";
  name.innerHTML = pokemon.name;
  height.innerHTML = "Height: " + pokemon.weight.toString();

  pokeDiv.appendChild(name);
  pokeDiv.appendChild(height);
  pokeDiv.appendChild(isDefault);
  pokemonsContainer?.appendChild(pokeDiv);
};
