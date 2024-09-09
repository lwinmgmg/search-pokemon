"use client";

import { MouseEvent, useContext } from "react";
import FavoriteIcon from "../../components/FavoriteIcon";
import { FavContext, FavCtxPatcher } from "@/app/lib/store/context/favContext";
import { useCookies } from "next-client-cookies";

export default function DetailFavoriteIcon({
    id
}:{
    id: string
}){
    const cookie = useCookies();
    const favorites = useContext(FavContext);
    const dispatch = useContext(FavCtxPatcher);
    const onClick = (e: MouseEvent<HTMLButtonElement>)=>{
        if (dispatch){
            if (favorites.includes(id)){
                dispatch({
                    type: "D",
                    value: id,
                    cookie: cookie
                })
            }else{
                dispatch({
                    type: "C",
                    value: id,
                    cookie: cookie
                })
            }
        }
        e.preventDefault()
    }
    return (
        <div className="flex flex-row items-center">
            <button onClick={onClick} className="py-1 px-5 rounded-lg ring-1 hover:opacity-60 hover:ring-2">{
            favorites.includes(id) ? "Remove from favorite" : "Add to favorite"
            }</button> <div className="w-3"></div> <FavoriteIcon id={id} className="" size="size-8" />
        </div>
    );
}