"use server";

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

const singleQuery = `
query pokemon($id: String, $name: String){
  pokemon(id: $id, name: $name){
    id
    number
    name
    weight{
      minimum
      maximum
    }
    height{
      minimum
      maximum
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
    evolutionRequirements{
        amount
        name
    }
    attacks{
        fast{
            name
            type
            damage
        }
        special{
            name
            type
            damage
        }
    }
    evolutions{
        id
        name
        maxCP
        maxHP
        image
        types
    }
  }
}
`
export async function getPokemon<T>(id: string): Promise<T | undefined>{
    const variables = {
        id
    };
    const data = await fetchData<FetchPokemonResponse<T>>(singleQuery, variables);
    return data.data.pokemon
}

const preFetchQuery = `
query pokemons($first: Int!){
    pokemons(first: $first){
        id
        name
        image
    }
}
`

export async function prefetchPokemons() {
    const variables = {
        first: -1
    };
    const data = await fetchData<FetchPokemonsResponse<PreFetchPokemon>>(preFetchQuery, variables);
    return data.data.pokemons
}

const infoByIdQuery =`
query pokemon($id: String, $name: String){
  pokemon(id: $id, name: $name){
    id
    name
    maxCP
    maxHP
    image
    types
  }
}
`

export async function getInfoByIds(ids: Array<string>){
    const resList = await Promise.all(ids.map(id=>{
        const variables = {
            id
        }
        return fetchData<FetchPokemonResponse<PokemonInfo>>(infoByIdQuery, variables)
    }))
    return resList.map(res=>res.data.pokemon).filter(res=>res != undefined)
}
