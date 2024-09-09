"use server";

import { getInfoByIds, prefetchPokemons } from "@/app/lib/store/data/pokemon";
import PokemonHolder from "../../components/PokemonHolder";

export default async function SearchPage({
    search
}:{
    search: string
}){
    const pp = await prefetchPokemons();
    const searchedPokemons = pp.filter(pkm=> search.length > 0 && pkm.name.toLowerCase().includes(search.toLowerCase()))
    const pokemons = await getInfoByIds(searchedPokemons.map(pkm=>pkm.id))
    return (
        <div className="h-full w-full flex flex-col items-center space-y-5">
            <p>Search Result {'"' + search + '"'}</p>
            {
                pokemons.length > 0 ? <PokemonHolder pokemons={pokemons} />
                : (
                    <p className="text-sm font-bold">No Pokemon Found</p>
                )
            }
        </div>
    );
}