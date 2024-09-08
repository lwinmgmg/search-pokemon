import {describe, expect, test, jest} from '@jest/globals';
import { getPokemonInfos } from './pokemon';

const mockData: FetchPokemonsResponse<PokemonInfo> = {
    data: {
        pokemons:[
            {
                id: "UG9rZW1vbjowMDE=",
                name: "Bulbasaur",
                maxCP: 951,
                maxHP: 1071,
                image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
                types: [
                    "Grass",
                    "Poison"
                ]
            },
            {
                id: "UG9rZW1vbjowMDQ=",
                name: "Charmander",
                maxCP: 841,
                maxHP: 955,
                image: "https://img.pokemondb.net/artwork/charmander.jpg",
                types: [
                    "Fire",
                ]
            },
            {
                id: "UG9rZW1vbjowMDc=",
                name: "Squirtle",
                maxCP: 891,
                maxHP: 1008,
                image: "https://img.pokemondb.net/artwork/squirtle.jpg",
                types: [
                    "Water"
                ]
            }
        ]
    }
}

describe("Testing for getPokemonInfos Function", ()=>{
    (global.fetch as any) = jest.fn(()=>Promise.resolve({ json: ()=>Promise.resolve(mockData)}))
    test("Happy Case getPokemonInfos", async () => {
        // Acts
        const pokemons = await getPokemonInfos(0, 3);
        // Asserts
        expect(pokemons[0]).toEqual(mockData.data.pokemons[0]);
        expect(pokemons[1]).toEqual(mockData.data.pokemons[1]);
        expect(pokemons[2]).toEqual(mockData.data.pokemons[2]);
    })
    test("Limit Case getPokemonInfos", async () => {
        // Acts
        const pokemons = await getPokemonInfos(0, 1);
        // Asserts
        expect(pokemons.length).toEqual(1);
        expect(pokemons[0]).toEqual(mockData.data.pokemons[0]);
    })
    test("Offset Case getPokemonInfos", async () => {
        // Acts
        const pokemons = await getPokemonInfos(1, 2);
        // Asserts
        expect(pokemons.length).toEqual(2);
        expect(pokemons[0]).toEqual(mockData.data.pokemons[1]);
    })
    test("Out of range getPokemonInfos", async () => {
        // Acts
        const pokemons = await getPokemonInfos(3, 10);
        // Asserts
        expect(pokemons.length).toEqual(0);
    })
})
