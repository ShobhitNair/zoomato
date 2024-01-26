import { Sum } from "../Sum"
import {expect, test} from "@jest/globals"

test("TO check the sum of a,b",()=>{
    const result = Sum(3,7)

    expect(result).toBe(10)
})