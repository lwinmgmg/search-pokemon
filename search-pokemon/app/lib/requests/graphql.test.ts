import {describe, expect, test, jest} from '@jest/globals';
import fetchData from './graphql';
import { Mock } from 'node:test';

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

describe("Testing for FetchData Function", ()=>{
    test("Happy Case Fetch Data", async () => {
        // Arrange
        (global.fetch as Mock<any>) = jest.fn(()=>Promise.resolve({ json: ()=>Promise.resolve(mockData)}))
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
        `
        const variables = {
            first: 3
        }
        // Act
        const res = await fetchData<FetchPokemonsResponse<PokemonInfo>>(query, variables);
        // Assert
        expect(res.data.pokemons.length).toBe(3);
    });
})
