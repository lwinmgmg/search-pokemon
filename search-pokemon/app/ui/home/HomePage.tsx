"use server";

import { getPokemonInfos } from "@/app/lib/store/data/pokemon";
import PokemonHolder from "../components/PokemonHolder";

export default async function HomePage(){
    const pokemons = await getPokemonInfos(0, 12);
    return (
        <div className="h-full w-full flex flex-col items-center py-10">
            <PokemonHolder pokemons={pokemons} />
        </div>
    );
}
