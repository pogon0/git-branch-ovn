import type { Pokemon } from "../models/Pokemon";

export const createHtml = (pokemon: Pokemon) => {
    const app = document.getElementById("app");

    const name = document.createElement("h2");
    const height = document.createElement("p");
    const isDefault = document.createElement("p");

    name.innerHTML = pokemon.Name;
    height.innerHTML = pokemon.Weight.toString();

    app?.appendChild(name);
    app?.appendChild(height);
    app?.appendChild(isDefault);
}

