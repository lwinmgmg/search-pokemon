import {describe, expect, test, jest} from '@jest/globals';
import getTypeColor from './getTypeColor';

const types = [
    "Water",
    "Grass",
    "Poison",
    "Fire",
    "Flying",
    "Dragon",
    "Fighting",
    "Ice",
    "Fairy",
    "Electric",
    "Normal",
    "Steel",
    "Rock",
    "Ghost",
    "Psychic",
    "Ground",
]

describe("Testing for getTypeColor Function", ()=>{
    test("Input UnknowType getTypeColor", async () => {
        const [bgColor, textColor] = getTypeColor("UnknowType");
        expect(bgColor).toBe("bg-slate-400");
        expect(textColor).toBe("text-slate-100")
    })
    test("Input Known Types getTypeColor", async () => {
        types.forEach(tpy=>{
            const [bgColor, textColor] = getTypeColor(tpy);
            expect(bgColor).toContain("bg");
            expect(bgColor === "bg-slate-400").toBeFalsy()
            expect(textColor).toContain("text")
            expect(textColor === "text-slate-100").toBeFalsy()
        })
    })
})