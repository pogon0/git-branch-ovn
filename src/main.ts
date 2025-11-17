import { getData } from "./services/serviceBase";
import "./style.css";

const pokemon = await getData("charizard");
console.log(pokemon);
