import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function NavBarMenus(){
    return (
        <div className="flex flex-row items-center space-x-3">
            <DarkModeSwitch />
            <Link href="/pokemons/favorites" className="text-lg font-semibold">Favorites</Link>
        </div>
    )
}
