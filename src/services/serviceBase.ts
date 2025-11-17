// type Pokemon = {
//   name: string;
//   weight: number;
//   isDefault: boolean;
// };

import type { Pokemon } from "../models/Pokemon";

export const getData = async (searchTerm: string) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
  );
  const data: Pokemon = await response.json();
  return data;
};
