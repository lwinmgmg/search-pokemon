import Link from "next/link";
import PokemonResultImage from "./PokemonResultImage";

export default function PokemonResult({
    pokemon
}:{
    pokemon: PreFetchPokemon
}){
    return (
        <Link href={`/pokemons/${pokemon.id}`}>
            <div className="my-1 p-5 rounded-2xl bg-slate-200 dark:bg-slate-800 hover:text-opacity-50 hover:cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 flex flex-row items-center">
                <PokemonResultImage image={pokemon.image} />
                <div className="w-5"></div>
                <h2 className="text-sm font-semibold">{pokemon.name}</h2>
            </div>
        </Link>
    );
}