type Pokemon = {
  name: string;
  weight: number;
  isDefault: boolean;
};

export const getData = async (searchTerm: string) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
  );
  const data: Pokemon = await response.json();
  return data;
};
