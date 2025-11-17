import "./style.css";

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const theInput = document.getElementById("searchText");

  let searchText = "";
  if (theInput) {
    searchText = (theInput as HTMLInputElement).value;
  }

  const movies = await getPokemon(searchText);
  createHtml(movies);

  if (theInput) {
    (theInput as HTMLInputElement).value = "";
  }
});
