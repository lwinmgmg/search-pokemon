"use client";

import { FormEvent, useState } from "react";
import SearchInput from "./SearchInput";
import SearchIcon from "./SearchIcon";
import { prefetchPokemons } from "@/app/lib/store/data/pokemon";
import SearchHints from "./SearchHint";

export default function SearchHolder(){
    const [value, setValue] = useState("");
    const [pokemons, setPokemons] = useState<Array<PreFetchPokemon>>([]);
    const searchedPokemons = pokemons.filter(pkm=> value.length > 0 && pkm.name.toLowerCase().includes(value.toLowerCase()))
    const onSubmit = (e: FormEvent<HTMLFormElement>)=>{
        setValue("");
        e.preventDefault()
    }
    const onChange = (val: string) =>{
        setValue(val);
    }
    const onFocus = async ()=>{
        if (pokemons.length == 0){
            const preFetchs = await prefetchPokemons();
            setPokemons([...preFetchs])
        }
    }
    return (
        <form onSubmit={onSubmit} className="w-full max-w-md mx-auto rounded-lg py-5 relative">
            <div className="w-full relative">
                <SearchInput onFocus={onFocus} value={value} setValue={onChange} />
                <SearchIcon isEmpty={value.length == 0} setValue={setValue} />
            </div>
            {
                value.length > 0 ? <SearchHints setValue={setValue} value={value} pokemons={searchedPokemons} /> : null
            }
        </form>
    )
}