type Pokemon = {
    Name: string;
    Height: number;
    IsDefault: boolean;
}

export const createHtml = (pokemon: Pokemon) => {
    const app = document.getElementById("app");

    const name = document.createElement("h2");
    const height = document.createElement("p");
    const isDefault = document.createElement("p");

    name.innerHTML = pokemon.Name;
    height.innerHTML = pokemon.Height.toString();

    app?.appendChild(name);
    app?.appendChild(height);
    app?.appendChild(isDefault);
}

const pikachu: Pokemon = {
    Name: "pikachu",
    Height: 6,
    IsDefault: true

}

createHtml(pikachu);