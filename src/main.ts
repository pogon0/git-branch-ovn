import { getData } from "./services/serviceBase";
import "./style.css";
import { createHtml } from "./Utils/htmlUtils";

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const theInput = document.getElementById("searchText"); // Hämtar inputfältets text
  let searchText = "";
  if (theInput) {
    searchText = (theInput as HTMLInputElement).value;
  }
  const pokemon = await getData(searchText);
  createHtml(pokemon);
  if (theInput) {
    (theInput as HTMLInputElement).value = "";
  }
});

// const pokemon: Pokemon[] = JSON.parse(localStorage.getItem("pokemon") || "[]");
// createHtml(pokemon);
