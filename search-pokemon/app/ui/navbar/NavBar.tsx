"use state";
import NavBarTitle from "./NavBarTitle";
import NavBarMenus from "./NavBarMenus";

export default function NavBar(){
    return (
        <div className="flex flex-row justify-around items-center py-8 shadow-md">
            <NavBarTitle />
            <NavBarMenus />
        </div>
    );
}
