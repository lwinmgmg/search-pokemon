import { describe, expect, test } from '@jest/globals';
import { getFavCookie, setFavCookie } from './favCookie';
class MockCookie {
    cookie: Dict<any> = {};
    constructor(data?: Dict<any>){
        if (data) this.cookie = {...this.cookie, ...data}
    }
    MockCookie(){
    }
    set(name: string, value: string){
        this.cookie[name] = value
    }
    get(name: string): string | undefined {
        return this.cookie[name] || ""
    }
    remove(name: string){
        delete this.cookie[name]
    }
}
describe("Testing for favCookie.ts", () => {
    test("Update setCookie For setFavCookie", ()=>{
        const cookie = new MockCookie()
        setFavCookie([], cookie as any)
        expect(getFavCookie(cookie as any)).toEqual([])
    })
    test("Update getCookie For setFavCookie", ()=>{
        const cookie = new MockCookie()
        expect(getFavCookie(cookie as any)).toEqual([])
    })
    test("Update getCookie with data For setFavCookie", ()=>{
        const cookie = new MockCookie({
            "FAV-COOKIE": []
        })
        expect(getFavCookie(cookie as any)).toEqual([])
    })
})
