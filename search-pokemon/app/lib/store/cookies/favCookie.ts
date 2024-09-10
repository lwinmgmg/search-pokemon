import Cookies from "universal-cookie";

const favCookieName = "FAV-COOKIE"

export function setFavCookie(value: Array<string>, cookies: Cookies){
    cookies.set(favCookieName,  value, {
        path: "/"
    });
}

export function getFavCookie(cookies: Cookies): Array<string>{
    return cookies.get(favCookieName) || []
}
