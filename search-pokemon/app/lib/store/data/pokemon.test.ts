import { describe, expect, test, jest } from '@jest/globals';
import { getPokemon, getPokemonInfos, prefetchPokemons } from './pokemon';

describe("Testing for pokemon.ts", () => {
    const mockData: FetchPokemonsResponse<PokemonInfo> = {
        data: {
            pokemons: [
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
    };

    const mockData1: {
        "UG9rZW1vbjowMDE=": PokemonInfo,
        "UG9rZW1vbjowMDQ=": PokemonInfo,
        "UG9rZW1vbjowMDc=": PokemonInfo
    } = {
        "UG9rZW1vbjowMDE=": {
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
        "UG9rZW1vbjowMDQ=": {
            id: "UG9rZW1vbjowMDQ=",
            name: "Charmander",
            maxCP: 841,
            maxHP: 955,
            image: "https://img.pokemondb.net/artwork/charmander.jpg",
            types: [
                "Fire",
            ]
        },
        "UG9rZW1vbjowMDc=": {
            id: "UG9rZW1vbjowMDc=",
            name: "Squirtle",
            maxCP: 891,
            maxHP: 1008,
            image: "https://img.pokemondb.net/artwork/squirtle.jpg",
            types: [
                "Water"
            ]
        }
    };

    function calcResp(recordId?: "UG9rZW1vbjowMDE=" | "UG9rZW1vbjowMDQ=" | "UG9rZW1vbjowMDc="): FetchPokemonResponse<PokemonInfo> {
        return {
            data: {
                pokemon: recordId ? mockData1[recordId] : undefined
            }
        };
    };

    test("Happy Case getPokemonInfos", async () => {
        // Acts
        (global.fetch as any) = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockData) }));
        const pokemons = await getPokemonInfos(0, 3);
        // Asserts
        expect(pokemons[0]).toEqual(mockData.data.pokemons[0]);
        expect(pokemons[1]).toEqual(mockData.data.pokemons[1]);
        expect(pokemons[2]).toEqual(mockData.data.pokemons[2]);
    })
    test("Limit Case getPokemonInfos", async () => {
        // Acts
        (global.fetch as any) = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockData) }));
        const pokemons = await getPokemonInfos(0, 1);
        // Asserts
        expect(pokemons.length).toEqual(1);
        expect(pokemons[0]).toEqual(mockData.data.pokemons[0]);
    })
    test("Offset Case getPokemonInfos", async () => {
        // Acts
        (global.fetch as any) = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockData) }));
        const pokemons = await getPokemonInfos(1, 2);
        // Asserts
        expect(pokemons.length).toEqual(2);
        expect(pokemons[0]).toEqual(mockData.data.pokemons[1]);
    })
    test("Out of range getPokemonInfos", async () => {
        // Acts
        (global.fetch as any) = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockData) }));
        const pokemons = await getPokemonInfos(3, 10);
        // Asserts
        expect(pokemons.length).toEqual(0);
    })


    test("Happy Case getPokemon", async () => {
        // Acts
        (global.fetch as any) = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(calcResp("UG9rZW1vbjowMDE=")) }));
        const pokemon = await getPokemon<PokemonInfo>("UG9rZW1vbjowMDE=");
        // Asserts
        expect(pokemon).toEqual(mockData1["UG9rZW1vbjowMDE="])
    })
    test("Null Case getPokemon", async () => {
        // Acts
        (global.fetch as any) = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(calcResp()) }));
        const pokemon = await getPokemon<PokemonInfo>("NoDataID");
        // Asserts
        expect(pokemon).toBeFalsy()
    })

    test("Get ALL prefetchPokemon", async () => {
        // Acts
        (global.fetch as any) = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockData) }));
        const pokemons = await prefetchPokemons();
        // Asserts
        expect(pokemons.length).toBe(3)
    })
})