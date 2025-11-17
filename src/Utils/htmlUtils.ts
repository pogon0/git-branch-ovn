import type { Pokemon } from "../models/Pokemon";

export const createHtml = (pokemon: Pokemon) => {
  console.log("pokemon name in createHtml", pokemon.name);

  const app = document.getElementById("app");

  const name = document.createElement("h2");
  const height = document.createElement("p");
  const isDefault = document.createElement("p");

  name.innerHTML = pokemon.name;
  height.innerHTML = pokemon.weight.toString();

  app?.appendChild(name);
  app?.appendChild(height);
  app?.appendChild(isDefault);
};
