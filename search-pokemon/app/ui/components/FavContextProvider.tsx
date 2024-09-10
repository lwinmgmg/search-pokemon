"use client";

import { FavContext, FavCtxPatcher, favReducer } from "@/app/lib/store/context/favContext";
import { getFavCookie } from "@/app/lib/store/cookies/favCookie";
import { ReactNode, useEffect, useReducer } from "react";
import Cookies from "universal-cookie";

export default function FavContextProvider({
    children
}:{
    children: ReactNode
}){
    const [ids, dispatch] = useReducer(favReducer, []);
    useEffect(()=>{
        const cookie = new Cookies()
        const data = getFavCookie(cookie);
        dispatch({
            type: "C",
            value: data
        })
    }, [])
    return (
        <FavContext.Provider value={ids}>
            <FavCtxPatcher.Provider value={dispatch}>
                {children}
            </FavCtxPatcher.Provider>
        </FavContext.Provider>
    );
}