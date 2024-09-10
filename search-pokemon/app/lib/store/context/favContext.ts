import { createContext } from "react";
import { setFavCookie } from "../cookies/favCookie";
import { Cookie } from "universal-cookie";

type favReducerType = {
    type: "C" | "D",
    value?: Array<string> | string,
    cookie?: Cookie
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
    newValue = newValue.filter((value, index, array) => array.indexOf(value) === index);
    if (state.cookie){
        setFavCookie(newValue, state.cookie);
    }
    return newValue
}
