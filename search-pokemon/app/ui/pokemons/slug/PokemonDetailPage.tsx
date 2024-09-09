import BackBtn from "../../components/BackBtn";
import DetailAttacks from "./DetailAttacks";
import DetailAttribue from "./DetailAttribute";
import DetailImage from "./DetailImage";
import Evolution from "./Evolution";

export default function PokemonDetailPage({
    pokemon
}:{
    pokemon: PokemonDetail
}){
    return (
        <div className="max-w-3xl p-5">
            <div>
                <BackBtn />
            </div>
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
                <div className="w-5 h-2"></div>
                <div className="">
                    <DetailAttribue pokemon={pokemon} />
                </div>
            </div>
            <div className="space-y-1 py-1 w-80 md:w-full">
                <DetailAttacks attacks={pokemon.attacks?.fast || []}>Fast Attacks</DetailAttacks>
                <DetailAttacks attacks={pokemon.attacks?.special || []}>Special Attacks</DetailAttacks>
            </div>
            <div className="w-80 md:w-full">
                <Evolution pokemon={pokemon} />
            </div>
        </div>
    );
}