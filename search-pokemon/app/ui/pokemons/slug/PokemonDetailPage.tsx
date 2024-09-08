import DetailAttacks from "./DetailAttacks";
import DetailAttribue from "./DetailAttribute";
import DetailImage from "./DetailImage";

export default function PokemonDetailPage({
    pokemon
}:{
    pokemon: PokemonDetail
}){
    return (
        <div className="max-w-3xl p-5">
            <h1 className="text-2xl font-semibold text-center mb-2">{pokemon.name}</h1>
            <div className="flex flex-col md:flex-row md:justify-stretch">
                <div className="space-y-1">
                    <DetailImage image={pokemon.image} />
                    <div className="w-full h-7 bg-green-500 text-slate-50 rounded-full flex flex-col justify-center">
                        <p className="text-center font-bold">HP - {pokemon.maxHP}</p>
                    </div>
                    <div className="w-full h-7 bg-blue-400 text-slate-50 rounded-full flex flex-col justify-center">
                        <p className="text-center font-bold">CP - {pokemon.maxCP}</p>
                    </div>
                </div>
                <div className="w-5"></div>
                <div className="">
                    <DetailAttribue pokemon={pokemon} />
                </div>
            </div>
            <div className="space-y-1 py-1">
                <DetailAttacks attacks={pokemon.attacks?.fast || []}>Fast Attacks</DetailAttacks>
                <DetailAttacks attacks={pokemon.attacks?.special || []}>Special Attacks</DetailAttacks>
            </div>
        </div>
    );
}