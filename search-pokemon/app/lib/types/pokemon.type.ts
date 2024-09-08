type PokemonInfo = {
    id: string,
    name: string,
    image: string,
    maxCP: number,
    maxHP: number,
    types: Array<string>
}

type PreFetchPokemon = {
    name: string,
    types: Array<string>
}

type FetchPokemonsResponse<T> = {
    data: {
        pokemons: Array<T>
    }
}
