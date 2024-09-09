interface PreFetchPokemon{
    id: string,
    name: string,
    image: string
}

interface PokemonInfo extends PreFetchPokemon {
    maxCP: number,
    maxHP: number,
    types: Array<string>
}

type FetchPokemonsResponse<T> = {
    data: {
        pokemons: Array<T>
    }
}

type PokemonAttack = {
    name: string,
    type: string,
    damage: number
}

type PokemonDetail =  {
    id: string,
    number: number,
    name: string,
    weight: {
        minimum: string,
        maximum: string
    },
    height: {
        minimum: string,
        maximum: string
    },
    classification: string,
    types: Array<string>,
    resistant?: Array<string>,
    weaknesses?: Array<string>,
    fleeRate: number,
    maxCP: number,
    maxHP: number,
    image: string,
    evolutionRequirements?: {
        amount: number,
        name: string
    },
    evolutions?: Array<PokemonInfo>,
    attacks?: {
        fast?: Array<PokemonAttack>,
        special?: Array<PokemonAttack>,
    }
  }

type FetchPokemonResponse<T> = {
    data: {
        pokemon?: T
    }
}
