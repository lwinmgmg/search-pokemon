import Link from "next/link";
import PokemonCardType from "./PokemonCardType";
import PokemonImage from "./PokemonImage";
import FavoriteIcon from "./FavoriteIcon";

export default function PokemonCard({
    pokemon
}: {
    pokemon: PokemonInfo
}) {
    return (
        <div className="relative">
            <Link href={`/pokemons/${pokemon.id}`}>
                <div className="w-40 py-2 ring-1 ring-slate-300 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl dark:shadow-slate-500 relative">
                    <div className="flex flex-row justify-center">
                        <PokemonImage image={pokemon.image} />
                    </div>
                    <div className="p-2 text-blue-700 space-y-1">
                        <h1 className="text-sm text-center font-bold">{pokemon.name}</h1>
                        <div className="*:m-0.5 text-center">
                            {
                                pokemon.types.map(tpy=><PokemonCardType key={tpy} typeName={tpy} />)
                            }
                        </div>
                        <div className="h-4 w-full bg-green-500 rounded-full text-xs text-center text-slate-50">HP - {pokemon.maxHP}</div>
                        <div className="h-4 w-full bg-blue-400 rounded-full text-xs text-center text-slate-50">CP - {pokemon.maxCP}</div>
                    </div>
                    <FavoriteIcon id={pokemon.id} className="w-8 h-8 absolute top-0 right-0" />
                </div>
            </Link>
            <div>

            </div>
        </div>
    );
}