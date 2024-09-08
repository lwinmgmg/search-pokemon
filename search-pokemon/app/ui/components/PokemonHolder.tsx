import PokemonCard from "./PokemonCard";

export default function PokemonHolder({
    pokemons
}:{
    pokemons: Array<PokemonInfo>
}){
    return (
        <div className="max-w-5xl grid grid-cols-2 gap-x-12 gap-y-10 md:grid-cols-3 md:gap-x-16">
            {
                pokemons.map(pokemon=><PokemonCard key={pokemon.id} pokemon={pokemon} />)
            }
        </div>
    );
}