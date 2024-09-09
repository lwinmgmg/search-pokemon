import PokemonHolderLoading from "@/app/ui/components/PokemonHolder.loading";

export default function Loading(){
    return (
        <div className="w-full h-full grow">
            <div className="h-full w-full flex flex-col items-center space-y-5">
                <PokemonHolderLoading />
            </div>
        </div>
    );
}
