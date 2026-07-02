export interface PokemonResponse {
  results: PokemonItem[];
}
export interface PokemonItem {
  name: string;
  url: string;
}
export interface Pokemons {
  id: number;
  name: string;
  height: number;
  weight: number;

  sprites: {
    front_default: string;
  };

  abilities: {
    ability: {
      name: string;
    };
  }[];

  types: {
    type: {
      name: string;
    };
  }[];
}
