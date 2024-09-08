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
        <div>
            <p className="text-sm font-bold">{children}</p>
            <div>
                {
                    attacks.map(attack=><Attack key={attack.name} attack={attack} />)
                }
            </div>
        </div>
    ) : null
}