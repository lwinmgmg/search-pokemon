"use server";

import { getPokemonInfos } from "@/app/lib/store/data/pokemon";
import PokemonHolder from "../components/PokemonHolder";
import calculateOffset from "@/app/lib/calculateOffset";
import HomePagination from "./HomePagination";

export default async function HomePage({
    page,
    limit
}:{
    page: number,
    limit: number
}){
    const [offset, limitNumber] = calculateOffset(page, limit)
    const pokemons = await getPokemonInfos(offset, limitNumber);
    return (
        <div className="h-full w-full flex flex-col items-center py-10 space-y-5">
            <PokemonHolder pokemons={pokemons} />
            <HomePagination page={page} limit={limit} currentCount={pokemons.length} />
        </div>
    );
}
