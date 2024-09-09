import PokemonCard from "../../components/PokemonCard";

export default function Evolution({
    pokemon
}:{
    pokemon: PokemonDetail
}){
    return (
        <div className="w-full">
            <h1 className="font-semibold">Evolutions</h1>
            <div className="grid grid-cols-2 md:grid-cols-4">
                <div className="col-span-2 md:col-span-1 flex flex-row justify-center">
                    <PokemonCard pokemon={pokemon} />
                </div>


                {
                    pokemon.evolutions ? (
                        <>
                            <div className="col-span-2 md:col-span-1">
                                <div className="h-full w-full flex flex-col justify-center items-center p-5">
                                    <p>Evolute To</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 hidden md:block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 block md:hidden">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p className="text-xs font-bold">Requirements</p>
                                    <p className="text-sm">{pokemon.evolutionRequirements?.name}</p>
                                    <p>{pokemon.evolutionRequirements?.amount}</p>
                                </div>
                            </div>
                            {
                                pokemon.evolutions.map(pkm=><PokemonCard key={pkm.id} pokemon={pkm} />)
                            }
                        </>
                    ) : <p className="flex flex-col justify-center items-center text-sm font-bold">No Evolutions Found</p>
                }
            </div>
        </div>
    );
}