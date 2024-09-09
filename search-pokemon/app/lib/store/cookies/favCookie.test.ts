import { describe, expect, test, jest } from '@jest/globals';
import { getFavCookie, setFavCookie } from './favCookie';
class MockCookie {
    cookie: Dict<string> = {};
    MockCookie(){
    }
    set(name: string, value: string){
        this.cookie[name] = value
    }
    get(name: string): string | undefined {
        return this.cookie[name] || ""
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
})
