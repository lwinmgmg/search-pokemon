import { describe, expect, test } from '@jest/globals';
import { favReducer } from './favContext';
import { getFavCookie } from '../cookies/favCookie';
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
describe("Testing for favContext.ts", () => {
    const cookie = new MockCookie();
    test("Update single string Case For favReducer", ()=>{
        // arrange
        const initStates = ["a", "b"];
        // Act
        const res = favReducer(initStates, {
            type: "C",
            value: "c"
        })
        // Assert
        expect(res).toEqual(["a", "b", "c"])
    })
    test("Update list string Case For favReducer", ()=>{
        // arrange
        const initStates = ["a", "b"];
        // Act
        const res = favReducer(initStates, {
            type: "C",
            value: ["c", "d"]
        })
        // Assert
        expect(res).toEqual(["a", "b", "c", "d"])
    })
    test("Update empty data Case For favReducer", ()=>{
        // arrange
        const initStates = ["a", "b"];
        // Act
        const res = favReducer(initStates, {
            type: "C",
        })
        // Assert
        expect(res).toEqual(["a", "b"])
    })
    test("Update empty data Case with cookie For favReducer", ()=>{
        // arrange
        const initStates = ["a", "b"];
        // Act
        const res = favReducer(initStates, {
            type: "C",
            cookie: cookie as any
        })
        // Assert
        expect(res).toEqual(["a", "b"])
        expect(getFavCookie(cookie as any)).toEqual(["a", "b"])
    })

    test("Delete single string Case For favReducer", ()=>{
        // arrange
        const initStates = ["a", "b"];
        // Act
        const res = favReducer(initStates, {
            type: "D",
            value: "b"
        })
        // Assert
        expect(res).toEqual(["a"])
    })
    test("Delete list string Case For favReducer", ()=>{
        // arrange
        const initStates = ["a", "b"];
        // Act
        const res = favReducer(initStates, {
            type: "D",
            value: ["a", "b"]
        })
        // Assert
        expect(res.length).toBe(0)
    })
    test("Delete empty data Case For favReducer", ()=>{
        // arrange
        const initStates = ["a", "b"];
        // Act
        const res = favReducer(initStates, {
            type: "D"
        })
        // Assert
        expect(res).toEqual(initStates)
    })
    test("Undefined data Case For favReducer", ()=>{
        // arrange
        const initStates = ["a", "b"];
        // Act
        const res = favReducer(initStates, {
            type: "F" as any
        })
        // Assert
        expect(res).toEqual(initStates)
    })
})