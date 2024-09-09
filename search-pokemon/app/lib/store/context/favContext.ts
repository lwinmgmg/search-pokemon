import { Cookies } from "next-client-cookies";
import { createContext } from "react";
import { setFavCookie } from "../cookies/favCookie";

type favReducerType = {
    type: "C" | "D",
    value?: Array<string> | string,
    cookie?: Cookies
}

export const FavContext = createContext<Array<string>>([]);
export const FavCtxPatcher = createContext<((val: favReducerType)=>void) | undefined>(undefined)

export function favReducer(initVals: Array<string>, state: favReducerType): Array<string>{
    let newValue = initVals;
    switch (state.type){
        case "C":
            if (typeof state.value === "string"){
                newValue = [...initVals, state.value]
            }else if (state.value != undefined){
                newValue = [...initVals, ...state.value]
            }
            break
        case "D":
            if (typeof state.value === "string"){
                newValue = initVals.filter(res=>res!=state.value)
            }else if (state.value != undefined){
                newValue = initVals.filter(res=>!state.value?.includes(res))
            }
            break
    }
    if (state.cookie){
        setFavCookie(newValue, state.cookie);
    }
    return newValue
}
