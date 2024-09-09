import PokemonCardLoading from "./PokemonCard.loading";

export default function PokemonHolderLoading(){
    return (
        <div className="max-w-5xl grid grid-cols-2 gap-x-12 gap-y-10 md:grid-cols-3 md:gap-x-16">
            <PokemonCardLoading />
            <PokemonCardLoading />
            <PokemonCardLoading />
            <PokemonCardLoading />
            <PokemonCardLoading />
            <PokemonCardLoading />
            <PokemonCardLoading />
            <PokemonCardLoading />
            <PokemonCardLoading />
            <PokemonCardLoading />
            <PokemonCardLoading />
            <PokemonCardLoading />
        </div>
    );
}