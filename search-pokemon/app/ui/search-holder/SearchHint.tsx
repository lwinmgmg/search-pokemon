import Link from "next/link";
import PokemonResult from "./PokemonResult";

export default function SearchHints({
    pokemons,
    value,
    setValue
}:{
    pokemons: Array<PreFetchPokemon>,
    value: string,
    setValue: (val:string)=>void
}){
    return (
        <div className="w-full h-96 bg-slate-100 dark:bg-slate-700 ring-1 rounded-xl p-2 absolute z-40 overflow-y-auto" onClick={()=>setValue("")}>
            <Link href={`/pokemons/search?search=${value}`}>
            <p className="p-5 rounded-2xl bg-slate-200 dark:bg-slate-800 hover:text-opacity-50 hover:cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900"><span className="text-xs font-semibold">Search</span> {'"' + value + '"'}</p>
            </Link>
            <p className="text-xs font-bold my-2">Pokemons</p>
            <div className="">
                {
                    pokemons.length > 0 ? pokemons.map(pkm=><PokemonResult key={pkm.id} pokemon={pkm} />)
                    : <p className="text-center text-sm">No Pokemons Founds</p>
                }
            </div>
        </div>
    );
}