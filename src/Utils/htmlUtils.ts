type Pokemon = {
    name: string;
    height: string;
    isDefault: string;
}

export const createHtml = () => {
    const app = document.getElementById("app");

    const name = document.createElement("h2");
    const height = document.createElement("p");
    const isDefault = document.createElement("p");

    name.innerHTML = Pokemon.Name;
    height.innerHTML = Pokemon.Height;
    isDefault.innerHTML = Pokemon.IsDefault;

    app?.appendChild(name);
    app?.appendChild(height);
    app?.appendChild(isDefault);
}