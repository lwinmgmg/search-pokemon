"use client";

import { FormEvent, useState } from "react";
import SearchInput from "./SearchInput";
import SearchIcon from "./SearchIcon";
import SearchHints from "./SearchHint";
import { useRouter } from "next/navigation";
import { prefetchPokemons } from "@/app/lib/store/data/pokemon";

export default function SearchHolder(){
    const router = useRouter();
    const [value, setValue] = useState("");
    const [pokemons, setPokemons] = useState<Array<PreFetchPokemon>>([])
    const searchedPokemons = pokemons.filter(pkm=> value.length > 0 && pkm.name.toLowerCase().includes(value.toLowerCase()))

    const onSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const cacheVal = value;
        setValue("");
        router.push(`/pokemons/search?search=${cacheVal}`)
    }
    const onChange = (val: string) =>{
        setValue(val);
    }
    const onFocus = async ()=>{
        if (pokemons.length ==0){
            const pp = await prefetchPokemons()
            setPokemons([...pp])
        }
    }
    return (
        <form onSubmit={onSubmit} className="w-full max-w-md mx-auto rounded-lg py-5 relative">
            <div className="w-full relative">
                <SearchInput onFocus={onFocus} value={value} setValue={onChange} />
                <SearchIcon isEmpty={value.length == 0} setValue={setValue} />
            </div>
            {
                value.length > 0 ? <SearchHints setValue={setValue} value={value} pokemons={searchedPokemons.slice(0, 5)} /> : null
            }
        </form>
    )
}