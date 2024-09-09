"use client";

import { FavContext, FavCtxPatcher, favReducer } from "@/app/lib/store/context/favContext";
import { getFavCookie } from "@/app/lib/store/cookies/favCookie";
import { useCookies } from "next-client-cookies";
import { ReactNode, useReducer } from "react";

export default function FavContextProvider({
    children
}:{
    children: ReactNode
}){
    const cookie = useCookies();
    const [ids, dispatch] = useReducer(favReducer, getFavCookie(cookie) || []);
    return (
        <FavContext.Provider value={ids}>
            <FavCtxPatcher.Provider value={dispatch}>
                {children}
            </FavCtxPatcher.Provider>
        </FavContext.Provider>
    );
}