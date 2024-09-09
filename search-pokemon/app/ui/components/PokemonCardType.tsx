import getTypeColor from "@/app/lib/getTypeColor";
import clsx from "clsx";

export default function PokemonCardType({
    typeName
}: {
    typeName: string
}){
    const [bgColor, textColor] = getTypeColor(typeName);
    return (
        <p className={clsx(
            "text-xs font-semibold inline-block p-1 rounded-md",
            bgColor,
            textColor
        )}>{typeName}</p>
    );
}