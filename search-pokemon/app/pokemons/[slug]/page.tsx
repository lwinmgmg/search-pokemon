import { getPokemon } from "@/app/lib/store/data/pokemon";
import PokemonDetailPage from "@/app/ui/pokemons/slug/PokemonDetailPage";
import { notFound } from "next/navigation";

export default async function DetailPage({
    params:{
        slug
    }
}:{
    params:{
        slug: string
    }
}){
    slug = decodeURIComponent(slug);
    const pokemon = await getPokemon<PokemonDetail>(slug);
    if (!pokemon){
        notFound()
    }
    return (
        <div className="w-full flex flex-row justify-center">
            <PokemonDetailPage pokemon={pokemon} />
        </div>
    );
}