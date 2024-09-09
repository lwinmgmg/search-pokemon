import getTypeColor from "@/app/lib/getTypeColor";
import clsx from "clsx";

export default function Attack({
    attack
}:{
    attack: PokemonAttack
}){
    const [bgColor, textColor] = getTypeColor(attack.type);
    return (
    <div className={clsx(
        "text-xs text-center rounded-lg flex flex-col justify-center items-center",
        bgColor,
        textColor
    )}>
        <p className="text-sm font-bold">{attack.name}</p>
        <p>Damage Type - {attack.type}</p>
        <p>Damage - {attack.damage}</p>
    </div>
    );
}