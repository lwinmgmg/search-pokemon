import SearchPage from "@/app/ui/pokemons/search/SearchPage";

export default function Search({
    searchParams:{
        search
    }
}:{
    searchParams:{
        search: string
    }
}){
    search = decodeURIComponent(search);
    return (
        <div className="w-full h-full grow">
            <SearchPage search={search} />
        </div>
    );
}