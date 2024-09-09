import { Cookies } from "next-client-cookies";

const favCookieName = "FAV-COOKIE"

export function setFavCookie(value: Array<string>, cookie: Cookies){
    cookie.set(favCookieName, JSON.stringify(value));
}

export function getFavCookie(cookie: Cookies){
    const valueStr = cookie.get(favCookieName) || "[]";
    return JSON.parse(valueStr)
}
