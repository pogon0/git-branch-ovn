import type { Pokemon } from "./models/Pokemon";
import { getData } from "./services/serviceBase";
import "./style.css";
import { createHtml } from "./Utils/htmlUtils";

const pokemon = await getData("charizard");
console.log(pokemon.name);


const pikachu: Pokemon = {
    Name: "pikachu",
    Weight: 6,
    isdefault: true

}

createHtml(pikachu);