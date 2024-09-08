export default function getTypeColor(typeName: string): [string, string]{
    let bgColor = "bg-slate-400";
    let textColor = "text-slate-100";
    switch (typeName){
        case "Water":
            bgColor = "bg-blue-300";
            textColor = "text-blue-100"
            break
        case "Grass":
            bgColor = "bg-green-300"
            textColor = "text-green-100"
            break
        case "Poison":
            bgColor = "bg-green-400"
            textColor = "text-green-100"
            break
        case "Fire":
            bgColor = "bg-orange-400"
            textColor = "text-orange-100"
            break
        case "Flying":
            bgColor = "bg-blue-400"
            textColor = "text-blue-100"
            break
        case "Dragon":
            bgColor = "bg-red-300"
            textColor = "text-red-100"
            break
        case "Fighting":
            bgColor = "bg-red-400"
            textColor = "text-red-100"
            break
        case "Ice":
            bgColor = "bg-blue-500"
            textColor = "text-blue-100"
            break
        case "Fairy":
            bgColor = "bg-yellow-300"
            textColor = "text-yellow-800"
            break
        case "Electric":
            bgColor = "bg-blue-50"
            textColor = "text-blue-400"
            break
        case "Normal":
            bgColor = "bg-slate-50"
            textColor = "text-slate-500"
            break
        case "Steel":
            bgColor = "bg-zinc-500"
            textColor = "text-zinc-100"
            break
        case "Rock":
            bgColor = "bg-stone-700"
            textColor = "text-stone-100"
            break
        case "Ghost":
            bgColor = "bg-slate-50"
            textColor = "text-slate-500"
            break
        case "Psychic":
            bgColor = "bg-amber-50"
            textColor = "text-amber-300"
            break
        case "Ground":
            bgColor = "bg-emerald-500"
            textColor = "text-emerald-100"
            break
    }
    return [bgColor, textColor]
}