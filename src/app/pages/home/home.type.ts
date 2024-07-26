export interface PokemonResponse {
  results: Pokemon[];
  count: number;
}

export interface Pokemon {
  name: string;
}

export interface PokemonDetail {
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}
