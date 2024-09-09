import PokemonCardType from "../../components/PokemonCardType";
import Attribute from "./Attribute";
import DetailFavoriteIcon from "./DetailFavoriteIcon";

export default function DetailAttribue({
    pokemon
}:{
    pokemon: PokemonDetail
}){
    return (
        <div className="h-full w-80 flex flex-col space-y-5">
            <div className="w-full grow bg-blue-200 text-slate-600 dark:bg-blue-900 dark:text-blue-100 rounded-md grid grid-cols-2 justify-center items-center p-4 gap-3">
                <Attribute title="Classification">
                    {pokemon.classification}
                </Attribute>
                <Attribute title="Flee Rate">
                    {pokemon.fleeRate}
                </Attribute>
                <Attribute title="Height">
                    {pokemon.height.minimum} ~ {pokemon.height.maximum}
                </Attribute>
                <Attribute title="Weight">
                    {pokemon.weight.minimum} ~ {pokemon.weight.maximum}
                </Attribute>
            </div>
            <div className="*:m-0.5 text-left">
                <p className="text-xs font-bold">Types</p>
                {
                    pokemon.types?.map(tpy=><PokemonCardType key={tpy} typeName={tpy} />)
                }
            </div>
            <div className="*:m-0.5 text-left">
                <p className="text-xs font-bold">Resistances</p>
                {
                    pokemon.resistant?.map(tpy=><PokemonCardType key={tpy} typeName={tpy} />)
                }
            </div>
            <div className="*:m-0.5 text-left">
                <p className="text-xs font-bold">Weaknesses</p>
                {
                    pokemon.weaknesses?.map(tpy=><PokemonCardType key={tpy} typeName={tpy} />)
                }
            </div>
            <DetailFavoriteIcon id={pokemon.id} />
        </div>
    );
}