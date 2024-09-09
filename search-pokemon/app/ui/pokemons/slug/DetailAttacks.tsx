import { ReactNode } from "react";
import Attack from "./Attack";

export default function DetailAttacks({
    children,
    attacks
}:{
    children: ReactNode,
    attacks: Array<PokemonAttack>
}){
    return attacks.length > 0 ? (
        <div className="w-full overflow-x-auto">
            <p className="text-sm font-bold">{children}</p>
            <div className="*:inline-block *:m-0.5 *:px-2 *:py-2 first:ml-0 last:mr-0 w-full overflow-auto">
                {
                    attacks.length > 0 ? attacks.map(attack=><Attack key={attack.name} attack={attack} />) :
                    <p className="text-xs">No {children}</p>
                }
            </div>
        </div>
    ) : null
}