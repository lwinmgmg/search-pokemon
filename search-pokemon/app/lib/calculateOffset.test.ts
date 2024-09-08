import {describe, expect, test, jest} from '@jest/globals';
import calculateOffset from './calculateOffset';

describe("Testing for calculateOffset Function", ()=>{
    test("Page 1, Limit 12 calculateOffset", async () => {
        const [offset, limit] = calculateOffset(1, 12);
        expect(offset).toBe(0);
        expect(limit).toBe(12)
    })
    test("Page 2, Limit 12 calculateOffset", async () => {
        const [offset, limit] = calculateOffset(2, 12);
        expect(offset).toBe(12);
        expect(limit).toBe(12)
    })
})