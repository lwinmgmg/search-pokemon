import fetchData from "../../requests/graphql";

const query = `
query pokemons($first: Int!){
    pokemons(first: $first){
        id
        name
        maxCP
        maxHP
        image
        types
    }
}
`;
export async function getPokemonInfos(offset: number, limit: number): Promise<Array<PokemonInfo>>{
    const total = offset + limit;
    const variables = {
        first: total
    };
    const resp = await fetchData<FetchPokemonsResponse<PokemonInfo>>(query, variables);
    if (resp.data.pokemons.length > offset){
        return resp.data.pokemons.slice(offset, total)
    }
    return [];
}
