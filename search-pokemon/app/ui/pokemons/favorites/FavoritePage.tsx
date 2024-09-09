"use client";

import { useContext, useEffect, useState } from "react";
import PokemonHolder from "@/app/ui/components/PokemonHolder";
import { FavContext } from "@/app/lib/store/context/favContext";
import { getInfoByIds } from "@/app/lib/store/data/pokemon";

export default function FavoritePage() {
    const favs = useContext(FavContext);
    const [pkms, setPkms] = useState<Array<PokemonInfo>>([]);
    useEffect(() => {
        getInfoByIds(favs).then(res => setPkms([...res]))
    }, [favs])
    return (
        <div className="h-full w-full flex flex-col items-center space-y-5">
            {
                pkms.length > 0 ? <PokemonHolder pokemons={pkms} />
                    : (
                        <p className="text-sm font-bold">No Favorite Pokemons</p>
                    )
            }
        </div>
    );
}